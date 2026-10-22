// Receptor de los debates de 402 (los tres cortes). Una pestaña por corte con registros e
// intervenciones, y la pestaña «Valoración del docente» con la rúbrica por equipo.
// Pegar en el Apps Script de la hoja donde se quieren los datos (Extensiones → Apps Script), ejecutar prepararHoja
// una vez y desplegar como aplicación web (ejecutar como: yo; acceso: cualquier usuario).
// prepararHoja crea la CLAVE DOCENTE (registro de ejecución y Propiedades de la secuencia de
// comandos, DEB402_CLAVE): sin ella el tablero no recibe nombres ni puede escribir etiquetas.
var CURSOS = {'TMC-2026-2':['402']};
var CORTES = [1, 2, 3];
var EQUIPOS = ['A', 'B', 'C'];
var ETIQUETAS = ['Abre línea', 'Réplica sólida', 'Integra a su equipo', 'Cierre'];
var COLUMNAS = ['Fecha de envío','ID de envío','Fila','Nombre','Equipo','Tipo de intervención','Segundos','Transcripción','Modo','Etiquetas del docente','Conceptos del curso'];
var VALORACION = 'Valoración del docente';
var COL_VAL = ['Corte','Equipo','Criterio 1','Criterio 2','Criterio 3','Criterio 4','Actualizado'];
var COL_ASIS = ['Nombre','Equipo','Hora de registro','Intervenciones','Segundos de palabra','Palabras','Última intervención'];

function nombreHoja_(corte) { return 'Debate corte ' + corte; }
function nombreAsistencia_(corte) { return 'Asistencia corte ' + corte; }
// La hoja de datos: la del proyecto si se creó desde una hoja (Extensiones → Apps Script);
// si el proyecto es independiente, la que creó prepararHoja.
function libro_() {
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  if (activa) return activa;
  var id = PropertiesService.getScriptProperties().getProperty('DEB402_HOJA_ID');
  if (!id) throw new Error('El docente debe ejecutar prepararHoja antes de recibir envíos.');
  return SpreadsheetApp.openById(id);
}
// Como en los receptores de casos y tamizaje: si la pestaña no existe, el primer envío la crea
// con sus encabezados. prepararHoja sigue sirviendo para dejarlas todas listas de antemano.
function pestana_(libro, nombre, cols) {
  var hoja = libro.getSheetByName(nombre) || libro.insertSheet(nombre);
  encabezar_(hoja, cols);
  return hoja;
}
function encabezar_(hoja, cols) {
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(cols); hoja.setFrozenRows(1);
    hoja.getRange(1,1,1,cols.length).setBackground('#134349').setFontColor('#ffffff').setFontWeight('bold');
  }
}

function prepararHoja() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('DEB402_HOJA_ID');
  // Si el proyecto se creó desde una hoja (Extensiones → Apps Script), los envíos van a esa
  // hoja: es donde el docente consulta sus datos. Solo un proyecto independiente crea una aparte.
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  var libro = activa || (id ? SpreadsheetApp.openById(id) : SpreadsheetApp.create('402 - Debates'));
  props.setProperty('DEB402_HOJA_ID', libro.getId());
  CORTES.forEach(function(c) {
    encabezar_(libro.getSheetByName(nombreHoja_(c)) || libro.insertSheet(nombreHoja_(c)), COLUMNAS);
    encabezar_(libro.getSheetByName(nombreAsistencia_(c)) || libro.insertSheet(nombreAsistencia_(c)), COL_ASIS);
  });
  encabezar_(libro.getSheetByName(VALORACION) || libro.insertSheet(VALORACION), COL_VAL);
  var sobra = libro.getSheetByName('Hoja 1') || libro.getSheetByName('Sheet1');
  if (sobra && sobra.getLastRow() === 0 && libro.getSheets().length > 1) libro.deleteSheet(sobra);
  if (!props.getProperty('DEB402_CLAVE')) props.setProperty('DEB402_CLAVE', Utilities.getUuid().replace(/-/g,'').slice(0,8));
  Logger.log('Hoja de los debates: ' + libro.getUrl());
  Logger.log('Clave docente para el tablero: ' + props.getProperty('DEB402_CLAVE'));
  return libro.getUrl();
}

