/* Motor de los debates de 402: registro por equipo y toma de la palabra con transcripción.
   Cada estudiante habla desde su propio celular: así cada intervención llega con su nombre,
   su equipo y su duración, que es lo que el tablero necesita para valorar el liderazgo.

   Envío: a diferencia de las actividades con «Enviar al docente», aquí no se abre una pestaña
   por envío (serían decenas por clase). Se usa fetch en modo no-cors —la respuesta es opaca,
   pero el doPost corre— y la confirmación llega por JSONP con el identificador del envío,
   igual que en las demás actividades. Si no llega, la intervención queda pendiente para
   reintentar. */
(function () {
'use strict';
const C = window.DEBATE_CONFIG;
const ENDPOINT = window.DEBATE_402_ENVIO_URL || '';
const CURSO_CODE = 'TMC-2026-2', CURSO = '402', PREFIX = C.clave;
const MIN_SEG = 5, MIN_PAL = 5;
const COLORES = [['var(--eqA)', 'var(--eqA-soft)'], ['var(--eqB)', 'var(--eqB-soft)'], ['var(--eqC)', 'var(--eqC-soft)']];
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const el = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pal = t => (String(t || '').trim().match(/\S+/g) || []).length;
// Conceptos del curso presentes en una intervención (de cualquier equipo: usar los del otro
// lado también cuenta, es contrastar). Viajan con el envío porque la vista pública del tablero
// no recibe los textos.
const CONCEPTOS = [...new Set(C.equipos.flatMap(e => e.conceptos))];
const normTxt = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const conceptosEn = t => { const n = normTxt(t); return CONCEPTOS.filter(c => n.includes(normTxt(c))); };
const mmss = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');

let st = {nombre: '', equipo: '', ridReg: '', registrado: false, mias: []};
let tipo = C.tipos[0], grabando = false, t0 = 0, relojT = null, rec = null, finalTxt = '', segundos = 0, vozOk = !!SR;

function guardar() { try { localStorage.setItem(PREFIX + 'estado', JSON.stringify(st)); } catch (e) {} }
function cargar() { try { st = {...st, ...JSON.parse(localStorage.getItem(PREFIX + 'estado') || '{}')}; } catch (e) {} }
function equipo(id) { return C.equipos.find(e => e.id === id); }
function colorDe(id) { return COLORES[Math.max(0, C.equipos.findIndex(e => e.id === id))]; }
function uid() {
  if (globalThis.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
}
function setEstado(id, m, ok) { const s = el(id); s.textContent = m || ''; s.className = 'estado' + (m ? (ok ? ' ok' : ' warn') : ''); }

/* ---------- Envío y confirmación ---------- */
function confirmar(rid) {
  return new Promise(resolve => {
    const fin = Date.now() + 40000;
    const intento = () => {
      const name = 'debAck_' + rid.replace(/-/g, '') + '_' + Date.now();
      const s = document.createElement('script');
      const clean = () => { s.remove(); globalThis[name] = () => {}; };
      globalThis[name] = r => { clean(); if (r && r.ok && r.rid === rid) resolve(true); else otra(); };
      s.onerror = () => { clean(); otra(); };
      s.src = ENDPOINT + '?estado=' + encodeURIComponent(rid) + '&callback=' + name;
      document.head.appendChild(s);
    };
    const otra = () => { if (Date.now() > fin) resolve(false); else setTimeout(intento, 3000); };
    setTimeout(intento, 1500);
  });
}
async function enviar(datos) {
  const body = new URLSearchParams({payload: JSON.stringify(datos)});
  try { await fetch(ENDPOINT, {method: 'POST', mode: 'no-cors', body: body}); } catch (e) { return false; }
  return confirmar(datos.rid);
}
function base(fila, rid) {
  return {tipo: 'debate-402', version: 1, curso: CURSO_CODE, cursoGrupo: CURSO, corte: C.corte, fila: fila, rid: rid,
    nombre: st.nombre, equipo: st.equipo};
}

/* ---------- Registro ---------- */
function pintarEquipos() {
  el('equipos').innerHTML = C.equipos.map((e, i) => `<label class="equipo" style="--c:${COLORES[i][0]};--cs:${COLORES[i][1]}">
    <input type="radio" name="equipo" value="${e.id}"><div><b>${esc(e.nombre)} · ${esc(e.postura)}</b><span>${esc(e.enfoque)}</span></div></label>`).join('');
  el('equipos').querySelectorAll('input').forEach(r => r.onchange = () => {
    el('equipos').querySelectorAll('.equipo').forEach(l => l.classList.toggle('is-on', l.querySelector('input').checked));
    el('equipos').classList.remove('invalid');
  });
}
async function registrar() {
  const nombre = el('f-nombre').value.trim().replace(/\s+/g, ' ');
  const eq = (el('equipos').querySelector('input:checked') || {}).value || '';
  el('f-nombre').classList.toggle('invalid', pal(nombre) < 2);
  el('equipos').classList.toggle('invalid', !eq);
  if (pal(nombre) < 2 || !eq) { setEstado('estado-registro', pal(nombre) < 2 ? 'Escriban nombre y apellido.' : 'Elijan su equipo.', false); return; }
  if (!ENDPOINT) { setEstado('estado-registro', 'El envío aún no está configurado.', false); return; }
  if (!confirm('Se registrará como ' + nombre + ' en el ' + equipo(eq).nombre + ' (' + equipo(eq).postura.toLowerCase() + '). ¿Continuar?')) return;
  st.nombre = nombre; st.equipo = eq; if (!st.ridReg) st.ridReg = uid(); guardar();
  el('btn-registro').disabled = true; setEstado('estado-registro', 'Registrando…');
  const ok = await enviar(base('registro', st.ridReg));
  el('btn-registro').disabled = false;
  if (!ok) { setEstado('estado-registro', 'No llegó la confirmación. Revisen la conexión y vuelvan a intentar.', false); return; }
  st.registrado = true; guardar(); pintar();
}

/* ---------- Tomar la palabra ---------- */
function pintarTipos() {
  el('tipos').innerHTML = C.tipos.map(t => `<button type="button" class="tipo" aria-pressed="${t === tipo}">${esc(t)}</button>`).join('');
  el('tipos').querySelectorAll('.tipo').forEach(b => b.onclick = () => { if (grabando) return; tipo = b.textContent; pintarTipos(); });
}
function iniciarVoz() {
  if (!vozOk) return;
  rec = new SR(); rec.lang = 'es-CO'; rec.continuous = true; rec.interimResults = true;
  rec.onresult = e => {
    let interino = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) finalTxt += (finalTxt ? ' ' : '') + t.trim(); else interino += t;
    }
    el('vivo').innerHTML = esc(finalTxt) + (interino ? ' <i>' + esc(interino) + '</i>' : '') || '<i>Escuchando…</i>';
  };
  rec.onerror = e => {
    if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
      vozOk = false;
      el('aviso-voz').hidden = false;
      el('aviso-voz').textContent = 'El celular no dio permiso al micrófono. Sigan hablando: al terminar escriban un resumen de su intervención.';
    }
  };
  // El reconocimiento se corta solo tras unos segundos de silencio; mientras la persona
  // tenga la palabra, se reanuda.
  rec.onend = () => { if (grabando && vozOk) { try { rec.start(); } catch (e) {} } };
  try { rec.start(); } catch (e) {}
}
function tomar() {
  if (grabando) return soltar();
  if (!el('revision').hidden && el('texto').value.trim() && !confirm('Hay una intervención sin enviar. ¿Descartarla y tomar la palabra de nuevo?')) return;
  grabando = true; finalTxt = ''; t0 = Date.now(); segundos = 0;
  el('revision').hidden = true; setEstado('estado', '');
  el('mic').classList.add('grabando'); el('mic').textContent = 'Terminar intervención';
  el('vivo').hidden = !vozOk; el('vivo').innerHTML = '<i>Escuchando…</i>';
  relojT = setInterval(() => { segundos = Math.round((Date.now() - t0) / 1000); el('reloj').textContent = mmss(segundos); }, 500);
  iniciarVoz();
}
function soltar() {
  grabando = false; clearInterval(relojT);
  segundos = Math.round((Date.now() - t0) / 1000); el('reloj').textContent = mmss(segundos);
  el('mic').classList.remove('grabando'); el('mic').textContent = 'Tomar la palabra';
  if (rec) { try { rec.stop(); } catch (e) {} }
  // La última frase puede llegar un instante después de detener el reconocimiento.
  setTimeout(() => {
    el('vivo').hidden = true;
    el('texto').value = finalTxt;
    el('nota-revision').textContent = finalTxt ? 'Corrijan solo lo que la transcripción entendió mal; el sentido debe ser el que dijeron.' :
      'Escriban un resumen de lo que dijeron: las ideas y los conceptos que usaron.';
    el('revision').hidden = false; el('texto').focus({preventScroll: true});
    el('revision').scrollIntoView({behavior: 'smooth', block: 'center'});
  }, vozOk ? 900 : 0);
}
async function enviarIntervencion(m) {
  const nueva = !m;
  if (nueva) {
    const texto = el('texto').value.trim();
    if (segundos < MIN_SEG) { setEstado('estado', 'La intervención fue muy corta para registrarla.', false); return; }
    if (pal(texto) < MIN_PAL) { el('texto').classList.add('invalid'); setEstado('estado', 'Falta el texto de la intervención.', false); return; }
    m = {rid: uid(), tipo: tipo, seg: segundos, texto: texto, modo: finalTxt ? 'voz' : 'escrita', enviado: false, hora: Date.now()};
    st.mias.unshift(m); guardar();
    el('revision').hidden = true; el('texto').value = ''; el('reloj').textContent = '00:00';
  }
  pintarMias(); setEstado('estado', 'Enviando…');
  const ok = await enviar({...base('intervencion', m.rid), tipoIntervencion: m.tipo, segundos: m.seg, texto: m.texto, modo: m.modo, conceptos: conceptosEn(m.texto)});
  m.enviado = ok; guardar(); pintarMias();
  setEstado('estado', ok ? 'Intervención registrada.' : 'No llegó la confirmación: quedó pendiente para reintentar.', ok);
}
function pintarMias() {
  el('mias').innerHTML = st.mias.length ? st.mias.map((m, i) => `<div class="mia"><div class="cab"><span>${esc(m.tipo)} · ${mmss(m.seg)}</span>
    <span class="${m.enviado ? 'ok' : 'pend'}">${m.enviado ? 'registrada' : 'pendiente'}</span></div>${esc(m.texto.length > 220 ? m.texto.slice(0, 220) + '…' : m.texto)}
    ${m.enviado ? '' : `<br><button type="button" data-i="${i}">Reintentar el envío</button>`}</div>`).join('') : '<p class="nota">Todavía no han tomado la palabra.</p>';
  el('mias').querySelectorAll('button[data-i]').forEach(b => b.onclick = () => enviarIntervencion(st.mias[Number(b.dataset.i)]));
}

