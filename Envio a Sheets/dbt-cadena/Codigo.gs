// Receptor de la actividad de análisis en cadena (DBT). Proyecto independiente del de ACT.
// Pegar en el Apps Script de la hoja donde se quieren los datos (Extensiones → Apps Script),
// ejecutar prepararHoja una vez y desplegar como
// aplicación web (ejecutar como: yo; acceso: cualquier usuario).
var CURSOS = {'SPI-2026-2':['901','902','903'], 'PII-2026-B':['Práctica II']};
var EPISODIOS = ["La llamada de la universidad", "Las fotos del sábado", "La puerta del cuarto", "El dinero del mes", "La fiesta", "La sesión"];
var ESLABONES = ["Vulnerabilidad", "Evento desencadenante", "Pensamientos", "Emociones y sensaciones", "Impulso", "Conducta problema", "Consecuencias a corto plazo", "Consecuencias a largo plazo"];
var CLAVES = ["vulnerabilidad", "evento", "pensamientos", "emociones", "impulso", "conducta", "corto", "largo"];
var COLUMNAS = ['Fecha de envío','ID de envío','Curso','Grupo','Episodio'].concat(ESLABONES).concat(['Nivel de la jerarquía','Eslabón donde intervenir','Habilidad','Aplicación']);

function nombreHoja_(curso, grupo) { return curso === 'SPI-2026-2' ? grupo + ' DBT' : 'Práctica II DBT'; }

function prepararHoja() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('DBT_HOJA_ID');
  // Si el proyecto se creó desde una hoja (Extensiones → Apps Script), los envíos van a esa
  // hoja: es donde el docente consulta sus datos. Solo un proyecto independiente crea una aparte.
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  var libro = activa || (id ? SpreadsheetApp.openById(id) : SpreadsheetApp.create('Análisis en cadena - DBT'));
  props.setProperty('DBT_HOJA_ID', libro.getId());
  Object.keys(CURSOS).forEach(function(curso) {
    CURSOS[curso].forEach(function(grupo) {
      var nombre = nombreHoja_(curso, grupo);
      var hoja = libro.getSheetByName(nombre) || libro.insertSheet(nombre);
      if (hoja.getLastRow() === 0) {
        hoja.appendRow(COLUMNAS);
        hoja.setFrozenRows(1);
        hoja.getRange(1,1,1,COLUMNAS.length).setBackground('#3e294e').setFontColor('#ffffff').setFontWeight('bold');
      }
    });
  });
  Logger.log('Hoja de la actividad: ' + libro.getUrl());
  return libro.getUrl();
}

function texto_(t, max) { return typeof t === 'string' && t.trim().length > 0 && t.length <= max; }

function validar_(d) {
  if (!d || d.tipo !== 'dbt-cadena' || d.version !== 1) throw new Error('Formato no reconocido.');
  if (!CURSOS[d.curso] || CURSOS[d.curso].indexOf(d.cursoGrupo) < 0) throw new Error('Curso no autorizado.');
  if (typeof d.grupo !== 'number' || d.grupo % 1 !== 0 || d.grupo < 1 || d.grupo > 6) throw new Error('Grupo no válido.');
  if (!/^[A-Za-z0-9-]{32,64}$/.test(d.rid || '')) throw new Error('Identificador no válido.');
  if (!Array.isArray(d.eslabones) || d.eslabones.length !== 8 || !d.eslabones.every(function(x) { return texto_(x, 600); })) throw new Error('Completen los ocho eslabones.');
  if ([1,2,3,4].indexOf(d.nivel) < 0) throw new Error('Nivel no válido.');
  if (CLAVES.indexOf(d.intervencion) < 0) throw new Error('Eslabón no válido.');
  if (!texto_(d.habilidad, 80) || !texto_(d.aplicacion, 800)) throw new Error('Completen el análisis de soluciones.');
  return d;
}

function seguro_(t) { return /^[\s]*[=+@-]/.test(t) ? "'" + t : t; }

function registrar_(d) {
  validar_(d);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var id = PropertiesService.getScriptProperties().getProperty('DBT_HOJA_ID');
    if (!id) throw new Error('El docente debe ejecutar prepararHoja antes de recibir envíos.');
    var hoja = SpreadsheetApp.openById(id).getSheetByName(nombreHoja_(d.curso, d.cursoGrupo));
    if (!hoja) throw new Error('Falta la pestaña del curso. Ejecuten prepararHoja.');
    var anterior = hoja.getLastRow() > 1 ? hoja.getRange(2,2,hoja.getLastRow()-1,1).createTextFinder(d.rid).matchEntireCell(true).findNext() : null;
    if (!anterior) {
      hoja.appendRow([new Date(), d.rid, d.cursoGrupo, d.grupo, EPISODIOS[d.grupo-1]]
        .concat(d.eslabones.map(seguro_)).concat([d.nivel, ESLABONES[CLAVES.indexOf(d.intervencion)], seguro_(d.habilidad), seguro_(d.aplicacion)]));
      SpreadsheetApp.flush();
    }
    CacheService.getScriptCache().put('DBT_ACK_' + d.rid, '1', 21600);
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
  var txt = String(r.ok ? 'Análisis registrado. Pueden volver a la actividad.' : r.error).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return HtmlService.createHtmlOutput('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Análisis en cadena</title><body style="font:18px/1.5 system-ui;color:#3e294e;max-width:650px;margin:50px auto;padding:24px"><h1>' + (r.ok ? 'Registro confirmado' : 'Revisen el envío') + '</h1><p>' + txt + '</p><script>try{if(window.opener)window.opener.postMessage(Object.assign({tipo:"dbt-confirmacion"},' + json + '),"*");}catch(e){}</script></body></html>');
}

function jsonp_(cb, obj) { return ContentService.createTextOutput(cb + '(' + JSON.stringify(obj) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT); }

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.estado && /^[A-Za-z0-9-]{32,64}$/.test(p.estado) && /^dbtAck_[A-Za-z0-9_]+$/.test(p.callback || ''))
    return jsonp_(p.callback, {ok:CacheService.getScriptCache().get('DBT_ACK_' + p.estado) === '1', rid:p.estado});
  if (p.tablero && /^dbtTab_[0-9]+$/.test(p.callback || '')) {
    var curso = null;
    Object.keys(CURSOS).forEach(function(c) { if (CURSOS[c].indexOf(p.tablero) >= 0) curso = c; });
    if (!curso) return jsonp_(p.callback, {ok:false});
    var id = PropertiesService.getScriptProperties().getProperty('DBT_HOJA_ID');
    var hoja = id ? SpreadsheetApp.openById(id).getSheetByName(nombreHoja_(curso, p.tablero)) : null;
    if (!hoja || hoja.getLastRow() < 2) return jsonp_(p.callback, {ok:true, filas:[]});
    var v = hoja.getRange(2,1,hoja.getLastRow()-1,COLUMNAS.length).getValues();
    var filas = v.map(function(r) {
      return {grupo:r[3], eslabones:r.slice(5,13).map(String), nivel:Number(r[13]), intervencion:CLAVES[ESLABONES.indexOf(r[14])] || '', habilidad:String(r[15]), aplicacion:String(r[16])};
    });
    return jsonp_(p.callback, {ok:true, filas:filas});
  }
  return ContentService.createTextOutput(JSON.stringify({servicio:'Análisis en cadena DBT', version:1, preparado:!!PropertiesService.getScriptProperties().getProperty('DBT_HOJA_ID')})).setMimeType(ContentService.MimeType.JSON);
}
