/* Tablero de los debates de 402. Común a los tres cortes: lee DEBATE_CONFIG. */
(function () {
'use strict';
const C = window.DEBATE_CONFIG, ENDPOINT = window.DEBATE_402_ENVIO_URL || '';
const ETIQUETAS = ['Abre línea', 'Réplica sólida', 'Integra a su equipo', 'Cierre'];
const COLOR = {A: ['var(--eqA)', 'var(--eqA-soft)'], B: ['var(--eqB)', 'var(--eqB-soft)'], C: ['var(--eqC)', 'var(--eqC-soft)']};
const el = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const pal = t => (String(t || '').trim().match(/\S+/g) || []).length;
const mmss = s => Math.floor(s / 60) + ':' + String(Math.round(s % 60)).padStart(2, '0');
const f1 = x => x == null ? '—' : (Math.round(x * 10) / 10).toFixed(1).replace('.', ',');
const CONCEPTOS = [...new Set(C.equipos.flatMap(e => e.conceptos))];
let filas = [], valoraciones = {}, pant = 'vivo', clave = '', docente = false, timer = null, ultimaTabla = [];
try { clave = sessionStorage.getItem(C.clave + 'docente') || ''; } catch (e) {}

function eqStyle(id) { const c = COLOR[id] || COLOR.A; return `--c:${c[0]};--cs:${c[1]}`; }
function conceptosEn(t) { const n = norm(t); return CONCEPTOS.filter(c => n.includes(norm(c))); }
function porEquipo() {
  const ints = filas.filter(f => f.fila === 'intervencion');
  return C.equipos.map(e => {
    const mias = ints.filter(f => f.equipo === e.id);
    const reg = new Set(filas.filter(f => f.equipo === e.id).map(f => f.persona));
    const voces = new Set(mias.map(f => f.persona));
    const seg = mias.reduce((s, f) => s + f.segundos, 0);
    const cc = {}; mias.forEach(f => conceptosEn(f.texto).forEach(c => { cc[c] = (cc[c] || 0) + 1; }));
    return {e, mias, reg: reg.size, voces: voces.size, seg, cc};
  });
}

/* ---------- El debate en vivo ---------- */
function vistaVivo(pe) {
  el('mocion').textContent = C.mocion;
  const tot = pe.reduce((s, x) => s + x.seg, 0);
  el('tiempo').innerHTML = tot ? pe.filter(x => x.seg).map(x => `<span style="width:${x.seg / tot * 100}%;background:${COLOR[x.e.id][0]}">${esc(x.e.nombre)} · ${mmss(x.seg)}</span>`).join('') : '';
  el('tiempo-rot').textContent = tot ? 'Tiempo de palabra de cada equipo' : 'Todavía nadie ha tomado la palabra.';
  el('vivo-eq').style.gridTemplateColumns = `repeat(${pe.length},1fr)`;
  el('vivo-eq').innerHTML = pe.map(x => `<div class="eq" style="${eqStyle(x.e.id)}"><h2>${esc(x.e.nombre)}</h2><div class="post">${esc(x.e.postura)} · ${esc(x.e.enfoque)}</div>
    <div class="cifras"><div class="cifra"><b>${x.reg}</b><span>registrados</span></div><div class="cifra"><b>${x.mias.length}</b><span>intervenciones</span></div><div class="cifra"><b>${x.voces}</b><span>voces distintas</span></div></div>
    ${x.mias.slice().sort((a, b) => b.hora - a.hora).slice(0, 4).map(f => `<div class="int"><span class="de">${esc(docente ? f.nombre : f.persona)} · ${esc(f.tipo)} · ${mmss(f.segundos)}</span>${esc(f.texto.length > 260 ? f.texto.slice(0, 260) + '…' : f.texto)}</div>`).join('') || '<p class="vacio-msg">Sin intervenciones todavía.</p>'}</div>`).join('');
}

/* ---------- Balance ---------- */
function vistaBalance(pe) {
  el('bal-eq').style.gridTemplateColumns = `repeat(${pe.length},1fr)`;
  el('bal-eq').innerHTML = pe.map(x => {
    const tipos = C.tipos.map(t => [t, x.mias.filter(f => f.tipo === t).length]).filter(t => t[1]);
    const cc = Object.entries(x.cc).sort((a, b) => b[1] - a[1]);
    return `<div class="eq" style="${eqStyle(x.e.id)}"><h2>${esc(x.e.nombre)}</h2><div class="post">${esc(x.e.postura)}</div>
      <div class="cifras"><div class="cifra"><b>${mmss(x.seg)}</b><span>de palabra</span></div><div class="cifra"><b>${x.voces}/${x.reg}</b><span>registrados que hablaron</span></div></div>
      <div class="post">Intervenciones por tipo</div><div class="chips" style="margin-bottom:12px">${tipos.map(t => `<span class="chip">${esc(t[0])}<b>${t[1]}</b></span>`).join('') || '<span class="vacio-msg">—</span>'}</div>
      <div class="post">Conceptos del curso en lo que dijeron</div><div class="chips">${cc.map(c => `<span class="chip">${esc(c[0])}<b>${c[1]}</b></span>`).join('') || '<span class="vacio-msg">Ninguno todavía.</span>'}</div></div>`;
  }).join('');
  // La frase se arma con los datos: dónde se concentró la palabra.
  const con = pe.filter(x => x.reg >= 3 && x.voces / x.reg < 0.5);
  const tot = pe.reduce((s, x) => s + x.seg, 0), max = pe.reduce((a, b) => b.seg > a.seg ? b : a, pe[0]);
  el('bal-frase').innerHTML = !tot ? 'El balance aparece con las primeras intervenciones.' :
    (con.length ? `En ${con.map(x => '<em>' + esc(x.e.nombre) + '</em>').join(' y ')} habló menos de la mitad de los registrados. ¿Quién no ha tomado la palabra todavía?` :
      `<em>${esc(max.e.nombre)}</em> lleva ${Math.round(max.seg / tot * 100)} % del tiempo de palabra. ¿Lo usó para argumentar o para repetir?`);
}

/* ---------- Vista docente ---------- */
function base(eq) {
  const v = valoraciones[eq]; if (!v || v.some(x => !x)) return null;
  return C.rubrica.reduce((s, r, i) => s + r.peso * v[i], 0);
}
function personas() {
  const m = {};
  filas.forEach(f => { (m[f.persona] = m[f.persona] || {nombre: f.nombre, equipo: f.equipo, ints: []}); if (f.fila === 'intervencion') m[f.persona].ints.push(f); });
  const lista = Object.values(m).map(p => ({...p, n: p.ints.length, seg: p.ints.reduce((s, f) => s + f.segundos, 0),
    palabras: p.ints.reduce((s, f) => s + pal(f.texto), 0), conceptos: new Set(p.ints.flatMap(f => conceptosEn(f.texto))).size,
    etq: p.ints.reduce((s, f) => s + f.etiquetas.length, 0)}));
  C.equipos.forEach(e => {
    const del = lista.filter(p => p.equipo === e.id), mx = k => Math.max(1, ...del.map(p => p[k]));
    const b = base(e.id);
    del.forEach(p => {
      p.indice = p.n ? 0.3 * p.n / mx('n') + 0.3 * p.seg / mx('seg') + 0.2 * p.conceptos / mx('conceptos') + 0.2 * p.etq / mx('etq') : 0;
      p.ajuste = p.n ? -0.5 + p.indice : -1;
      p.nota = b == null ? null : Math.max(0, Math.min(5, b + p.ajuste));
    });
    const top = del.filter(p => p.n).sort((a, b) => b.indice - a.indice)[0];
    if (top) top.lider = true;
  });
  return lista.sort((a, b) => a.equipo.localeCompare(b.equipo) || b.indice - a.indice);
}
function vistaDocente() {
  el('caja-clave').hidden = docente; el('docente-cont').hidden = !docente;
  if (!docente) return;
  el('valorar').style.gridTemplateColumns = `repeat(${C.equipos.length},1fr)`;
  if (!el('valorar').contains(document.activeElement)) {
    el('valorar').innerHTML = C.equipos.map(e => `<div class="val" style="${eqStyle(e.id)}"><h3>${esc(e.nombre)} · ${esc(e.postura)}</h3>
      ${C.rubrica.map((r, i) => `<label>${esc(r.criterio)} (${Math.round(r.peso * 100)} %)<select data-eq="${e.id}" data-i="${i}"><option value="0">—</option>${[1, 2, 3, 4, 5].map(n => `<option${(valoraciones[e.id] || [])[i] === n ? ' selected' : ''}>${n}</option>`).join('')}</select></label>`).join('')}
      <div class="base">Base del equipo: ${f1(base(e.id))}</div></div>`).join('');
    el('valorar').querySelectorAll('select').forEach(s => s.onchange = () => {
      const eq = s.dataset.eq, v = (valoraciones[eq] || [0, 0, 0, 0]).slice(); v[Number(s.dataset.i)] = Number(s.value); valoraciones[eq] = v;
      accion({accion: 'valorar', equipo: eq, v: v.join(',')}); s.blur(); render();
    });
  }
  ultimaTabla = personas();
  el('tabla').innerHTML = ultimaTabla.length ? `<table><thead><tr><th>Estudiante</th><th>Equipo</th><th class="num">Intervenciones</th><th class="num">Tiempo</th><th class="num">Palabras</th><th class="num">Conceptos</th><th class="num">Etiquetas</th><th class="num">Índice</th><th class="num">Ajuste</th><th class="num">Nota</th></tr></thead><tbody>` +
    ultimaTabla.map(p => `<tr><td>${esc(p.nombre)}${p.lider ? '<span class="lider">mayor liderazgo</span>' : ''}</td><td><span class="marca" style="${eqStyle(p.equipo)}"></span>${esc(p.equipo)}</td><td class="num">${p.n}</td><td class="num">${mmss(p.seg)}</td><td class="num">${p.palabras}</td><td class="num">${p.conceptos}</td><td class="num">${p.etq}</td><td class="num">${f1(p.indice * 100 / 10)}</td><td class="num">${(p.ajuste >= 0 ? '+' : '') + f1(p.ajuste)}</td><td class="nota">${f1(p.nota)}</td></tr>`).join('') + '</tbody></table>' : '<p class="vacio-msg">Sin registros todavía.</p>';
  const ints = filas.filter(f => f.fila === 'intervencion');
  el('lista-int').style.gridTemplateColumns = `repeat(${C.equipos.length},1fr)`;
  el('lista-int').innerHTML = C.equipos.map(e => `<div style="${eqStyle(e.id)}"><h3 style="font-size:17px;margin-bottom:8px">${esc(e.nombre)}</h3>` +
    (ints.filter(f => f.equipo === e.id).sort((a, b) => a.hora - b.hora).map(f => `<div class="int"><span class="de">${esc(f.nombre)} · ${esc(f.tipo)} · ${mmss(f.segundos)}${f.modo === 'escrita' ? ' · escrita' : ''}</span>${esc(f.texto)}
      <div class="etq">${ETIQUETAS.map(t => `<button type="button" data-rid="${esc(f.rid)}" data-t="${esc(t)}" aria-pressed="${f.etiquetas.includes(t)}">${esc(t)}</button>`).join('')}</div></div>`).join('') || '<p class="vacio-msg">Sin intervenciones.</p>') + '</div>').join('');
  el('lista-int').querySelectorAll('.etq button').forEach(b => b.onclick = () => {
    const f = filas.find(x => x.rid === b.dataset.rid); const t = b.dataset.t;
    f.etiquetas = f.etiquetas.includes(t) ? f.etiquetas.filter(x => x !== t) : [...f.etiquetas, t];
    accion({accion: 'etiquetar', rid: f.rid, etiquetas: f.etiquetas.join('|')}); render();
  });
}
function copiar() {
  const tsv = ['Estudiante\tEquipo\tIntervenciones\tTiempo\tConceptos\tEtiquetas\tAjuste\tNota propuesta'].concat(ultimaTabla.map(p =>
    [p.nombre, p.equipo, p.n, mmss(p.seg), p.conceptos, p.etq, f1(p.ajuste), f1(p.nota)].join('\t'))).join('\n');
  (navigator.clipboard ? navigator.clipboard.writeText(tsv) : Promise.reject()).then(() => { el('copiar-estado').textContent = 'copiada: péguenla en la planilla'; }, () => { el('copiar-estado').textContent = 'no fue posible copiar'; });
}

/* ---------- Datos ---------- */
function jsonp(params, cb) {
  const name = 'deb' + (params.accion ? 'Acc' : 'Tab') + '_' + Date.now() + Math.floor(Math.random() * 1000), s = document.createElement('script');
  globalThis[name] = r => { s.remove(); cb(r); };
  s.onerror = () => { s.remove(); cb(null); };
  const q = new URLSearchParams({tablero: el('curso').value, corte: C.corte, callback: name, ...(clave ? {clave} : {}), ...params});
  s.src = ENDPOINT + '?' + q.toString(); document.head.appendChild(s);
}
function accion(p) {
  el('estado').textContent = 'guardando…';
  jsonp(p, r => { el('estado').textContent = r && r.ok ? 'guardado' : 'no se pudo guardar'; el('estado').className = 'estado' + (r && r.ok ? '' : ' error'); });
}
function cargar() {
  if (!ENDPOINT) { el('estado').textContent = 'receptor sin configurar'; el('estado').className = 'estado error'; return; }
  jsonp({}, r => {
    if (r && r.error === 'clave') { clave = ''; docente = false; try { sessionStorage.removeItem(C.clave + 'docente'); } catch (e) {} el('clave-estado').textContent = 'clave incorrecta'; el('clave-estado').className = 'estado error'; cargar(); return; }
    if (r && r.ok) {
      filas = r.filas || []; docente = !!r.docente;
      if (docente) { valoraciones = r.valoraciones || valoraciones; try { sessionStorage.setItem(C.clave + 'docente', clave); } catch (e) {} }
    }
    el('estado').textContent = r && r.ok ? 'actualizado ' + new Date().toLocaleTimeString('es-CO', {hour: '2-digit', minute: '2-digit', second: '2-digit'}) : 'sin conexión con la hoja';
    el('estado').className = 'estado' + (r && r.ok ? '' : ' error'); render();
  });
}
function ciclo() { clearTimeout(timer); cargar(); timer = setTimeout(ciclo, 10000); }
function render() {
  const pe = porEquipo();
  document.querySelectorAll('.pill').forEach(p => p.classList.toggle('is-on', p.dataset.p === pant));
  ['vivo', 'balance', 'docente'].forEach(v => el('v-' + v).hidden = pant !== v);
  if (pant === 'vivo') vistaVivo(pe); else if (pant === 'balance') vistaBalance(pe); else vistaDocente();
}
try {
  el('js-warning').hidden = true;
  el('eyebrow').textContent = 'Tablero · ' + C.eyebrow; el('titulo').textContent = C.titulo; document.title = C.titulo + ' — Tablero';
  document.querySelectorAll('.pill').forEach(p => p.onclick = () => { pant = p.dataset.p; render(); });
  el('entrar').onclick = () => { clave = el('clave').value.trim(); if (clave) { el('clave').value = ''; el('clave-estado').textContent = ''; ciclo(); } };
  el('clave').onkeydown = e => { if (e.key === 'Enter') el('entrar').click(); };
  el('copiar').onclick = copiar;
  render(); ciclo();
} catch (e) { el('js-warning').hidden = false; console.error(e); }
})();
