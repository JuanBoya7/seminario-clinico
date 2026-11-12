/* Configuración del ejercicio de anclaje «¿Cuánto vale esta casa?» (402, corte 3).
   Réplica en HTML del ejercicio que el docente hacía con Mentimeter, con tres condiciones en vez
   de dos: ancla alta, ancla baja y un grupo sin precio que sirve de referencia. Las anclas se
   alejan de lo razonable más que en Northcraft y Neale (1987), donde eran ±12 % del precio de
   cotización, porque en un salón de 30 personas una diferencia tan pequeña no se vería.
   Para cambiar la casa o las anclas basta con editar este archivo (la página y el tablero lo leen). */
window.ANCLAJE = {
  clave: 'anc-402-v1:',          // prefijo de localStorage
  curso: 'TMC-2026-2',
  grupos: ['402'],
  unidad: 'millones de pesos',
  casa: {
    titulo: 'Casa en venta en conjunto cerrado',
    lugar: 'Norte de Valledupar',
    imagen: 'anclaje-casa.webp',
    rasgos: [
      'Una planta con volumen central de doble altura: 210 m² construidos en un lote de 400 m²',
      'Cuatro habitaciones (la principal con vestier y baño privado) y tres baños y medio',
      'Sala con ventanal de piso a techo, cocina abierta con isla y terraza cubierta',
      'Garaje cubierto, antejardín iluminado y camino de piedra',
      'Ocho años de construida; teja de barro y acabados en madera',
      'Conjunto cerrado con portería, a quince minutos del centro'
    ]
  },
  // precio en millones de pesos; null = la ficha no muestra precio (grupo de referencia)
  condiciones: {
    alta:    {nombre: 'Precio alto a la vista', corto: 'Ancla alta', precio: 1200, color: '#a83f2b'},
    control: {nombre: 'Sin precio a la vista',  corto: 'Sin ancla',  precio: null, color: '#7d8c91'},
    baja:    {nombre: 'Precio bajo a la vista', corto: 'Ancla baja', precio: 500, color: '#1f6f78'}
  },
  orden: ['alta', 'baja', 'control'],   // reparto rotativo de condiciones entre los celulares
  // Límites de una respuesta válida (millones): fuera de aquí se pide revisar el número.
  minimo: 50, maximo: 5000
};
