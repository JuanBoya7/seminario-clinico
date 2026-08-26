/**
 * Receptor del tamizaje SRQ
 * =========================
 *
 * Clase 3.1 — Mapeo, tamizaje y encuestas CAP. Recibe las fichas de tamizaje
 * que envían los grupos desde 4-Tamizaje-SRQ.html y escribe una fila por grupo.
 *
 * Proyecto SEPARADO del receptor de los análisis de caso, del simulacro de PAP
 * y del juego de roles, por la misma razón por la que aquellos están separados
 * entre sí: los otros ya están validados y en uso, y una falla acá —en plena
 * aula, con once grupos enviando casi a la vez— no debe poder llevarse por
 * delante entregas de otra actividad. Cada uno tiene su hoja y su despliegue.
 *
 * Lo que hace distinto a este receptor: la ALERTA del ítem 17 del SRQ
 * ("¿Ha tenido la idea de acabar con su vida?"). Cuando llega positivo, la fila
 * entera se pinta y se anota en una columna propia, de modo que el docente
 * pueda identificar de un vistazo a qué grupos tiene que acercarse antes de que
 * termine la clase. Es el único motivo por el que este script no es idéntico al
 * de los casos.
 *
 * Cómo funciona el envío desde el HTML: el recurso NO usa fetch(). Envía un
 * formulario oculto hacia la URL de esta web app, porque los estudiantes pueden
 * abrir el archivo con doble clic (origen "file://" = null) y ahí fetch() queda
 * bloqueado por CORS.
 */

// Identificador de la hoja de cálculo donde se escriben las entregas.
// Dejalo vacío SOLO si creaste este script desde la hoja (Extensiones → Apps
// Script). Si el proyecto es suelto, pegá acá el tramo largo de la dirección de
// la hoja: docs.google.com/spreadsheets/d/ESTO_DE_ACA/edit
var ID_HOJA = '';

// Cursos que escriben en esta hoja y grupos habilitados de cada uno. La clave
// debe coincidir con ENVIO.curso en el HTML; los valores, con las opciones del
// desplegable "Grupo del curso". Si se abre un grupo nuevo hay que agregarlo en
// los dos lados.
//
// Desde el 2026-08-25 también escribe la Práctica II de la UDES, que adoptó
// esta misma actividad: su espejo vive en practica-ii/4-Tamizaje-SRQ.html.
//
// No es seguridad real (la URL viaja dentro del HTML y es visible); solo evita
// que un envío accidental o de otra asignatura ensucie la hoja.
var CURSOS = {
  'SPI-2026-2': ['901', '902', '903'],   // Seminario Profesional I - Clínico (FUAA)
  'PII-2026-B': ['Práctica II']          // Práctica II - Clínica (UDES)
};

// Columnas fijas, siempre en este orden y siempre primero. "Alerta" va tercera,
// antes que los datos del grupo, para que se vea sin desplazarse a la derecha.
var COLUMNAS_FIJAS = ['Fecha de envío', 'Curso', 'Alerta', 'Grupo', 'Integrantes'];

// Última columna: el estado completo en JSON, por si hace falta reconstruir el
// archivo HTML original del grupo.
var COLUMNA_JSON = 'JSON completo';

// Color de fondo de las filas con alerta. Un rojo muy claro: tiene que saltar a
// la vista al abrir la hoja sin volver ilegible el texto de la fila.
var COLOR_ALERTA = '#fbeae6';


