// Receptor del ejercicio de anclaje «¿Cuánto vale esta casa?» de 402 (corte 3).
// Pegar en el Apps Script de la hoja donde se quieren los datos (Extensiones → Apps Script), ejecutar
// prepararHoja una vez y desplegar como aplicación web (ejecutar como: yo; acceso: cualquier usuario).
// Las respuestas son anónimas: no se pide nombre, así que el tablero no necesita clave docente.
//
// Tres servicios por GET (todos JSONP, porque la página está en github.io):
//   ?asignar=<ronda>  reparte la condición (alta → baja → sin precio) en orden de llegada
//   ?estado=<rid>     confirma que un envío quedó registrado
//   ?tablero=<grupo>  devuelve las respuestas para el tablero proyectado
var CURSOS = {'TMC-2026-2':['402']};
var CONDICIONES = {alta:1200, baja:500, control:null};   // deben coincidir con anclaje-casa-config.js
var ORDEN = ['alta','baja','control'];
var COLUMNAS = ['Fecha de envío','ID de envío','Grupo','Ronda','Condición','Precio mostrado (millones)',
  'Mayor o menor que el precio','Estimación (millones)','Seguridad (1-5)','Peso del precio (1-5)','Segundos en la ficha'];
var HOJA = 'Anclaje';

// La hoja de datos: la del proyecto si se creó desde una hoja (Extensiones → Apps Script);
// si el proyecto es independiente, la que creó prepararHoja.
function libroDatos_() {
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  if (activa) return activa;
  var id = PropertiesService.getScriptProperties().getProperty('ANC402_HOJA_ID');
  if (!id) throw new Error('El docente debe ejecutar prepararHoja antes de recibir envíos.');
  return SpreadsheetApp.openById(id);
}
// Como en los demás receptores: si la pestaña no existe, el primer envío la crea con sus encabezados.
function pestana_(libro, nombre, cols) {
  var hoja = libro.getSheetByName(nombre) || libro.insertSheet(nombre);
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(cols); hoja.setFrozenRows(1);
    hoja.getRange(1,1,1,cols.length).setBackground('#134349').setFontColor('#ffffff').setFontWeight('bold');
  }
  return hoja;
}

function prepararHoja() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('ANC402_HOJA_ID');
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  var libro = activa || (id ? SpreadsheetApp.openById(id) : SpreadsheetApp.create('402 - Anclaje T&M'));
  props.setProperty('ANC402_HOJA_ID', libro.getId());
  pestana_(libro, HOJA, COLUMNAS);
  var sobra = libro.getSheetByName('Hoja 1') || libro.getSheetByName('Sheet1');
  if (sobra && sobra.getLastRow() === 0 && libro.getSheets().length > 1) libro.deleteSheet(sobra);
  Logger.log('Hoja de la actividad: ' + libro.getUrl());
  return libro.getUrl();
}

function validar_(d) {
  if (!d || d.tipo !== 'anclaje-402' || d.version !== 1) throw new Error('Formato no reconocido.');
  if (!CURSOS[d.curso] || CURSOS[d.curso].indexOf(d.cursoGrupo) < 0) throw new Error('Curso no autorizado.');
  if (!/^[A-Za-z0-9-]{32,64}$/.test(d.rid || '')) throw new Error('Identificador no válido.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d.ronda || '')) throw new Error('Ronda no válida.');
  if (!(d.condicion in CONDICIONES)) throw new Error('Condición no válida.');
  if (d.precio !== CONDICIONES[d.condicion]) throw new Error('Precio no coincide con la condición.');
  var conAncla = CONDICIONES[d.condicion] !== null;
  if (conAncla ? ['mayor','menor'].indexOf(d.comparacion) < 0 : d.comparacion !== '') throw new Error('Comparación no válida.');
  if (typeof d.estimacion !== 'number' || d.estimacion < 50 || d.estimacion > 5000) throw new Error('Estimación fuera de rango.');
  if ([1,2,3,4,5].indexOf(d.seguridad) < 0) throw new Error('Seguridad no válida.');
  if (conAncla ? [1,2,3,4,5].indexOf(d.peso) < 0 : d.peso !== 0) throw new Error('Peso no válido.');
  if (typeof d.segundos !== 'number' || d.segundos < 0) d.segundos = 0;
  return d;
}

function registrar_(d) {
  validar_(d);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var hoja = pestana_(libroDatos_(), HOJA, COLUMNAS);
    var anterior = hoja.getLastRow() > 1 ? hoja.getRange(2,2,hoja.getLastRow()-1,1).createTextFinder(d.rid).matchEntireCell(true).findNext() : null;
    if (!anterior) {
      hoja.appendRow([new Date(), d.rid, d.cursoGrupo, d.ronda, d.condicion, d.precio === null ? '' : d.precio,
        d.comparacion, d.estimacion, d.seguridad, d.peso || '', Math.min(d.segundos, 3600)]);
      SpreadsheetApp.flush();
    }
    CacheService.getScriptCache().put('ANC402_ACK_' + d.rid, '1', 21600);
    return {ok:true, rid:d.rid};
  } finally { lock.releaseLock(); }
}

