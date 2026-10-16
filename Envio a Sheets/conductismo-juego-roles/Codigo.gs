// Receptor del juego de roles de técnicas cognitivo-conductuales de 402 (corte 3).
// Pegar en el Apps Script de la hoja donde se quieren los datos (Extensiones → Apps Script), ejecutar prepararHoja
// una vez y desplegar como aplicación web (ejecutar como: yo; acceso: cualquier usuario).
// prepararHoja también crea la CLAVE DOCENTE (queda en el registro de ejecución): el tablero la
// pide para mostrar los nombres de los jurados y su nota propuesta. Sin clave, el tablero solo
// recibe puntajes y comentarios, sin nombres.
var CURSOS = {'TMC-2026-2':['402']};
var GRUPOS = 8;
var ASPECTOS = ['Seguimiento de protocolos','Razonamiento clínico','Adaptación al contexto del caso','Colaboración en equipo'];
var COLUMNAS = ['Fecha de envío','ID de envío','Evaluador','Grupo del evaluador','Grupo en escena','Técnica','Tipo']
  .concat(ASPECTOS).concat(['Descripción general del desempeño','Sugerencia de mejora','Pregunta para el grupo']);
var HOJA = 'Juego de roles';

// La hoja de datos: la del proyecto si se creó desde una hoja (Extensiones → Apps Script);
// si el proyecto es independiente, la que creó prepararHoja.
function libroDatos_() {
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  if (activa) return activa;
  var id = PropertiesService.getScriptProperties().getProperty('JR402_HOJA_ID');
  if (!id) throw new Error('El docente debe ejecutar prepararHoja antes de recibir envíos.');
  return SpreadsheetApp.openById(id);
}
// Como en los receptores de casos y tamizaje: si la pestaña no existe, el primer envío la crea
// con sus encabezados. prepararHoja sigue sirviendo para dejarlas todas listas de antemano.
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
  var id = props.getProperty('JR402_HOJA_ID');
  // Si el proyecto se creó desde una hoja (Extensiones → Apps Script), los envíos van a esa
  // hoja: es donde el docente consulta sus datos. Solo un proyecto independiente crea una aparte.
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  var libro = activa || (id ? SpreadsheetApp.openById(id) : SpreadsheetApp.create('402 - Juego de roles'));
  props.setProperty('JR402_HOJA_ID', libro.getId());
  var hoja = libro.getSheetByName(HOJA) || libro.insertSheet(HOJA);
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(COLUMNAS);
    hoja.setFrozenRows(1);
    hoja.getRange(1,1,1,COLUMNAS.length).setBackground('#134349').setFontColor('#ffffff').setFontWeight('bold');
  }
  var sobra = libro.getSheetByName('Hoja 1') || libro.getSheetByName('Sheet1');
  if (sobra && sobra.getLastRow() === 0 && libro.getSheets().length > 1) libro.deleteSheet(sobra);
  if (!props.getProperty('JR402_CLAVE')) props.setProperty('JR402_CLAVE', Utilities.getUuid().replace(/-/g,'').slice(0,8));
  Logger.log('Hoja de la actividad: ' + libro.getUrl());
  Logger.log('Clave docente para el tablero: ' + props.getProperty('JR402_CLAVE'));
  return libro.getUrl();
}

function texto_(t, max) { return typeof t === 'string' && t.trim().length > 0 && t.length <= max; }

function validar_(d) {
  if (!d || d.tipo !== 'juego-roles-402' || d.version !== 1) throw new Error('Formato no reconocido.');
  if (!CURSOS[d.curso] || CURSOS[d.curso].indexOf(d.cursoGrupo) < 0) throw new Error('Curso no autorizado.');
  if (!/^[A-Za-z0-9-]{32,64}$/.test(d.rid || '')) throw new Error('Identificador no válido.');
  if (!texto_(d.evaluador, 80)) throw new Error('Falta el nombre.');
  [d.grupoEvaluador, d.grupo].forEach(function(g) { if (typeof g !== 'number' || g % 1 !== 0 || g < 1 || g > GRUPOS) throw new Error('Grupo no válido.'); });
  if (d.auto !== (d.grupo === d.grupoEvaluador)) throw new Error('Tipo de valoración no válido.');
  if (!texto_(d.tecnica, 80)) throw new Error('Técnica no válida.');
  if (!Array.isArray(d.puntajes) || d.puntajes.length !== ASPECTOS.length || !d.puntajes.every(function(p) { return [1,2,3,4,5].indexOf(p) >= 0; })) throw new Error('Valoren los cuatro aspectos.');
  if (!texto_(d.descripcion, 1500) || !texto_(d.sugerencia, 800)) throw new Error('Completen la descripción y la sugerencia.');
  if (typeof d.pregunta !== 'string' || d.pregunta.length > 600) throw new Error('Pregunta no válida.');
  return d;
}