function doPost(e) {
  try {
    if (!e || !e.parameter || !e.parameter.payload) {
      return paginaError('El envío llegó vacío. Vuelvan a intentarlo desde el archivo de la actividad.');
    }

    var datos = JSON.parse(e.parameter.payload);

    var gruposDelCurso = CURSOS[datos.curso];
    if (!gruposDelCurso) {
      return paginaError('Este envío no corresponde a ningún curso configurado. Avisale al docente.');
    }

    var grupoCurso = (datos.cursoGrupo || '').toString().trim();
    if (gruposDelCurso.indexOf(grupoCurso) === -1) {
      return paginaError('Falta seleccionar el grupo del curso (' +
                         gruposDelCurso.join(', ') + ') en el primer bloque de la actividad.');
    }

    // Una pestaña por grupo del curso: "901", "902", "903". A diferencia de los
    // casos, acá no hace falta el nombre de la actividad en la pestaña porque
    // esta hoja recibe una sola actividad.
    var nombreHoja = grupoCurso.substring(0, 60);
    var alerta = datos.alertaSUI === true || datos.alertaSUI === 'true';

    var valoresFijos = {
      'Curso': grupoCurso,
      'Alerta': alerta ? 'ÍTEM 17 POSITIVO — acercarse al grupo' : '',
      'Grupo': datos.grupo || '',
      'Integrantes': datos.integrantes || ''
    };

    // El bloqueo evita que dos grupos que envían al mismo tiempo se pisen al
    // crear columnas nuevas en el encabezado. Acá no es teórico: los once
    // grupos terminan y envían dentro de la misma ventana de pocos minutos.
    var lock = LockService.getScriptLock();
    lock.waitLock(30000);
    try {
      escribirFila(nombreHoja, datos, valoresFijos, alerta);
    } finally {
      lock.releaseLock();
    }

    return paginaExito(grupoCurso + ' · ' + (datos.grupo || ''), alerta);

  } catch (err) {
    return paginaError('Ocurrió un error al registrar el envío: ' + err.message);
  }
}


/**
 * Devuelve la hoja de cálculo, venga de donde venga, y falla con un mensaje
 * entendible si no hay ninguna. Sin esto, un proyecto suelto revienta con
 * "getSheetByName of null", que no le dice nada a quien lo está montando.
 */
function libroDeCalculo() {
  if (ID_HOJA) return SpreadsheetApp.openById(ID_HOJA);
  var activa = SpreadsheetApp.getActiveSpreadsheet();
  if (!activa) {
    throw new Error('Este script no está vinculado a ninguna hoja de cálculo. ' +
      'Pegá el identificador de la hoja en ID_HOJA, arriba del todo, y volvé a ' +
      'publicar con Implementar → Administrar implementaciones → editar → Versión: Nueva.');
  }
  return activa;
}


function escribirFila(nombreHoja, datos, valoresFijos, alerta) {
  var libro = libroDeCalculo();
  var hoja = libro.getSheetByName(nombreHoja);

  if (!hoja) {
    hoja = libro.insertSheet(nombreHoja);
    hoja.appendRow(COLUMNAS_FIJAS.concat([COLUMNA_JSON]));
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, COLUMNAS_FIJAS.length + 1).setFontWeight('bold');
  }

  var encabezados = hoja.getRange(1, 1, 1, Math.max(hoja.getLastColumn(), 1)).getValues()[0];
  var campos = datos.campos || {};
  var nuevas = [];

  // Las pestañas creadas antes de que existiera una columna fija nueva no la
  // tienen en su encabezado. Sin esto, agregar una columna fija obligaría a
  // borrar la pestaña y perder lo ya entregado.
  COLUMNAS_FIJAS.forEach(function (etiqueta) {
    if (encabezados.indexOf(etiqueta) === -1 && nuevas.indexOf(etiqueta) === -1) {
      nuevas.push(etiqueta);
    }
  });

  Object.keys(campos).forEach(function (etiqueta) {
    if (encabezados.indexOf(etiqueta) === -1 && nuevas.indexOf(etiqueta) === -1) {
      nuevas.push(etiqueta);
    }
  });

  // Las columnas nuevas se insertan ANTES de la de JSON, para que esa quede
  // siempre al final y no estorbe al leer la hoja.
  if (nuevas.length > 0) {
    var posJson = encabezados.indexOf(COLUMNA_JSON);
    if (posJson === -1) {
      encabezados = encabezados.concat(nuevas);
    } else {
      encabezados = encabezados.slice(0, posJson)
        .concat(nuevas)
        .concat(encabezados.slice(posJson));
    }
    hoja.getRange(1, 1, 1, encabezados.length).setValues([encabezados]);
    hoja.getRange(1, 1, 1, encabezados.length).setFontWeight('bold');
  }

  var fila = encabezados.map(function (etiqueta) {
    if (etiqueta === 'Fecha de envío') return new Date();
    if (etiqueta === COLUMNA_JSON) return datos.estado || '';
    if (valoresFijos[etiqueta] !== undefined) return valoresFijos[etiqueta];
    return campos[etiqueta] !== undefined ? campos[etiqueta] : '';
  });

  hoja.appendRow(fila);

  if (alerta) {
    // Se pinta la fila entera, no solo la celda de alerta: el docente revisa la
    // hoja de reojo mientras la clase sigue, y una celda suelta se pasa por alto.
    hoja.getRange(hoja.getLastRow(), 1, 1, encabezados.length)
        .setBackground(COLOR_ALERTA);
  }
}


