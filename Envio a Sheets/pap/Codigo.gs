/**
 * Receptor del simulacro de PAP
 * =============================
 *
 * Atiende a dos asignaturas sobre el mismo simulacro:
 *   · Seminario Profesional I - Clínico (FUAA), grupos 901/902/903
 *   · Práctica II - Clínica (UDES), grupo único "Práctica II"
 *
 * Proyecto SEPARADO del receptor de los análisis de caso, a propósito: el otro
 * ya está validado y en uso, y una falla acá —en plena aula, con treinta
 * estudiantes enviando a la vez— no debe poder llevarse por delante las
 * entregas de los casos. Cada uno tiene su hoja de cálculo y su implementación.
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
 * Hace dos cosas:
 *   1. doPost  — recibe la observación de cada observador y escribe una fila.
 *   2. doGet   — devuelve el resumen agregado que consume el tablero.
 *
 * Sobre el envío: la hoja del observador NO usa fetch(), envía un formulario
 * oculto. Los estudiantes abren el enlace desde el navegador del celular —a
 * menudo el integrado de una app de mensajería— y ahí fetch y las ventanas
 * emergentes son poco fiables. Un formulario clásico siempre llega.
 */

// Identificador de la hoja de cálculo donde se escriben las observaciones.
// Dejalo vacío SOLO si creaste este script desde la hoja (Extensiones → Apps
// Script). Si el proyecto es suelto, pegá acá el tramo largo de la dirección de
// la hoja: docs.google.com/spreadsheets/d/ESTO_DE_ACA/edit
var ID_HOJA = '';

// Cursos que escriben en esta hoja, y los grupos habilitados de cada uno.
// La clave debe coincidir con ENVIO.curso en observador.html; los valores,
// con el desplegable de grupo de observador.html y tablero.html. Si se abre un
// grupo nuevo, hay que agregarlo en los tres lados.
//
// Las dos asignaturas comparten receptor a propósito: son el mismo simulacro y un solo
// despliegue es menos que mantener. No se mezclan porque la pestaña se llama
// como el grupo — "901" (FUAA), "Práctica II" (UDES) — y el tablero pide el
// resumen de un curso a la vez (ver resumen()).
//
// No es seguridad real (la URL viaja dentro del HTML y es visible); solo evita
// que un envío accidental o de otro curso ensucie la hoja.
var CURSOS = {
  'SPI-2026-2': ['901', '902', '903'],   // Seminario Profesional I - Clínico (FUAA)
  'PII-2026-B': ['Práctica II']          // Práctica II - Clínica (UDES)
};

// Una pestaña por grupo del curso: "901", "902", "903", "Práctica II".
// Las columnas de ítems se crean solas a partir de lo que trae el envío, así
// que cambiar la rúbrica en el HTML no obliga a tocar este script.
var COLUMNAS_FIJAS = ['Fecha de envío', 'Curso', 'Estación', 'Ronda'];

// Columnas que NO son ítems de cotejo: no se agregan como Sí/Parcial/No.
var COL_ERRORES = 'Errores observados';
var COL_DESTACADA = 'Observación destacada';


/* ==================================================================
   RECEPCIÓN DE OBSERVACIONES
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
      return paginaError('Falta seleccionar el grupo del curso (' +
                         gruposDelCurso.join(', ') + ').');
    }
    if (!datos.estacion || !datos.ronda) {
      return paginaError('Falta indicar la estación o la ronda que estás observando.');
    }

    // El bloqueo no es teórico acá: al cerrar cada ronda, los observadores de
    // las cinco mesas envían casi al mismo tiempo. Sin él, dos envíos
    // simultáneos pueden pisarse al crear una columna nueva.
    var lock = LockService.getScriptLock();
    lock.waitLock(30000);
    try {
      escribirFila(grupoCurso, datos);
    } finally {
      lock.releaseLock();
    }

    return paginaExito(grupoCurso, datos.estacion, datos.ronda);

  } catch (err) {
    return paginaError('Ocurrió un error al registrar la observación: ' + err.message);
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
    if (etiqueta === 'Estación') return datos.estacion || '';
    if (etiqueta === 'Ronda') return datos.ronda || '';
    return campos[etiqueta] !== undefined ? campos[etiqueta] : '';
  });

  hoja.appendRow(fila);
}


/* ==================================================================
   RESUMEN PARA EL TABLERO
   ================================================================== */

