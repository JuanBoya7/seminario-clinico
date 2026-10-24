// Receptor independiente de las valoraciones de juegos de roles ACT.
// Pegar en el proyecto del docente. Ejecutar prepararHoja una vez.
// Los envíos van a la hoja unida al proyecto (Extensiones → Apps Script); queda privada en la
// cuenta que ejecuta prepararHoja.
var CURSOS = {'SPI-2026-2':['901','902','903'], 'PII-2026-B':['Práctica II']};
var PROCESOS = ['Aceptación','Defusión cognitiva','Contacto con el presente','Yo como contexto','Valores','Acción comprometida'];
var COLUMNAS = ['Fecha de envío','ID de envío','Curso','Grupo observado','Proceso','Grupo observador',
  '1. Encuadre y acuerdo','2. Escucha y conexión con el caso','3. Foco del proceso',
  '4. Desarrollo del ejercicio','5. Aplicación al caso','6. Cierre colaborativo','Promedio sobre 5','Comentario'];
// Versión 2 (desde el 2026-10-22): la valoración es una vista de la práctica y cada grupo elige
// su proceso, así que el grupo en escena y el proceso llegan por separado. Cada observador marca
// Sí / Parcial / No, las casillas de lo que fue en contra del proceso y una apreciación general.
// «Grupo observador» permite reunir las valoraciones de los integrantes de cada grupo. Va a
// pestañas propias («901 Valoración ACT») para no mezclar columnas con las filas de la versión 1,
// que se siguen aceptando.
var CRITERIOS_V2 = ['1. Encuadre y acuerdo','2. Escucha y conexión con el caso','3. Foco del proceso',
  '4. Desarrollo del ejercicio','5. Aplicación al caso','6. Cierre colaborativo'];
var PUNTAJE_MARCA_V2 = {'si':5,'parcial':2.5,'no':0};
var COLUMNAS_V2 = ['Fecha de envío','ID de envío','Curso','Grupo observador','Grupo en escena','Proceso']
  .concat(CRITERIOS_V2).concat(['Promedio sobre 5','En contra del proceso','Apreciación general']);

// La hoja de datos: la del proyecto si se creó desde una hoja (Extensiones → Apps Script);
// si el proyecto es independiente, la que creó prepararHoja.
function libroDatos_() {
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  if (activa) return activa;
  var id = PropertiesService.getScriptProperties().getProperty('ACT_HOJA_ID');
  if (!id) throw new Error('El docente debe ejecutar prepararHoja antes de recibir envíos.');
  return SpreadsheetApp.openById(id);
}
// Como en los receptores de casos y tamizaje: si la pestaña no existe, el primer envío la crea
// con sus encabezados. prepararHoja sigue sirviendo para dejarlas todas listas de antemano.
function pestana_(libro, nombre, cols) {
  var hoja = libro.getSheetByName(nombre) || libro.insertSheet(nombre);
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(cols); hoja.setFrozenRows(1);
    hoja.getRange(1,1,1,cols.length).setBackground('#1f6f78').setFontColor('#ffffff').setFontWeight('bold');
    var prom = cols.indexOf('Promedio sobre 5') + 1;
    hoja.getRange(2,prom,hoja.getMaxRows()-1,1).setNumberFormat('0.00');
    hoja.setColumnWidth(cols.length,420);
  }
  return hoja;
}
function nombrePestana_(d) {
  var base = d.curso === 'SPI-2026-2' ? d.cursoGrupo : 'Práctica II';
  return d.version === 2 ? base + ' Valoración ACT' : base + ' ACT';
}

function prepararHoja() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('ACT_HOJA_ID');
  // Si el proyecto se creó desde una hoja (Extensiones → Apps Script), los envíos van a esa
  // hoja: es donde el docente consulta sus datos. Solo un proyecto independiente crea una aparte.
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  var libro = activa || (id ? SpreadsheetApp.openById(id) : SpreadsheetApp.create('Valoraciones - juegos de roles ACT'));
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
  if (d && d.tipo === 'hexaflex' && d.version === 2) return validarV2_(d);
  if (!d || d.tipo !== 'hexaflex' || d.version !== 1) throw new Error('Formato de valoración no reconocido.');
  if (!CURSOS[d.curso] || CURSOS[d.curso].indexOf(d.cursoGrupo) < 0) throw new Error('Curso no autorizado.');
  if (typeof d.proceso !== 'number' || d.proceso % 1 !== 0 || d.proceso < 1 || d.proceso > 6) throw new Error('Proceso no válido.');
  if (!/^[A-Za-z0-9-]{32,64}$/.test(d.rid || '')) throw new Error('Identificador no válido.');
  if (!Array.isArray(d.puntajes) || d.puntajes.length !== 6 || d.puntajes.some(function(x) {return typeof x !== 'number' || [0,2.5,5].indexOf(x) < 0;})) throw new Error('Completen los seis criterios.');
  if (typeof d.comentario !== 'string' || d.comentario.length > 1600) throw new Error('Comentario no válido.');
  if (typeof d.grupoObservador !== 'string' || !/^(|[1-6])$/.test(d.grupoObservador)) throw new Error('Grupo observador no válido.');
  return d;
}