function texto_(t, max) { return typeof t === 'string' && t.trim().length > 0 && t.length <= max; }
function seguro_(t) { return /^[\s]*[=+@-]/.test(t) ? "'" + t : t; }

function validar_(d) {
  if (!d || d.tipo !== 'debate-402' || d.version !== 1) throw new Error('Formato no reconocido.');
  if (!CURSOS[d.curso] || CURSOS[d.curso].indexOf(d.cursoGrupo) < 0) throw new Error('Curso no autorizado.');
  if (CORTES.indexOf(d.corte) < 0) throw new Error('Corte no válido.');
  if (!/^[A-Za-z0-9-]{32,64}$/.test(d.rid || '')) throw new Error('Identificador no válido.');
  if (!texto_(d.nombre, 80)) throw new Error('Falta el nombre.');
  if (EQUIPOS.indexOf(d.equipo) < 0) throw new Error('Equipo no válido.');
  if (d.fila === 'intervencion') {
    if (!texto_(d.tipoIntervencion, 40)) throw new Error('Tipo de intervención no válido.');
    if (typeof d.segundos !== 'number' || d.segundos < 1 || d.segundos > 1800) throw new Error('Duración no válida.');
    if (!texto_(d.texto, 4000)) throw new Error('Falta el texto.');
    if (['voz','escrita'].indexOf(d.modo) < 0) throw new Error('Modo no válido.');
    if (d.conceptos !== undefined && (!Array.isArray(d.conceptos) || d.conceptos.length > 40 || !d.conceptos.every(function(c) { return texto_(c, 60); }))) throw new Error('Conceptos no válidos.');
  } else if (d.fila !== 'registro') throw new Error('Fila no válida.');
  return d;
}

function registrar_(d) {
  validar_(d);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var hoja = pestana_(libro_(), nombreHoja_(d.corte), COLUMNAS);
    // Hojas creadas antes de la columna de conceptos: se le pone el encabezado al vuelo.
    if (!hoja.getRange(1, COLUMNAS.length).getValue()) hoja.getRange(1, COLUMNAS.length).setValue(COLUMNAS[COLUMNAS.length - 1]).setBackground('#134349').setFontColor('#ffffff').setFontWeight('bold');
    var anterior = hoja.getLastRow() > 1 ? hoja.getRange(2,2,hoja.getLastRow()-1,1).createTextFinder(d.rid).matchEntireCell(true).findNext() : null;
    if (!anterior) {
      hoja.appendRow(d.fila === 'registro'
        ? [new Date(), d.rid, 'Registro', seguro_(d.nombre), d.equipo, '', '', '', '', '', '']
        : [new Date(), d.rid, 'Intervención', seguro_(d.nombre), d.equipo, d.tipoIntervencion, d.segundos, seguro_(d.texto), d.modo, '', (d.conceptos || []).join(' · ')]);
      SpreadsheetApp.flush();
      // La asistencia es un resumen: si fallara, el envío ya quedó guardado y no se rechaza.
      try { asistencia_(libro_(), d.corte); } catch (err) { console.error(err); }
    }
    CacheService.getScriptCache().put('DEB402_ACK_' + d.rid, '1', 21600);
    return {ok:true, rid:d.rid};
  } finally { lock.releaseLock(); }
}

