// Configuración del debate del corte 3 (revolución cognitiva). Moción y equipos:
// diapositiva «Actividad evaluativa» del deck «Revolución cognitiva: el inicio del
// cognitivismo» (lámina 19). Conceptos: láminas 4–18 del mismo deck.
// Criterios: rúbrica institucional 3.1 RUBRICA - ESPACIO DE DISCUSION.
// Otro debate = otro archivo con la misma forma; debate-motor.js y debate-tablero.js no cambian.
window.DEBATE_CONFIG = {
  corte: 3,
  clave: 'debate-402-c3-v1:',
  titulo: '¿Cognición sin cultura?',
  eyebrow: 'Debate · Revolución cognitiva',
  mocion: '«Para estudiar científicamente la cognición es necesario prescindir de variables histórico-culturales para lograr mayor precisión explicativa.»',
  equipos: [
    {id: 'A', nombre: 'Equipo A', postura: 'Afirma la moción', enfoque: 'Postura cognitivista',
     conceptos: ['procesamiento de la información', 'computacional', 'algoritmo', 'representación', 'entrada', 'almacenamiento', 'salida', 'laboratorio', 'variable', 'rigor', 'precisión', 'neurociencia', 'neuropsicología', 'Gardner', 'Simposio Hixon', 'cibernética']},
    {id: 'B', nombre: 'Equipo B', postura: 'Niega la moción', enfoque: 'Postura histórico-cultural (Vygotsky)',
     conceptos: ['cultura', 'historia', 'histórico-cultural', 'interacción', 'Vygotsky', 'zona de desarrollo próximo', 'mediación', 'andamiaje', 'procesos superiores', 'procesos básicos', 'lenguaje', 'pensamiento', 'contexto', 'tutor']}
  ],
  tipos: ['Argumento', 'Réplica', 'Pregunta al otro equipo', 'Cierre'],
  rubrica: [
    {criterio: 'Profundidad en la comprensión del aporte', peso: 0.30},
    {criterio: 'Capacidad de diferenciar y contrastar ideas', peso: 0.25},
    {criterio: 'Conexión con el presente y su aplicabilidad', peso: 0.25},
    {criterio: 'Trabajo en equipo y expresión de ideas', peso: 0.20}
  ]
};
