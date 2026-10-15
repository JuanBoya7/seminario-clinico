/* Motor del espacio de discusión «Un mismo hoy, varias lentes». Sigue la arquitectura de las
   actividades con entrega del sitio (estado serializable, autoguardado local, PDF rellenable
   y envío por <form> oculto con confirmación por JSONP). Diferencia: dos rondas, cada una con
   su propio envío e identificador; la ronda 2 se abre cuando la 1 tiene registro confirmado. */
(function () {
'use strict';
const C = window.DISCUSION_CONFIG;
const CURSO_CODE = 'TMC-2026-2';
const CURSOS = ['402'];
const ENDPOINT = window.DISCUSION_402_ENVIO_URL || '';
const PREFIX = C.clave;
const R1 = ['lectura', 'supuesto', 'prueba', 'limite'];
const R2 = ['destino', 'pregunta', 'postura', 'razon'];
const NIVELES = ['Superior', 'Alto', 'Medio', 'Bajo', 'Deficiente'];
const el = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state = null, busy = false, ackTimer = null, ackDeadline = 0;

/* ---------- 1. Contenido fijo del corte ---------- */
function pintarFijo() {
  el('mh-eyebrow').textContent = C.eyebrow;
  el('mh-titulo').textContent = C.titulo;
  el('mh-intro').textContent = C.intro;
  document.title = C.titulo + ' — Espacio de discusión';
  el('sb-titulo').textContent = C.titulo;
  el('ct-grupo').insertAdjacentHTML('beforeend', C.lentes.map((l, i) => `<option value="${i + 1}">Grupo ${i + 1}</option>`).join(''));
  el('fenomeno').insertAdjacentHTML('beforeend', C.fenomenos.map(f => `<option value="${f.letra}">${f.letra} · ${esc(f.titulo)}</option>`).join(''));
  el('mocion').textContent = C.mocion;
  // Criterio de la rúbrica plegado al pie de la consigna: quien quiere saber contra qué se
  // lo mide lo abre; la consigna sigue siendo una sola frase.
  document.querySelectorAll('[data-rubrica]').forEach(h => {
    const r = C.rubrica[Number(h.dataset.rubrica)];
    if (!r) return;
    h.outerHTML = `<details class="rubrica-inline"><summary>Cómo se valora: ${esc(r.criterio)} <span class="rubrica-peso">${esc(r.peso)}</span></summary><div class="rubrica-niveles">${r.niveles.map((t, i) => `<div class="rubrica-nivel"><b>${NIVELES[i]}</b><span>${esc(t)}</span></div>`).join('')}</div></details>`;
  });
}

/* ---------- 2. Estado y persistencia ---------- */
function blank(c, g) {
  return {curso: c, grupo: g, integrantes: '', fenomeno: '', lectura: '', supuesto: '', prueba: '', limite: '',
    destino: '', pregunta: '', postura: '', razon: '', rid1: '', rid2: '', env1: false, env2: false};
}
function key() { return PREFIX + (state.curso || '-') + ':' + (state.grupo || '-'); }
function persist() {
  try {
    localStorage.setItem(key(), JSON.stringify(state));
    localStorage.setItem(PREFIX + 'ultima', JSON.stringify({curso: state.curso, grupo: state.grupo}));
  } catch (e) {}
}
function load(c, g) {
  state = blank(c, g);
  try {
    const r = localStorage.getItem(key());
    if (r) { const s = JSON.parse(r); if (s.curso === c && s.grupo === g) state = {...state, ...s}; }
  } catch (e) {}
  apply();
}
function fase() { return state.env1 ? 2 : 1; }

/* ---------- 3. Pintar y progreso ---------- */
function apply() {
  el('ct-curso').value = state.curso;
  el('ct-grupo').value = state.grupo;
  const lente = C.lentes[Number(state.grupo) - 1];
  const ok = !!(state.curso && lente);
  el('lente').hidden = !ok; el('sin-grupo').hidden = ok;
  if (ok) {
    el('lente-num').textContent = 'Lente del grupo ' + state.grupo;
    el('lente-tit').textContent = lente.nombre;
    el('lente-sub').textContent = lente.sub;
    el('lente-mira').textContent = lente.mira;
    el('lente-conceptos').innerHTML = lente.conceptos.map(t => `<span class="concepto">${esc(t)}</span>`).join('');
  }
  el('destino').innerHTML = '<option value="">— Seleccionar —</option>' + C.lentes.map((l, i) => i + 1 === Number(state.grupo) ? '' :
    `<option value="${i + 1}">Grupo ${i + 1} · ${esc(l.nombre)}</option>`).join('');
  ['integrantes', 'fenomeno', ...R1, 'destino', 'pregunta', 'razon'].forEach(k => { el(k).value = state[k] || ''; });
  document.querySelectorAll('input[name="postura"]').forEach(r => { r.checked = r.value === state.postura; });
  pintarFenomeno(); marcarOpciones(); update();
}
function pintarFenomeno() {
  const f = C.fenomenos.find(x => x.letra === state.fenomeno);
  el('fenomeno-txt').hidden = !f;
  if (f) el('fenomeno-txt').textContent = f.texto;
}
function marcarOpciones() { document.querySelectorAll('.option-row').forEach(r => r.classList.toggle('is-checked', r.querySelector('input').checked)); }
const filled = v => String(v || '').trim().length > 0;
function progress() {
  const b0 = ['curso', 'grupo', 'integrantes'].filter(k => filled(state[k])).length;
  const b1 = filled(state.fenomeno) ? 1 : 0;
  const b2 = R1.filter(k => filled(state[k])).length;
  const b3 = R2.filter(k => filled(state[k])).length;
  const total = 3 + 1 + R1.length + R2.length;
  const pct = Math.round((b0 + b1 + b2 + b3) / total * 100);
  el('progress-pct').textContent = pct + '%'; el('progress-fill').style.width = pct + '%';
  const comp = {'bloque-0': b0 === 3, 'bloque-1': b1 === 1 && b0 >= 2, 'bloque-2': state.env1, 'bloque-3': state.env2};
  document.querySelectorAll('.nav-item').forEach(a => a.classList.toggle('is-complete', !!comp[a.dataset.target]));
}
function setStatus(t, cls) { const s = el('save-status'); s.textContent = t || ''; s.className = 'save-status' + (cls ? ' ' + cls : ''); }
function update() {
  const l1 = busy || state.env1, l2 = busy || !state.env1 || state.env2;
  ['integrantes', 'fenomeno', ...R1].forEach(k => { el(k).disabled = l1; });
  ['destino', 'pregunta', 'razon'].forEach(k => { el(k).disabled = l2; });
  document.querySelectorAll('input[name="postura"]').forEach(r => { r.disabled = l2; });
  el('aviso-r2').hidden = state.env1;
  el('btn-enviar').disabled = busy || !ENDPOINT || state.env2;
  el('btn-enviar').textContent = state.env1 ? 'Enviar ronda 2' : 'Enviar ronda 1';
  el('btn-guardar').disabled = busy;
  el('ct-curso').disabled = busy; el('ct-grupo').disabled = busy;
  progress();
}

/* ---------- 4. Validación ---------- */
function clearInvalid() { document.querySelectorAll('.invalid').forEach(x => x.classList.remove('invalid')); }
function validate(f) {
  clearInvalid();
  const faltan = [];
  if (f === 1) {
    ['ct-curso', 'ct-grupo'].forEach(id => { if (!filled(el(id).value)) faltan.push(el(id)); });
    ['integrantes', 'fenomeno', ...R1].forEach(k => { if (!filled(state[k])) faltan.push(el(k)); });
  } else {
    ['destino', 'pregunta'].forEach(k => { if (!filled(state[k])) faltan.push(el(k)); });
    if (!filled(state.postura)) faltan.push(el('postura-list'));
    if (!filled(state.razon)) faltan.push(el('razon'));
  }
  if (faltan.length) {
    faltan.forEach(x => x.classList.add('invalid'));
    faltan[0].scrollIntoView({block: 'center', behavior: 'smooth'});
    if (faltan[0].focus) faltan[0].focus({preventScroll: true});
    setStatus('Faltan ' + faltan.length + ' campo(s) de la ronda ' + f + '.', 'warn');
    return false;
  }
  return true;
}
function edited() { state['rid' + fase()] = ''; persist(); update(); setStatus(''); }

/* ---------- 5. Guardar actividad (PDF rellenable) ---------- */
async function save() {
  if (!validate(1)) return;
  busy = true; update(); setStatus('Preparando el PDF…');
  try {
    if (!window.PDFActividad) await new Promise((ok, no) => {
      const s = document.createElement('script');
      s.src = 'https://juanboya7.github.io/seminario-clinico/pdf-rellenable.js?v=20261012b';
      s.onload = ok; s.onerror = () => { s.remove(); no(Error('connection')); };
      document.head.appendChild(s);
    });
    const r = await PDFActividad.compartir({titulo: C.titulo + ' · Grupo ' + state.grupo,
      archivo: state.curso + '-discusion-corte' + C.corte + '-grupo-' + state.grupo + '.pdf', raiz: el('formulario')});
    setStatus(r === 'cancelado' ? 'Guardado cancelado.' : 'PDF preparado. Revisen la descarga o el menú de compartir.', 'ok');
  } catch (e) { setStatus('No fue posible crear el PDF. Revisen la conexión y vuelvan a intentar.', 'warn'); console.error(e); }
  finally { busy = false; update(); }
}

/* ---------- 6. Enviar al docente ---------- */
function uid() {
  if (globalThis.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
}
function payload(f) {
  const lente = C.lentes[Number(state.grupo) - 1].nombre;
  const base = {tipo: 'discusion-402', version: 1, curso: CURSO_CODE, cursoGrupo: state.curso, corte: C.corte,
    grupo: Number(state.grupo), lente: lente, fase: f, rid: state['rid' + f]};
  if (f === 1) {
    const fen = C.fenomenos.find(x => x.letra === state.fenomeno);
    return {...base, integrantes: state.integrantes, fenomeno: fen.letra + ' · ' + fen.titulo,
      lectura: state.lectura, supuesto: state.supuesto, prueba: state.prueba, limite: state.limite};
  }
  return {...base, destino: Number(state.destino), destinoLente: C.lentes[Number(state.destino) - 1].nombre,
    pregunta: state.pregunta, postura: state.postura, razon: state.razon};
}
function stopAck() { clearTimeout(ackTimer); ackTimer = null; document.querySelectorAll('script[data-ack]').forEach(s => s.remove()); }
let enviando = 0;
function confirmed(r) {
  if (!busy || !r || r.rid !== state['rid' + enviando] || r.ok !== true) return;
  stopAck(); busy = false; state['env' + enviando] = true; persist(); update();
  setStatus(enviando === 1 ? 'Ronda 1 registrada. Esperen la proyección de las lecturas para la ronda 2.' : 'Ronda 2 registrada. Gracias.', 'ok');
}
function poll() {
  if (!busy) return;
  if (Date.now() > ackDeadline) { stopAck(); busy = false; update(); setStatus('Aún no hay confirmación. Revisen la pestaña de envío o reintenten.', 'warn'); return; }
  const rid = state['rid' + enviando];
  const name = 'disAck_' + rid.replace(/-/g, '') + '_' + Date.now();
  const s = document.createElement('script'); s.dataset.ack = '1';
  const clean = () => { s.remove(); globalThis[name] = () => {}; };
  globalThis[name] = r => { confirmed(r); clean(); };
  s.onerror = clean; s.src = ENDPOINT + '?estado=' + encodeURIComponent(rid) + '&callback=' + name;
  document.head.appendChild(s); setTimeout(clean, 12000); ackTimer = setTimeout(poll, 5000);
}
function send() {
  const f = fase();
  if (!ENDPOINT || busy || state.env2 || !validate(f)) return;
  // La pestaña se abre antes del envío: si el navegador la bloquea (visores de WhatsApp),
  // la actividad no se da por enviada.
  const w = window.open('', 'discusion_envio');
  if (!w) { setStatus('El navegador bloqueó la pestaña de envío. Permitan la ventana emergente y reintenten.', 'warn'); return; }
  if (!state['rid' + f]) state['rid' + f] = uid();
  enviando = f; persist(); busy = true; update(); setStatus('Esperando confirmación de registro…');
  const form = document.createElement('form'); form.method = 'POST'; form.action = ENDPOINT; form.target = 'discusion_envio'; form.hidden = true;
  const i = document.createElement('input'); i.name = 'payload'; i.value = JSON.stringify(payload(f)); form.appendChild(i);
  document.body.appendChild(form);
  try { form.submit(); ackDeadline = Date.now() + 65000; ackTimer = setTimeout(poll, 2500); }
  catch (e) { busy = false; update(); setStatus('No fue posible abrir el envío.', 'warn'); }
  finally { form.remove(); }
}

/* ---------- 7. Restricción de copiar y pegar ---------- */
function showToast() { const t = el('toast'); t.classList.add('is-visible'); clearTimeout(showToast._t); showToast._t = setTimeout(() => t.classList.remove('is-visible'), 2400); }
function initInputRestrictions() {
  const block = e => { e.preventDefault(); showToast(); };
  ['copy', 'cut', 'paste', 'drop', 'dragstart'].forEach(ev => document.addEventListener(ev, block));
  document.addEventListener('keydown', e => { const k = (e.key || '').toLowerCase(); if ((e.ctrlKey || e.metaKey) && ['c', 'v', 'x'].includes(k)) { e.preventDefault(); showToast(); } });
}

/* ---------- 8. Arranque ---------- */
try {
  el('js-warning').hidden = true;
  initInputRestrictions();
  pintarFijo();
  let first = {curso: '', grupo: ''};
  try { first = JSON.parse(localStorage.getItem(PREFIX + 'ultima')) || first; } catch (e) {}
  const embedded = JSON.parse(el('saved-data').textContent);
  const gOk = g => Number(g) >= 1 && Number(g) <= C.lentes.length;
  if (embedded && embedded.curso && embedded.grupo) { state = {...blank('', ''), ...embedded}; apply(); }
  else load(CURSOS.includes(first.curso) ? first.curso : '', gOk(first.grupo) ? String(first.grupo) : '');
  const cambioGrupo = () => { persist(); load(el('ct-curso').value, el('ct-grupo').value); persist();
    if (state.env2) setStatus('Las dos rondas de este grupo tienen registro confirmado.', 'ok');
    else if (state.env1) setStatus('La ronda 1 de este grupo tiene registro confirmado.', 'ok'); else setStatus(''); };
  el('ct-curso').addEventListener('change', cambioGrupo);
  el('ct-grupo').addEventListener('change', cambioGrupo);
  ['integrantes', ...R1, 'pregunta', 'razon'].forEach(k => el(k).addEventListener('input', () => { state[k] = el(k).value; el(k).classList.remove('invalid'); edited(); }));
  el('fenomeno').addEventListener('change', () => { state.fenomeno = el('fenomeno').value; el('fenomeno').classList.remove('invalid'); pintarFenomeno(); edited(); });
  el('destino').addEventListener('change', () => { state.destino = el('destino').value; el('destino').classList.remove('invalid'); edited(); });
  document.querySelectorAll('input[name="postura"]').forEach(r => r.addEventListener('change', () => { state.postura = r.value; el('postura-list').classList.remove('invalid'); marcarOpciones(); edited(); }));
  el('btn-guardar').onclick = save; el('btn-enviar').onclick = send;
  if (!ENDPOINT) setStatus('El envío al docente aún no está configurado; pueden guardar la actividad.', 'warn');
} catch (e) {
  el('js-warning').hidden = false;
  el('js-warning').textContent = 'La actividad no pudo iniciar. Recarguen la página o ábranla en otro navegador.';
  console.error(e);
}
})();
