/**
 * Borra las filas del simulacro de carga del 2026-08-07
 * ======================================================
 *
 * Sirve para los DOS receptores: pegalo como archivo nuevo en cualquiera de los
 * dos proyectos de Apps Script (Archivos → +  → Secuencia de comandos) y ejecutá
 * `limpiarPruebas` desde el editor.
 *
 * NO hace falta republicar: esto se corre a mano, no lo sirve la web app.
 *
 * Qué borra: cualquier fila que tenga, en alguna celda, uno de los textos de
 * MARCAS. Son marcas puestas a propósito por el simulacro y ningún estudiante
 * las escribiría. Las entregas reales no se tocan.
 *
 * Recomendado: ejecutá primero `contarPruebas`, que no borra nada y te dice
 * cuántas filas se irían y de qué pestaña. Si el número cuadra, corré
 * `limpiarPruebas`.
 */

var MARCAS = [
  'PRUEBA DE CARGA',     // el simulacro de 120 + las dos olas de 30
  'PRUEBA TECNICA'       // la primera entrega de prueba, la del caso Elisa
];


/** Cuenta sin borrar. Corré esto primero. */
function contarPruebas() {
  informe_(false);
}

/** Borra de verdad. */
function limpiarPruebas() {
  informe_(true);
}


function informe_(borrar) {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var lineas = [];
  var total = 0;

  libro.getSheets().forEach(function (hoja) {
    var ultima = hoja.getLastRow();
    if (ultima < 2) return;

    var tabla = hoja.getRange(1, 1, ultima, hoja.getLastColumn()).getValues();
    var filas = [];

    for (var f = 1; f < tabla.length; f++) {
      if (esPrueba_(tabla[f])) filas.push(f + 1);   // 1-indexado, con encabezado
    }
    if (!filas.length) return;

    total += filas.length;
    lineas.push('  ' + hoja.getName() + ': ' + filas.length);

    if (borrar) {
      // De abajo hacia arriba: si se borra de arriba, los índices se corren.
      for (var i = filas.length - 1; i >= 0; i--) hoja.deleteRow(filas[i]);
    }
  });

  var titulo = borrar ? 'Filas de prueba BORRADAS' : 'Filas de prueba encontradas';
  var cuerpo = total
    ? (titulo + ': ' + total + '\n\n' + lineas.join('\n') +
       (borrar ? '' : '\n\nSi el número cuadra, ejecutá limpiarPruebas.'))
    : 'No quedan filas de prueba.';

  Logger.log(cuerpo);
  try {
    SpreadsheetApp.getUi().alert(cuerpo);
  } catch (e) {
    // Ejecutado desde el editor sin la hoja abierta: alcanza con el registro.
  }
}


function esPrueba_(fila) {
  for (var c = 0; c < fila.length; c++) {
    var v = fila[c];
    if (typeof v !== 'string') continue;
    for (var m = 0; m < MARCAS.length; m++) {
      if (v.indexOf(MARCAS[m]) !== -1) return true;
    }
  }
  return false;
}