function doGet(e) {
  if (e && e.parameter && e.parameter.tablero) {
    // Sin 'curso' se asume el Seminario: es lo que pedían los tableros
    // publicados antes de que la UDES entrara a esta misma hoja, y una copia
    // cacheada no debe empezar a mostrar datos del otro curso.
    return resumen(e.parameter.curso || 'SPI-2026-2',
                   e.parameter.grupo || '',
                   e.parameter.callback || '');
  }

  return pagina('#1a7f5a', 'Receptor del simulacro activo',
    '<p>La dirección de entrega está funcionando.</p>' +
    '<p class="nota">Esta página es solo de comprobación. Las observaciones se envían ' +
    'desde la hoja del observador.</p>');
}


/**
 * Cuántas veces se cumplió cada ítem, separado por estación.
 *
 * Se responde como JSONP (callback) y no como JSON: el tablero vive en GitHub
 * Pages, otro dominio, y un <script> con callback no depende de que Apps Script
 * emita cabeceras CORS. Si esto se cambia a fetch(), el tablero deja de cargar
 * sin decir por qué.
 */
function resumen(curso, grupo, callback) {
  var gruposDelCurso = CURSOS[curso] || [];
  var datos = { ok: true, actualizado: new Date().toISOString(), total: 0,
                items: [], estaciones: {}, destacadas: [], errores: {} };

  try {
    libroDeCalculo().getSheets().forEach(function (hoja) {
      var nombre = hoja.getName();
      if (gruposDelCurso.indexOf(nombre) === -1) return; // solo grupos de ESTE curso
      if (grupo && nombre !== grupo) return;
      if (hoja.getLastRow() < 2) return;

      var tabla = hoja.getRange(1, 1, hoja.getLastRow(), hoja.getLastColumn()).getValues();
      var encabezados = tabla[0];
      var colEstacion = encabezados.indexOf('Estación');

      for (var f = 1; f < tabla.length; f++) {
        var fila = tabla[f];
        var estacion = String(colEstacion > -1 ? (fila[colEstacion] || 'sin') : 'sin');
        datos.total++;

        if (!datos.estaciones[estacion]) {
          datos.estaciones[estacion] = { total: 0, items: {}, errores: {} };
        }
        var est = datos.estaciones[estacion];
        est.total++;

        for (var c = 0; c < encabezados.length; c++) {
          var etiqueta = String(encabezados[c]);
          var valor = String(fila[c] || '').trim();
          if (!valor) continue;

          if (etiqueta === COL_DESTACADA) {
            datos.destacadas.push({ estacion: estacion, texto: valor });
            continue;
          }
          if (etiqueta === COL_ERRORES) {
            valor.split('\n').forEach(function (err) {
              err = err.replace(/^[•\-\s]+/, '').trim();
              if (!err) return;
              // El mismo conteo se lleva dos veces: sumado para el cierre en
              // plenaria, y por estación para la devolución a cada dupla. Sin
              // la segunda copia el tablero puede filtrar la matriz por escena
              // pero no los errores, y termina mostrando el número del grupo
              // entero al lado de la curva de una sola escena.
              datos.errores[err] = (datos.errores[err] || 0) + 1;
              est.errores[err] = (est.errores[err] || 0) + 1;
            });
            continue;
          }

          // Un ítem de cotejo es cualquier columna cuyo valor sea Sí/Parcial/No.
          if (valor !== 'Sí' && valor !== 'Parcial' && valor !== 'No') continue;

          if (datos.items.indexOf(etiqueta) === -1) datos.items.push(etiqueta);
          if (!est.items[etiqueta]) est.items[etiqueta] = { si: 0, parcial: 0, no: 0 };
          if (valor === 'Sí') est.items[etiqueta].si++;
          else if (valor === 'Parcial') est.items[etiqueta].parcial++;
          else est.items[etiqueta].no++;
        }
      }
    });

    datos.items.sort();                                  // orden estable de la rúbrica
    datos.destacadas = datos.destacadas.slice(-40);      // el tablero se proyecta

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

function paginaExito(grupo, estacion, ronda) {
  return pagina('#1a7f5a', 'Observación registrada',
    '<p>Grupo <strong>' + escapar(grupo) + '</strong> · estación <strong>' +
    escapar(estacion) + '</strong> · ronda <strong>' + escapar(ronda) + '</strong></p>' +
    '<p class="nota">Volvé con el botón “atrás” del navegador para la siguiente ronda: ' +
    'la hoja ya te deja lista la ronda que sigue.</p>');
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
