// Receptor de los espacios de discusión de 402 (Teorías y métodos: conductismo y enfoque
// cognitivo). Un solo proyecto para los tres cortes: una pestaña por corte.
// Pegar en el Apps Script de la hoja donde se quieren los datos (Extensiones → Apps Script), ejecutar prepararHoja
// una vez y desplegar como aplicación web (ejecutar como: yo; acceso: cualquier usuario).
// Copiar la URL en forma de dominio en conductismo/discusion-envio.js.
var CURSOS = {'TMC-2026-2':['402']};
var CORTES = [1, 2, 3];
var COLUMNAS = ['Fecha de envío','ID de envío','Ronda','Grupo','Lente','Integrantes','Fenómeno',
  'Lo que ve nuestra lente','El supuesto de fondo','Cómo lo pondríamos a prueba','Lo que nuestra lente deja por fuera',
  'Grupo al que le preguntan','La pregunta incómoda','Postura ante la moción','Por qué, desde su lente'];

function nombreHoja_(corte) { return 'Corte ' + corte; }

// La hoja de datos: la del proyecto si se creó desde una hoja (Extensiones → Apps Script);
// si el proyecto es independiente, la que creó prepararHoja.
function libroDatos_() {
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  if (activa) return activa;
  var id = PropertiesService.getScriptProperties().getProperty('DISC402_HOJA_ID');
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
  var id = props.getProperty('DISC402_HOJA_ID');
  // Si el proyecto se creó desde una hoja (Extensiones → Apps Script), los envíos van a esa
  // hoja: es donde el docente consulta sus datos. Solo un proyecto independiente crea una aparte.
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  var libro = activa || (id ? SpreadsheetApp.openById(id) : SpreadsheetApp.create('402 - Espacios de discusión'));
  props.setProperty('DISC402_HOJA_ID', libro.getId());
  CORTES.forEach(function(c) {
    var nombre = nombreHoja_(c);
    var hoja = libro.getSheetByName(nombre) || libro.insertSheet(nombre);
    if (hoja.getLastRow() === 0) {
      hoja.appendRow(COLUMNAS);
      hoja.setFrozenRows(1);
      hoja.getRange(1,1,1,COLUMNAS.length).setBackground('#134349').setFontColor('#ffffff').setFontWeight('bold');
    }
  });
  var sobra = libro.getSheetByName('Hoja 1') || libro.getSheetByName('Sheet1');
  if (sobra && sobra.getLastRow() === 0 && libro.getSheets().length > 1) libro.deleteSheet(sobra);
  Logger.log('Hoja de la actividad: ' + libro.getUrl());
  return libro.getUrl();
}

function texto_(t, max) { return typeof t === 'string' && t.trim().length > 0 && t.length <= max; }

function validar_(d) {
  if (!d || d.tipo !== 'discusion-402' || d.version !== 1) throw new Error('Formato no reconocido.');
  if (!CURSOS[d.curso] || CURSOS[d.curso].indexOf(d.cursoGrupo) < 0) throw new Error('Curso no autorizado.');
  if (CORTES.indexOf(d.corte) < 0) throw new Error('Corte no válido.');
  if (typeof d.grupo !== 'number' || d.grupo % 1 !== 0 || d.grupo < 1 || d.grupo > 8) throw new Error('Grupo no válido.');
  if (!/^[A-Za-z0-9-]{32,64}$/.test(d.rid || '')) throw new Error('Identificador no válido.');
  if (!texto_(d.lente, 80)) throw new Error('Lente no válida.');
  if (d.fase === 1) {
    if (!texto_(d.integrantes, 600) || !texto_(d.fenomeno, 80)) throw new Error('Completen los datos del grupo y el fenómeno.');
    if (!texto_(d.lectura, 1200) || !texto_(d.supuesto, 800) || !texto_(d.prueba, 800) || !texto_(d.limite, 800)) throw new Error('Completen la ronda 1.');
  } else if (d.fase === 2) {
    if (typeof d.destino !== 'number' || d.destino < 1 || d.destino > 8 || d.destino === d.grupo) throw new Error('Grupo destinatario no válido.');
    if (!texto_(d.destinoLente, 80) || !texto_(d.pregunta, 600) || !texto_(d.razon, 800)) throw new Error('Completen la ronda 2.');
    if (['favor','contra'].indexOf(d.postura) < 0) throw new Error('Postura no válida.');
  } else throw new Error('Ronda no válida.');
  return d;
}

