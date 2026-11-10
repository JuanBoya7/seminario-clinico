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
 * Hoja «Enlaces»: token | prueba | creado | vence | usado | usado_en | datos (1..n)
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
  if (!/^[A-Za-z0-9_-]{16,64}$/.test(p.token || '') || !p.datos) return salida_({ ok: false, motivo: 'datos' });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var h = hoja_();
    if (buscar_(h, p.token)) return salida_({ ok: true, repetido: true });
    var ahora = new Date();
    var vence = new Date(ahora.getTime() + DIAS_VIGENCIA * 86400000);
    var fila = [p.token, String(p.prueba || '').slice(0, 80), ahora, vence, false, ''];
    for (var i = 0; i < p.datos.length; i += TROZO) fila.push(p.datos.slice(i, i + TROZO));
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
  if (p.accion !== 'usar') return salida_({ ok: false, motivo: 'accion' }, cb);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var f = buscar_(h, token);
    if (!f) return salida_({ ok: false, motivo: 'no-existe' }, cb);
    var ancho = h.getLastColumn();
    var fila = h.getRange(f, 1, 1, ancho).getValues()[0];
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
