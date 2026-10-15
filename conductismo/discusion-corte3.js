// Configuración del espacio de discusión del corte 3 (revolución cognitiva e inteligencia
// artificial). Lentes, fenómenos y moción salen de las diapositivas «Revolución cognitiva: el
// inicio del cognitivismo» (moción: lámina 19) e «Inteligencia artificial: generalidades».
// Los criterios son los de la rúbrica institucional 3.1 RUBRICA - ESPACIO DE DISCUSION.
// Otro corte = otro archivo con la misma forma; el motor (discusion-motor.js) no cambia.
window.DISCUSION_CONFIG = {
  corte: 3,
  clave: 'discusion-402-c3-v1:',
  eyebrow: 'Espacio de discusión · Revolución cognitiva e inteligencia artificial',
  titulo: 'Un mismo hoy, seis lentes',
  intro: 'Seis grupos, seis lentes de la ciencia cognitiva y un mismo fenómeno de hoy. Cada grupo lo explica como lo haría su lente; con las seis lecturas proyectadas, le hace a otra lente la pregunta que ella no puede responder con facilidad y toma postura ante la moción.',
  lentes: [
    {nombre: 'Aprendizaje por refuerzo', sub: 'Thorndike y el conductismo en la inteligencia artificial',
     mira: 'La conducta observable y sus consecuencias: lo que se fortalece o se debilita por ensayo y error, como el +1 y el −1 con que se entrena a una inteligencia artificial.',
     conceptos: ['Ley del efecto', 'Ensayo y error', 'Relación E–R', 'Consecuencia +1 / −1']},
    {nombre: 'Teoría computacional de la mente', sub: 'Procesamiento de la información',
     mira: 'La mente como un sistema que recibe, codifica, transforma, almacena y recupera información siguiendo reglas; distinta del computador en su material, equivalente en su función.',
     conceptos: ['Entrada, almacenamiento, procesamiento y salida', 'Reglas y algoritmos', 'Procesamiento secuencial', 'Equivalencia funcional']},
    {nombre: 'Neurociencia cognitiva y neuropsicología', sub: 'El cerebro que sostiene la cognición',
     mira: 'Qué regiones del cerebro se activan durante una tarea y qué operación psicológica se altera cuando una lesión las daña.',
     conceptos: ['Neuroimagen', 'Lóbulos cerebrales y sistema visual', 'Áreas de Broca y de Wernicke', 'Operaciones psicológicas alteradas']},
    {nombre: 'Modelos del mundo', sub: 'La inteligencia artificial que simula antes de actuar',
     mira: 'Un sistema que percibe, construye un modelo interno de la realidad y lo usa para simular estados futuros, planificar y aprender antes de ejecutar una acción.',
     conceptos: ['Percepción y memoria', 'Modelo interno', 'Simulación de estados futuros', 'Toma de decisiones y planificación']},
    {nombre: 'Perspectiva sociocultural', sub: 'Lev S. Vygotsky',
     mira: 'Los procesos psicológicos superiores se construyen en la interacción con otros y con la cultura; lo que alguien logra hoy con ayuda anticipa lo que logrará solo.',
     conceptos: ['Procesos básicos y superiores', 'Zona de desarrollo próximo', 'Mediación y andamiaje', 'Interacción, historia y cultura']},
    {nombre: 'La pregunta de Turing', sub: '¿Pueden pensar las máquinas?',
     mira: 'Si un interrogador no logra distinguir por sus respuestas a la máquina del humano, ¿qué razón queda para negarle el pensamiento? Y, como preguntó McCarthy, ¿podría una máquina decir «puedo, pero no quiero»?',
     conceptos: ['El juego de la imitación', 'El interrogador', 'Pensamiento y conciencia', '«Puedo, pero no quiero»']}
  ],
  fenomenos: [
    {letra: 'A', titulo: 'Los pulgares', texto: 'Un asistente de inteligencia artificial responde cada vez mejor porque millones de usuarios marcan sus respuestas con un pulgar arriba o un pulgar abajo.'},
    {letra: 'B', titulo: 'La tarea resuelta', texto: 'Durante todo el semestre, un estudiante hace con un chatbot los ejercicios de estadística. Entrega todas las tareas a tiempo y pierde el parcial, que fue presencial y sin celular.'},
    {letra: 'C', titulo: 'El campeón', texto: 'Un programa aprende a jugar Go jugando millones de partidas contra sí mismo, sin que nadie le enseñe estrategias, y termina jugando mejor que los campeones humanos.'},
    {letra: 'D', titulo: 'Las noches con el chatbot', texto: 'Una mujer de 30 años le cuenta sus problemas a un chatbot todas las noches. Dice que la entiende mejor que sus amigas y que ya no siente necesidad de hablar con ellas.'},
    {letra: 'E', titulo: 'El GPS', texto: 'Un conductor que usa el GPS para todo ya no sabe llegar sin él a lugares a los que va cada semana.'},
    {letra: 'F', titulo: 'El carro que frena', texto: 'Un carro autónomo frena a tiempo ante un niño disfrazado que cruza la calle, una figura que nunca apareció en los datos con que lo entrenaron.'}
  ],
  mocion: '«Para estudiar científicamente la cognición es necesario prescindir de variables histórico-culturales para lograr mayor precisión explicativa.»',
  rubrica: [
    {criterio: 'Profundidad en la comprensión del aporte', peso: '30 %', niveles: [
      'Explica los hechos y desarrollos que configuran la revolución cognitiva y las teorías representativas de la mente, precisando el cambio de objeto y de método frente al conductismo.',
      'Explica los desarrollos centrales de la revolución cognitiva con precisión, sin profundizar en el cambio metodológico que implicó.',
      'Describe de forma general la revolución cognitiva, con imprecisiones históricas o conceptuales.',
      'Reduce el cognitivismo a la metáfora del computador o presenta errores conceptuales de base.',
      'No demuestra lectura ni comprensión de la temática discutida.']},
    {criterio: 'Capacidad de diferenciar y contrastar ideas', peso: '25 %', niveles: [
      'Contrasta con fundamento el modelo cognitivo con el conductual (objeto, método y nivel de explicación) y discrimina entre teoría del procesamiento de la información, neurocomputación e inteligencia artificial.',
      'Contrasta correctamente el modelo cognitivo con el conductual, con menor precisión al diferenciar entre las teorías cognitivas.',
      'Señala diferencias evidentes entre los modelos, sin sustento conceptual.',
      'Confunde los modelos o atribuye a uno los supuestos que corresponden al otro.',
      'No establece comparación alguna entre los modelos discutidos.']},
    {criterio: 'Conexión con el presente y su aplicabilidad', peso: '25 %', niveles: [
      'Analiza con ejemplos propios el impacto actual de la inteligencia artificial y de los modelos de procesamiento en la práctica psicológica, señalando alcances, límites e implicaciones éticas.',
      'Presenta ejemplos actuales pertinentes, sin discutir los límites ni las implicaciones éticas.',
      'Propone ejemplos genéricos sobre tecnología, poco articulados con la teoría discutida.',
      'Los ejemplos no corresponden a los planteamientos trabajados en la unidad.',
      'No establece relación entre lo discutido y su aplicabilidad.']},
    {criterio: 'Trabajo en equipo y expresión de ideas', peso: '20 %', niveles: [
      'Todos los integrantes participan con dominio del tema, retoman y complementan las intervenciones de sus compañeros y comunican sus ideas con claridad y lenguaje disciplinar.',
      'La mayoría de los integrantes participa con claridad; se evidencia preparación conjunta, con un leve desbalance en la distribución de la palabra.',
      'La participación se concentra en pocos integrantes; la expresión es comprensible pero poco técnica y con escasa articulación entre las intervenciones.',
      'La participación es fragmentada, sin escucha entre integrantes o con dificultades marcadas para expresar las ideas del grupo.',
      'No hay evidencia de trabajo conjunto ni de participación efectiva en el espacio de discusión.']}
  ]
};