// Una fila por estudiante y corte: registrarse con el nombre al empezar es la huella de que
// estuvo en el aula durante el debate, aunque no tome la palabra; al lado, cuántas veces
// intervino. Se rehace entera desde la pestaña del corte con cada envío, así que no se edita a
// mano. La misma persona en dos celulares (mismo nombre y equipo) queda en una sola fila.
function asistencia_(libro, corte) {
  var hoja = libro.getSheetByName(nombreHoja_(corte));
  var personas = {}, lista = [];
  if (hoja && hoja.getLastRow() > 1) hoja.getRange(2,1,hoja.getLastRow()-1,9).getValues().forEach(function(r) {
    var k = norm_(r[3]) + '|' + r[4], p = personas[k], f = r[0] instanceof Date ? r[0] : null;
    if (!p) { p = personas[k] = {nombre:String(r[3]), equipo:String(r[4]), registro:null, n:0, seg:0, palabras:0, ultima:null}; lista.push(p); }
    if (r[2] === 'Registro') { if (f && (!p.registro || f < p.registro)) p.registro = f; }
    else {
      p.n++; p.seg += Number(r[6]) || 0;
      p.palabras += String(r[7]).trim() ? String(r[7]).trim().split(/\s+/).length : 0;
      if (f && (!p.ultima || f > p.ultima)) p.ultima = f;
    }
  });
  lista.sort(function(a, b) { return a.equipo.localeCompare(b.equipo) || a.nombre.localeCompare(b.nombre, 'es'); });
  var asis = pestana_(libro, nombreAsistencia_(corte), COL_ASIS);
  if (asis.getLastRow() > 1) asis.getRange(2,1,asis.getLastRow()-1,COL_ASIS.length).clearContent();
  if (!lista.length) return;
  asis.getRange(2,1,lista.length,COL_ASIS.length).setValues(lista.map(function(p) {
    return [seguro_(p.nombre), p.equipo, p.registro || 'sin registro', p.n, p.seg, p.palabras, p.ultima || ''];
  }));
  asis.getRange(2,3,lista.length,1).setNumberFormat('dd/mm/yyyy hh:mm');
  asis.getRange(2,7,lista.length,1).setNumberFormat('dd/mm/yyyy hh:mm');
}
// Para rehacer a mano la asistencia de los tres cortes (por ejemplo, con los envíos que
// llegaron antes de que existiera la pestaña).
function actualizarAsistencia() {
  var libro = libro_();
  CORTES.forEach(function(c) { if (libro.getSheetByName(nombreHoja_(c))) asistencia_(libro, c); });
}

function doPost(e) {
  var r;
  try {
    var raw = e && e.parameter && e.parameter.payload;
    if (!raw || raw.length > 12000) throw new Error('Envío vacío o demasiado extenso.');
    r = registrar_(JSON.parse(raw));
  } catch (err) { r = {ok:false, error:err.message || 'No fue posible registrar el envío.'}; }
  return ContentService.createTextOutput(JSON.stringify(r)).setMimeType(ContentService.MimeType.JSON);
}

function jsonp_(cb, obj) { return ContentService.createTextOutput(cb + '(' + JSON.stringify(obj) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT); }
function norm_(s) { return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim(); }

function leer_(corte, docente) {
  var libro = libro_();
  var hoja = libro.getSheetByName(nombreHoja_(corte));
  var filas = [];
  if (hoja && hoja.getLastRow() > 1) {
    var v = hoja.getRange(2,1,hoja.getLastRow()-1,COLUMNAS.length).getValues();
    // Sin clave, cada persona se vuelve un alias por equipo (A1, A2…) y no sale ningún texto:
    // la vista pública solo muestra cifras y conceptos. Las transcripciones son para calificar
    // después y solo las recibe el tablero con la clave docente.
    var alias = {}, cuenta = {};
    filas = v.map(function(r) {
      var eq = String(r[4]), k = norm_(r[3]) + '|' + eq;
      if (!(k in alias)) { cuenta[eq] = (cuenta[eq] || 0) + 1; alias[k] = eq + cuenta[eq]; }
      return {rid:String(r[1]), fila:r[2] === 'Registro' ? 'registro' : 'intervencion', persona: docente ? k : alias[k],
        nombre: docente ? String(r[3]) : alias[k], equipo:eq, tipo:String(r[5]), segundos:Number(r[6]) || 0,
        texto: docente ? String(r[7]) : '', palabras: String(r[7]).trim() ? String(r[7]).trim().split(/\s+/).length : 0,
        conceptos: r[10] ? String(r[10]).split(' · ') : null, modo:String(r[8]), etiquetas: docente && r[9] ? String(r[9]).split(' · ') : [],
        hora: r[0] instanceof Date ? r[0].getTime() : 0};
    });
  }
  var valoraciones = {};
  if (docente) {
    var hv = libro.getSheetByName(VALORACION);
    if (hv && hv.getLastRow() > 1) hv.getRange(2,1,hv.getLastRow()-1,6).getValues().forEach(function(r) {
      if (Number(r[0]) === corte) valoraciones[String(r[1])] = [Number(r[2]),Number(r[3]),Number(r[4]),Number(r[5])];
    });
  }
  return {filas:filas, valoraciones:valoraciones};
}

