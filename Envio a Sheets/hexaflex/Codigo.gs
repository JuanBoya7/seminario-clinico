// Receptor independiente de las valoraciones de juegos de roles ACT.
// Pegar en el proyecto del docente. Ejecutar prepararHoja una vez.
// La hoja queda privada en la cuenta que ejecuta prepararHoja.
var CURSOS = {'SPI-2026-2':['901','902','903'], 'PII-2026-B':['Práctica II']};
var PROCESOS = ['Aceptación','Defusión cognitiva','Momento presente','Yo como contexto','Valores','Acción comprometida'];
var COLUMNAS = ['Fecha de envío','ID de envío','Curso','Grupo observado','Proceso','Grupo observador',
  '1. Encuadre y acuerdo','2. Escucha y conexión con el caso','3. Foco del proceso',
  '4. Desarrollo del ejercicio','5. Aplicación al caso','6. Cierre colaborativo','Promedio sobre 5','Comentario'];

function prepararHoja() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('ACT_HOJA_ID');
  var libro = id ? SpreadsheetApp.openById(id) : SpreadsheetApp.create('Valoraciones - juegos de roles ACT');
  props.setProperty('ACT_HOJA_ID', libro.getId());
  Object.keys(CURSOS).forEach(function(curso) {
    CURSOS[curso].forEach(function(grupo) {
      var nombre = curso === 'SPI-2026-2' ? grupo + ' ACT' : 'Práctica II ACT';
      var hoja = libro.getSheetByName(nombre) || libro.insertSheet(nombre);
      if (hoja.getLastRow() === 0) {
        hoja.appendRow(COLUMNAS);
        hoja.setFrozenRows(1);
        hoja.getRange(1,1,1,COLUMNAS.length).setBackground('#1f6f78').setFontColor('#ffffff').setFontWeight('bold');
        hoja.getRange('M:M').setNumberFormat('0.00');
        hoja.setColumnWidth(14,420);
      }
    });
  });
  Logger.log('Hoja de valoraciones: ' + libro.getUrl());
  return libro.getUrl();
}

function validar_(d) {
  if (!d || d.tipo !== 'hexaflex' || d.version !== 1) throw new Error('Formato de valoración no reconocido.');
  if (!CURSOS[d.curso] || CURSOS[d.curso].indexOf(d.cursoGrupo) < 0) throw new Error('Curso no autorizado.');
  if (typeof d.proceso !== 'number' || d.proceso % 1 !== 0 || d.proceso < 1 || d.proceso > 6) throw new Error('Proceso no válido.');
  if (!/^[A-Za-z0-9-]{32,64}$/.test(d.rid || '')) throw new Error('Identificador no válido.');
  if (!Array.isArray(d.puntajes) || d.puntajes.length !== 6 || d.puntajes.some(function(x) {return typeof x !== 'number' || [0,2.5,5].indexOf(x) < 0;})) throw new Error('Completen los seis criterios.');
  if (typeof d.comentario !== 'string' || d.comentario.length > 1600) throw new Error('Comentario no válido.');
  if (typeof d.grupoObservador !== 'string' || !/^(|[1-6])$/.test(d.grupoObservador)) throw new Error('Grupo observador no válido.');
  return d;
}

function textoSeguro_(t) {
  // Impide que comentarios se interpreten como fórmulas de hoja de cálculo.
  return /^[\s]*[=+@-]/.test(t) ? "'" + t : t;
}

function registrar_(d) {
  validar_(d);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var id = PropertiesService.getScriptProperties().getProperty('ACT_HOJA_ID');
    if (!id) throw new Error('El docente debe ejecutar prepararHoja antes de recibir valoraciones.');
    var libro = SpreadsheetApp.openById(id);
    var nombre = d.curso === 'SPI-2026-2' ? d.cursoGrupo + ' ACT' : 'Práctica II ACT';
    var hoja = libro.getSheetByName(nombre);
    if (!hoja) throw new Error('Falta la pestaña del curso. Ejecuten prepararHoja.');
    var anterior = hoja.getLastRow() > 1 ? hoja.getRange(2,2,hoja.getLastRow()-1,1).createTextFinder(d.rid).matchEntireCell(true).findNext() : null;
    if (!anterior) {
      var promedio = Math.round(d.puntajes.reduce(function(a,b) {return a+b;},0) / 6 * 100) / 100;
      hoja.appendRow([new Date(),d.rid,d.curso,d.proceso,PROCESOS[d.proceso-1],d.grupoObservador]
        .concat(d.puntajes).concat([promedio,textoSeguro_(d.comentario)]));
      SpreadsheetApp.flush();
    }
    // Confirmación mínima: no publica comentarios, notas ni la hoja.
    CacheService.getScriptCache().put('ACT_ACK_' + d.rid,'1',21600);
    return {ok:true,rid:d.rid};
  } finally {lock.releaseLock();}
}

function doPost(e) {
  var respuesta;
  try {
    var raw = e && e.parameter && e.parameter.payload;
    if (!raw || raw.length > 12000) throw new Error('Envío vacío o demasiado extenso.');
    respuesta = registrar_(JSON.parse(raw));
  } catch (err) {respuesta = {ok:false,error:err.message || 'No fue posible registrar la valoración.'};}
  var json = JSON.stringify(respuesta).replace(/</g,'\\u003c');
  var texto = respuesta.ok ? 'Valoración registrada. Pueden volver a la actividad.' : respuesta.error;
  texto = String(texto).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return HtmlService.createHtmlOutput('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Valoración ACT</title><body style="font:18px/1.5 system-ui;color:#134349;max-width:650px;margin:50px auto;padding:24px"><h1>' + (respuesta.ok ? 'Registro confirmado' : 'Revisen el envío') + '</h1><p>' + texto + '</p><script>try{if(window.opener)window.opener.postMessage(Object.assign({tipo:"hexaflex-confirmacion"},' + json + '),"*");}catch(e){}</script></body></html>');
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.estado && /^[A-Za-z0-9-]{32,64}$/.test(p.estado) && /^actAck_[A-Za-z0-9_]+$/.test(p.callback || '')) {
    var ack = {ok:CacheService.getScriptCache().get('ACT_ACK_' + p.estado) === '1',rid:p.estado};
    return ContentService.createTextOutput(p.callback + '(' + JSON.stringify(ack) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify({servicio:'Valoraciones ACT',version:1,preparado:!!PropertiesService.getScriptProperties().getProperty('ACT_HOJA_ID')})).setMimeType(ContentService.MimeType.JSON);
}
