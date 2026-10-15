// Configuración común del juego de roles de técnicas cognitivo-conductuales (corte 3).
// Técnicas y pasos: diapositivas «Representaciones mentales. Aplicabilidad de los principios
// teóricos» (láminas 12–25). La TREC añade el debate de creencias según Ruiz, Díaz y Villalobos,
// Manual de técnicas de intervención cognitivo conductuales, cap. 7, apdo. 4.
// Aspectos: «9.7 MATRIZ DE EVALUACIÓN 2.0 JUEGO DE ROLES»; niveles: rúbrica 3.2 (participantes).
// El orden de TECNICAS es el de los grupos 1 a 8 en «9.6 ACTIVIDAD, JUEGO DE ROLES».
// Los títulos de ASPECTOS son columnas de la hoja: no cambiarlos con envíos recibidos.
window.JR = {
  caso: {
    nombre: 'Andrés, 28 años',
    dx: 'F42.9 Trastorno obsesivo-compulsivo, no especificado',
    texto: [
      'Andrés creció en un entorno extremadamente religioso, con una moral rígida y una gran cantidad de normas: asistir a la iglesia tres veces por semana, ayunar ocho horas dos veces al mes y participar en rituales de oración de más de dos horas. A los 18 años empezó a trabajar y, con el tiempo, se mudó de la casa de sus padres porque no podía seguir acatando normas con las que no estaba de acuerdo. Sus padres no se opusieron, pero le insistían en no alejarse de las creencias que le habían inculcado.',
      'Nueve años después murió su padre. Andrés empezó a visitar a su madre con regularidad, y en esas visitas ella le recordaba que su padre había muerto decepcionado porque él no siguió el camino religioso. Escucharlo una y otra vez le produjo una gran culpa y pensamientos obsesivos sobre la decepción que le causó a su padre. También empezó a temer que, si no reconstruía su relación con Dios, podría perder a su madre.',
      'Bajo esa presión volvió a la iglesia: asiste cuatro veces por semana, ayuna tres veces al mes y dedica horas a la oración. Creía que así honraba la memoria de su padre y evitaba el sufrimiento de su madre. Con el tiempo notó que estas prácticas no le quitan la ansiedad ni el miedo a perder a su madre, y decidió buscar ayuda profesional.'
    ]
  },
  tecnicas: [
    {nombre: 'Relajación muscular progresiva', autor: 'Edmund Jacobson',
     proposito: 'Enseñar a relajar sistemáticamente los grupos musculares para reducir la activación fisiológica asociada a la ansiedad.',
     pasos: ['Entrenamiento en tensión y relajación de cada grupo muscular', 'Práctica diaria hasta volverla una habilidad automática', 'Aplicación de la relajación en los momentos de ansiedad']},
    {nombre: 'Desensibilización sistemática', autor: 'Joseph Wolpe',
     proposito: 'Exposición gradual combinada con relajación para reducir la respuesta de ansiedad ante el estímulo temido.',
     pasos: ['Jerarquía de situaciones temidas, de menor a mayor intensidad', 'Entrenamiento en relajación profunda', 'Exposición gradual a cada situación de la jerarquía manteniendo la relajación']},
    {nombre: 'Contrato de contingencias', autor: 'Robert Liberman y Montrose Wolf',
     proposito: 'Modificar la conducta fortaleciendo las conductas deseadas y disminuyendo las problemáticas mediante un acuerdo explícito.',
     pasos: ['Identificación de comportamientos específicos', 'Condiciones claras', 'Recompensas y consecuencias', 'Duración y seguimiento']},
    {nombre: 'Activación conductual', autor: '',
     proposito: 'Identificar actividades que den placer o sentido y comprometerse con ellas para romper el ciclo de inactividad y evitación.',
     pasos: ['Psicoeducación: cómo la evitación y la inactividad mantienen el malestar', 'Identificación de actividades significativas', 'Jerarquización por facilidad y valor personal', 'Metas pequeñas que aumentan poco a poco', 'Registro de actividades y emociones; monitoreo y ajuste']},
    {nombre: 'Terapia racional emotivo-conductual', autor: 'Albert Ellis',
     proposito: 'Identificar las creencias irracionales que median entre el acontecimiento y la consecuencia emocional, y debatirlas.',
     pasos: ['A: acontecimiento activador', 'B: sistema de creencias; detección de las creencias irracionales', 'C: consecuencias emotivas, conductuales y fisiológicas', 'Debate de las creencias con argumentos empíricos, lógicos y pragmáticos', 'Autorregistros entre sesiones']},
    {nombre: 'Terapia cognitiva', autor: 'Aaron T. Beck',
     proposito: 'Identificar y modificar los pensamientos automáticos negativos, la tríada cognitiva y las distorsiones que mantienen el malestar.',
     pasos: ['Identificación de pensamientos automáticos', 'Registro de pensamientos', 'Evaluación de la evidencia, con preguntas socráticas', 'Generación de pensamientos alternativos', 'Prueba de realidad', 'Seguimiento y ajuste']},
    {nombre: 'Entrenamiento en autoinstrucciones', autor: 'Donald Meichenbaum',
     proposito: 'Usar instrucciones internas para guiar el comportamiento y regular las emociones.',
     pasos: ['Identificación de pensamientos disfuncionales en situaciones específicas', 'Sustitución por autoinstrucciones', 'Práctica de las autoinstrucciones en situaciones reales']},
    {nombre: 'Entrenamiento en solución de problemas', autor: 'Thomas D’Zurilla y Marvin Goldfried',
     proposito: 'Aprender un proceso estructurado para resolver problemas personales y reducir el estrés.',
     pasos: ['Identificación y definición del problema', 'Generación de opciones de solución', 'Evaluación y elección de la mejor opción', 'Implementación y evaluación']}
  ],
  aspectos: [
    {titulo: 'Seguimiento de protocolos',
     pista: 'Respeto y adherencia a los pasos de la técnica asignada, con una estructura profesional.',
     niveles: ['No se reconoce ninguna técnica durante la representación.',
       'Lo que se aplica no corresponde a la técnica asignada o desdibuja su propósito.',
       'La técnica se identifica, pero se aplica incompleta o mecánica, sin su procedimiento.',
       'Se aplica correctamente; se omite algún paso sin afectar el resultado.',
       'Se aplica con claridad y coherencia, respeta sus pasos y la ajusta al momento del proceso.']},
    {titulo: 'Razonamiento clínico',
     pista: 'Capacidad para justificar las decisiones de intervención con lógica y coherencia.',
     niveles: ['No hay fundamentación de la intervención.',
       'La fundamentación es errónea o corresponde a otro enfoque.',
       'Se mencionan principios teóricos sin conectarlos con lo que se hizo.',
       'Los principios son los correctos, con una justificación breve.',
       'Fundamenta la intervención en el conductismo y el modelo cognitivo y explica por qué la técnica sirve para Andrés.']},
    {titulo: 'Adaptación al contexto del caso',
     pista: 'Habilidad para ajustar la técnica a las particularidades de Andrés y a sus necesidades.',
     niveles: ['No hay adaptación al caso ni representación reconocible de Andrés.',
       'La representación es inverosímil o desatiende las características de Andrés.',
       'Reproduce el ejemplo de clase sin ajustarlo al caso.',
       'Adapta la técnica al caso con recursos adecuados, aunque convencionales.',
       'Adapta la técnica con recursos originales y verosímiles, con sensibilidad ante lo que Andrés necesita.']},
    {titulo: 'Colaboración en equipo',
     pista: 'Distribución de roles y apoyo mutuo para sacar adelante la intervención como grupo.',
     niveles: ['El grupo no logra desarrollar el juego de roles.',
       'No hay distribución de roles: una o dos personas sostienen todo.',
       'Coordinación irregular, con interrupciones o vacíos difíciles de resolver.',
       'Roles distribuidos y el ejercicio fluye, con un leve desbalance.',
       'Roles claros, intervenciones encadenadas con fluidez y aportes de todos.']}
  ],
  etiquetas: ['Deficiente', 'Bajo', 'Medio', 'Alto', 'Superior'],
  // Rúbrica 3.3 (evaluadores): la nota que el tablero propone para cada jurado.
  rubricaJurado: [
    {criterio: 'Aplicación rigurosa de la matriz', peso: 0.30},
    {criterio: 'Justificación técnica de la calificación', peso: 0.30},
    {criterio: 'Objetividad y consistencia del juicio', peso: 0.20},
    {criterio: 'Retroalimentación y socialización', peso: 0.20}
  ]
};
