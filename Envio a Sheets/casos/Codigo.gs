/**
 * Receptor de actividades — análisis de caso clínico
 * ==================================================
 *
 * Atiende a dos asignaturas sobre los mismos tres casos:
 *   · Seminario Profesional I - Clínico (FUAA), grupos 901/902/903
 *   · Práctica II - Clínica (UDES), grupo único "Práctica II"
 *
 * Recibe los envíos de los recursos HTML de análisis de caso y escribe una fila
 * por grupo en esta hoja de cálculo.
 *
 * Cómo funciona el envío desde el HTML:
 * el recurso NO usa fetch(). Envía un formulario HTML oculto con target="_blank"
 * hacia la URL de esta web app. Esto es deliberado: los estudiantes suelen abrir
 * el archivo con doble clic (origen "file://" = null), y en ese contexto fetch()
 * queda bloqueado por CORS. Un envío de formulario clásico no tiene esa
 * restricción y además abre una pestaña con la confirmación, que es la única
 * forma de que el grupo vea con certeza que su trabajo llegó.
 *
 * Estructura de la hoja: una pestaña por grupo del curso y caso — "901 Elisa",
 * "902 Elisa", "Práctica II Susana"... — con encabezados que se crean solos a partir de
 * las preguntas que trae el envío. Si mañana se agrega una pregunta nueva al
 * HTML, aparece una columna nueva sin tocar este script.
 *
 * Modo de lectura para el tablero docente (los tres casos):
 * doGet con ?tablero=Susana&curso=…&grupo=… devuelve, por grupo de trabajo, su
 * última entrega resumida —criterios marcados, veredicto y la línea que lo
 * sostiene—. No escribe nada y no toca doPost: publicar esta versión no cambia
 * cómo se reciben las entregas de ningún caso.
 *
 * Para publicarla: reemplazar el contenido de Codigo.gs por este archivo, y en
 * Implementar → Administrar implementaciones → editar la implementación vigente
 * → Versión: Nueva → Implementar. La dirección no cambia.
 */

// Cursos que escriben en esta hoja, y los grupos habilitados de cada uno.
// La clave debe coincidir con ENVIO.curso en los HTML; los valores, con las
// opciones del desplegable "Grupo del curso". Si se abre un grupo nuevo, hay
// que agregarlo en los dos lados.
//
// Las dos asignaturas comparten receptor a propósito: son los mismos tres casos
// y un solo despliegue es menos que mantener. No se mezclan porque la pestaña
// se llama "<grupo> <caso>": "901 Elisa" (FUAA), "Práctica II Elisa" (UDES).
//
// No es seguridad real (la URL viaja dentro del HTML y es visible); solo evita
// que un envío accidental o de otro curso ensucie la hoja.
var CURSOS = {
  'SPI-2026-2': ['901', '902', '903'],   // Seminario Profesional I - Clínico (FUAA)
  'PII-2026-B': ['Práctica II']          // Práctica II - Clínica (UDES)
};

// Nombres de las columnas fijas, siempre en este orden y siempre primero.
var COLUMNAS_FIJAS = ['Fecha de envío', 'Curso', 'Grupo', 'Integrantes'];

// Última columna: el estado completo en JSON. Permite reconstruir el archivo
// HTML original del grupo si alguna vez hace falta leerlo con su formato.
var COLUMNA_JSON = 'JSON completo';


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
                         gruposDelCurso.join(', ') + ') ' +
                         'en el primer bloque de la actividad.');
    }

    // Una pestaña por grupo del curso y caso: "901 Elisa", "902 Susana"...
    var etiquetaCaso = (datos.casoLabel || datos.caso || 'sin-caso').toString();
    var nombreHoja = (grupoCurso + ' ' + etiquetaCaso).substring(0, 60);

    var valoresFijos = {
      'Curso': grupoCurso,
      'Grupo': datos.grupo || '',
      'Integrantes': datos.integrantes || ''
    };

    // El bloqueo evita que dos grupos que envían al mismo tiempo se pisen al
    // crear columnas nuevas en el encabezado.
    var lock = LockService.getScriptLock();
    lock.waitLock(30000);
    try {
      escribirFila(nombreHoja, datos, COLUMNAS_FIJAS, valoresFijos);
    } finally {
      lock.releaseLock();
    }

    return paginaExito(grupoCurso + ' · ' + (datos.grupo || ''), etiquetaCaso);

  } catch (err) {
    return paginaError('Ocurrió un error al registrar el envío: ' + err.message);
  }
}


/**
 * Escribe una fila en la pestaña del caso, creando la pestaña y las columnas
 * que hagan falta.
 */
function escribirFila(nombreHoja, datos, fijas, valoresFijos) {
  fijas = fijas || COLUMNAS_FIJAS;
  valoresFijos = valoresFijos || {};

  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName(nombreHoja);

  if (!hoja) {
    hoja = libro.insertSheet(nombreHoja);
    hoja.appendRow(fijas.concat([COLUMNA_JSON]));
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, fijas.length + 1).setFontWeight('bold');
  }

  var anchoActual = Math.max(hoja.getLastColumn(), 1);
  var encabezados = hoja.getRange(1, 1, 1, anchoActual).getValues()[0];

  // Las preguntas nuevas se insertan ANTES de la columna de JSON, para que esa
  // quede siempre al final y no estorbe al leer la hoja.
  var campos = datos.campos || {};
  var nuevas = [];
  Object.keys(campos).forEach(function (etiqueta) {
    if (encabezados.indexOf(etiqueta) === -1 && nuevas.indexOf(etiqueta) === -1) {
      nuevas.push(etiqueta);
    }
  });

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
}