function etiquetar_(corte, rid, etiquetas) {
  if (!/^[A-Za-z0-9-]{32,64}$/.test(rid || '')) throw new Error('Identificador no válido.');
  var lista = etiquetas ? etiquetas.split('|').filter(function(t) { return ETIQUETAS.indexOf(t) >= 0; }) : [];
  var hoja = libro_().getSheetByName(nombreHoja_(corte));
  var celda = hoja.getRange(2,2,Math.max(1,hoja.getLastRow()-1),1).createTextFinder(rid).matchEntireCell(true).findNext();
  if (!celda) throw new Error('Intervención no encontrada.');
  hoja.getRange(celda.getRow(), 10).setValue(lista.join(' · '));
}

function valorar_(corte, equipo, v) {
  if (EQUIPOS.indexOf(equipo) < 0) throw new Error('Equipo no válido.');
  var n = String(v || '').split(',').map(Number);
  if (n.length !== 4 || !n.every(function(x) { return x >= 0 && x <= 5; })) throw new Error('Valoración no válida.');
  var hoja = pestana_(libro_(), VALORACION, COL_VAL);
  var datos = hoja.getLastRow() > 1 ? hoja.getRange(2,1,hoja.getLastRow()-1,2).getValues() : [];
  var fila = -1;
  datos.forEach(function(r, i) { if (Number(r[0]) === corte && String(r[1]) === equipo) fila = i + 2; });
  var valores = [corte, equipo].concat(n).concat([new Date()]);
  if (fila > 0) hoja.getRange(fila,1,1,7).setValues([valores]); else hoja.appendRow(valores);
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.estado && /^[A-Za-z0-9-]{32,64}$/.test(p.estado) && /^debAck_[A-Za-z0-9_]+$/.test(p.callback || ''))
    return jsonp_(p.callback, {ok:CacheService.getScriptCache().get('DEB402_ACK_' + p.estado) === '1', rid:p.estado});
  if (/^deb(Tab|Acc)_[0-9]+$/.test(p.callback || '')) {
    var corte = Number(p.corte);
    if (CURSOS['TMC-2026-2'].indexOf(p.tablero) < 0 || CORTES.indexOf(corte) < 0) return jsonp_(p.callback, {ok:false});
    var clave = PropertiesService.getScriptProperties().getProperty('DEB402_CLAVE');
    var docente = !!(p.clave && clave && p.clave === clave);
    if (p.clave && !docente) return jsonp_(p.callback, {ok:false, error:'clave'});
    try {
      if (p.accion) {
        if (!docente) return jsonp_(p.callback, {ok:false, error:'clave'});
        var lock = LockService.getScriptLock(); lock.waitLock(20000);
        try {
          if (p.accion === 'etiquetar') etiquetar_(corte, p.rid, p.etiquetas);
          else if (p.accion === 'valorar') valorar_(corte, p.equipo, p.v);
          else throw new Error('Acción no válida.');
        } finally { lock.releaseLock(); }
        return jsonp_(p.callback, {ok:true});
      }
      var r = leer_(corte, docente);
      return jsonp_(p.callback, {ok:true, docente:docente, filas:r.filas, valoraciones:r.valoraciones});
    } catch (err) { return jsonp_(p.callback, {ok:false, error:err.message}); }
  }
  return ContentService.createTextOutput(JSON.stringify({servicio:'Debates 402', version:1, preparado:!!(SpreadsheetApp.getActiveSpreadsheet() || PropertiesService.getScriptProperties().getProperty('DEB402_HOJA_ID'))})).setMimeType(ContentService.MimeType.JSON);
}