// Un texto que empieza por = + @ - se guarda como texto, no como fórmula.
function seguro_(t) { return /^[\s]*[=+@-]/.test(t) ? "'" + t : t; }

function registrar_(d) {
  validar_(d);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var hoja = pestana_(libroDatos_(), nombreHoja_(d.corte), COLUMNAS);
    var anterior = hoja.getLastRow() > 1 ? hoja.getRange(2,2,hoja.getLastRow()-1,1).createTextFinder(d.rid).matchEntireCell(true).findNext() : null;
    if (!anterior) {
      var fila = d.fase === 1
        ? [new Date(), d.rid, 1, d.grupo, d.lente, seguro_(d.integrantes), d.fenomeno, seguro_(d.lectura), seguro_(d.supuesto), seguro_(d.prueba), seguro_(d.limite), '', '', '', '']
        : [new Date(), d.rid, 2, d.grupo, d.lente, '', '', '', '', '', '', d.destino + ' · ' + d.destinoLente, seguro_(d.pregunta), d.postura === 'favor' ? 'A favor' : 'En contra', seguro_(d.razon)];
      hoja.appendRow(fila);
      SpreadsheetApp.flush();
    }
    CacheService.getScriptCache().put('DISC402_ACK_' + d.rid, '1', 21600);
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
  var txt = String(r.ok ? 'Ronda registrada. Pueden volver a la actividad.' : r.error).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return HtmlService.createHtmlOutput('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Espacio de discusión</title><body style="font:18px/1.5 system-ui;color:#134349;max-width:650px;margin:50px auto;padding:24px"><h1>' + (r.ok ? 'Registro confirmado' : 'Revisen el envío') + '</h1><p>' + txt + '</p><script>try{if(window.opener)window.opener.postMessage(Object.assign({tipo:"discusion-confirmacion"},' + json + '),"*");}catch(e){}</script></body></html>');
}

function jsonp_(cb, obj) { return ContentService.createTextOutput(cb + '(' + JSON.stringify(obj) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT); }

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.estado && /^[A-Za-z0-9-]{32,64}$/.test(p.estado) && /^disAck_[A-Za-z0-9_]+$/.test(p.callback || ''))
    return jsonp_(p.callback, {ok:CacheService.getScriptCache().get('DISC402_ACK_' + p.estado) === '1', rid:p.estado});
  if (p.tablero && /^disTab_[0-9]+$/.test(p.callback || '')) {
    var corte = Number(p.corte);
    if (CURSOS['TMC-2026-2'].indexOf(p.tablero) < 0 || CORTES.indexOf(corte) < 0) return jsonp_(p.callback, {ok:false});
    var hoja = libroDatos_().getSheetByName(nombreHoja_(corte));
    if (!hoja || hoja.getLastRow() < 2) return jsonp_(p.callback, {ok:true, filas:[]});
    var v = hoja.getRange(2,1,hoja.getLastRow()-1,COLUMNAS.length).getValues();
    // Los integrantes no salen al tablero: es una pantalla que se proyecta.
    var filas = v.map(function(r) {
      return {fase:Number(r[2]), grupo:Number(r[3]), lente:String(r[4]), fenomeno:String(r[6]),
        lectura:String(r[7]), supuesto:String(r[8]), prueba:String(r[9]), limite:String(r[10]),
        destino:Number(String(r[11]).split(' · ')[0]) || 0, pregunta:String(r[12]),
        postura:r[13] === 'A favor' ? 'favor' : (r[13] === 'En contra' ? 'contra' : ''), razon:String(r[14])};
    });
    return jsonp_(p.callback, {ok:true, filas:filas});
  }
  return ContentService.createTextOutput(JSON.stringify({servicio:'Espacios de discusión 402', version:1, preparado:!!(SpreadsheetApp.getActiveSpreadsheet() || PropertiesService.getScriptProperties().getProperty('DISC402_HOJA_ID'))})).setMimeType(ContentService.MimeType.JSON);
}