function validarV2_(d) {
  var entero = function(x, max) {return typeof x === 'number' && x % 1 === 0 && x >= 1 && x <= max;};
  // Ocho grupos (desde el 2026-10-23) y seis procesos.
  var entero18 = function(x) {return entero(x, 8);}, entero16 = function(x) {return entero(x, 6);};
  if (!CURSOS[d.curso] || CURSOS[d.curso].indexOf(d.cursoGrupo) < 0) throw new Error('Curso no autorizado.');
  if (!entero18(d.grupoObservador)) throw new Error('Indiquen su grupo.');
  if (!entero18(d.grupo)) throw new Error('Grupo en escena no válido.');
  if (d.grupoObservador === d.grupo) throw new Error('El grupo en escena no puede ser el propio.');
  if (!entero16(d.proceso)) throw new Error('Proceso no válido.');
  if (!/^[A-Za-z0-9-]{32,64}$/.test(d.rid || '')) throw new Error('Identificador no válido.');
  if (!Array.isArray(d.marcas) || d.marcas.length !== 6 || d.marcas.some(function(m) {return !Object.prototype.hasOwnProperty.call(PUNTAJE_MARCA_V2, m);})) throw new Error('Completen los seis criterios.');
  if (!Array.isArray(d.errores) || d.errores.length > 8 || d.errores.some(function(e) {return typeof e !== 'string' || e.length > 200;})) throw new Error('Marcas en contra del proceso no válidas.');
  if (typeof d.comentario !== 'string' || !d.comentario.trim() || d.comentario.length > 1600) throw new Error('Escriban la apreciación general.');
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
    var libro = libroDatos_();
    var hoja = pestana_(libro, nombrePestana_(d), d.version === 2 ? COLUMNAS_V2 : COLUMNAS);
    var anterior = hoja.getLastRow() > 1 ? hoja.getRange(2,2,hoja.getLastRow()-1,1).createTextFinder(d.rid).matchEntireCell(true).findNext() : null;
    if (!anterior && d.version === 2) {
      var puntajes = d.marcas.map(function(m) {return PUNTAJE_MARCA_V2[m];});
      var prom2 = Math.round(puntajes.reduce(function(a,b) {return a+b;},0) / 6 * 100) / 100;
      hoja.appendRow([new Date(),d.rid,d.cursoGrupo,d.grupoObservador,d.grupo,PROCESOS[d.proceso-1]]
        .concat(puntajes).concat([prom2,textoSeguro_(d.errores.join(' · ')),textoSeguro_(d.comentario)]));
      SpreadsheetApp.flush();
    } else if (!anterior) {
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

function html_(t) {
  return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Resumen de la valoración v2 en la ventana de confirmación: sirve para socializar
// lo marcado aunque el grupo haya enviado antes de hablarlo. Se arma con lo que
// llegó en el envío; no lee la hoja.
function resumenV2_(d) {
  var ROTULO = {'si':'Sí','parcial':'Parcial','no':'No'};
  var COLOR = {'si':'#3f7d53','parcial':'#b8722a','no':'#9b3b32'};
  var titulos = Array.isArray(d.criterios) && d.criterios.length === 6 &&
    d.criterios.every(function(c) {return typeof c === 'string' && c.length <= 120;})
    ? d.criterios : CRITERIOS_V2.map(function(c) {return c.replace(/^\d+\.\s*/,'');});
  var puntajes = d.marcas.map(function(m) {return PUNTAJE_MARCA_V2[m];});
  var prom = (Math.round(puntajes.reduce(function(a,b) {return a+b;},0) / 6 * 100) / 100).toFixed(2).replace('.',',');
  var filas = d.marcas.map(function(m, i) {
    return '<li><span class="n">' + (i+1) + '</span><span class="t">' + html_(titulos[i]) + '</span>' +
      '<span class="m" style="background:' + COLOR[m] + '">' + ROTULO[m] + '</span></li>';
  }).join('');
  var errores = d.errores.length
    ? '<ul class="err">' + d.errores.map(function(e) {return '<li>' + html_(e) + '</li>';}).join('') + '</ul>'
    : '<p class="vacio">No marcaron nada en contra del proceso.</p>';
  return '<p class="eyebrow">' + html_(d.cursoGrupo) + ' · Grupo ' + d.grupoObservador + ' valora al grupo ' + d.grupo + '</p>' +
    '<h1>Registro confirmado</h1>' +
    '<p class="sub">' + html_(PROCESOS[d.proceso-1]) + '</p>' +
    '<section><h2>Criterios</h2><ol class="crit">' + filas + '</ol>' +
    '<p class="nota">Valoración de la escena <strong>' + prom + ' / 5</strong></p></section>' +
    '<section><h2>Lo que fue en contra del proceso</h2>' + errores + '</section>' +
    '<section><h2>Apreciación general</h2><p class="apr">' + html_(d.comentario).replace(/\n/g,'<br>') + '</p></section>' +
    '<p class="pie">Pueden volver a la actividad.</p>';
}

var ESTILO_CONFIRMACION_ = '<style>' +
  'body{font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#16232b;max-width:680px;margin:0 auto;padding:28px 18px 40px;background:#fff}' +
  'h1{font-family:"Iowan Old Style","Palatino Linotype",Georgia,serif;font-weight:600;color:#134349;font-size:28px;margin:0 0 4px}' +
  'h2{font-family:ui-monospace,Consolas,monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#7d8c91;font-weight:600;margin:0 0 10px}' +
  '.eyebrow{font-family:ui-monospace,Consolas,monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#134349;margin:0 0 6px}' +
  '.sub{color:#4b5c63;margin:0 0 18px}' +
  'section{border:1px solid #dde5e5;border-radius:10px;padding:16px 18px;margin:0 0 14px}' +
  '.crit{list-style:none;margin:0;padding:0}.crit li{display:flex;align-items:center;gap:10px;padding:8px 0;border-top:1px solid #eef2f2}.crit li:first-child{border-top:0}' +
  '.n{font-family:ui-monospace,Consolas,monospace;font-size:12px;color:#1f6f78;width:16px}.t{flex:1;font-size:15px}' +
  '.m{color:#fff;font-size:13px;font-weight:700;border-radius:7px;padding:4px 12px;min-width:70px;text-align:center}' +
  '.nota{margin:12px 0 0;padding-top:10px;border-top:1px solid #dde5e5;color:#4b5c63}.nota strong{color:#134349;font-size:18px}' +
  '.err{margin:0;padding-left:20px}.err li{margin:4px 0;color:#7a3029}.vacio{margin:0;color:#7d8c91}' +
  '.apr{margin:0;white-space:normal}.pie{color:#7d8c91;font-size:14px;margin-top:18px}' +
  '</style>';

function doPost(e) {
  var respuesta, datos = null;
  try {
    var raw = e && e.parameter && e.parameter.payload;
    if (!raw || raw.length > 12000) throw new Error('Envío vacío o demasiado extenso.');
    datos = JSON.parse(raw);
    respuesta = registrar_(datos);
  } catch (err) {respuesta = {ok:false,error:err.message || 'No fue posible registrar la valoración.'};}
  var json = JSON.stringify(respuesta).replace(/</g,'\u003c');
  var cuerpo;
  if (respuesta.ok && datos && datos.version === 2) {
    cuerpo = resumenV2_(datos);
  } else {
    var texto = respuesta.ok ? 'Valoración registrada. Pueden volver a la actividad.' : respuesta.error;
    cuerpo = '<h1>' + (respuesta.ok ? 'Registro confirmado' : 'Revisen el envío') + '</h1><p>' + html_(texto) + '</p>';
  }
  return HtmlService.createHtmlOutput('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Valoración ACT</title>' + ESTILO_CONFIRMACION_ + '<body>' + cuerpo + '<script>try{if(window.opener)window.opener.postMessage(Object.assign({tipo:"hexaflex-confirmacion"},' + json + '),"*");}catch(e){}</script></body></html>');
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.estado && /^[A-Za-z0-9-]{32,64}$/.test(p.estado) && /^actAck_[A-Za-z0-9_]+$/.test(p.callback || '')) {
    var ack = {ok:CacheService.getScriptCache().get('ACT_ACK_' + p.estado) === '1',rid:p.estado};
    return ContentService.createTextOutput(p.callback + '(' + JSON.stringify(ack) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify({servicio:'Valoraciones ACT',version:2,preparado:!!(SpreadsheetApp.getActiveSpreadsheet() || PropertiesService.getScriptProperties().getProperty('ACT_HOJA_ID'))})).setMimeType(ContentService.MimeType.JSON);
}
