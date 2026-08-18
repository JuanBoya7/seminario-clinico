/**
 * Receptor del juego de roles de entrevista
 * =========================================
 *
 * Práctica II - Clínica (UDES). Recibe las valoraciones que envían los
 * estudiantes observadores durante los seis juegos de rol y devuelve el
 * resumen agregado que consume tablero.html.
 *
 * Proyecto SEPARADO del receptor de los análisis de caso y del simulacro de
 * PAP, por la misma razón que aquellos están separados entre sí: los otros ya
 * están validados y en uso, y una falla acá —en plena aula, con treinta
 * estudiantes enviando a la vez— no debe poder llevarse por delante entregas
 * de otra actividad. Cada uno tiene su hoja de cálculo y su implementación.
 *
 * Diferencia de fondo con el receptor del PAP: allá los ítems se cotejan con
 * Sí/Parcial/No y lo que interesa es cuántas veces se cumplió cada paso del
 * protocolo. Acá los cinco aspectos se puntúan de 1 a 5 y lo que interesa es
 * el promedio por grupo y, sobre todo, la dispersión: seis grupos valorando la
 * misma escena y no coincidiendo es el material de la plenaria.
 *
 * Este script necesita una hoja de cálculo donde escribir. Hay dos formas de
 * dársela, y funciona igual con cualquiera de las dos:
 *
 *   a) Creando el proyecto DESDE la hoja (Extensiones → Apps Script). En ese
 *      caso queda vinculado y no hay que configurar nada: dejá ID_HOJA vacío.
 *   b) Con el proyecto suelto, pegando abajo el identificador de la hoja en
 *      ID_HOJA. Es el tramo largo de su dirección:
 *      docs.google.com/spreadsheets/d/ESTO_DE_ACA/edit
 *
 * Sin ninguna de las dos, todo envío falla al escribir.
 *
 * Sobre el envío: la hoja del observador NO usa fetch(), envía un formulario
 * oculto. Los estudiantes abren el enlace desde el navegador del celular —a
 * menudo el integrado de una app de mensajería— y ahí fetch y las ventanas
 * emergentes son poco fiables. Un formulario clásico siempre llega.
 */

// Identificador de la hoja de cálculo donde se escriben las valoraciones.
// Dejalo vacío SOLO si creaste este script desde la hoja (Extensiones → Apps
// Script). Si el proyecto es suelto, pegá acá el tramo largo de la dirección de
// la hoja: docs.google.com/spreadsheets/d/ESTO_DE_ACA/edit
var ID_HOJA = '';

// Cursos habilitados y sus grupos del curso. La clave debe coincidir con
// ENVIO.curso en observador.html; los valores, con el desplegable "Curso" de
// observador.html y tablero.html.
//
// Hoy solo escribe la UDES. Queda como mapa y no como constante suelta por si
// el Seminario de FUAA adopta después esta misma actividad: se agrega una
// clave acá, una opción en los dos HTML, y no hay nada más que tocar.
//
// No es seguridad real (la URL viaja dentro del HTML y es visible); solo evita
// que un envío accidental o de otra asignatura ensucie la hoja.
var CURSOS = {
  'PII-2026-B': ['Práctica II']          // Práctica II - Clínica (UDES)
};

// Una pestaña por grupo del curso. Las columnas de aspectos se crean solas a
// partir de lo que trae el envío, así que cambiar la rúbrica en el HTML no
// obliga a tocar este script.
var COLUMNAS_FIJAS = ['Fecha de envío', 'Curso', 'Grupo en escena', 'Enfoque',
                      'Grupo observador'];

// Columnas de texto libre: no son puntuaciones y no entran en los promedios.
var COL_MEJOR = 'Lo mejor que hizo';
var COL_DISTINTO = 'Lo que habría hecho distinto';
var COL_PREGUNTA = 'Pregunta al grupo';

// Rango válido de la escala. Si algún día pasa a ser de 1 a 7, se cambia acá y
// en los dos HTML; el resto del script no depende del número.
var ESCALA_MIN = 1;
var ESCALA_MAX = 5;


/* ==================================================================
   RECEPCIÓN DE VALORACIONES
   ================================================================== */

