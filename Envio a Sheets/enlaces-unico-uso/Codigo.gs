/**
 * Enlaces de un solo uso para calificar.html (calificación en línea de instrumentos).
 *
 * Qué hace: el docente, desde el índice de calificar.html, crea un enlace para una
 * prueba; la página cifra la prueba en el navegador con una llave nueva, envía aquí solo
 * el texto cifrado y deja la llave en el enlace (después de #, que nunca sale del
 * navegador). Cuando el estudiante abre el enlace y pulsa «Comenzar», la página pide
 * aquí la prueba una sola vez: este script la entrega, marca el enlace como usado y a
 * partir de ahí responde «ya se usó». Este script nunca ve la prueba en claro.
 *
 * Instalación (ver INSTRUCCIONES.md de esta carpeta):
 *   1. Hoja de cálculo nueva → Extensiones → Apps Script → pegar este archivo.
 *   2. Configuración del proyecto → Propiedades de la secuencia de comandos →
 *      agregar SECRETO con una clave larga que solo conozca el docente.
 *   3. Implementar → Nueva implementación → Aplicación web → Ejecutar como: yo;
 *      Quién tiene acceso: cualquier persona → copiar la URL (forma de dominio).
 *
 * Enlaces con cupo (QR de los planes exportados): se crean con tipo=cupo, la clave
 * de la prueba (a), el número de usos (cupo) y los días de vigencia (dias). No llevan
 * la prueba: abren la versión publicada de calificar.html hasta agotar el cupo o vencer.
 *
 * Planes compartidos (enlace de la guía de planes en lugar del PDF): se crean con
 * tipo=plan, el plan cifrado en el navegador (datos) y los días de vigencia (dias). Se
 * leen con accion=ver tantas veces como se quiera hasta que vencen; la llave o la
 * contraseña nunca llegan aquí. Para retirar uno antes de tiempo, borre su fila.
 *
 * Hoja «Enlaces»: token | prueba | creado | vence | usado (sí/no, o cuántas veces en los
 * de cupo) | usado_en (último uso) | datos (1..n; en los de cupo, {"tipo":"cupo",…})
 */

var HOJA = 'Enlaces';
var DIAS_VIGENCIA = 30;          // un enlace sin usar caduca a los 30 días
var TROZO = 45000;               // una celda admite 50 000 caracteres

function hoja_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var h = ss.getSheetByName(HOJA);
  if (!h) {
    h = ss.insertSheet(HOJA);
    h.appendRow(['token', 'prueba', 'creado', 'vence', 'usado', 'usado_en', 'datos']);
    h.setFrozenRows(1);
  }
  return h;
}

function secretoValido_(s) {
  var esperado = PropertiesService.getScriptProperties().getProperty('SECRETO');
  return !!esperado && s === esperado;
}

function buscar_(h, token) {
  var n = h.getLastRow();
  if (n < 2) return 0;
  var tokens = h.getRange(2, 1, n - 1, 1).getValues();
  for (var i = 0; i < tokens.length; i++) if (tokens[i][0] === token) return i + 2;
  return 0;
}