/* ---------- Pintar ---------- */
function pintar() {
  el('registro').hidden = st.registrado; el('palabra').hidden = !st.registrado;
  if (!st.registrado) return;
  const e = equipo(st.equipo), [c, cs] = colorDe(st.equipo);
  document.documentElement.style.setProperty('--c', c); document.documentElement.style.setProperty('--cs', cs);
  el('yo').innerHTML = `<div><b>${esc(st.nombre)}</b><span>${esc(e.nombre)} · ${esc(e.postura)} · ${esc(e.enfoque)}</span></div>`;
  if (!vozOk) { el('aviso-voz').hidden = false; el('aviso-voz').textContent = 'Este navegador no transcribe la voz. Tomen la palabra igual: al terminar escriban un resumen de su intervención. En Chrome sí se transcribe.'; }
  pintarTipos(); pintarMias();
}
function toast() { const t = el('toast'); t.classList.add('is-visible'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('is-visible'), 2400); }

try {
  el('js-warning').hidden = true;
  el('eyebrow').textContent = C.eyebrow; el('titulo').textContent = C.titulo; document.title = C.titulo + ' — Debate';
  el('mocion').textContent = C.mocion;
  if (C.rotulo) el('mocion-rot').textContent = C.rotulo;   // «Moción» salvo que el debate parta de un planteamiento
  if (C.pregunta) { el('pregunta').hidden = false; el('pregunta').textContent = C.pregunta; }
  cargar(); pintarEquipos(); pintar();
  if (st.nombre && !st.registrado) el('f-nombre').value = st.nombre;
  el('btn-registro').onclick = registrar;
  el('mic').onclick = tomar;
  el('btn-enviar').onclick = () => enviarIntervencion();
  el('btn-descartar').onclick = () => { if (confirm('¿Descartar esta intervención?')) { el('revision').hidden = true; el('texto').value = ''; el('reloj').textContent = '00:00'; setEstado('estado', ''); } };
  el('texto').oninput = () => el('texto').classList.remove('invalid');
  ['copy', 'cut', 'paste', 'drop', 'dragstart'].forEach(ev => document.addEventListener(ev, e => { e.preventDefault(); toast(); }));
  document.addEventListener('keydown', e => { const k = (e.key || '').toLowerCase(); if ((e.ctrlKey || e.metaKey) && ['c', 'v', 'x'].includes(k)) { e.preventDefault(); toast(); } });
  // Reintento automático de lo que quedó pendiente al recargar.
  st.mias.filter(m => !m.enviado).slice(0, 3).forEach(m => setTimeout(() => enviarIntervencion(m), 1500));
} catch (e) {
  el('js-warning').hidden = false; el('js-warning').textContent = 'El debate no pudo iniciar. Recarguen la página o ábranla en otro navegador.'; console.error(e);
}
})();
