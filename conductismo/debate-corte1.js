// Configuración del debate del corte 1 (teorías de reforzamiento). Planteamiento y equipos:
// diapositiva «Actividad evaluativa: debate» del deck «Teorías de reforzamiento» (lámina 13);
// conceptos: láminas 3–12 del mismo deck. Sin preguntas guía, por decisión del docente.
// Criterios: rúbrica institucional 1.3 RUBRICA - DEBATE.
window.DEBATE_CONFIG = {
  corte: 1,
  clave: 'debate-402-c1-v1:',
  titulo: '¿Quién explica mejor la motivación?',
  eyebrow: 'Debate · Teorías de reforzamiento',
  rotulo: 'Planteamiento',
  mocion: 'Defiendan por qué la teoría de su equipo explica de manera más sólida la motivación y el aprendizaje, en contraste con las otras dos.',
  equipos: [
    {id: 'A', nombre: 'Equipo A', postura: 'Defiende a Clark Hull', enfoque: 'Teoría de la reducción del impulso',
     conceptos: ['reducción del impulso', 'impulso', 'pulsión', 'drive', 'fuerza del hábito', 'hábito', 'incentivo', 'inhibición reactiva', 'inhibición condicionada', 'fatiga', 'necesidad biológica', 'privación', 'ecuación', 'ciencia natural']},
    {id: 'B', nombre: 'Equipo B', postura: 'Defiende a Edward Tolman', enfoque: 'Conductismo propositivo y aprendizaje latente',
     conceptos: ['aprendizaje latente', 'mapa cognitivo', 'mapas cognitivos', 'conducta propositiva', 'conductismo propositivo', 'propósito', 'expectativa', 'variables intervinientes', 'intencionalidad', 'Blodgett', 'laberinto']},
    {id: 'C', nombre: 'Equipo C', postura: 'Defiende a David Premack', enfoque: 'Principio de Premack',
     conceptos: ['principio de Premack', 'regla de la abuela', 'probabilidad', 'alta probabilidad', 'baja probabilidad', 'preferencia', 'valor', 'teoría de la mente']}
  ],
  tipos: ['Argumento', 'Réplica', 'Pregunta a otro equipo', 'Cierre'],
  rubrica: [
    {criterio: 'Fundamentación teórica de la propuesta del autor', peso: 0.30},
    {criterio: 'Explicación de la motivación y del aprendizaje', peso: 0.25},
    {criterio: 'Réplica y contraargumentación', peso: 0.25},
    {criterio: 'Rigor comunicativo y actitud dialógica', peso: 0.20}
  ]
};