// La página envía con fetch en modo no-cors (respuesta opaca); la confirmación llega por ?estado=.
function doPost(e) {
  var r;
  try {
    var raw = e && e.parameter && e.parameter.payload;
    if (!raw || raw.length > 4000) throw new Error('Envío vacío o demasiado extenso.');
    r = registrar_(JSON.parse(raw));
  } catch (err) { r = {ok:false, error:err.message || 'No fue posible registrar el envío.'}; }
  return ContentService.createTextOutput(JSON.stringify(r)).setMimeType(ContentService.MimeType.JSON);
}

function jsonp_(cb, obj) { return ContentService.createTextOutput(cb + '(' + JSON.stringify(obj) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT); }

// Reparto rotativo: un contador por ronda en las propiedades del script.
function asignar_(ronda) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var props = PropertiesService.getScriptProperties();
    var k = 'ANC402_N_' + ronda;
    var n = Number(props.getProperty(k) || 0);
    props.setProperty(k, String(n + 1));
    return ORDEN[n % ORDEN.length];
  } finally { lock.releaseLock(); }
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.asignar && /^\d{4}-\d{2}-\d{2}$/.test(p.asignar) && /^ancAsig_[0-9]+$/.test(p.callback || ''))
    return jsonp_(p.callback, {ok:true, condicion:asignar_(p.asignar)});
  if (p.estado && /^[A-Za-z0-9-]{32,64}$/.test(p.estado) && /^ancAck_[A-Za-z0-9_]+$/.test(p.callback || ''))
    return jsonp_(p.callback, {ok:CacheService.getScriptCache().get('ANC402_ACK_' + p.estado) === '1', rid:p.estado});
  if (p.tablero && /^ancTab_[0-9]+$/.test(p.callback || '')) {
    if (CURSOS['TMC-2026-2'].indexOf(p.tablero) < 0) return jsonp_(p.callback, {ok:false});
    var hoja = libroDatos_().getSheetByName(HOJA);
    if (!hoja || hoja.getLastRow() < 2) return jsonp_(p.callback, {ok:true, filas:[]});
    var v = hoja.getRange(2,1,hoja.getLastRow()-1,COLUMNAS.length).getValues();
    var filas = v.filter(function(r) { return String(r[2]) === p.tablero; }).map(function(r) {
      // La ronda puede volver como fecha si alguien editó la celda a mano.
      var ronda = r[3] instanceof Date ? Utilities.formatDate(r[3], Session.getScriptTimeZone(), 'yyyy-MM-dd') : String(r[3]);
      return {ronda:ronda, condicion:String(r[4]), precio:r[5] === '' ? null : Number(r[5]), comparacion:String(r[6]),
        estimacion:Number(r[7]), seguridad:Number(r[8]), peso:r[9] === '' ? 0 : Number(r[9]), segundos:Number(r[10])};
    });
    return jsonp_(p.callback, {ok:true, filas:filas});
  }
  return ContentService.createTextOutput(JSON.stringify({servicio:'Anclaje 402', version:1, preparado:!!(SpreadsheetApp.getActiveSpreadsheet() || PropertiesService.getScriptProperties().getProperty('ANC402_HOJA_ID'))})).setMimeType(ContentService.MimeType.JSON);
}