function salida_(obj, callback) {
  var txt = JSON.stringify(obj);
  if (callback && /^[A-Za-z_$][\w$]*$/.test(callback)) {
    return ContentService.createTextOutput(callback + '(' + txt + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(txt).setMimeType(ContentService.MimeType.JSON);
}

/** Crear un enlace (formulario oculto desde calificar.html). */
function doPost(e) {
  var p = (e && e.parameter) || {};
  if (p.accion !== 'crear') return salida_({ ok: false, motivo: 'accion' });
  if (!secretoValido_(p.secreto)) return salida_({ ok: false, motivo: 'secreto' });
  if (!/^[A-Za-z0-9_-]{16,64}$/.test(p.token || '') || (p.tipo !== 'cupo' && !p.datos)) return salida_({ ok: false, motivo: 'datos' });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var h = hoja_();
    if (buscar_(h, p.token)) return salida_({ ok: true, repetido: true });
    var ahora = new Date();
    var fila;
    if (p.tipo === 'plan') {
      var diasP = Math.max(1, Math.min(365, parseInt(p.dias, 10) || DIAS_VIGENCIA));
      fila = [p.token, String(p.prueba || '').slice(0, 80), ahora, new Date(ahora.getTime() + diasP * 86400000), 0, ''];
      var dp = 'plan:' + p.datos;
      for (var j = 0; j < dp.length; j += TROZO) fila.push(dp.slice(j, j + TROZO));
    } else if (p.tipo === 'cupo') {
      var cupo = Math.max(1, Math.min(500, parseInt(p.cupo, 10) || 1));
      var dias = Math.max(1, Math.min(365, parseInt(p.dias, 10) || DIAS_VIGENCIA));
      if (!/^[a-z0-9-]{1,40}$/.test(p.a || '')) return salida_({ ok: false, motivo: 'datos' });
      fila = [p.token, String(p.prueba || '').slice(0, 80), ahora, new Date(ahora.getTime() + dias * 86400000), 0, '',
              JSON.stringify({ tipo: 'cupo', a: p.a, cupo: cupo })];
    } else {
      fila = [p.token, String(p.prueba || '').slice(0, 80), ahora, new Date(ahora.getTime() + DIAS_VIGENCIA * 86400000), false, ''];
      for (var i = 0; i < p.datos.length; i += TROZO) fila.push(p.datos.slice(i, i + TROZO));
    }
    h.appendRow(fila);
    return salida_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Lecturas por JSONP (funcionan también desde la copia local, file://):
 *   ?accion=existe&token=…&secreto=…&callback=…  → el docente confirma que quedó guardado
 *   ?accion=usar&token=…&callback=…               → entrega la prueba una sola vez
 */
function doGet(e) {
  var p = (e && e.parameter) || {};
  var cb = p.callback;
  var token = p.token || '';
  if (!/^[A-Za-z0-9_-]{16,64}$/.test(token)) return salida_({ ok: false, motivo: 'token' }, cb);
  var h = hoja_();
  if (p.accion === 'existe') {
    if (!secretoValido_(p.secreto)) return salida_({ ok: false, motivo: 'secreto' }, cb);
    return salida_({ ok: buscar_(h, token) > 0 }, cb);
  }
  if (p.accion === 'ver') {
    var lk = LockService.getScriptLock();
    lk.waitLock(20000);
    try {
      var fp = buscar_(h, token);
      if (!fp) return salida_({ ok: false, motivo: 'no-existe' }, cb);
      var an = h.getLastColumn();
      var fl = h.getRange(fp, 1, 1, an).getValues()[0];
      var txt = fl.slice(6).join('');
      if (txt.indexOf('plan:') !== 0) return salida_({ ok: false, motivo: 'no-existe' }, cb);
      if (fl[3] && new Date() > new Date(fl[3])) return salida_({ ok: false, motivo: 'vencido' }, cb);
      h.getRange(fp, 5, 1, 2).setValues([[(Number(fl[4]) || 0) + 1, new Date()]]);
      return salida_({ ok: true, datos: txt.slice(5), vence: fl[3] }, cb);
    } finally {
      lk.releaseLock();
    }
  }
  if (p.accion !== 'usar') return salida_({ ok: false, motivo: 'accion' }, cb);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var f = buscar_(h, token);
    if (!f) return salida_({ ok: false, motivo: 'no-existe' }, cb);
    var ancho = h.getLastColumn();
    var fila = h.getRange(f, 1, 1, ancho).getValues()[0];
    if (String(fila[6]).indexOf('{"tipo":"cupo"') === 0) {
      var info = JSON.parse(fila[6]);
      var usos = Number(fila[4]) || 0;
      if (fila[3] && new Date() > new Date(fila[3])) return salida_({ ok: false, motivo: 'vencido' }, cb);
      if (usos >= info.cupo) return salida_({ ok: false, motivo: 'agotado' }, cb);
      h.getRange(f, 5, 1, 2).setValues([[usos + 1, new Date()]]);
      return salida_({ ok: true, cupo: true, a: info.a, quedan: info.cupo - usos - 1 }, cb);
    }
    if (String(fila[6]).indexOf('plan:') === 0) return salida_({ ok: false, motivo: 'no-existe' }, cb);
    if (fila[4] === true) return salida_({ ok: false, motivo: 'usado', usado_en: fila[5] }, cb);
    if (fila[3] && new Date() > new Date(fila[3])) return salida_({ ok: false, motivo: 'vencido' }, cb);
    var datos = fila.slice(6).join('');
    h.getRange(f, 5, 1, 2).setValues([[true, new Date()]]);
    // La prueba cifrada ya no hace falta: se borra para que la hoja no la guarde.
    if (ancho > 6) h.getRange(f, 7, 1, ancho - 6).clearContent();
    return salida_({ ok: true, prueba: fila[1], datos: datos }, cb);
  } finally {
    lock.releaseLock();
  }
}