// Un texto que empieza por = + @ - se guarda como texto, no como fórmula.
function seguro_(t) { return /^[\s]*[=+@-]/.test(t) ? "'" + t : t; }

function registrar_(d) {
  validar_(d);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var hoja = pestana_(libroDatos_(), HOJA, COLUMNAS);
    var anterior = hoja.getLastRow() > 1 ? hoja.getRange(2,2,hoja.getLastRow()-1,1).createTextFinder(d.rid).matchEntireCell(true).findNext() : null;
    if (!anterior) {
      hoja.appendRow([new Date(), d.rid, seguro_(d.evaluador), d.grupoEvaluador, d.grupo, d.tecnica, d.auto ? 'Autoevaluación' : 'Par']
        .concat(d.puntajes).concat([seguro_(d.descripcion), seguro_(d.sugerencia), seguro_(d.pregunta)]));
      SpreadsheetApp.flush();
    }
    CacheService.getScriptCache().put('JR402_ACK_' + d.rid, '1', 21600);
    return {ok:true, rid:d.rid};
  } finally { lock.releaseLock(); }
}

function doPost(e) {
  var r;
  try {
    var raw = e && e.parameter && e.parameter.payload;
    if (!raw || raw.length > 12000) throw new Error('Envío vacío o demasiado extenso.');
    r = registrar_(JSON.parse(raw));
  } catch (err) { r = {ok:false, error:err.message || 'No fue posible registrar el envío.'}; }
  var json = JSON.stringify(r).replace(/</g,'\\u003c');
  var txt = String(r.ok ? 'Valoración registrada. Pueden volver a la hoja del jurado.' : r.error).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return HtmlService.createHtmlOutput('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Juego de roles</title><body style="font:18px/1.5 system-ui;color:#134349;max-width:650px;margin:50px auto;padding:24px"><h1>' + (r.ok ? 'Registro confirmado' : 'Revisen el envío') + '</h1><p>' + txt + '</p><script>try{if(window.opener)window.opener.postMessage(Object.assign({tipo:"jr-confirmacion"},' + json + '),"*");}catch(e){}</script></body></html>');
}

function jsonp_(cb, obj) { return ContentService.createTextOutput(cb + '(' + JSON.stringify(obj) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT); }

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.estado && /^[A-Za-z0-9-]{32,64}$/.test(p.estado) && /^jrAck_[A-Za-z0-9_]+$/.test(p.callback || ''))
    return jsonp_(p.callback, {ok:CacheService.getScriptCache().get('JR402_ACK_' + p.estado) === '1', rid:p.estado});
  if (p.tablero && /^jrTab_[0-9]+$/.test(p.callback || '')) {
    if (CURSOS['TMC-2026-2'].indexOf(p.tablero) < 0) return jsonp_(p.callback, {ok:false});
    var props = PropertiesService.getScriptProperties();
    var clave = props.getProperty('JR402_CLAVE');
    var docente = !!(p.clave && clave && p.clave === clave);
    if (p.clave && !docente) return jsonp_(p.callback, {ok:false, error:'clave'});
    var hoja = libroDatos_().getSheetByName(HOJA);
    if (!hoja || hoja.getLastRow() < 2) return jsonp_(p.callback, {ok:true, docente:docente, filas:[]});
    var v = hoja.getRange(2,1,hoja.getLastRow()-1,COLUMNAS.length).getValues();
    // Sin clave, el evaluador se reemplaza por un número de orden: el tablero proyectado
    // necesita distinguir jurados para quedarse con el último envío de cada uno, no sus nombres.
    var orden = {};
    var filas = v.map(function(r) {
      var k = String(r[2]).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim() + '|' + r[3];
      if (!(k in orden)) orden[k] = Object.keys(orden).length + 1;
      var f = {evaluador: docente ? String(r[2]) : 'J' + orden[k], clave: docente ? k : 'J' + orden[k], grupoEvaluador:Number(r[3]), grupo:Number(r[4]),
        auto:r[6] === 'Autoevaluación', puntajes:[Number(r[7]),Number(r[8]),Number(r[9]),Number(r[10])],
        descripcion:String(r[11]), sugerencia:String(r[12]), pregunta:String(r[13])};
      if (docente) f.fecha = r[0] instanceof Date ? r[0].toISOString() : String(r[0]);
      return f;
    });
    return jsonp_(p.callback, {ok:true, docente:docente, filas:filas});
  }
  return ContentService.createTextOutput(JSON.stringify({servicio:'Juego de roles 402', version:1, preparado:!!(SpreadsheetApp.getActiveSpreadsheet() || PropertiesService.getScriptProperties().getProperty('JR402_HOJA_ID'))})).setMimeType(ContentService.MimeType.JSON);
}