function doPost(e) {
  try {
    if (!e || !e.parameter || !e.parameter.payload) {
      return paginaError('El envío llegó vacío. Volvé a intentarlo desde la hoja del observador.');
    }

    var datos = JSON.parse(e.parameter.payload);

    var gruposDelCurso = CURSOS[datos.curso];
    if (!gruposDelCurso) {
      return paginaError('Este envío no corresponde a ningún curso configurado. Avisale al docente.');
    }

    var grupoCurso = (datos.cursoGrupo || '').toString().trim();
    if (gruposDelCurso.indexOf(grupoCurso) === -1) {
      return paginaError('Falta seleccionar el curso (' + gruposDelCurso.join(', ') + ').');
    }
    if (!datos.grupo || !datos.observador) {
      return paginaError('Falta indicar tu grupo o el grupo que está en escena.');
    }
    if (String(datos.grupo) === String(datos.observador)) {
      // La hoja ya lo impide en pantalla, pero un envío viejo reenviado desde
      // el historial del navegador podría traer las dos cosas iguales.
      return paginaError('Un grupo no se valora a sí mismo. Elegí el grupo que estás observando.');
    }

    // El bloqueo no es teórico acá: al cerrar cada ronda, veintiséis estudiantes
    // envían casi al mismo tiempo. Sin él, dos envíos simultáneos pueden pisarse
    // al crear una columna nueva.
    var lock = LockService.getScriptLock();
    lock.waitLock(30000);
    try {
      escribirFila(grupoCurso, datos);
    } finally {
      lock.releaseLock();
    }

    return paginaExito(datos.grupo, datos.enfoque);

  } catch (err) {
    return paginaError('Ocurrió un error al registrar la valoración: ' + err.message);
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


function escribirFila(grupoCurso, datos) {
  var libro = libroDeCalculo();
  var hoja = libro.getSheetByName(grupoCurso);

  if (!hoja) {
    hoja = libro.insertSheet(grupoCurso);
    hoja.appendRow(COLUMNAS_FIJAS);
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, COLUMNAS_FIJAS.length).setFontWeight('bold');
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

  if (nuevas.length > 0) {
    encabezados = encabezados.concat(nuevas);
    hoja.getRange(1, 1, 1, encabezados.length).setValues([encabezados]);
    hoja.getRange(1, 1, 1, encabezados.length).setFontWeight('bold');
  }

  var fila = encabezados.map(function (etiqueta) {
    if (etiqueta === 'Fecha de envío') return new Date();
    if (etiqueta === 'Curso') return grupoCurso;
    if (etiqueta === 'Grupo en escena') return datos.grupo || '';
    if (etiqueta === 'Enfoque') return datos.enfoque || '';
    if (etiqueta === 'Grupo observador') return datos.observador || '';
    return campos[etiqueta] !== undefined ? campos[etiqueta] : '';
  });

  hoja.appendRow(fila);
}


/* ==================================================================
   RESUMEN PARA EL TABLERO
   ================================================================== */

function doGet(e) {
  if (e && e.parameter && e.parameter.tablero) {
    return resumen(e.parameter.curso || 'PII-2026-B',
                   e.parameter.grupo || '',
                   e.parameter.callback || '');
  }

  return pagina('#1a7f5a', 'Receptor del juego de roles activo',
    '<p>La dirección de entrega está funcionando.</p>' +
    '<p class="nota">Esta página es solo de comprobación. Las valoraciones se envían ' +
    'desde la hoja del observador.</p>');
}


/**
 * Promedio y dispersión de cada aspecto, separado por grupo en escena.
 *
 * Se responde como JSONP (callback) y no como JSON: el tablero vive en GitHub
 * Pages, otro dominio, y un <script> con callback no depende de que Apps Script
 * emita cabeceras CORS. Si esto se cambia a fetch(), el tablero deja de cargar
 * sin decir por qué.
 *
 * Se devuelven todas las puntuaciones individuales de cada aspecto (`valores`)
 * y no solo el promedio, porque la dispersión es la mitad del sentido de la
 * actividad: un 3 de promedio que sale de seis treses y un 3 que sale de un 1 y
 * un 5 son dos escenas completamente distintas, y solo la segunda hay que
 * discutirla.
 */
function resumen(curso, grupo, callback) {
  var gruposDelCurso = CURSOS[curso] || [];
  var datos = { ok: true, actualizado: new Date().toISOString(), total: 0,
                aspectos: [], grupos: {}, comentarios: [] };

  try {
    libroDeCalculo().getSheets().forEach(function (hoja) {
      var nombre = hoja.getName();
      if (gruposDelCurso.indexOf(nombre) === -1) return;   // solo grupos de ESTE curso
      if (grupo && nombre !== grupo) return;
      if (hoja.getLastRow() < 2) return;

      var tabla = hoja.getRange(1, 1, hoja.getLastRow(), hoja.getLastColumn()).getValues();
      var encabezados = tabla[0];
      var colGrupo    = encabezados.indexOf('Grupo en escena');
      var colEnfoque  = encabezados.indexOf('Enfoque');
      var colObs      = encabezados.indexOf('Grupo observador');

      for (var f = 1; f < tabla.length; f++) {
        var fila = tabla[f];
        var enEscena = String(colGrupo > -1 ? (fila[colGrupo] || 'sin') : 'sin');
        datos.total++;

        if (!datos.grupos[enEscena]) {
          datos.grupos[enEscena] = {
            total: 0,
            enfoque: String(colEnfoque > -1 ? (fila[colEnfoque] || '') : ''),
            aspectos: {}
          };
        }
        var g = datos.grupos[enEscena];
        g.total++;
        if (!g.enfoque && colEnfoque > -1) g.enfoque = String(fila[colEnfoque] || '');

        var observador = String(colObs > -1 ? (fila[colObs] || '') : '');

        for (var c = 0; c < encabezados.length; c++) {
          var etiqueta = String(encabezados[c]);
          var bruto = fila[c];
          var valor = String(bruto === null || bruto === undefined ? '' : bruto).trim();
          if (!valor) continue;

          if (etiqueta === COL_MEJOR || etiqueta === COL_DISTINTO || etiqueta === COL_PREGUNTA) {
            datos.comentarios.push({ grupo: enEscena, observador: observador,
                                     tipo: etiqueta, texto: valor });
            continue;
          }

          // Las columnas fijas se descartan antes de mirar el valor. Hace falta
          // decirlo explícitamente: 'Grupo en escena' y 'Grupo observador'
          // guardan números de grupo que caen dentro de la escala 1-5, así que
          // sin esta línea entran al tablero como si fueran aspectos de la
          // rúbrica y contaminan el promedio general.
          if (COLUMNAS_FIJAS.indexOf(etiqueta) !== -1) continue;

          // Fuera de esas, un aspecto de la rúbrica es cualquier columna cuyo
          // valor sea un entero dentro de la escala. Así, agregar o quitar
          // aspectos en el HTML no obliga a tocar este script.
          var numero = Number(valor);
          if (!isFinite(numero) || numero !== Math.round(numero)) continue;
          if (numero < ESCALA_MIN || numero > ESCALA_MAX) continue;

          if (datos.aspectos.indexOf(etiqueta) === -1) datos.aspectos.push(etiqueta);
          if (!g.aspectos[etiqueta]) g.aspectos[etiqueta] = [];
          g.aspectos[etiqueta].push(numero);
        }
      }
    });

    datos.aspectos.sort();                                  // orden estable de la rúbrica
    datos.comentarios = datos.comentarios.slice(-120);      // el tablero se proyecta

  } catch (err) {
    datos = { ok: false, error: err.message };
  }

  var cuerpo = JSON.stringify(datos);
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + cuerpo + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(cuerpo)
    .setMimeType(ContentService.MimeType.JSON);
}


/* ==================================================================
   PÁGINAS QUE VE EL OBSERVADOR
   ================================================================== */

function paginaExito(grupo, enfoque) {
  return pagina('#1a7f5a', 'Valoración registrada',
    '<p>Grupo <strong>' + escapar(grupo) + '</strong>' +
    (enfoque ? ' · <strong>' + escapar(enfoque) + '</strong>' : '') + '</p>' +
    '<p class="nota">Volvé con el botón “atrás” del navegador para la ronda siguiente: ' +
    'la hoja se limpia sola y conserva tu grupo.</p>');
}

function paginaError(mensaje) {
  return pagina('#b3261e', 'No se pudo registrar', '<p>' + escapar(mensaje) + '</p>');
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