/* ------------------------------------------------------------------
   Páginas de respuesta que ve el estudiante en la pestaña que se abre
   ------------------------------------------------------------------ */

function paginaExito(grupo, caso) {
  var quien = grupo ? ('<p>Grupo: <strong>' + escapar(grupo) + '</strong></p>') : '';
  return pagina(
    '#1a7f5a',
    'Envío recibido',
    quien +
    '<p>La actividad del caso <strong>' + escapar(caso) + '</strong> quedó registrada correctamente.</p>' +
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
 * Sin parámetros: permite abrir la URL de la web app en el navegador para
 * comprobar que quedó bien publicada, sin enviar una actividad de prueba.
 *
 * Con ?tablero=<caso>: devuelve el resumen que consume el tablero docente de
 * ese caso (ver resumenCaso).
 */
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.tablero) {
    return resumenCaso(String(p.tablero), String(p.curso || ''), String(p.grupo || ''),
                       String(p.callback || ''));
  }
  return pagina('#1a7f5a', 'Receptor activo',
    '<p>La dirección de entrega está funcionando.</p>' +
    '<p class="nota">Esta página es solo de comprobación. Las actividades se envían ' +
    'desde el archivo HTML del caso.</p>');
}


/* ------------------------------------------------------------------
   Resumen para el tablero docente
   ------------------------------------------------------------------ */

// Casos con tablero. La pestaña que se lee es "<grupo del curso> <caso>", la
// misma que escribe doPost.
var CASOS_CON_TABLERO = ['Elisa', 'Susana', 'Sergio'];

/**
 * Por cada grupo de trabajo devuelve su ÚLTIMA entrega —si un grupo envió dos
 * veces, cuenta la segunda— y de ella solo lo que el tablero proyecta: el número
 * de grupo, los criterios marcados, el veredicto y la línea que lo sostiene.
 * Los integrantes no viajan: el tablero se proyecta delante del curso.
 *
 * Todo sale de la columna "JSON completo", que ya guarda el estado entero de la
 * actividad: el tablero no necesita columnas nuevas ni que se toque doPost.
 *
 * Responde JSON, o JSONP si trae callback: el tablero intenta fetch primero y
 * usa un <script> como respaldo.
 */
function resumenCaso(caso, curso, grupoCurso, callback) {
  var datos;
  try {
    if (CASOS_CON_TABLERO.indexOf(caso) === -1) {
      throw new Error('El caso "' + caso + '" no tiene tablero.');
    }
    var grupos = CURSOS[curso];
    if (!grupos) throw new Error('Curso no configurado: "' + curso + '".');

    var libro = SpreadsheetApp.getActiveSpreadsheet();
    var entregas = [];

    grupos.forEach(function (g) {
      if (grupoCurso && g !== grupoCurso) return;
      var hoja = libro.getSheetByName((g + ' ' + caso).substring(0, 60));
      if (!hoja || hoja.getLastRow() < 2) return;

      var tabla = hoja.getRange(1, 1, hoja.getLastRow(), hoja.getLastColumn()).getValues();
      var enc = tabla[0];
      var cFecha = enc.indexOf('Fecha de envío');
      var cGrupo = enc.indexOf('Grupo');
      var cJson = enc.indexOf(COLUMNA_JSON);
      if (cGrupo === -1 || cJson === -1) return;

      // Las filas se agregan en orden de llegada: la última de cada grupo es su
      // entrega vigente. La fecha solo desempata si alguien reordenó la hoja.
      var ultima = {};
      for (var f = 1; f < tabla.length; f++) {
        var grupo = String(tabla[f][cGrupo] || '').trim();
        if (!grupo) continue;
        var fecha = (cFecha > -1 && tabla[f][cFecha] instanceof Date) ? tabla[f][cFecha] : null;
        var previa = ultima[grupo];
        if (previa && previa.fecha && fecha && previa.fecha > fecha) continue;
        ultima[grupo] = { fecha: fecha, json: String(tabla[f][cJson] || '') };
      }

      Object.keys(ultima).forEach(function (grupo) {
        var estado = {};
        try { estado = JSON.parse(ultima[grupo].json) || {}; } catch (err) { estado = {}; }
        var criterios = estado.criteria || {};
        entregas.push({
          cursoGrupo: g,
          grupo: grupo,
          enviado: ultima[grupo].fecha ? ultima[grupo].fecha.toISOString() : '',
          veredicto: String((estado.radio || {}).veredicto || ''),
          dato: String((estado.text || {})['f-veredicto-dato'] || '').substring(0, 400),
          marcados: Object.keys(criterios).filter(function (k) {
            return criterios[k] && criterios[k].checked;
          })
        });
      });
    });

    datos = { ok: true, actualizado: new Date().toISOString(), caso: caso, entregas: entregas };
  } catch (err) {
    datos = { ok: false, error: err.message };
  }

  var cuerpo = JSON.stringify(datos);
  if (callback) {
    // El nombre del callback llega por la URL y se escribe tal cual al principio
    // de la respuesta: solo se aceptan nombres de función válidos.
    if (!/^[A-Za-z_$][\w$]*$/.test(callback)) callback = 'callback';
    return ContentService.createTextOutput(callback + '(' + cuerpo + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(cuerpo)
    .setMimeType(ContentService.MimeType.JSON);
}