/* ------------------------------------------------------------------
   Páginas de respuesta que ve el grupo en la pestaña que se abre
   ------------------------------------------------------------------ */

function paginaExito(grupo, alerta) {
  var quien = grupo ? ('<p>Grupo: <strong>' + escapar(grupo) + '</strong></p>') : '';

  // Cuando hay alerta, la confirmación deja de ser un acuse de recibo y pasa a
  // ser una instrucción: es la última pantalla que el grupo mira antes de
  // levantarse, y conviene que el mensaje esté ahí y no solo en el formulario.
  var aviso = alerta
    ? '<p class="alerta">Antes de salir del salón, acérquense al docente.</p>'
    : '';

  return pagina(
    '#1a7f5a',
    'Ficha de tamizaje recibida',
    quien +
    '<p>La ficha quedó registrada correctamente.</p>' +
    aviso +
    '<p class="nota">Si esta página reemplazó la actividad en vez de abrirse aparte, ' +
    'vuelvan con el botón "atrás" del navegador: sus respuestas siguen ahí. ' +
    'Recuerden guardar también el archivo con el botón "Guardar actividad", como respaldo.</p>'
  );
}

function paginaError(mensaje) {
  return pagina('#b3261e', 'No se pudo registrar el envío', '<p>' + escapar(mensaje) + '</p>');
}

function pagina(color, titulo, cuerpo) {
  var html =
    '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>' + escapar(titulo) + '</title><style>' +
    'body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;' +
    'background:#f7f6f3;color:#2b2b2b;margin:0;padding:48px 24px;line-height:1.6;}' +
    '.caja{max-width:520px;margin:0 auto;background:#fff;border-radius:14px;' +
    'padding:32px 34px;box-shadow:0 6px 24px rgba(0,0,0,.08);' +
    'border-top:5px solid ' + color + ';}' +
    'h1{font-size:21px;margin:0 0 14px;color:' + color + ';}' +
    'p{margin:0 0 10px;font-size:15px;}' +
    '.alerta{background:#fbeae6;border:1px solid #a83f2b;color:#a83f2b;' +
    'font-weight:600;padding:12px 15px;border-radius:9px;margin:14px 0;}' +
    '.nota{font-size:13.5px;color:#6b6b6b;margin-top:18px;}' +
    '</style></head><body><div class="caja"><h1>' + escapar(titulo) + '</h1>' +
    cuerpo + '</div></body></html>';

  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function escapar(texto) {
  return String(texto)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


/**
 * Permite abrir la URL de la web app en el navegador para comprobar que quedó
 * bien publicada, sin tener que enviar una ficha de prueba.
 */
function doGet() {
  return pagina('#1a7f5a', 'Receptor del tamizaje activo',
    '<p>La dirección de entrega está funcionando.</p>' +
    '<p class="nota">Esta página es solo de comprobación. Las fichas se envían ' +
    'desde el recurso del tamizaje.</p>');
}
