/* Preguntas y reglas de calificación de las fichas completas. Lo escribe
   _planes-fuente/instrumentos/generar.py: no se edita a mano. */
const AREAS = ["Riesgo suicida", "Malestar general", "Ánimo y depresión", "Ansiedad", "TOC y conductas repetitivas", "Trauma y duelo", "Síntomas psicóticos", "Consumo, juego y pantallas", "Alimentación", "Salud, sueño y síntomas físicos", "Neurodesarrollo y cognición", "Familia, pareja y violencia", "Cuidadores y desgaste laboral", "Autoestima, autocrítica y habilidades sociales", "Procesos psicológicos: aceptación, metacognición y regulación", "Bienestar y apoyo social", "Otras"];
const CALIFICAR = {
 "phq-9": {
  "clave": "PHQ-9",
  "sigla": "PHQ-9",
  "titulo": "Cuestionario sobre la Salud del Paciente-9",
  "para": "Tamizar síntomas depresivos de las dos últimas semanas y estimar su gravedad. Cada ítem corresponde a un criterio del episodio depresivo mayor, así que sirve también para seguir el cambio sesión a sesión. No diagnostica: un puntaje alto pide una entrevista clínica.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Spitzer, Williams, Kroenke y colegas · versión oficial en español para Colombia (Pfizer) · se reproduce sin autorización.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Durante las últimas 2 semanas, ¿con qué frecuencia ha sentido molestias por los siguientes problemas?"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Para nada",
     "Varios días",
     "Más de la mitad de los días",
     "Casi todos los días"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Poco interés o placer en hacer las cosas",
     "Sentirse desanimado/a, deprimido/a o sin esperanzas",
     "Problemas para dormir o mantenerse el sueño o dormir demasiado",
     "Sentirse cansado/a o con poca energía",
     "Sentir poco apetito o comer en exceso",
     "Sentirse mal acerca de sí mismo o tener un sentimiento de fracaso o de abandono propio o de la familia",
     "Dificultad para concentrarse en diferentes actividades tales como leer el periódico o ver televisión",
     "Moverse o hablar tan despacio que otras personas lo han notado o bien, por el contrario, estar tan inquieto/a o intranquilo/a que se mueve mucho más de lo normal",
     "Pensamientos acerca de que sería mejor estar muerto/a o deseos de lastimarse de alguna forma"
    ],
    "numerar": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No ha sido difícil",
     "Algo difícil",
     "Muy difícil",
     "Extremadamente difícil"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": false,
    "items": [
     "Si marcó cualquier problema, ¿qué grado de dificultad le generaron estos problemas para realizar su trabajo, encargarse de las tareas domésticas o relacionarse con otras personas?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,9)",
     "rangos": [
      [
       0,
       4,
       "Mínima"
      ],
      [
       5,
       9,
       "Leve"
      ],
      [
       10,
       14,
       "Moderada: punto de corte habitual"
      ],
      [
       15,
       19,
       "Moderadamente grave"
      ],
      [
       20,
       27,
       "Grave"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "r[9] > 0",
     "texto": "Hay una respuesta que indica posible riesgo suicida. Pregunte directamente, en esta misma atención, y siga el protocolo de riesgo: la persona no se va sin una valoración de seguridad."
    }
   ]
  }
 },
 "gad-7": {
  "clave": "GAD-7",
  "sigla": "GAD-7",
  "titulo": "Escala del Trastorno de Ansiedad Generalizada",
  "para": "Tamizar síntomas de ansiedad de las dos últimas semanas y estimar su gravedad. Se diseñó para el trastorno de ansiedad generalizada, pero también detecta con razonable precisión el pánico, la ansiedad social y el estrés postraumático. No diagnostica ni distingue entre ellos.",
  "areas": [
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Spitzer, Williams, Kroenke y colegas · versión oficial en español para Colombia (Pfizer) · se reproduce sin autorización.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Durante las últimas 2 semanas, ¿con qué frecuencia ha sentido molestias por los siguientes problemas?"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Para nada",
     "Varios días",
     "Más de la mitad de los días",
     "Casi todos los días"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Sentirse nervioso/a, ansioso/a, o con los nervios de punta",
     "No poder dejar de preocuparse o no poder controlar la preocupación",
     "Preocuparse demasiado por diferentes cosas",
     "Dificultad para relajarse",
     "Estar tan inquieto/a que es difícil permanecer sentado/a tranquilo/a",
     "Molestarse o irritarse fácilmente",
     "Sentir miedo como si algo terrible pudiera pasar"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,7)",
     "rangos": [
      [
       0,
       4,
       "Mínima"
      ],
      [
       5,
       9,
       "Leve"
      ],
      [
       10,
       14,
       "Moderada: punto de corte habitual"
      ],
      [
       15,
       21,
       "Grave"
      ]
     ]
    }
   ]
  }
 },
 "audit": {
  "clave": "AUDIT",
  "sigla": "AUDIT",
  "titulo": "Test de Identificación de Trastornos debidos al Consumo de Alcohol",
  "para": "Identificar el consumo de riesgo, el consumo perjudicial y la posible dependencia del alcohol en el último año, y decidir el nivel de intervención. Los ítems 1 a 3 miden el consumo; 4 a 6, síntomas de dependencia; 7 a 10, problemas causados por el alcohol.",
  "areas": [
   "Consumo, juego y pantallas"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Babor et al., Organización Mundial de la Salud (2001), WHO/MSD/MSB/01.6a · reproducción libre sin fines comerciales.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Debido a que el uso del alcohol puede afectar su salud e interferir con ciertos medicamentos y tratamientos, es importante que le hagamos algunas preguntas sobre su uso del alcohol. Sus respuestas serán confidenciales, así que sea honesto por favor. Marque una X en el cuadro que mejor describa su respuesta a cada pregunta."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Una o menos veces al mes",
     "De 2 a 4 veces al mes",
     "De 2 a 3 veces a la semana",
     "4 o más veces a la semana"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. ¿Con qué frecuencia consume alguna bebida alcohólica?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1 o 2",
     "3 o 4",
     "5 o 6",
     "De 7 a 9",
     "10 o más"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "2. ¿Cuántas consumiciones de bebidas alcohólicas suele realizar en un día de consumo normal?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Menos de una vez al mes",
     "Mensualmente",
     "Semanalmente",
     "A diario o casi a diario"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "3. ¿Con qué frecuencia toma 6 o más bebidas alcohólicas en un solo día?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Menos de una vez al mes",
     "Mensualmente",
     "Semanalmente",
     "A diario o casi a diario"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "4. ¿Con qué frecuencia en el curso del último año ha sido incapaz de parar de beber una vez había empezado?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Menos de una vez al mes",
     "Mensualmente",
     "Semanalmente",
     "A diario o casi a diario"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "5. ¿Con qué frecuencia en el curso del último año no pudo hacer lo que se esperaba de usted porque había bebido?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Menos de una vez al mes",
     "Mensualmente",
     "Semanalmente",
     "A diario o casi a diario"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "6. ¿Con qué frecuencia en el curso del último año ha necesitado beber en ayunas para recuperarse después de haber bebido mucho el día anterior?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Menos de una vez al mes",
     "Mensualmente",
     "Semanalmente",
     "A diario o casi a diario"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "7. ¿Con qué frecuencia en el curso del último año ha tenido remordimientos o sentimientos de culpa después de haber bebido?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Menos de una vez al mes",
     "Mensualmente",
     "Semanalmente",
     "A diario o casi a diario"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "8. ¿Con qué frecuencia en el curso del último año no ha podido recordar lo que sucedió la noche anterior porque había estado bebiendo?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí, pero no en el curso del último año",
     "Sí, el último año"
    ],
    "vals": [
     0,
     2,
     4
    ],
    "puntua": true,
    "items": [
     "9. ¿Usted o alguna otra persona ha resultado herido porque usted había bebido?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí, pero no en el curso del último año",
     "Sí, el último año"
    ],
    "vals": [
     0,
     2,
     4
    ],
    "puntua": true,
    "items": [
     "10. ¿Algún familiar, amigo, médico o profesional sanitario ha mostrado preocupación por su consumo de bebidas alcohólicas o le han sugerido que deje de beber?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,10)",
     "rangos": [
      [
       0,
       7,
       "Zona I: educación sobre el alcohol"
      ],
      [
       8,
       15,
       "Zona II: consejo simple"
      ],
      [
       16,
       19,
       "Zona III: consejo simple más terapia breve"
      ],
      [
       20,
       40,
       "Zona IV: derivación al especialista"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "r[4] >= 2 || r[5] >= 2 || r[6] >= 2 || r[9] === 4 || r[10] === 4",
     "texto": "Según la pauta de la OMS, ofrezca el nivel máximo de intervención aunque el total sea bajo: hay 2 o más en las preguntas 4, 5 o 6, o 4 en las preguntas 9 o 10."
    }
   ]
  }
 },
 "assist": {
  "clave": "ASSIST",
  "sigla": "ASSIST v3.1",
  "titulo": "Prueba de Detección de Consumo de Alcohol, Tabaco y Sustancias",
  "para": "Detectar el consumo de diez clases de sustancias y ubicar, para cada una, el nivel de riesgo y la intervención que corresponde: ninguna, intervención breve o tratamiento más intensivo. Es una entrevista breve de la OMS pensada para la atención primaria.",
  "areas": [
   "Consumo, juego y pantallas"
  ],
  "quien": [
   "profesional"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Organización Panamericana de la Salud y Organización Mundial de la Salud (2011), manual del ASSIST v3.1, Apéndice A.",
  "bloques": [
   {
    "t": "items",
    "titulo": "PREGUNTA 1 | A lo largo de la vida, ¿cuál de las siguientes sustancias ha consumido alguna vez? (solo las que consumió sin receta médica)",
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     "a. Tabaco (cigarrillos, tabaco de mascar, puros, etc.)",
     "b. Bebidas alcohólicas (cerveza, vinos, licores, etc.)",
     "c. Cannabis (marihuana, mota, hierba, hachís, etc.)",
     "d. Cocaína (coca, crack, etc.)",
     "e. Estimulantes de tipo anfetamina (speed, anfetaminas, éxtasis, etc.)",
     "f. Inhalantes (óxido nitroso, pegamento, gasolina, solvente para pintura, etc.)",
     "g. Sedantes o pastillas para dormir (diazepam, alprazolam, flunitrazepam, midazolam, etc.)",
     "h. Alucinógenos (LSD, ácidos, hongos, ketamina, etc.)",
     "i. Opiáceos (heroína, morfina, metadona, buprenorfina, codeína, etc.)",
     "j. Otras, especifique: ____________________"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": "PREGUNTA 2 | En los últimos tres meses, ¿con qué frecuencia ha consumido las sustancias que mencionó (primera droga, segunda droga, etc.)?",
    "cab": "",
    "ops": [
     "Nunca",
     "Una o dos veces",
     "Mensualmente",
     "Semanalmente",
     "Diariamente o casi diariamente"
    ],
    "vals": [
     0,
     2,
     3,
     4,
     6
    ],
    "puntua": true,
    "items": [
     "a. Tabaco (cigarrillos, tabaco de mascar, puros, etc.)",
     "b. Bebidas alcohólicas (cerveza, vinos, licores, etc.)",
     "c. Cannabis (marihuana, mota, hierba, hachís, etc.)",
     "d. Cocaína (coca, crack, etc.)",
     "e. Estimulantes de tipo anfetamina (speed, anfetaminas, éxtasis, etc.)",
     "f. Inhalantes (óxido nitroso, pegamento, gasolina, solvente para pintura, etc.)",
     "g. Sedantes o pastillas para dormir (diazepam, alprazolam, flunitrazepam, midazolam, etc.)",
     "h. Alucinógenos (LSD, ácidos, hongos, ketamina, etc.)",
     "i. Opiáceos (heroína, morfina, metadona, buprenorfina, codeína, etc.)",
     "j. Otras, especifique: ____________________"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": "PREGUNTA 3 | En los últimos tres meses, ¿con qué frecuencia ha sentido un fuerte deseo o ansias de consumir (primera droga, segunda droga, etc.)?",
    "cab": "",
    "ops": [
     "Nunca",
     "Una o dos veces",
     "Mensualmente",
     "Semanalmente",
     "Diariamente o casi diariamente"
    ],
    "vals": [
     0,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "a. Tabaco (cigarrillos, tabaco de mascar, puros, etc.)",
     "b. Bebidas alcohólicas (cerveza, vinos, licores, etc.)",
     "c. Cannabis (marihuana, mota, hierba, hachís, etc.)",
     "d. Cocaína (coca, crack, etc.)",
     "e. Estimulantes de tipo anfetamina (speed, anfetaminas, éxtasis, etc.)",
     "f. Inhalantes (óxido nitroso, pegamento, gasolina, solvente para pintura, etc.)",
     "g. Sedantes o pastillas para dormir (diazepam, alprazolam, flunitrazepam, midazolam, etc.)",
     "h. Alucinógenos (LSD, ácidos, hongos, ketamina, etc.)",
     "i. Opiáceos (heroína, morfina, metadona, buprenorfina, codeína, etc.)",
     "j. Otras, especifique: ____________________"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": "PREGUNTA 4 | En los últimos tres meses, ¿con qué frecuencia el consumo de (primera droga, segunda droga, etc.) le ha causado problemas de salud, sociales, legales o económicos?",
    "cab": "",
    "ops": [
     "Nunca",
     "Una o dos veces",
     "Mensualmente",
     "Semanalmente",
     "Diariamente o casi diariamente"
    ],
    "vals": [
     0,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "a. Tabaco (cigarrillos, tabaco de mascar, puros, etc.)",
     "b. Bebidas alcohólicas (cerveza, vinos, licores, etc.)",
     "c. Cannabis (marihuana, mota, hierba, hachís, etc.)",
     "d. Cocaína (coca, crack, etc.)",
     "e. Estimulantes de tipo anfetamina (speed, anfetaminas, éxtasis, etc.)",
     "f. Inhalantes (óxido nitroso, pegamento, gasolina, solvente para pintura, etc.)",
     "g. Sedantes o pastillas para dormir (diazepam, alprazolam, flunitrazepam, midazolam, etc.)",
     "h. Alucinógenos (LSD, ácidos, hongos, ketamina, etc.)",
     "i. Opiáceos (heroína, morfina, metadona, buprenorfina, codeína, etc.)",
     "j. Otras, especifique: ____________________"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": "PREGUNTA 5 | En los últimos tres meses, ¿con qué frecuencia dejó de hacer lo que habitualmente se esperaba de usted por el consumo de (primera droga, segunda droga, etc.)?",
    "cab": "",
    "ops": [
     "Nunca",
     "Una o dos veces",
     "Mensualmente",
     "Semanalmente",
     "Diariamente o casi diariamente"
    ],
    "vals": [
     0,
     5,
     6,
     7,
     8
    ],
    "puntua": true,
    "items": [
     "b. Bebidas alcohólicas (cerveza, vinos, licores, etc.)",
     "c. Cannabis (marihuana, mota, hierba, hachís, etc.)",
     "d. Cocaína (coca, crack, etc.)",
     "e. Estimulantes de tipo anfetamina (speed, anfetaminas, éxtasis, etc.)",
     "f. Inhalantes (óxido nitroso, pegamento, gasolina, solvente para pintura, etc.)",
     "g. Sedantes o pastillas para dormir (diazepam, alprazolam, flunitrazepam, midazolam, etc.)",
     "h. Alucinógenos (LSD, ácidos, hongos, ketamina, etc.)",
     "i. Opiáceos (heroína, morfina, metadona, buprenorfina, codeína, etc.)",
     "j. Otras, especifique: ____________________"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": "PREGUNTA 6 | ¿Un amigo, un familiar o alguien más alguna vez ha mostrado preocupación por sus hábitos de consumo de (primera droga, segunda droga, etc.)?",
    "cab": "",
    "ops": [
     "No, nunca",
     "Sí, en los últimos 3 meses",
     "Sí, pero no en los últimos 3 meses"
    ],
    "vals": [
     0,
     6,
     3
    ],
    "puntua": true,
    "items": [
     "a. Tabaco (cigarrillos, tabaco de mascar, puros, etc.)",
     "b. Bebidas alcohólicas (cerveza, vinos, licores, etc.)",
     "c. Cannabis (marihuana, mota, hierba, hachís, etc.)",
     "d. Cocaína (coca, crack, etc.)",
     "e. Estimulantes de tipo anfetamina (speed, anfetaminas, éxtasis, etc.)",
     "f. Inhalantes (óxido nitroso, pegamento, gasolina, solvente para pintura, etc.)",
     "g. Sedantes o pastillas para dormir (diazepam, alprazolam, flunitrazepam, midazolam, etc.)",
     "h. Alucinógenos (LSD, ácidos, hongos, ketamina, etc.)",
     "i. Opiáceos (heroína, morfina, metadona, buprenorfina, codeína, etc.)",
     "j. Otras, especifique: ____________________"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": "PREGUNTA 7 | ¿Ha intentado alguna vez reducir o eliminar el consumo de (primera droga, segunda droga) y no lo ha logrado?",
    "cab": "",
    "ops": [
     "No, nunca",
     "Sí, en los últimos 3 meses",
     "Sí, pero no en los últimos 3 meses"
    ],
    "vals": [
     0,
     6,
     3
    ],
    "puntua": true,
    "items": [
     "a. Tabaco (cigarrillos, tabaco de mascar, puros, etc.)",
     "b. Bebidas alcohólicas (cerveza, vinos, licores, etc.)",
     "c. Cannabis (marihuana, mota, hierba, hachís, etc.)",
     "d. Cocaína (coca, crack, etc.)",
     "e. Estimulantes de tipo anfetamina (speed, anfetaminas, éxtasis, etc.)",
     "f. Inhalantes (óxido nitroso, pegamento, gasolina, solvente para pintura, etc.)",
     "g. Sedantes o pastillas para dormir (diazepam, alprazolam, flunitrazepam, midazolam, etc.)",
     "h. Alucinógenos (LSD, ácidos, hongos, ketamina, etc.)",
     "i. Opiáceos (heroína, morfina, metadona, buprenorfina, codeína, etc.)",
     "j. Otras, especifique: ____________________"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No, nunca",
     "Sí, en los últimos 3 meses",
     "Sí, pero no en los últimos 3 meses"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": false,
    "items": [
     "PREGUNTA 8 | ¿Alguna vez ha consumido alguna droga por vía inyectada? (solo las que consumió sin receta médica)"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Tabaco",
     "js": "L([11, 21, 31, 50, 60])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Alcohol",
     "js": "L([12, 22, 32, 51, 61, 41])",
     "rangos": [
      [
       0,
       10,
       "No requiere intervención"
      ],
      [
       11,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Cannabis",
     "js": "L([13, 23, 33, 52, 62, 42])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Cocaína",
     "js": "L([14, 24, 34, 53, 63, 43])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Estimulantes de tipo anfetamina",
     "js": "L([15, 25, 35, 54, 64, 44])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Inhalantes",
     "js": "L([16, 26, 36, 55, 65, 45])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Sedantes",
     "js": "L([17, 27, 37, 56, 66, 46])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Alucinógenos",
     "js": "L([18, 28, 38, 57, 67, 47])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Opiáceos",
     "js": "L([19, 29, 39, 58, 68, 48])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    },
    {
     "n": "Otras drogas",
     "js": "L([20, 30, 40, 59, 69, 49])",
     "rangos": [
      [
       0,
       3,
       "No requiere intervención"
      ],
      [
       4,
       26,
       "Intervención breve"
      ],
      [
       27,
       null,
       "Tratamiento más intensivo"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "r[70] !== null && r[70] !== undefined && r[70] === 1",
     "texto": "Se ha inyectado en los últimos 3 meses: pregunte por la frecuencia (más de 4 días al mes pide evaluación y tratamiento más intensivo)."
    }
   ],
   "nota": "Responda solo las sustancias que la persona ha consumido; las demás quedan en blanco y valen 0."
  }
 },
 "bdi-ii": {
  "clave": "BDI-II",
  "sigla": "BDI-II",
  "titulo": "Inventario de Depresión de Beck, segunda edición",
  "para": "Medir la gravedad de los síntomas depresivos de las dos últimas semanas en adolescentes desde los 13 años y adultos: tristeza, pérdida de placer, culpa, pesimismo, ideación suicida, cambios del sueño y del apetito, fatiga, entre otros. Sirve para tamizar y para seguir el tratamiento.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Beck, Steer y Brown (1996) · adaptación española de Sanz y Vázquez (Pearson), manual y hoja de respuestas.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 1"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 2"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 3"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 4"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 5"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 6"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 7"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 8"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 9"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 10"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 11"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 12"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 13"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 14"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 15"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1a",
     "1b",
     "2a",
     "2b",
     "3a",
     "3b"
    ],
    "vals": [
     0,
     1,
     1,
     2,
     2,
     3,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 16"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 17"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1a",
     "1b",
     "2a",
     "2b",
     "3a",
     "3b"
    ],
    "vals": [
     0,
     1,
     1,
     2,
     2,
     3,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 18"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 19"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 20"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 21"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,21)",
     "rangos": [
      [
       0,
       13,
       "Depresión mínima"
      ],
      [
       14,
       19,
       "Depresión leve"
      ],
      [
       20,
       28,
       "Depresión moderada"
      ],
      [
       29,
       63,
       "Depresión grave"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "r[9] >= 1 || r[2] >= 2",
     "texto": "Hay respuesta positiva en pensamientos de suicidio (grupo 9) o pesimismo alto (grupo 2): valore el riesgo suicida en esta misma sesión, sea cual sea el total."
    }
   ]
  },
  "hoja": true
 },
 "bai": {
  "clave": "BAI",
  "sigla": "BAI",
  "titulo": "Inventario de Ansiedad de Beck",
  "para": "Medir la gravedad de la ansiedad en la última semana, sobre todo sus síntomas físicos (temblor, palpitaciones, ahogo, mareo) y el miedo a perder el control o a morir. Sirve para tamizar y para seguir el tratamiento.",
  "areas": [
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Beck et al. (1988); Beck y Steer (1993) · adaptación española de Sanz (2014).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Poco o nada",
     "Más o menos",
     "Moderado",
     "Severo"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,21)",
     "rangos": [
      [
       0,
       7,
       "Ansiedad mínima"
      ],
      [
       8,
       15,
       "Ansiedad leve"
      ],
      [
       16,
       25,
       "Ansiedad moderada"
      ],
      [
       26,
       63,
       "Ansiedad grave"
      ]
     ]
    }
   ]
  },
  "hoja": true
 },
 "c-ssrs": {
  "clave": "C-SSRS",
  "sigla": "C-SSRS",
  "titulo": "Columbia-Escala de Severidad Suicida, versión exploratoria reciente",
  "para": "Tamizar el riesgo suicida en una entrevista breve: seis preguntas directas, de sí o no, que van del deseo de estar muerto a la ideación con intención y plan, y a la conducta suicida. La respuesta afirmativa de color más alto indica el nivel de riesgo y qué tan urgente es actuar.",
  "areas": [
   "Riesgo suicida"
  ],
  "quien": [
   "profesional"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos",
   "infancia"
  ],
  "cita": "Posner et al. (2011), American Journal of Psychiatry · versión exploratoria reciente en español, The Columbia Lighthouse Project.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Formule las preguntas que están en negrilla."
   },
   {
    "t": "consigna",
    "x": "Formule las preguntas 1 y 2"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Pasado mes",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "1) ¿Ha deseado estar muerto(a) o poder dormirse y no despertar?",
      "nivel": "bajo"
     },
     {
      "x": "2) ¿Ha tenido realmente la idea de suicidarse?",
      "nivel": "bajo"
     }
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "Si la respuesta es “Sí” a la pregunta 2, formule las preguntas 3, 4, 5, y 6. Si la respuesta es “No” continúe a la pregunta 6."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Pasado mes",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "3) ¿Ha pensado en cómo llevaría esto a cabo?",
      "ej": "Esto incluye a un(a) participante que diría: “He tenido la idea de tomar una sobredosis, pero nunca hice un plan específico sobre el momento, el lugar o cómo lo haría realmente… y nunca lo haría”.",
      "nivel": "moderado",
      "si": "r[2] === 1"
     },
     {
      "x": "4) ¿Ha tenido estas ideas y en cierto grado la intención de llevarlas a cabo?",
      "ej": "a diferencia de “Tengo los pensamientos, pero definitivamente no haré nada al respecto”.",
      "nivel": "alto",
      "si": "r[2] === 1"
     },
     {
      "x": "5) ¿Ha comenzado a elaborar o ha elaborado los detalles sobre cómo suicidarse? ¿Tenía intenciones de llevar a cabo este plan?",
      "nivel": "alto",
      "si": "r[2] === 1"
     },
     {
      "x": "6) ¿Alguna vez ha hecho algo usted, comenzado a hacer algo o se ha preparado para hacer algo para terminar su vida?",
      "ej": "Ejemplos: Colectar píldoras, obtener una arma, regalar cosas de valor, escribir un testamento o carta de suicidio, sacado píldoras de la botella pero no las tragado, agarrar una arma pero ha cambiado de mente de usarla o alguien se la ha quitado de sus manos, ha subido al techo pero no ha saltado al vacío; o realmente ha tomado píldoras, ha tratado de disparar una arma, se ha cortado, ha tratado de colgarse, etc.",
      "nivel": "moderado"
     },
     {
      "x": "Si la respuesta es “Sí”, formule: ¿Fue esto en los últimos 3 meses?",
      "nivel": "alto",
      "si": "r[6] === 1"
     }
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Nivel de riesgo",
     "js": "(r[4] === 1 || r[5] === 1 || (r[6] === 1 && r[7] === 1)) ? 3 : ((r[3] === 1 || r[6] === 1) ? 2 : ((r[1] === 1 || r[2] === 1) ? 1 : 0))",
     "rangos": [
      [
       0,
       0,
       "Sin respuestas afirmativas"
      ],
      [
       1,
       1,
       "Riesgo bajo (amarillo): deseo de estar muerto o idea de suicidarse en el último mes"
      ],
      [
       2,
       2,
       "Riesgo moderado (naranja): ideación con método, o conducta suicida hace más de 3 meses"
      ],
      [
       3,
       3,
       "Riesgo alto (rojo): ideación con intención o con plan, o conducta suicida en los últimos 3 meses"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "r[6] === 1 && r[7] == null",
     "texto": "Falta saber si la conducta de la pregunta 6 fue en los últimos 3 meses: si lo fue, el riesgo es alto."
    },
    {
     "js": "C([1,2,3,4,5,6],1) > 0",
     "texto": "Hay una respuesta que indica posible riesgo suicida. Pregunte directamente, en esta misma atención, y siga el protocolo de riesgo: la persona no se va sin una valoración de seguridad."
    }
   ]
  }
 },
 "aaq-ii": {
  "clave": "AAQ-II",
  "sigla": "AAQ-II",
  "titulo": "Cuestionario de Aceptación y Acción II",
  "para": "Medir la inflexibilidad psicológica y la evitación experiencial: cuánto se lucha contra los pensamientos, emociones y recuerdos difíciles, y cuánto esa lucha estorba la vida que la persona quiere. Es la medida de proceso central de la terapia de aceptación y compromiso.",
  "areas": [
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Bond et al. (2011); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Debajo encontrará una lista de afirmaciones. Por favor, puntúe en qué grado cada afirmación ES VERDAD PARA USTED haciendo un círculo en los números de al lado. Utilice la siguiente escala para hacer su elección."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca es verdad",
     "Muy raramente es verdad",
     "Raramente es verdad",
     "A veces es verdad",
     "Frecuentemente es verdad",
     "Casi siempre es verdad",
     "Siempre es verdad"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Mis experiencias y recuerdos dolorosos hacen que me sea difícil vivir la vida que querría.",
     "Tengo miedo de mis sentimientos.",
     "Me preocupa no ser capaz de controlar mis preocupaciones y sentimientos.",
     "Mis recuerdos dolorosos me impiden llevar una vida plena.",
     "Mis emociones interfieren en cómo me gustaría que fuera mi vida.",
     "Parece que la mayoría de la gente lleva su vida mejor que yo.",
     "Mis preocupaciones interfieren en el camino de lo que quiero conseguir."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,7)",
     "texto": "A mayor puntuación, mayor evitación experiencial. Promedio no clínico: 18 a 23; clínico: más de 29."
    }
   ]
  }
 },
 "pswq-11": {
  "clave": "PSWQ-11",
  "sigla": "PSWQ-11",
  "titulo": "Cuestionario de Preocupación de Pensilvania, versión de 11 ítems",
  "para": "Medir la tendencia a preocuparse: cuánto, con qué frecuencia y con cuánta dificultad para detenerlo. Es el rasgo central del trastorno de ansiedad generalizada. Esta versión breve está validada en Colombia y tiene puntos de corte para TAG moderado y grave.",
  "areas": [
   "Ansiedad",
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Meyer, Miller, Metzger y Borkovec (1990); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Utilizando la siguiente escala indique hasta qué punto se identifica con cada una de las situaciones que vamos a presentarle a continuación, referidas al modo que tienen las personas de preocuparse."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada",
     "Algo",
     "Regular",
     "Bastante",
     "Mucho"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "Me agobian mis preocupaciones.",
     "Son muchas las circunstancias que hacen que me sienta preocupado/a.",
     "Sé que no debería estar tan preocupado/a por las cosas, pero no puedo hacer nada por evitarlo.",
     "Cuando estoy bajo estados de tensión tiendo a preocuparme muchísimo.",
     "Siempre estoy preocupado/a por algo.",
     "Tan pronto como termino una tarea, enseguida empiezo a preocuparme sobre alguna otra cosa que debo hacer.",
     "Toda mi vida he sido una persona muy preocupada.",
     "Soy consciente de que me he preocupado excesivamente por las cosas.",
     "Una vez que comienzan mis preocupaciones no puedo detenerlas.",
     "Estoy preocupado/a constantemente.",
     "Cuando tengo algún proyecto no dejo de preocuparme hasta haberlo efectuado."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,11)",
     "rangos": [
      [
       11,
       32,
       "Por debajo del punto de corte para TAG"
      ],
      [
       33,
       37,
       "Corte para TAG moderado"
      ],
      [
       38,
       55,
       "Corte para TAG severo"
      ]
     ]
    }
   ]
  }
 },
 "swls": {
  "clave": "SWLS",
  "sigla": "SWLS",
  "titulo": "Escala de Satisfacción con la Vida",
  "para": "Medir cuán satisfecha está la persona con su vida en conjunto, según sus propios criterios. Es la medida más usada del componente cognitivo del bienestar y una buena medida de resultado para programas de psicología positiva y de promoción de la salud.",
  "areas": [
   "Bienestar y apoyo social"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Diener, Emmons, Larsen y Griffin (1985); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "A continuación se presentan cinco afirmaciones con las que usted puede estar de acuerdo o en desacuerdo. Utilizando la escala de abajo, indique el grado de acuerdo con cada frase rodeando con un círculo el número apropiado. Por favor, sea honesto al responder."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Totalmente en desacuerdo",
     "",
     "",
     "Ni de acuerdo ni en desacuerdo",
     "",
     "",
     "Totalmente de acuerdo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "En la mayoría de los aspectos mi vida es como quiero que sea",
     "Hasta ahora he conseguido de la vida las cosas que considero importantes",
     "Estoy satisfecho con mi vida",
     "Si pudiera vivir mi vida otra vez, la repetiría tal y como ha sido",
     "Las circunstancias de mi vida son buenas"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,5)",
     "rangos": [
      [
       5,
       9,
       "Extremadamente insatisfecho"
      ],
      [
       10,
       14,
       "Insatisfecho"
      ],
      [
       15,
       19,
       "Ligeramente por debajo del promedio"
      ],
      [
       20,
       24,
       "Promedio"
      ],
      [
       25,
       29,
       "Alta satisfacción"
      ],
      [
       30,
       35,
       "Satisfacción muy alta"
      ]
     ]
    }
   ]
  }
 },
 "dass-21": {
  "clave": "DASS-21",
  "sigla": "DASS-21",
  "titulo": "Escalas de Depresión, Ansiedad y Estrés, versión de 21 ítems",
  "para": "Medir en una sola hoja tres estados emocionales negativos de la última semana: depresión, ansiedad y estrés, cada uno con su puntaje y su grado de gravedad. Sirve como tamizaje general y para seguir el cambio en tratamientos transdiagnósticos.",
  "areas": [
   "Malestar general",
   "Ánimo y depresión",
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Lovibond y Lovibond (1995); Antony et al. (1998); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor lea las siguientes afirmaciones y coloque un círculo alrededor de un número (0, 1, 2, 3) que indica en qué grado le ha ocurrido a usted esta afirmación durante la semana pasada."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No me ha ocurrido",
     "Me ha ocurrido un poco, o durante parte del tiempo",
     "Me ha ocurrido bastante, o durante una buena parte del tiempo",
     "Me ha ocurrido mucho, o la mayor parte del tiempo"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Me ha costado mucho descargar la tensión",
     "Me di cuenta que tenía la boca seca",
     "No podía sentir ningún sentimiento positivo",
     "Se me hizo difícil respirar",
     "Se me hizo difícil tomar la iniciativa para hacer cosas",
     "Reaccioné exageradamente en ciertas situaciones",
     "Sentí que mis manos temblaban",
     "He sentido que estaba gastando una gran cantidad de energía",
     "Estaba preocupado por situaciones en las cuales podía tener pánico o en las que podría hacer el ridículo",
     "He sentido que no había nada que me ilusionara",
     "Me he sentido inquieto",
     "Se me hizo difícil relajarme",
     "Me sentí triste y deprimido",
     "No toleré nada que no me permitiera continuar con lo que estaba haciendo",
     "Sentí que estaba al punto de pánico",
     "No me pude entusiasmar por nada",
     "Sentí que valía muy poco como persona",
     "He tendido a sentirme enfadado con facilidad",
     "Sentí los latidos de mi corazón a pesar de no haber hecho ningún esfuerzo físico",
     "Tuve miedo sin razón",
     "Sentí que la vida no tenía ningún sentido"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Depresión",
     "js": "L([3,5,10,13,16,17,21])",
     "rangos": [
      [
       0,
       4,
       "Sin síntomas relevantes"
      ],
      [
       5,
       6,
       "Leve"
      ],
      [
       7,
       10,
       "Moderada"
      ],
      [
       11,
       13,
       "Severa"
      ],
      [
       14,
       null,
       "Extremadamente severa"
      ]
     ]
    },
    {
     "n": "Ansiedad",
     "js": "L([2,4,7,9,15,19,20])",
     "rangos": [
      [
       0,
       3,
       "Sin síntomas relevantes"
      ],
      [
       4,
       4,
       "Leve"
      ],
      [
       5,
       7,
       "Moderada"
      ],
      [
       8,
       9,
       "Severa"
      ],
      [
       10,
       null,
       "Extremadamente severa"
      ]
     ]
    },
    {
     "n": "Estrés",
     "js": "L([1,6,8,11,12,14,18])",
     "rangos": [
      [
       0,
       7,
       "Sin síntomas relevantes"
      ],
      [
       8,
       9,
       "Leve"
      ],
      [
       10,
       12,
       "Moderado"
      ],
      [
       13,
       16,
       "Severo"
      ],
      [
       17,
       null,
       "Extremadamente severo"
      ]
     ]
    },
    {
     "n": "Total",
     "js": "S(1,21)",
     "texto": "Indicador general de síntomas emocionales. No tiene puntos de corte propios: la gravedad se lee en las tres escalas."
    }
   ],
   "alertas": [
    {
     "js": "r[21] >= 2",
     "texto": "El ítem 21 («la vida no tenía ningún sentido») es alto: explore desesperanza y riesgo suicida."
    }
   ]
  }
 },
 "cfq-7": {
  "clave": "CFQ-7",
  "sigla": "CFQ-7",
  "titulo": "Cuestionario de Fusión Cognitiva",
  "para": "Medir la fusión cognitiva: cuánto se enreda la persona en sus pensamientos y los toma como verdades que dirigen su conducta. Es una medida de proceso de la terapia de aceptación y compromiso; no confundir con el Cuestionario de Fallos Cognitivos, que tiene la misma sigla.",
  "areas": [
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Gillanders et al. (2014); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Debajo usted encontrará una lista de afirmaciones. Por favor, puntúe en qué grado cada afirmación ES VERDAD PARA USTED haciendo un círculo en los números de al lado. Utilice la siguiente escala para hacer su elección."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca es verdad",
     "Muy raramente es verdad",
     "Raramente es verdad",
     "A veces es verdad",
     "Frecuentemente es verdad",
     "Casi siempre es verdad",
     "Siempre es verdad"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Mis pensamientos me causan angustia o dolor emocional.",
     "Me quedo tan enganchado a mis pensamientos que no soy capaz de hacer las cosas que más quiero hacer.",
     "Analizo las situaciones demasiado, hasta el punto de que no me resulta útil.",
     "Lucho contra mis pensamientos.",
     "Me enfado conmigo mismo por tener determinados pensamientos.",
     "Tiendo a enredarme mucho en mis pensamientos.",
     "Me resulta muy difícil dejar pasar los pensamientos molestos incluso cuando sé que hacerlo me ayudaría."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,7)",
     "texto": "A mayor puntuación, mayor fusión cognitiva. No clínicos: 20 a 24; clínicos: más de 29."
    }
   ]
  }
 },
 "maas": {
  "clave": "MAAS",
  "sigla": "MAAS",
  "titulo": "Escala de Atención y Conciencia Plena",
  "para": "Medir la atención plena como rasgo: con qué frecuencia la persona actúa en «piloto automático», sin darse cuenta de lo que hace o siente. Sirve para evaluar programas basados en mindfulness.",
  "areas": [
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Brown y Ryan (2003); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor, indica tu grado de acuerdo con cada uno de los ítems que siguen utilizando la escala de abajo. Simplemente haz un círculo en tu respuesta de cada ítem."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi siempre",
     "Muy frecuentemente",
     "Algo frecuente",
     "Algo infrecuente",
     "Muy infrecuente",
     "Casi nunca"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Podría sentir una emoción y no ser consciente de ella hasta más tarde.",
     "Rompo y derramo cosas, por no poner atención, o por estar pensando en otra cosa.",
     "Encuentro difícil estar centrado en lo que está pasando en el presente.",
     "Tiendo a caminar rápido para llegar a donde voy sin prestar atención a lo que experimento durante el camino.",
     "Tiendo a no darme cuenta de sensaciones de tensión física o incomodidad hasta que realmente captan mi atención.",
     "Me olvido del nombre de una persona tan pronto me lo dicen por primera vez.",
     "Parece como si «funcionara en automático» sin demasiada consciencia de lo que estoy haciendo.",
     "Hago las actividades con prisas, sin estar realmente atento a ellas.",
     "Me concentro tanto en la meta que deseo alcanzar que pierdo contacto con lo que estoy haciendo ahora para alcanzarla.",
     "Hago trabajos o tareas automáticamente, sin darme cuenta de lo que estoy haciendo.",
     "Me encuentro a mí mismo escuchando a alguien por una oreja y haciendo otra cosa al mismo tiempo.",
     "Conduzco en «piloto automático» y luego me pregunto por qué fui allí.",
     "Me encuentro absorto acerca del futuro o el pasado.",
     "Me descubro haciendo cosas sin prestar atención.",
     "Pico sin ser consciente de que estoy comiendo."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,15)",
     "texto": "A mayor puntuación, mayor atención plena. Promedio no clínico: en torno a 65."
    }
   ]
  }
 },
 "rrs-sf": {
  "clave": "RRS-SF",
  "sigla": "RRS-SF",
  "titulo": "Escala de Respuestas Rumiativas, versión breve",
  "para": "Medir la rumia ante el ánimo bajo en sus dos formas: la reflexión, que busca entender, y los reproches, que dan vueltas a lo que salió mal. Los reproches se asocian más con la depresión; distinguirlos orienta el trabajo con la rumia.",
  "areas": [
   "Ánimo y depresión",
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Treynor, González y Nolen-Hoeksema (2003); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Las personas piensan y hacen distintas cosas cuando se sienten tristes, deprimidas o abatidas. Por favor, lee cada una de las siguientes frases y rodea con un círculo si casi nunca, algunas veces, a menudo o casi siempre piensas o actúas de esa manera cuando estás abatido, triste o deprimido. Por favor, indica qué es lo que haces generalmente, no lo que crees que deberías hacer."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Algunas veces",
     "A menudo",
     "Casi siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "Pienso en qué he hecho yo para merecerme esto.",
     "Analizo los sucesos recientes para entender por qué estoy deprimido.",
     "Pienso en por qué reacciono de esta forma.",
     "Me voy por ahí solo y pienso en por qué me siento así.",
     "Escribo lo que estoy pensando y lo analizo.",
     "Pienso acerca de una situación reciente, anhelando que hubiera sido mejor.",
     "Pienso en por qué tengo problemas que el resto de las personas no tienen.",
     "Pienso en por qué no puedo controlar las cosas mejor.",
     "Analizo mi forma de ser para intentar comprender por qué estoy deprimido.",
     "Me voy solo a algún sitio para pensar sobre cómo me siento."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Reflexión",
     "js": "L([2,4,5,9,10])",
     "rangos": [
      [
       5,
       12,
       "Dentro de lo esperado"
      ],
      [
       13,
       20,
       "Alta"
      ]
     ]
    },
    {
     "n": "Reproches",
     "js": "L([1,3,6,7,8])",
     "rangos": [
      [
       5,
       12,
       "Dentro de lo esperado"
      ],
      [
       13,
       20,
       "Alta: la más asociada con depresión"
      ]
     ]
    }
   ]
  }
 },
 "atq-8": {
  "clave": "ATQ-8",
  "sigla": "ATQ-8",
  "titulo": "Cuestionario de Pensamientos Automáticos, versión de 8 ítems",
  "para": "Medir la frecuencia de pensamientos automáticos negativos de la última semana, como los que describe la terapia cognitiva de la depresión. Es breve y sensible al cambio, así que sirve para seguir el trabajo de reestructuración.",
  "areas": [
   "Ánimo y depresión",
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Netemeyer et al. (2002); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Abajo encontrarás diversos pensamientos que aparecen en la mente de la gente. Por favor, lee cada pensamiento e indica cómo de frecuente, en caso de que aparezca, el pensamiento te vino a la mente durante la última semana."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "En absoluto",
     "A veces",
     "Moderadamente",
     "Frecuentemente",
     "Todo el tiempo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "No soy bueno.",
     "¡Soy tan decepcionante hasta para mí mismo!",
     "¿Qué es lo que funciona mal en mí?",
     "Soy un inútil, no valgo para nada.",
     "Me siento tan impotente, tan desamparado.",
     "Algo tiene que cambiar.",
     "Mi futuro es un desierto.",
     "No consigo terminar nada de lo que empiezo."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,8)",
     "texto": "A mayor puntuación, más pensamientos automáticos negativos. Promedio clínico: en torno a 20."
    }
   ]
  }
 },
 "bads-sf": {
  "clave": "BADS-SF",
  "sigla": "BADS-SF",
  "titulo": "Escala de Activación Conductual para la Depresión, versión breve",
  "para": "Medir cuánto se activó la persona durante la última semana y cuánto evitó: las dos caras que trabaja la activación conductual. Es sensible al cambio y se aplica sesión a sesión.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Manos, Kanter y Luo (2011); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Lea cuidadosamente cada afirmación y luego encierre en un círculo el número que mejor describa la afirmación que le correspondió DURANTE LA SEMANA PASADA, INCLUIDO HOY."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No, en absoluto",
     "",
     "Un poco",
     "",
     "Mucho",
     "",
     "Completamente"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Hubo ciertas cosas que tenía que hacer pero que al final no hice.",
     "Estoy contento/a con la cantidad y el tipo de cosas que hice.",
     "Participé en diferentes actividades",
     "Tomé buenas decisiones sobre el tipo de actividades y situaciones en las que participé.",
     "Fui una persona activa y cumplí los objetivos que me propuse.",
     "La mayor parte de lo que hice fue para escapar o evitar algo desagradable.",
     "Pasé mucho tiempo pensando una y otra vez sobre mis problemas.",
     "Hice actividades para distraerme y evitar sentirme mal.",
     "Hice cosas agradables."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Activación",
     "js": "L([2,3,4,5,9])"
    },
    {
     "n": "Evitación",
     "js": "L([1,6,7,8])"
    },
    {
     "n": "Total (Evitación invertida)",
     "js": "L([2,3,4,5,9]) + R(1,6) + R(6,6) + R(7,6) + R(8,6)",
     "texto": "A mayor puntuación, más activación. Promedio en población general colombiana: en torno a 35."
    }
   ]
  }
 },
 "erq": {
  "clave": "ERQ",
  "sigla": "ERQ",
  "titulo": "Cuestionario de Regulación Emocional",
  "para": "Medir cuánto usa la persona dos estrategias de regulación emocional: la reevaluación cognitiva, que cambia cómo se piensa la situación, y la supresión expresiva, que oculta lo que se siente. La supresión frecuente se asocia con más malestar y peores relaciones.",
  "areas": [
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Gross y John (2003); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "A continuación, nos gustaría que contestase a unas preguntas sobre su vida emocional, en concreto, sobre cómo controla sus emociones. Estamos interesados en dos aspectos. El primero es su experiencia emocional o lo que siente internamente. El segundo es su expresión emocional o cómo muestra sus emociones a través de las palabras, los gestos y los comportamientos. Aunque algunas de las cuestiones pueden parecer similares a otras, éstas difieren de forma importante. Por favor, utiliza la siguiente escala de respuesta para cada ítem."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Totalmente en desacuerdo",
     "En desacuerdo",
     "Ligeramente en desacuerdo",
     "Ni acuerdo ni en desacuerdo",
     "Ligeramente de acuerdo",
     "De acuerdo",
     "Totalmente de acuerdo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Cuando quiero incrementar mis emociones positivas (p.ej. alegría, diversión), cambio el tema sobre el que estoy pensando.",
     "Guardo mis emociones para mí mismo.",
     "Cuando quiero reducir mis emociones negativas (p.ej. tristeza, enfado), cambio el tema sobre el que estoy pensando.",
     "Cuando estoy sintiendo emociones positivas, tengo cuidado de no expresarlas.",
     "Cuando me enfrento a una situación estresante, intento pensar en ella de un modo que me ayude a mantener la calma.",
     "Controlo mis emociones no expresándolas.",
     "Cuando quiero incrementar mis emociones positivas, cambio mi manera de pensar sobre la situación.",
     "Controlo mis emociones cambiando mi forma de pensar sobre la situación en la que me encuentro.",
     "Cuando estoy sintiendo emociones negativas, me aseguro de no expresarlas.",
     "Cuando quiero reducir mis emociones negativas, cambio mi manera de pensar sobre la situación."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Reevaluación",
     "js": "L([1,3,5,7,8,10])",
     "texto": "Cuartiles colombianos: Q1 26, Q2 31, Q3 35. Por debajo de 26 está en el 25 % más bajo; por encima de 35, en el más alto."
    },
    {
     "n": "Supresión",
     "js": "L([2,4,6,9])",
     "texto": "Cuartiles colombianos: hombres Q1 11, Q3 20; mujeres Q1 9, Q3 18."
    }
   ]
  }
 },
 "das-r": {
  "clave": "DAS-R",
  "sigla": "DAS-R",
  "titulo": "Escala de Actitudes Disfuncionales, revisada",
  "para": "Medir las creencias disfuncionales que, según el modelo cognitivo de Beck, hacen a una persona vulnerable a la depresión: el perfeccionismo y la dependencia de la aprobación de los demás. No confundir con la Escala de Ajuste Diádico, que tiene una sigla parecida.",
  "areas": [
   "Ánimo y depresión",
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "de Graaf, Roelofs y Huibers (2009); validación colombiana y formato del ClinikLab, Fundación Universitaria Konrad Lorenz · uso libre sin solicitar permiso.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Debajo encontrará una lista de creencias o actitudes que tiene a veces la gente. Por favor, lea cada frase y señale la respuesta que mejor describe su modo de pensar haciendo un círculo en los números de al lado. Para decidir si una determinada creencia es típica de su modo de ver las cosas, basta con que tenga presente cómo es usted la mayoría de las veces. Utilice la siguiente escala para hacer su elección."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Totalmente en desacuerdo",
     "Bastante en desacuerdo",
     "Ligeramente en desacuerdo",
     "Neutral",
     "Ligeramente de acuerdo",
     "Bastante de acuerdo",
     "Totalmente de acuerdo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Es difícil ser feliz si no se es atractivo, inteligente, rico y creativo.",
     "Si no hago siempre las cosas bien, la gente no me respetará.",
     "Si una persona pide ayuda, es señal de debilidad.",
     "Si no hago las cosas tan bien como los demás, eso significa que soy una persona inferior.",
     "Si fracaso en mi trabajo seré un fracaso como persona.",
     "Si no puedo hacer bien una cosa, es mejor no hacerla.",
     "Si alguien no está de acuerdo conmigo, eso probablemente indica que no le agrado.",
     "Si fracaso en parte, eso lo considero tan malo como ser un completo fracaso.",
     "Si los demás saben cómo eres realmente, te considerarán menos.",
     "Para ser una persona valiosa debo destacar de verdad por lo menos en un aspecto importante.",
     "Hacer una pregunta me hace parecer inferior.",
     "Mi valor como persona depende en gran medida de lo que los demás opinen de mí.",
     "Es horrible recibir la censura de personas importantes para uno.",
     "Si uno no tiene otras personas en las que confiar, está destinado a estar triste.",
     "Si desagradas a los demás no puedes ser feliz.",
     "Mi felicidad depende más de los demás que de mí.",
     "Es muy importante lo que otras personas piensan sobre mí."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Perfeccionismo",
     "js": "S(1,11)",
     "texto": "Promedio no clínico 22; clínico 28."
    },
    {
     "n": "Dependencia",
     "js": "S(12,17)",
     "texto": "Promedio no clínico 12; clínico 16."
    },
    {
     "n": "Global",
     "js": "S(1,17)",
     "texto": "Promedio no clínico 34; clínico 44."
    }
   ]
  }
 },
 "asq": {
  "clave": "ASQ",
  "sigla": "ASQ",
  "titulo": "Preguntas de Detección del Riesgo de Suicidio",
  "para": "Detectar en menos de un minuto el riesgo de suicidio en cualquier consulta, incluso cuando el motivo no es de salud mental. Cuatro preguntas directas y, si alguna es positiva, una quinta que separa el riesgo agudo del no agudo.",
  "areas": [
   "Riesgo suicida"
  ],
  "quien": [
   "profesional"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos",
   "infancia"
  ],
  "cita": "National Institute of Mental Health (2017), versión oficial en español · dominio público.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Pregúntele al paciente:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "En las últimas semanas, ¿ha deseado estar muerto?",
     "En las últimas semanas, ¿ha sentido que usted o su familia estarían mejor si estuviera muerto?",
     "En la última semana, ¿ha estado pensando en suicidarse?",
     "¿Alguna vez ha intentado suicidarse?"
    ],
    "numerar": true
   },
   {
    "t": "consigna",
    "x": "Si el paciente contesta que Sí a alguna de las preguntas anteriores, hágale la siguiente pregunta para evaluar la agudeza:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "5. ¿Está pensando en suicidarse en este momento?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Resultado",
     "js": "C([1,2,3,4],1) === 0 ? 0 : (r[5] === 1 ? 2 : 1)",
     "rangos": [
      [
       0,
       0,
       "Negativo: no se requiere intervención (la opinión clínica puede anteponerse)"
      ],
      [
       1,
       1,
       "Positivo no agudo: evaluación de seguridad breve antes de que se vaya"
      ],
      [
       2,
       2,
       "Positivo agudo (riesgo inminente): evaluación URGENTE; no puede irse"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "C([1,2,3,4],1) > 0",
     "texto": "Hay una respuesta que indica posible riesgo suicida. Pregunte directamente, en esta misma atención, y siga el protocolo de riesgo: la persona no se va sin una valoración de seguridad."
    }
   ]
  }
 },
 "gds-15": {
  "clave": "GDS-15",
  "sigla": "GDS-15",
  "titulo": "Escala de Depresión Geriátrica de Yesavage, versión breve",
  "para": "Tamizar depresión en personas mayores con preguntas de sí o no, que evitan los síntomas físicos que en esa edad se confunden con enfermedad. Sirve también con baja escolaridad, porque se puede leer en voz alta.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Yesavage et al. (1983); Sheikh y Yesavage (1986) · versión en español publicada por el autor · dominio público.",
  "bloques": [
   {
    "t": "consigna",
    "x": "A continuación hay una serie de preguntas, subraye «SI» o «NO» a cada una de ellas, dependiendo si la frase refleja como se sintió usted la semana pasada."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "¿Está usted básicamente, satisfecho(a) con su vida?",
     "¿Ha suspendido usted muchas de sus actividades e intereses?",
     "¿Siente usted que su vida está vacía?",
     "¿Se aburre usted a menudo?",
     "¿Está usted de buen humor la mayor parte del tiempo?",
     "¿Tiene usted miedo de que algo malo le vaya a pasar?",
     "¿Se siente feliz la mayor parte del tiempo?",
     "¿Se siente usted a menudo indefenso(a)?",
     "¿Prefiere usted quedarse en la casa, en vez de salir y hacer cosas nuevas?",
     "Con respecto a su memoria: ¿Siente usted que tiene más problemas que la mayoría de la gente?",
     "¿Piensa usted que es maravilloso estar vivo(a) en este momento?",
     "De la forma de como se siente usted en este momento, ¿Se siente usted inútil?",
     "¿Se siente usted con mucha energía?",
     "¿Siente usted que su situación es irremediable?",
     "¿Piensa usted que la mayoría de las personas están en mejores condiciones que usted?"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "C([1,5,7,11,13],0) + C([2,3,4,6,8,9,10,12,14,15],1)",
     "rangos": [
      [
       0,
       5,
       "Dentro de lo esperado"
      ],
      [
       6,
       10,
       "Sugiere depresión: entrevista de seguimiento"
      ],
      [
       11,
       15,
       "Casi siempre corresponde a depresión"
      ]
     ]
    }
   ]
  }
 },
 "hads": {
  "clave": "HADS",
  "sigla": "HADS",
  "titulo": "Escala Hospitalaria de Ansiedad y Depresión",
  "para": "Tamizar ansiedad y depresión en personas con enfermedad física, sin los síntomas somáticos (fatiga, insomnio, pérdida de peso) que en el hospital se deben a la enfermedad y no al ánimo. Es el tamizaje más usado en psicología hospitalaria.",
  "areas": [
   "Malestar general",
   "Ánimo y depresión",
   "Ansiedad",
   "Salud, sueño y síntomas físicos"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Zigmond y Snaith (1983), Acta Psychiatrica Scandinavica · versión en español de Bobes et al. · derechos de GL Assessment.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Los médicos conocen la importancia de los factores emocionales en la mayoría de enfermedades. Si el médico sabe cuál es el estado emocional del paciente puede prestarle entonces mejor ayuda. Este cuestionario ha sido confeccionado para ayudar a que su médico sepa cómo se siente usted afectiva y emocionalmente. Lea cada pregunta y marque la respuesta que usted considere que coincide con su propio estado emocional en la última semana. No es necesario que piense mucho tiempo cada respuesta; en este cuestionario las respuestas espontáneas tienen más valor que las que se piensan mucho."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi todo el día",
     "Gran parte del día",
     "De vez en cuando",
     "Nunca"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "A.1. Me siento tenso/a o nervioso/a"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ciertamente, igual que antes",
     "No tanto como antes",
     "Solamente un poco",
     "Ya no disfruto con nada"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "D.1. Sigo disfrutando de las cosas como siempre"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, y muy intenso",
     "Sí, pero no muy intenso",
     "Sí, pero no me preocupa",
     "No siento nada de eso"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "A.2. Siento una especie de temor como si algo malo fuera a suceder"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Igual que siempre",
     "Actualmente, algo menos",
     "Actualmente, mucho menos",
     "Actualmente, en absoluto"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "D.2. Soy capaz de reírme y ver el lado gracioso de las cosas"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi todo el día",
     "Gran parte del día",
     "De vez en cuando",
     "Nunca"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "A.3. Tengo la cabeza llena de preocupaciones"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Muy pocas veces",
     "En algunas ocasiones",
     "Gran parte del día"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "D.3. Me siento alegre"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Siempre",
     "A menudo",
     "Raras veces",
     "Nunca"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "A.4. Soy capaz de permanecer sentado/a tranquilo/a y relajado/a"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Gran parte del día",
     "A menudo",
     "A veces",
     "Nunca"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "D.4. Me siento lento/a y torpe"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Sólo en algunas ocasiones",
     "A menudo",
     "Muy a menudo"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "A.5. Experimento una desagradable sensación de «nervios y hormigueos» en el estómago"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Completamente",
     "No me cuido como debería hacerlo",
     "Es posible que no me cuide como debiera",
     "Me cuido como siempre lo he hecho"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "D.5. He perdido el interés por mi aspecto personal"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Realmente mucho",
     "Bastante",
     "No mucho",
     "En absoluto"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "A.6. Me siento inquieto/a como si no pudiera parar de moverme"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Como siempre",
     "Algo menos que antes",
     "Mucho menos que antes",
     "En absoluto"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "D.6. Espero las cosas con ilusión"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Muy a menudo",
     "Con cierta frecuencia",
     "Raramente",
     "Nunca"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "A.7. Experimento de repente sensaciones de gran angustia o temor"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "A menudo",
     "Algunas veces",
     "Pocas veces",
     "Casi nunca"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "D.7. Soy capaz de disfrutar con un buen libro o con un buen programa de radio o televisión"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Ansiedad (ítems A)",
     "js": "L([1,3,5,7,9,11,13])",
     "rangos": [
      [
       0,
       7,
       "Sin caso"
      ],
      [
       8,
       10,
       "Caso dudoso"
      ],
      [
       11,
       21,
       "Caso probable"
      ]
     ]
    },
    {
     "n": "Depresión (ítems D)",
     "js": "L([2,4,6,8,10,12,14])",
     "rangos": [
      [
       0,
       7,
       "Sin caso"
      ],
      [
       8,
       10,
       "Caso dudoso"
      ],
      [
       11,
       21,
       "Caso probable"
      ]
     ]
    }
   ]
  }
 },
 "zarit": {
  "clave": "Zarit",
  "sigla": "Zarit",
  "titulo": "Escala de Sobrecarga del Cuidador de Zarit",
  "para": "Medir cuánta carga siente quien cuida a una persona dependiente: el efecto del cuidado en su salud, su vida social, su economía y su relación con la persona cuidada. Sirve para decidir si el cuidador necesita apoyo y para seguir el cambio.",
  "areas": [
   "Cuidadores y desgaste laboral"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Zarit, Reever y Bach-Peterson (1980) · versión española de Martín et al. (1996) · distribuida por Mapi Research Trust.",
  "bloques": [
   {
    "t": "consigna",
    "x": "A continuación se presenta una lista de afirmaciones, en las cuales se refleja cómo se sienten, a veces, las personas que cuidan a otra persona. Después de leer cada afirmación, debe indicar con que frecuencia se siente Vd. así: nunca, raramente, algunas veces, bastante a menudo y casi siempre. A la hora de responder piense que no existen respuestas acertadas o equivocadas, sino tan sólo su experiencia."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Rara vez",
     "Algunas veces",
     "Bastantes veces",
     "Casi siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "1. ¿Piensa que su familiar le pide más ayuda de la que realmente necesita?",
     "2. ¿Piensa que debido al tiempo que dedica a su familiar no tiene suficiente tiempo para Vd.?",
     "3. ¿Se siente agobiado por intentar compatibilizar el cuidado de su familiar con otras responsabilidades (trabajo, familia)?",
     "4. ¿Siente vergüenza por la conducta de su familiar?",
     "5. ¿Se siente enfadado cuando está cerca de su familiar?",
     "6. ¿Piensa que el cuidar de su familiar afecta negativamente la relación que usted tiene con otros miembros de su familia?",
     "7. ¿Tiene miedo por el futuro de su familiar?",
     "8. ¿Piensa que su familiar depende de Vd.?",
     "9. ¿Se siente tenso cuando está cerca de su familiar?",
     "10. ¿Piensa que su salud ha empeorado debido a tener que cuidar de su familiar?",
     "11. ¿Piensa que no tiene tanta intimidad como le gustaría debido a tener que cuidar de su familiar?",
     "12. ¿Piensa que su vida social se ha visto afectada negativamente por tener que cuidar a su familiar?",
     "13. ¿Se siente incómodo por distanciarse de sus amistades debido a tener que cuidar de su familiar?",
     "14. ¿Piensa que su familiar le considera a usted la única persona que le puede cuidar?",
     "15. ¿Piensa que no tiene suficientes ingresos económicos para los gastos de cuidar a su familiar, además de sus otros gastos?",
     "16. ¿Piensa que no será capaz de cuidar a su familiar por mucho más tiempo?",
     "17. ¿Siente que ha perdido el control de su vida desde que comenzó la enfermedad de su familiar?",
     "18. ¿Desearía poder dejar el cuidado de su familiar a otra persona?",
     "19. ¿Se siente indeciso sobre qué hacer con su familiar?",
     "20. ¿Piensa que debería hacer más por su familiar?",
     "21. ¿Piensa que podría cuidar mejor a su familiar?",
     "22. Globalmente, ¿qué grado de \"carga\" experimenta por el hecho de cuidar a su familiar?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,22)",
     "rangos": [
      [
       22,
       46,
       "No hay sobrecarga"
      ],
      [
       47,
       55,
       "Sobrecarga leve"
      ],
      [
       56,
       110,
       "Sobrecarga intensa"
      ]
     ]
    }
   ]
  }
 },
 "psqi": {
  "clave": "PSQI",
  "sigla": "PSQI",
  "titulo": "Índice de Calidad de Sueño de Pittsburgh",
  "para": "Medir la calidad del sueño del último mes en siete componentes: calidad subjetiva, tiempo que tarda en dormirse, duración, eficiencia (cuánto del tiempo en cama se duerme), perturbaciones del sueño, uso de medicación para dormir y somnolencia o desánimo durante el día. Separa a quienes duermen bien de quienes duermen mal.",
  "areas": [
   "Salud, sueño y síntomas físicos"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Buysse et al. (1989) · versión castellana de Royuela y Macías (1997), en Bobes et al., sección 8.2.2 · derechos de la Universidad de Pittsburgh.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Las siguientes preguntas hacen referencia a cómo ha dormido usted normalmente durante el último mes. Intente ajustarse en sus respuestas de la manera más exacta posible a lo ocurrido durante la mayor parte de los días y noches del último mes. ¡Muy importante! CONTESTE A TODAS LAS PREGUNTAS"
   },
   {
    "t": "dato",
    "x": "1. Durante el último mes, ¿cuál ha sido, normalmente, su hora de acostarse?",
    "tipo": "hora",
    "unidad": "hora (hh:mm)"
   },
   {
    "t": "dato",
    "x": "2. ¿Cuánto tiempo habrá tardado en dormirse, normalmente, las noches del último mes?",
    "tipo": "numero",
    "unidad": "minutos"
   },
   {
    "t": "dato",
    "x": "3. Durante el último mes, ¿a qué hora se ha levantado habitualmente por la mañana?",
    "tipo": "hora",
    "unidad": "hora (hh:mm)"
   },
   {
    "t": "dato",
    "x": "4. ¿Cuántas horas calcula que habrá dormido verdaderamente cada noche durante el último mes? (El tiempo puede ser diferente al que usted permanezca en la cama)",
    "tipo": "numero",
    "unidad": "horas"
   },
   {
    "t": "consigna",
    "x": "Para cada una de las siguientes preguntas, elija la respuesta que más se ajusta a su caso. Intente contestar a TODAS las preguntas."
   },
   {
    "t": "consigna",
    "x": "5. Durante el último mes, cuántas veces ha tenido usted problemas para dormir a causa de:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguna vez en el último mes",
     "Menos de una vez a la semana",
     "Una o dos veces a la semana",
     "Tres o más veces a la semana"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "a) No poder conciliar el sueño en la primera media hora",
     "b) Despertarse durante la noche o de madrugada",
     "c) Tener que levantarse para ir al servicio",
     "d) No poder respirar bien",
     "e) Toser o roncar ruidosamente",
     "f) Sentir frío",
     "g) Sentir demasiado calor",
     "h) Tener pesadillas o «malos sueños»",
     "i) Sufrir dolores",
     "j) Otras razones (por favor, descríbalas)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Bastante bueno",
     "Bueno",
     "Malo",
     "Bastante malo"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "6. Durante el último mes, ¿cómo valoraría en conjunto, la calidad de su sueño?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguna vez en el último mes",
     "Menos de una vez a la semana",
     "Una o dos veces a la semana",
     "Tres o más veces a la semana"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "7. Durante el último mes, ¿cuántas veces habrá tomado medicinas (por su cuenta o recetadas por el médico) para dormir?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguna vez en el último mes",
     "Menos de una vez a la semana",
     "Una o dos veces a la semana",
     "Tres o más veces a la semana"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "8. Durante el último mes, ¿cuántas veces ha sentido somnolencia mientras conducía, comía o desarrollaba alguna otra actividad?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ningún problema",
     "Sólo un leve problema",
     "Un problema",
     "Un grave problema"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "9. Durante el último mes, ¿ha representado para usted mucho problema el «tener ánimos» para realizar alguna de las actividades detalladas en la pregunta anterior?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Solo",
     "Con alguien en otra habitación",
     "En la misma habitación, pero en otra cama",
     "En la misma cama"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": false,
    "items": [
     "10. ¿Duerme usted solo o acompañado?"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total (0 a 21)",
     "js": "(r[15] || 0) + (((r[2] == null ? 0 : (r[2] <= 15 ? 0 : r[2] <= 30 ? 1 : r[2] <= 60 ? 2 : 3)) + (r[5] || 0)) === 0 ? 0 : ((r[2] == null ? 0 : (r[2] <= 15 ? 0 : r[2] <= 30 ? 1 : r[2] <= 60 ? 2 : 3)) + (r[5] || 0)) <= 2 ? 1 : ((r[2] == null ? 0 : (r[2] <= 15 ? 0 : r[2] <= 30 ? 1 : r[2] <= 60 ? 2 : 3)) + (r[5] || 0)) <= 4 ? 2 : 3) + (r[4] == null ? 0 : (r[4] > 7 ? 0 : r[4] >= 6 ? 1 : r[4] >= 5 ? 2 : 3)) + ((r[1] == null || r[3] == null || r[4] == null || ((r[3] - r[1] + 24) % 24) === 0) ? 0 : ((r[4] / ((r[3] - r[1] + 24) % 24) * 100) >= 85 ? 0 : (r[4] / ((r[3] - r[1] + 24) % 24) * 100) >= 75 ? 1 : (r[4] / ((r[3] - r[1] + 24) % 24) * 100) >= 65 ? 2 : 3)) + (S(6,14) === 0 ? 0 : S(6,14) <= 9 ? 1 : S(6,14) <= 18 ? 2 : 3) + (r[16] || 0) + (((r[17] || 0) + (r[18] || 0)) === 0 ? 0 : ((r[17] || 0) + (r[18] || 0)) <= 2 ? 1 : ((r[17] || 0) + (r[18] || 0)) <= 4 ? 2 : 3)",
     "rangos": [
      [
       0,
       5,
       "Buena calidad de sueño"
      ],
      [
       6,
       21,
       "Mala calidad de sueño (más de 5)"
      ]
     ]
    },
    {
     "n": "C1 Calidad subjetiva",
     "js": "(r[15] || 0)",
     "texto": "De 0 a 3."
    },
    {
     "n": "C2 Latencia",
     "js": "(((r[2] == null ? 0 : (r[2] <= 15 ? 0 : r[2] <= 30 ? 1 : r[2] <= 60 ? 2 : 3)) + (r[5] || 0)) === 0 ? 0 : ((r[2] == null ? 0 : (r[2] <= 15 ? 0 : r[2] <= 30 ? 1 : r[2] <= 60 ? 2 : 3)) + (r[5] || 0)) <= 2 ? 1 : ((r[2] == null ? 0 : (r[2] <= 15 ? 0 : r[2] <= 30 ? 1 : r[2] <= 60 ? 2 : 3)) + (r[5] || 0)) <= 4 ? 2 : 3)",
     "texto": "De 0 a 3."
    },
    {
     "n": "C3 Duración",
     "js": "(r[4] == null ? 0 : (r[4] > 7 ? 0 : r[4] >= 6 ? 1 : r[4] >= 5 ? 2 : 3))",
     "texto": "De 0 a 3."
    },
    {
     "n": "C4 Eficiencia",
     "js": "((r[1] == null || r[3] == null || r[4] == null || ((r[3] - r[1] + 24) % 24) === 0) ? 0 : ((r[4] / ((r[3] - r[1] + 24) % 24) * 100) >= 85 ? 0 : (r[4] / ((r[3] - r[1] + 24) % 24) * 100) >= 75 ? 1 : (r[4] / ((r[3] - r[1] + 24) % 24) * 100) >= 65 ? 2 : 3))",
     "texto": "De 0 a 3."
    },
    {
     "n": "C5 Perturbaciones",
     "js": "(S(6,14) === 0 ? 0 : S(6,14) <= 9 ? 1 : S(6,14) <= 18 ? 2 : 3)",
     "texto": "De 0 a 3."
    },
    {
     "n": "C6 Medicación",
     "js": "(r[16] || 0)",
     "texto": "De 0 a 3."
    },
    {
     "n": "C7 Disfunción diurna",
     "js": "(((r[17] || 0) + (r[18] || 0)) === 0 ? 0 : ((r[17] || 0) + (r[18] || 0)) <= 2 ? 1 : ((r[17] || 0) + (r[18] || 0)) <= 4 ? 2 : 3)",
     "texto": "De 0 a 3."
    },
    {
     "n": "Eficiencia del sueño (%)",
     "js": "((r[1] == null || r[3] == null || r[4] == null || ((r[3] - r[1] + 24) % 24) === 0) ? 0 : Math.round((r[4] / ((r[3] - r[1] + 24) % 24) * 100)))",
     "texto": "Horas dormidas sobre horas en cama. Necesita las preguntas 1, 3 y 4."
    }
   ],
   "nota": "Las preguntas 1 y 3 se escriben como hora (por ejemplo, 23:30 o 06:15); la 2 en minutos y la 4 en horas (6,5 = seis horas y media). La pregunta 10 no puntúa."
  }
 },
 "pcl-5": {
  "clave": "PCL-5",
  "sigla": "PCL-5",
  "titulo": "Lista de Verificación del Trastorno de Estrés Postraumático para el DSM-5",
  "para": "Tamizar y medir la gravedad de los síntomas de estrés postraumático del último mes. Sus 20 ítems siguen los 20 síntomas del DSM-5, agrupados en intrusión, evitación, alteraciones negativas de cognición y ánimo, y activación. Sirve para tamizar, para apoyar un diagnóstico provisional y para seguir el cambio.",
  "areas": [
   "Trauma y duelo"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Weathers et al. (2013), National Center for PTSD · traducción aprobada por CENTER-TBI · dominio público.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Más abajo hay un listado de problemas que las personas tienen a veces debido a una experiencia muy estresante. Lea por favor cada problema detenidamente y después rodee uno de los números de la derecha para indicar con cuánta intensidad le ha molestado aquel problema durante el último mes."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "En el último mes, ¿cuánto le ha molestado",
    "ops": [
     "Nada",
     "Un poco",
     "Moderadamente",
     "Bastante",
     "Muchísimo"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "Tener recuerdos repetidos, perturbadores y no deseados de la experiencia estresante?",
     "Tener sueños repetidos, perturbadores de la experiencia estresante?",
     "Sentirse o actuar de repente como si la experiencia estresante volviera a suceder (como si realmente estuviera allí reviviéndolo)?",
     "Sentirse muy disgustado cuando algo le recordaba la experiencia estresante?",
     "Tener reacciones físicas intensas cuando algo le recordaba la experiencia estresante (p.ej. palpitaciones, dificultades para respirar, sudoración)?",
     "Evitar recuerdos, pensamientos o sentimientos relacionados con la experiencia estresante?",
     "Evitar estímulos externos relacionados con la experiencia estresante (p.ej. personas, lugares, conversaciones, actividades, objetos o situaciones)?",
     "Tener dificultades para recordar partes importantes de la experiencia estresante?",
     "Tener fuertes creencias negativas sobre uno mismo, otras personas, o el mundo (p.ej. tener pensamientos como: no soy una buena persona, hay algo que seriamente no está bien en mí, no se puede confiar en nadie, el mundo es muy peligroso)?",
     "Culparse a sí mismo o a otra persona de la experiencia estresante o de lo que sucedió después?",
     "Tener fuertes sentimientos negativos tales como miedo, terror, ira, culpa o vergüenza?",
     "Perder el interés en actividades que antes solía disfrutar?",
     "Sentirse distante o apartado de los demás?",
     "Dificultades para sentir emociones positivas (p.ej. ser incapaz de sentir alegría o tener sentimientos de amor hacia personas cercanas)?",
     "Tener conductas irritables, ataques de ira o actuar de manera agresiva?",
     "Tomar demasiados riesgos o hacer cosas que le pudieran dañar?",
     "Estar muy en alerta o en guardia?",
     "Sentirse asustadizo o sobresaltado?",
     "Tener dificultades para concentrarse?",
     "Tener problemas para dormir o mantener el sueño?"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,20)",
     "rangos": [
      [
       0,
       30,
       "Por debajo del corte"
      ],
      [
       31,
       80,
       "Probable TEPT (corte 31 a 33): confirme con entrevista"
      ]
     ]
    },
    {
     "n": "Intrusión (1-5)",
     "js": "S(1,5)"
    },
    {
     "n": "Evitación (6-7)",
     "js": "S(6,7)"
    },
    {
     "n": "Cognición y ánimo (8-14)",
     "js": "S(8,14)"
    },
    {
     "n": "Activación (15-20)",
     "js": "S(15,20)"
    },
    {
     "n": "Diagnóstico provisional (regla DSM-5)",
     "js": "(G([1,2,3,4,5]) >= 1 && G([6,7]) >= 1 && G([8,9,10,11,12,13,14]) >= 2 && G([15,16,17,18,19,20]) >= 2) ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "No se cumple la regla"
      ],
      [
       1,
       1,
       "Se cumple: síntomas en los cuatro grupos (ítems en 2 o más)"
      ]
     ]
    }
   ]
  }
 },
 "k-10": {
  "clave": "K-10",
  "sigla": "K-10",
  "titulo": "Escala de Malestar Psicológico de Kessler",
  "para": "Tamizar malestar psicológico inespecífico del último mes, sobre todo síntomas de ansiedad y depresión. Es breve, se usa en encuestas poblacionales de muchos países y sirve en atención primaria como primera puerta cuando todavía no hay una hipótesis.",
  "areas": [
   "Malestar general"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Kessler et al. (2002); adaptación al castellano del Grupo LISIS (2011) · uso libre.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Las siguientes preguntas describen formas en que la gente actúa o se siente. Marca la opción que mejor se adecue a tu situación actual, teniendo en cuenta el último mes (Por favor, marca una respuesta para cada inciso, si estás inseguro haz tu mejor estimación)."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "En el último mes",
    "ops": [
     "Nunca",
     "Pocas veces",
     "A veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "¿Con qué frecuencia te has sentido cansado, sin alguna buena razón?",
     "¿Con qué frecuencia te has sentido nervioso?",
     "¿Con qué frecuencia te has sentido tan nervioso que nada te podía calmar?",
     "¿Con qué frecuencia te has sentido desesperado?",
     "¿Con qué frecuencia te has sentido inquieto o intranquilo?",
     "¿Con qué frecuencia te has sentido tan impaciente que no has podido mantenerte quieto?",
     "¿Con qué frecuencia te has sentido deprimido?",
     "¿Con qué frecuencia has sentido que todo lo que haces representa un gran esfuerzo?",
     "¿Con qué frecuencia te has sentido tan triste que nada podía animarte?",
     "¿Con qué frecuencia te has sentido un inútil?"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,10)",
     "rangos": [
      [
       10,
       15,
       "Malestar bajo"
      ],
      [
       16,
       21,
       "Moderado"
      ],
      [
       22,
       29,
       "Alto"
      ],
      [
       30,
       50,
       "Muy alto"
      ]
     ]
    }
   ]
  }
 },
 "apais": {
  "clave": "APAIS",
  "sigla": "APAIS",
  "titulo": "Escala de Ansiedad e Información Preoperatoria de Ámsterdam",
  "para": "Medir la ansiedad antes de una cirugía, por la anestesia y por la operación, y cuánta información quiere recibir la persona. Es breve y se aplica en la consulta preanestésica o en la sala de espera.",
  "areas": [
   "Ansiedad",
   "Salud, sueño y síntomas físicos"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Vergara-Romero et al. (2017), Health and Quality of Life Outcomes · acceso abierto, CC BY 4.0.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Antes de su intervención, indique cuánto describe cada frase cómo se siente ahora, de 1 (nada) a 5 (extremadamente)."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1 Nada",
     "2",
     "3",
     "4",
     "5 Extremadamente"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "Estoy preocupado por la anestesia",
     "Pienso en la anestesia continuamente",
     "Me gustaría saber lo máximo posible acerca de la anestesia",
     "Estoy preocupado por la operación",
     "Pienso en la operación continuamente",
     "Me gustaría saber lo máximo posible acerca de la operación"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total (ítems 1 a 6)",
     "js": "S(1,6)",
     "rangos": [
      [
       6,
       13,
       "Por debajo del punto de corte"
      ],
      [
       14,
       30,
       "Ansiedad preoperatoria probable (corte 14)"
      ]
     ]
    },
    {
     "n": "Ansiedad (ítems 1, 2, 4 y 5)",
     "js": "L([1,2,4,5])",
     "texto": "De 4 a 20. Describe la ansiedad por la anestesia y por la operación."
    },
    {
     "n": "Necesidad de información (ítems 3 y 6)",
     "js": "L([3,6])",
     "texto": "De 2 a 10. Una necesidad alta pide explicarle con detalle el procedimiento."
    }
   ]
  }
 },
 "asi": {
  "clave": "ASI",
  "sigla": "ASI-3",
  "titulo": "Índice de Sensibilidad a la Ansiedad-3",
  "para": "Medir el miedo a las sensaciones de ansiedad por creer que traen consecuencias graves: físicas (infarto, ahogo), cognitivas (perder el control, volverse loco) o sociales (que los demás lo noten). Orienta la exposición interoceptiva y la reestructuración en el pánico y otros trastornos de ansiedad.",
  "areas": [
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Taylor et al. (2007) · versión española de Sandín, Chorot y McNally (2007), Revista de Psicopatología y Psicología Clínica.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Conteste rodeando con un círculo el número (0, 1, 2, 3, 4) que mejor refleje su experiencia con lo que se indica en cada uno de los enunciados. Si algo de lo que se dice no lo ha sentido o experimentado nunca (p.ej., desmayarse en público), conteste como usted crea que se sentiría si realmente le hubiera ocurrido."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada o casi nada",
     "Un poco",
     "Bastante",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Para mí es importante no dar la impresión de estar nervioso/a",
     "2. Cuando no puedo mantener mi mente concentrada en una tarea, siento la preocupación de que podría estar volviéndome loco/a",
     "3. Me asusto cuando mi corazón late de forma rápida",
     "4. Cuando siento malestar en el estómago, me preocupa estar seriamente enfermo/a",
     "5. Me asusto cuando soy incapaz de mantener mi mente concentrada en una tarea",
     "6. Cuando tiemblo en presencia de otras personas, me da miedo lo que puedan pensar de mí",
     "7. Cuando siento opresión en el pecho, me asusta no poder respirar bien",
     "8. Cuando siento dolor en el pecho, me preocupa que vaya a darme un ataque cardíaco",
     "9. Me preocupa que otras personas noten mi ansiedad",
     "10. Cuando tengo la sensación de que las cosas no son reales, me preocupa que pueda estar mentalmente enfermo/a",
     "11. Tengo miedo a sonrojarme delante de la gente",
     "12. Cuando noto que mi corazón da un salto o late de forma irregular, me preocupa que algo grave me esté ocurriendo",
     "13. Cuando comienzo a sudar en una situación social, me da miedo que la gente piense negativamente de mí",
     "14. Cuando mis pensamientos parecen acelerarse, me preocupa que pueda volverme loco/a",
     "15. Cuando siento opresión en la garganta, me preocupa que pueda atragantarme y morir",
     "16. Cuando me resulta difícil pensar con claridad, me preocupa que me esté ocurriendo algo grave",
     "17. Pienso que me resultaría horrible si me desmayase en público",
     "18. Cuando mi mente se queda en blanco, me preocupa que me esté ocurriendo algo terriblemente malo"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Física",
     "js": "L([3, 4, 7, 8, 12, 15])",
     "texto": "De 0 a 24. Percentiles 50, 75 y 90 en universitarios españoles: 4, 6 y 10."
    },
    {
     "n": "Cognitiva",
     "js": "L([2, 5, 10, 14, 16, 18])",
     "texto": "De 0 a 24. Percentiles 50, 75 y 90 en universitarios españoles: 1, 4 y 7."
    },
    {
     "n": "Social",
     "js": "L([1, 6, 9, 11, 13, 17])",
     "texto": "De 0 a 24. Percentiles 50, 75 y 90 en universitarios españoles: 6, 10 y 14."
    },
    {
     "n": "Total",
     "js": "S(1,18)",
     "rangos": [
      [
       0,
       7,
       "Hasta el percentil 25"
      ],
      [
       8,
       11,
       "Entre los percentiles 25 y 50"
      ],
      [
       12,
       19,
       "Entre los percentiles 50 y 75"
      ],
      [
       20,
       28,
       "Entre los percentiles 75 y 90"
      ],
      [
       29,
       32,
       "Entre los percentiles 90 y 95"
      ],
      [
       33,
       72,
       "Por encima del percentil 95"
      ]
     ],
     "texto": "De 0 a 72: a mayor puntaje, más sensibilidad a la ansiedad. Percentiles de universitarios españoles (Sandín et al., 2007): no son puntos de corte. Media 14,1 (DT 9,6); mujeres algo más alto."
    }
   ]
  }
 },
 "cbi": {
  "clave": "CBI",
  "sigla": "CBI",
  "titulo": "Inventario de Burnout de Copenhague",
  "para": "Medir el burnout como agotamiento físico y psicológico en tres ámbitos: el personal, el relacionado con el trabajo y el relacionado con el trabajo con clientes o usuarios. Se puede usar en cualquier ocupación y es de uso libre.",
  "areas": [
   "Cuidadores y desgaste laboral"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Kristensen et al. (2005); versión española de Molinero Ruiz et al. (2013), Revista Española de Salud Pública, anexo 1 · uso libre.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Marque con qué frecuencia le ocurre cada una de estas situaciones."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Sólo alguna vez",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     0,
     25,
     50,
     75,
     100
    ],
    "puntua": true,
    "items": [
     "1. ¿Con qué frecuencia te sientes cansado?",
     "2. ¿Con qué frecuencia piensas «no puedo más»?",
     "3. ¿Con qué frecuencia te sientes débil y susceptible de enfermar?",
     "4. ¿Con qué frecuencia estás físicamente agotado?",
     "5. ¿Con qué frecuencia te sientes agotado?",
     "6. ¿Con qué frecuencia estás psicológicamente agotado?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Sólo alguna vez",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     0,
     25,
     50,
     75,
     100
    ],
    "puntua": true,
    "items": [
     "7. ¿Te sientes agotado al final de tu jornada laboral?",
     "8. ¿Por la mañana te agota pensar en otro día de trabajo?",
     "9. ¿Sientes que cada hora de trabajo es agotadora?",
     "10. ¿Tienes suficiente energía para la familia y los amigos durante el tiempo libre?",
     "11. ¿Te sientes quemado por tu trabajo?",
     "12. ¿Te sientes frustrado por tu trabajo?",
     "13. ¿Tu trabajo es emocionalmente agotador?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Sólo alguna vez",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     0,
     25,
     50,
     75,
     100
    ],
    "puntua": true,
    "items": [
     "14. ¿Estás cansado de trabajar con clientes o usuarios?",
     "15. ¿A veces te preguntas cuánto tiempo podrás continuar trabajando con clientes o usuarios?",
     "16. ¿Es duro trabajar con clientes o usuarios?",
     "17. ¿Sientes que das más que recibes cuando trabajas con clientes o usuarios?",
     "18. ¿Es frustrante trabajar con clientes o usuarios?",
     "19. ¿Trabajar con clientes o usuarios consume tu energía?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Burnout personal (promedio)",
     "js": "Math.round(S(1,6) / 6)",
     "rangos": [
      [
       0,
       49,
       "Por debajo del nivel de burnout"
      ],
      [
       50,
       100,
       "Burnout (corte de 50)"
      ]
     ]
    },
    {
     "n": "Burnout relacionado con el trabajo (promedio)",
     "js": "Math.round((S(7,9) + R(10,100) + S(11,13)) / 7)",
     "rangos": [
      [
       0,
       49,
       "Por debajo del nivel de burnout"
      ],
      [
       50,
       100,
       "Burnout (corte de 50)"
      ]
     ]
    },
    {
     "n": "Burnout con clientes o usuarios (promedio)",
     "js": "Math.round(S(14,19) / 6)",
     "rangos": [
      [
       0,
       49,
       "Por debajo del nivel de burnout"
      ],
      [
       50,
       100,
       "Burnout (corte de 50)"
      ]
     ]
    }
   ],
   "nota": "La escala de clientes o usuarios solo se responde si la persona trabaja con ellos más de la mitad de su jornada; si queda en blanco, su resultado no se lee."
  }
 },
 "csi": {
  "clave": "CSI",
  "sigla": "CSI",
  "titulo": "Índice de Esfuerzo del Cuidador",
  "para": "Identificar a los cuidadores de personas dependientes que están sobrecargados: trece aspectos del cuidado que suelen volverse un problema (sueño, esfuerzo físico, restricción del tiempo, cambios familiares, laborales y económicos, conductas molestas de la persona cuidada). Es breve y se usa en atención primaria y en el seguimiento domiciliario.",
  "areas": [
   "Cuidadores y desgaste laboral"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Robinson (1983) · versión española de López Alonso y Moral Serrano (2005), Enfermería Comunitaria.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Voy a leer una lista de cosas que han sido problemáticas para otras personas al atender a pacientes que han regresado a casa tras una estancia en el Hospital ¿Puede decirme si alguna de ellas se puede aplicar a su caso? (aporte ejemplos)."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "1. Tiene trastornos de sueño (p. ej., porque el paciente se acuesta y se levanta o pasea por la casa de noche)",
     "2. Es un inconveniente (p. ej., porque la ayuda consume mucho tiempo o se tarda mucho en proporcionar).",
     "3. Representa un esfuerzo físico (p. ej., hay que sentarlo, levantarlo de una silla).",
     "4. Supone una restricción (p. ej., porque ayudar limita el tiempo libre o no puede hacer visitas).",
     "5. Ha habido modificaciones en la familia (p. ej., porque la ayuda ha roto la rutina o no hay intimidad)",
     "6. Ha habido cambios en los planes personales (p. ej., se tuvo que rechazar un trabajo o no se pudo ir de vacaciones)",
     "7. Ha habido otras exigencias de mi tiempo (p. ej., por parte de otros miembros de la familia)",
     "8. Ha habido cambios emocionales (p. ej., causa de fuertes discusiones)",
     "9. Algunos comportamientos son molestos (p. ej., la incontinencia, al paciente le cuesta recordar las cosas, el paciente acusa a los demás de quitarle las cosas)",
     "10. Es molesto darse cuenta de que el paciente ha cambiado tanto comparado con antes (p. ej., es una persona diferente de antes).",
     "11. Ha habido modificaciones en el trabajo (p. ej., a causa de la necesidad de reservarse tiempo para la ayuda)",
     "12. Es una carga económica",
     "13. Nos ha desbordado totalmente (p. ej., por la preocupación acerca de persona cuidada o preocupaciones sobre cómo continuar el tratamiento)."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Respuestas «Sí»",
     "js": "C(RANGO(1,13),1)",
     "rangos": [
      [
       0,
       6,
       "Por debajo del punto de corte"
      ],
      [
       7,
       13,
       "Nivel elevado de esfuerzo (7 o más)"
      ]
     ]
    }
   ]
  }
 },
 "das": {
  "clave": "DAS",
  "sigla": "DAS",
  "titulo": "Escala de Ajuste Diádico",
  "para": "Medir la calidad de la relación de pareja en cuatro áreas: consenso en temas importantes, satisfacción, cohesión (actividades compartidas) y expresión afectiva. Sirve para evaluar y seguir la terapia de pareja.",
  "areas": [
   "Familia, pareja y violencia"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Spanier (1976), Journal of Marriage and the Family · traducción del formato del docente.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Siempre de acuerdo",
     "Casi siempre de acuerdo",
     "A veces en desacuerdo",
     "A menudo en desacuerdo",
     "Casi siempre en desacuerdo",
     "Siempre en desacuerdo"
    ],
    "vals": [
     5,
     4,
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Siempre",
     "Casi siempre",
     "A menudo",
     "A veces",
     "Casi nunca",
     "Nunca"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "Ítem 16",
     "Ítem 17"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Siempre",
     "Casi siempre",
     "A menudo",
     "A veces",
     "Casi nunca",
     "Nunca"
    ],
    "vals": [
     5,
     4,
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 18",
     "Ítem 19"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Siempre",
     "Casi siempre",
     "A menudo",
     "A veces",
     "Casi nunca",
     "Nunca"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "Ítem 20",
     "Ítem 21",
     "Ítem 22"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Todos los días",
     "Casi todos los días",
     "A veces",
     "Casi nunca",
     "Nunca"
    ],
    "vals": [
     4,
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 23"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "En casi todas",
     "En la mayoría",
     "En algunas",
     "En casi ninguna",
     "En ninguna"
    ],
    "vals": [
     4,
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 24"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Menos de una vez al mes",
     "Una o dos veces al mes",
     "Una o dos veces a la semana",
     "Una vez al día",
     "Más a menudo incluso"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "Ítem 25",
     "Ítem 26",
     "Ítem 27",
     "Ítem 28"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, ha sido motivo",
     "No"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     "Ítem 29",
     "Ítem 30"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Muy desgraciada",
     "Bastante desgraciada",
     "Algo desgraciada",
     "Feliz",
     "Bastante feliz",
     "Muy feliz",
     "Radiante"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Ítem 31"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "5",
     "4",
     "3",
     "2",
     "1",
     "0"
    ],
    "vals": [
     5,
     4,
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 32"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Consenso",
     "js": "L([1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15])",
     "texto": "De 0 a 65."
    },
    {
     "n": "Satisfacción",
     "js": "L([16, 17, 18, 19, 20, 21, 22, 23, 31, 32])",
     "texto": "De 0 a 50."
    },
    {
     "n": "Cohesión",
     "js": "L([24, 25, 26, 27, 28])",
     "texto": "De 0 a 24."
    },
    {
     "n": "Expresión afectiva",
     "js": "L([4, 6, 29, 30])",
     "texto": "De 0 a 12."
    },
    {
     "n": "Total",
     "js": "S(1,32)",
     "rangos": [
      [
       0,
       99,
       "Por debajo de 100: suele leerse como malestar en la relación"
      ],
      [
       100,
       151,
       "100 o más"
      ]
     ]
    }
   ]
  },
  "hoja": true
 },
 "eat-26": {
  "clave": "EAT-26",
  "sigla": "EAT-26",
  "titulo": "Prueba de Actitudes ante la Alimentación",
  "para": "Tamizar el riesgo de trastornos de la conducta alimentaria: preocupación por el peso y la comida, dieta, conductas bulímicas y control sobre la alimentación. No diagnostica: un puntaje sobre el corte pide una entrevista clínica.",
  "areas": [
   "Alimentación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Garner, Olmsted, Bohr y Garfinkel (1982) · versión colombiana de cinco opciones de Constain et al. (2014), Atención Primaria.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Este cuestionario NO es un examen, NO hay respuestas buenas ni malas. Si en alguna pregunta no encuentras la respuesta que se ajuste exactamente a lo que piensas o haces, marca con una X la respuesta que más se le aproxime."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Casi nunca",
     "A menudo",
     "Muy a menudo",
     "Siempre"
    ],
    "vals": [
     0,
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "1. Me angustia la idea de estar demasiado gorda",
     "2. Procuro no comer cuando tengo hambre",
     "3. La comida es para mí una preocupación habitual",
     "4. He sufrido crisis de atracones en las que tenía la sensación de no poder parar de comer",
     "5. Corto mis alimentos en pequeños trozos",
     "6. Conozco la cantidad de calorías de los alimentos que como",
     "7. Procuro no comer alimentos que contengan muchos carbohidratos (pan, arroz, papas, etc.)",
     "8. Tengo la impresión de que a los demás les gustaría verme comer más",
     "9. Vomito después de comer",
     "10. Me siento muy culpable después de comer",
     "11. Me obsesiona el deseo de estar más delgada",
     "12. Cuando hago deporte pienso sobre todo en quemar calorías",
     "13. Los demás piensan que estoy demasiado delgada",
     "14. Me preocupa la idea de tener zonas gordas en el cuerpo y/o de tener celulitis",
     "15. Tardo más tiempo que los demás en comer",
     "16. Procuro no comer alimentos que tengan azúcar",
     "17. Como alimentos dietéticos",
     "18. Tengo la impresión de que mi vida gira alrededor de la comida",
     "19. Tengo un buen autocontrol en lo que se refiere a la comida",
     "20. Tengo la sensación de que los demás me presionan para que coma más",
     "21. Paso demasiado tiempo pensando en la comida",
     "22. No me siento bien después de haber tomado dulces",
     "23. Estoy haciendo dieta",
     "24. Me gusta tener el estómago vacío"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Casi nunca",
     "A menudo",
     "Muy a menudo",
     "Siempre"
    ],
    "vals": [
     3,
     2,
     1,
     0,
     0
    ],
    "puntua": true,
    "items": [
     "25. Me gusta probar platos nuevos, sabrosos y ricos en calorías"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Casi nunca",
     "A menudo",
     "Muy a menudo",
     "Siempre"
    ],
    "vals": [
     0,
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "26. Después de las comidas tengo el impulso de vomitar"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,26)",
     "rangos": [
      [
       0,
       10,
       "Por debajo del punto de corte"
      ],
      [
       11,
       78,
       "Riesgo de trastorno de la conducta alimentaria (corte 11, versión colombiana)"
      ]
     ]
    }
   ]
  }
 },
 "ebp": {
  "clave": "EBP",
  "sigla": "EBP",
  "titulo": "Escalas de Bienestar Psicológico de Ryff, versión española de 29 ítems",
  "para": "Medir el bienestar psicológico en seis dimensiones: aceptarse a uno mismo, tener relaciones positivas, actuar con autonomía, dominar el entorno, tener un propósito en la vida y seguir creciendo como persona. Es una medida de funcionamiento positivo, no de ausencia de síntomas, útil en programas de psicología positiva y de promoción de la salud.",
  "areas": [
   "Bienestar y apoyo social"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Ryff (1989) · versión española de 29 ítems de Díaz et al. (2006), Psicothema, apéndice 1.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Indique su grado de acuerdo con cada frase, marcando un número de 1 (totalmente en desacuerdo) a 6 (totalmente de acuerdo). Los ítems con asterisco se puntúan al revés."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Totalmente en desacuerdo",
     "",
     "",
     "",
     "",
     "Totalmente de acuerdo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "1. Cuando repaso la historia de mi vida estoy contento con cómo han resultado las cosas",
     "2. A menudo me siento solo porque tengo pocos amigos íntimos con quienes compartir mis preocupaciones *",
     "3. No tengo miedo de expresar mis opiniones, incluso cuando son opuestas a las opiniones de la mayoría de la gente",
     "4. Me preocupa cómo otra gente evalúa las elecciones que he hecho en mi vida *",
     "5. Me resulta difícil dirigir mi vida hacia un camino que me satisfaga *",
     "6. Disfruto haciendo planes para el futuro y trabajar para hacerlos realidad",
     "7. En general, me siento seguro y positivo conmigo mismo",
     "8. No tengo muchas personas que quieran escucharme cuando necesito hablar *",
     "9. Tiendo a preocuparme sobre lo que otra gente piensa de mí *",
     "10. He sido capaz de construir un hogar y un modo de vida a mi gusto",
     "11. Soy una persona activa al realizar los proyectos que propuse para mí mismo",
     "12. Siento que mis amistades me aportan muchas cosas",
     "13. Tiendo a estar influenciado por la gente con fuertes convicciones *",
     "14. En general, siento que soy responsable de la situación en la que vivo",
     "15. Me siento bien cuando pienso en lo que he hecho en el pasado y lo que espero hacer en el futuro",
     "16. Mis objetivos en la vida han sido más una fuente de satisfacción que de frustración para mí",
     "17. Me gusta la mayor parte de los aspectos de mi personalidad",
     "18. Tengo confianza en mis opiniones incluso si son contrarias al consenso general",
     "19. Las demandas de la vida diaria a menudo me deprimen *",
     "20. Tengo clara la dirección y el objetivo de mi vida",
     "21. En general, con el tiempo siento que sigo aprendiendo más sobre mí mismo",
     "22. No he experimentado muchas relaciones cercanas y de confianza *",
     "23. Es difícil para mí expresar mis propias opiniones en asuntos polémicos *",
     "24. En su mayor parte, me siento orgulloso de quien soy y la vida que llevo",
     "25. Sé que puedo confiar en mis amigos, y ellos saben que pueden confiar en mí",
     "26. Cuando pienso en ello, realmente con los años no he mejorado mucho como persona *",
     "27. Tengo la sensación de que con el tiempo me he desarrollado mucho como persona",
     "28. Para mí, la vida ha sido un proceso continuo de estudio, cambio y crecimiento",
     "29. Si me sintiera infeliz con mi situación de vida daría los pasos más eficaces para cambiarla"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Autoaceptación",
     "js": "(r[1] || 0) + (r[7] || 0) + (r[17] || 0) + (r[24] || 0)",
     "texto": "De 4 a 24: a mayor puntaje, más bienestar. Referencia: en población general española el promedio por ítem fue 4,3, que en esta suma equivale a unos 17."
    },
    {
     "n": "Relaciones positivas",
     "js": "R(2,7) + R(8,7) + (r[12] || 0) + R(22,7) + (r[25] || 0)",
     "texto": "De 5 a 30: a mayor puntaje, más bienestar. Referencia: en población general española el promedio por ítem fue 4,6, que en esta suma equivale a unos 23."
    },
    {
     "n": "Autonomía",
     "js": "(r[3] || 0) + R(4,7) + R(9,7) + R(13,7) + (r[18] || 0) + R(23,7)",
     "texto": "De 6 a 36: a mayor puntaje, más bienestar. Referencia: en población general española el promedio por ítem fue 4,2, que en esta suma equivale a unos 25."
    },
    {
     "n": "Dominio del entorno",
     "js": "R(5,7) + (r[10] || 0) + (r[14] || 0) + R(19,7) + (r[29] || 0)",
     "texto": "De 5 a 30: a mayor puntaje, más bienestar. Referencia: en población general española el promedio por ítem fue 4,3, que en esta suma equivale a unos 22."
    },
    {
     "n": "Propósito en la vida",
     "js": "(r[6] || 0) + (r[11] || 0) + (r[15] || 0) + (r[16] || 0) + (r[20] || 0)",
     "texto": "De 5 a 30: a mayor puntaje, más bienestar. Referencia: en población general española el promedio por ítem fue 4,5, que en esta suma equivale a unos 22."
    },
    {
     "n": "Crecimiento personal",
     "js": "(r[21] || 0) + R(26,7) + (r[27] || 0) + (r[28] || 0)",
     "texto": "De 4 a 24: a mayor puntaje, más bienestar. Referencia: en población general española el promedio por ítem fue 4,6, que en esta suma equivale a unos 18."
    }
   ]
  }
 },
 "eii": {
  "clave": "EII",
  "sigla": "EII",
  "titulo": "Escala de Intolerancia a la Incertidumbre",
  "para": "Medir cuánto le cuesta a la persona tolerar lo incierto: la incertidumbre que la paraliza e inhibe, y la que vive como desconcierto ante lo imprevisto. Es un proceso central de la preocupación excesiva y del trastorno de ansiedad generalizada, y un blanco de la terapia.",
  "areas": [
   "Ansiedad",
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Freeston et al. (1994) · adaptación española de González Rodríguez et al. (2006), Psicología y Salud.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Indique en qué medida cada frase es característica de usted, marcando un número de 1 (nada característico de mí) a 5 (extremadamente característico de mí)."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada característico de mí",
     "",
     "",
     "",
     "Extremadamente característico de mí"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "1. La incertidumbre me impide tener una opinión firme.",
     "2. Estar inseguro/a sobre algo me desorganiza.",
     "3. La incertidumbre hace intolerable la vida.",
     "4. Es injusto no tener garantías de que las cosas vayan a salir bien en la vida.",
     "5. No puedo estar tranquilo/a mientras no sepa lo que va a suceder al día siguiente.",
     "6. La incertidumbre me produce inquietud, ansiedad o estrés.",
     "7. Los imprevistos me molestan mucho.",
     "8. Es frustrante para mí no tener toda la información que necesito.",
     "9. La incertidumbre me impide disfrutar plenamente de la vida.",
     "10. Se debería prever todo para evitar las sorpresas.",
     "11. Un pequeño imprevisto puede arruinarlo todo, incluso con la mejor de las planeaciones.",
     "12. Cuando llega el momento de actuar, la incertidumbre me paraliza.",
     "13. Estar inseguro/a implica no poder figurar entre los mejores.",
     "14. Cuando estoy indeciso/a no puedo seguir adelante.",
     "15. Cuando estoy indeciso/a no puedo funcionar muy bien.",
     "16. A diferencia de mí, los demás siempre parecen saber hacia dónde dirigen sus vidas.",
     "17. La incertidumbre me hace vulnerable, infeliz o triste.",
     "18. Quiero saber siempre qué me depara el futuro.",
     "19. No soporto que me cojan por sorpresa.",
     "20. La más mínima duda me puede impedir actuar.",
     "21. Tendría que ser capaz de organizar todo de antemano.",
     "22. La incertidumbre me produce falta de confianza en mí mismo.",
     "23. No entiendo cómo otras personas parecen tan seguras y decididas acerca de su futuro.",
     "24. La incertidumbre me impide dormir bien.",
     "25. Debo alejarme de toda situación incierta.",
     "26. Las ambigüedades de la vida me causan estrés.",
     "27. No soporto estar indeciso/a acerca de mi futuro."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,27)",
     "texto": "De 27 a 135. Media de la población general española: mujeres 60,3; hombres 55,6."
    },
    {
     "n": "Incertidumbre generadora de inhibición (IGI)",
     "js": "L([1, 2, 3, 6, 9, 12, 13, 14, 15, 16, 17, 20, 22, 23, 24, 26])",
     "texto": "Media: mujeres 35,3; hombres 31,4."
    },
    {
     "n": "Incertidumbre como desconcierto e imprevisión (IDI)",
     "js": "L([4, 5, 7, 8, 10, 11, 18, 19, 21, 25, 27])",
     "texto": "Media: mujeres 25,2; hombres 24,4."
    }
   ]
  }
 },
 "emes-m": {
  "clave": "EMES-M",
  "sigla": "EMES-M",
  "titulo": "Escala Multidimensional de Expresión Social, parte motora",
  "para": "Medir con qué frecuencia la persona actúa de forma socialmente hábil: iniciar interacciones, hablar en público, defender sus derechos, expresar molestia, afecto y opiniones, hacer y recibir cumplidos y decir que no. Sirve para planear y evaluar el entrenamiento en habilidades sociales.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Caballo (1987, 1993) · EMES-M, formato del docente.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Esta prueba ha sido diseñada para proporcionar información sobre el modo en que Ud. actúa normalmente en sus relaciones con las demás personas. Al contestar, coloque una X en la alternativa más apropiada, usando la siguiente escala:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca o muy raramente",
     "Raramente",
     "De vez en cuando",
     "Habitualmente o a menudo",
     "Siempre o muy a menudo"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Cuando personas que apenas conozco me alaban, intento minimizar la situación, quitando importancia al hecho por el cual soy alabado.",
     "2. Cuando un vendedor se ha tomado una molestia considerable en enseñarme un producto que no me acaba de satisfacer soy incapaz de decirle \"no”.",
     "3. Cuando la gente me presiona para que haga cosas por ellos, me resulta difícil decir que no.",
     "4. Evito hacer preguntas a personas que no conozco.",
     "5. Soy incapaz de negarme cuando mi pareja me pide algo.",
     "6. Si un/a amigo/a me interrumpe en medio de una importante conversación, le pido que espere hasta que yo haya acabado.",
     "7. Cuando estoy irritado ante un/a superior/a, se lo digo.",
     "8. Si un amigo, a quien he prestado 200 dólares, parece haberlo olvidado, se lo recuerdo.",
     "9. Me resulta fácil ayudar a que mi pareja se sienta bien, alabándole.",
     "10. Me aparto de mi camino para evitar problemas con otras personas.",
     "11. Es un problema, para mí, mostrar a las demás personas mi agrado hacia ellos/as.",
     "12. Si dos personas en un cine o en una conferencia están hablando demasiado alto, les pido que hagan silencio.",
     "13. Cuando alguien atractivo/a del otro género me pide algo, soy incapaz de decirle que no.",
     "14. Cuando me siento enojado con alguna persona, lo oculto.",
     "15. Me reservo mis opiniones.",
     "16. Pongo excesivo cuidado, en lo que digo o hago, para evitar herir de alguna forma los sentimientos de los demás",
     "17. Cuando me atrae una persona a la que no he sido presentado/a, intento de modo activo conocerle.",
     "18. Me resulta difícil hablar en público.",
     "19. Soy incapaz de expresar desacuerdo a mi pareja.",
     "20. Evito hacer preguntas en clase o en el trabajo por miedo o timidez.",
     "21. Me resulta fácil hacer cumplidos a una persona que apenas conozco.",
     "22. Cuando alguno de mis superiores me llama para que haga cosas que no tengo obligación de hacer, soy incapaz de decir que no.",
     "23. Me resulta difícil hacer nuevos/as amigos/as.",
     "24. Si un amigo/a traiciona mi confianza, expreso claramente mi disgusto a esa persona.",
     "25. Expreso sentimientos de cariño hacia mis padres.",
     "26. Me resulta difícil hacerle un cumplido a un superior/a.",
     "27. Si estuviera en un pequeño seminario o reunión y el profesor o la persona que lo dirige hiciese una afirmación que yo considero incorrecta, expondría mi propio punto de vista.",
     "28. Si ya no quiero seguir saliendo con alguien del otro género, se lo hago saber claramente.",
     "29. Soy capaz de expresar sentimientos negativos hacia extraños/as, si me siento ofendido.",
     "30. Si en un restaurante me sirven comida que no está a mi gusto, me quejo de ello al camarero.",
     "31. Me cuesta hablar con una persona atractiva del otro género a quien conozco sólo ligeramente.",
     "32. Cuando he conocido a una persona que me agrada, le pido el número telefónico para un posible encuentro posterior.",
     "33. Si estoy enfadado con mis padres se los hago saber claramente.",
     "34. Expreso mi punto de vista, aunque sea impopular.",
     "35. Si alguien ha hablado mal de mí o falsamente me ha atribuido hechos, le busco enseguida para aclarar esto.",
     "36. Me resulta difícil iniciar una conversación con un/a extraño/a.",
     "37. Soy incapaz de defender mis derechos ante mis superiores.",
     "38. Si una figura con autoridad me critica sin justificación, me resulta difícil discutir su crítica abiertamente.",
     "39. Si una persona del otro género me critica injustamente, le pido claramente explicaciones.",
     "40. No solicito citas por timidez o dudo mucho en hacerlo.",
     "41. Me resulta fácil dirigirme a un/a superior/a e iniciar una conversación con él/ella.",
     "42. Con buenas palabras hago lo que los/las demás quieren que haga y no lo que realmente yo querría hacer.",
     "43. Cuando conozco gente nueva tengo poco que decir.",
     "44. Hago la vista gorda cuando alguien se cuela delante de mí en una fila.",
     "45. Soy incapaz de decirle a alguien del otro género que me gusta",
     "46. Me resulta difícil criticar o corregir a los demás incluso cuando está justificado.",
     "47. No sé qué decir a personas atractivas del otro género.",
     "48. Si me doy cuenta de que me estoy enamorando de alguien con quien salgo, expreso estos sentimientos a esa persona.",
     "49. Si un familiar me critica injustamente, expreso mi enojo espontánea y fácilmente.",
     "50. Me resulta fácil aceptar cumplidos.",
     "51. Me río de las bromas con las que me siento ofendido, en vez de protestar o hablar claramente.",
     "52. Cuando me alaban no sé que responder.",
     "53. Soy incapaz de hablar en público.",
     "54. Soy incapaz de mostrar afecto hacia una persona del otro género.",
     "55. En la relación con mi pareja es ella/él quien lleva el peso de las conversaciones",
     "56. Evito pedir algo a una persona, cuando se trata de un/a superior/a.",
     "57. Si un pariente cercano y respetado me estuviese importunando, le expresaría claramente mi malestar.",
     "58. Cuando un dependiente en una tienda atiende a alguien que llegó después de mí, llamo su atención al respecto.",
     "59. Me resulta difícil hacer cumplidos o alabar a una persona del otro género.",
     "60. Cuando estoy en un grupo tengo problemas para encontrar cosas sobre las cuales hablar.",
     "61. Me resulta difícil mostrar afecto hacia otra persona (por ejemplo: mi pareja en público).",
     "62. Si un/a vecino/a del otro género a quien he estado queriendo conocer para salir de casa y me pregunta la hora, tomaría la iniciativa de empezar una conversación con esa persona.",
     "63. Por timidez o por temor de importunar a otras personas, evito hacer cosas agradables o convenientes para mí.",
     "64. Me resulta fácil mostrar mi enfado cuando alguien hace algo ante lo cual me he sentido molesto."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "L([6, 7, 8, 9, 12, 17, 21, 24, 25, 27, 28, 29, 30, 32, 33, 34, 35, 39, 41, 48, 49, 50, 57, 58, 62, 64]) + R(1,4) + R(2,4) + R(3,4) + R(4,4) + R(5,4) + R(10,4) + R(11,4) + R(13,4) + R(14,4) + R(15,4) + R(16,4) + R(18,4) + R(19,4) + R(20,4) + R(22,4) + R(23,4) + R(26,4) + R(31,4) + R(36,4) + R(37,4) + R(38,4) + R(40,4) + R(42,4) + R(43,4) + R(44,4) + R(45,4) + R(46,4) + R(47,4) + R(51,4) + R(52,4) + R(53,4) + R(54,4) + R(55,4) + R(56,4) + R(59,4) + R(60,4) + R(61,4) + R(63,4)",
     "texto": "De 0 a 256: a mayor puntaje, más habilidad social. Sin puntos de corte. Referencia: media de 140,6 (DE 29,8) en 673 universitarios españoles (Caballo, 1993)."
    }
   ]
  }
 },
 "epds": {
  "clave": "EPDS",
  "sigla": "EPDS",
  "titulo": "Escala de Depresión Posparto de Edimburgo",
  "para": "Tamizar síntomas depresivos de la última semana en el embarazo y el posparto. No incluye los síntomas somáticos (sueño, apetito, cansancio) que se confunden con el puerperio. No diagnostica: un puntaje alto pide una entrevista clínica.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Cox, Holden y Sagovsky (1987) · versión en castellano en Maroto Navarro et al. (2005) · reproducción permitida citando la fuente.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Marque en cada frase la respuesta que más se acerque a cómo se ha sentido en los últimos 7 días, no solo hoy."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Tanto como siempre",
     "No tanto ahora",
     "Mucho menos",
     "No, no he podido"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "1. He sido capaz de reír y ver el lado bueno de las cosas"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Tanto como siempre",
     "Algo menos de lo que solía hacer",
     "Definitivamente menos",
     "No, nada"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "2. He mirado el futuro con placer"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, la mayoría de las veces",
     "Sí, algunas veces",
     "No muy a menudo",
     "No, nunca"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "3. Me he culpado innecesariamente cuando las cosas marchaban mal"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No, nada",
     "Casi nada",
     "Sí, a veces",
     "Sí, a menudo"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "4. He estado ansiosa y preocupada sin motivo"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, bastante",
     "Sí, a veces",
     "No, no mucho",
     "No, nada"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "5. He sentido miedo y pánico sin motivo alguno"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, la mayor parte de las veces",
     "Sí, a veces",
     "No, casi nunca",
     "No, nada"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "6. Las cosas me superaban, me sobrepasaban"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, casi siempre",
     "Sí, a veces",
     "No muy a menudo",
     "No, nada"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "7. Me he sentido tan infeliz que he tenido dificultad para dormir"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, casi siempre",
     "Sí, bastante a menudo",
     "No muy a menudo",
     "No, nada"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "8. Me he sentido triste y desgraciada"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, casi siempre",
     "Sí, bastante a menudo",
     "Sólo ocasionalmente",
     "No, nunca"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "9. He sido tan infeliz que he estado llorando"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí, bastante a menudo",
     "A veces",
     "Casi nunca",
     "No, nunca"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "10. He pensado en hacerme daño a mí misma"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,10)",
     "rangos": [
      [
       0,
       9,
       "Por debajo de los puntos de corte publicados"
      ],
      [
       10,
       10,
       "Sobre el corte 9/10 de los autores"
      ],
      [
       11,
       12,
       "Sobre el corte 10/11 de la validación española: confirme con entrevista"
      ],
      [
       13,
       30,
       "Sobre el corte 12/13: depresión probable, necesita valoración clínica"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "r[10] > 0",
     "texto": "Hay una respuesta que indica posible riesgo suicida. Pregunte directamente, en esta misma atención, y siga el protocolo de riesgo: la persona no se va sin una valoración de seguridad."
    }
   ]
  }
 },
 "facit-sp": {
  "clave": "FACIT-Sp",
  "sigla": "FACIT-Sp",
  "titulo": "Escala de Bienestar Espiritual (FACIT-Sp-12)",
  "para": "Medir el bienestar espiritual en personas con enfermedad crónica o grave: el sentido y la paz (sentir que la vida tiene propósito, estar en armonía) y el consuelo y la fuerza que dan la fe o las creencias. No exige una religión: varias preguntas hablan de sentido y de paz sin referirse a la fe.",
  "areas": [
   "Bienestar y apoyo social",
   "Salud, sueño y síntomas físicos"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Peterman et al. (2002) · versión colombiana de Sierra Matamoros (Universidad Nacional de Colombia) · licencia de FACIT.org.",
  "bloques": [
   {
    "t": "consigna",
    "x": "A continuación encontrará una lista de afirmaciones que otras personas con su misma enfermedad consideran importantes. Marque un solo número por línea para indicar la respuesta que corresponde a los últimos 7 días."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Me siento en paz",
     "2. Tengo una razón para vivir",
     "3. Mi vida ha sido productiva",
     "4. Tengo dificultades para conseguir paz mental",
     "5. Siento que mi vida tiene sentido",
     "6. Soy capaz de encontrar consuelo dentro de mí mismo(a)",
     "7. Tengo un sentimiento de armonía interior",
     "8. A mi vida le falta sentido y propósito",
     "9. Encuentro consuelo en mi fe o mis creencias espirituales",
     "10. Encuentro fuerza en mi fe o mis creencias espirituales",
     "11. Mi enfermedad ha fortalecido mi fe o mis creencias espirituales",
     "12. Pase lo que pase con mi enfermedad, todo va a ir bien"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Sentido y paz (1 a 8)",
     "js": "L([1,2,3,5,6,7]) + R(4,4) + R(8,4)",
     "texto": "De 0 a 32: a mayor puntaje, más sentido y paz."
    },
    {
     "n": "Fe (9 a 12)",
     "js": "S(9,12)",
     "texto": "De 0 a 16: a mayor puntaje, más consuelo y fuerza en la fe."
    },
    {
     "n": "Total",
     "js": "L([1,2,3,5,6,7]) + R(4,4) + R(8,4) + S(9,12)",
     "texto": "De 0 a 48. Sin puntos de corte: compare con aplicaciones anteriores."
    }
   ]
  }
 },
 "fscrs": {
  "clave": "FSCRS",
  "sigla": "FSCRS",
  "titulo": "Escala de Formas de Autocrítica y Autotranquilización",
  "para": "Medir cómo se trata la persona cuando las cosas le salen mal: sentirse inadecuada, atacarse con desprecio o, al contrario, tranquilizarse y apoyarse. Sirve para formular y seguir la terapia centrada en la compasión.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Gilbert et al. (2004), British Journal of Clinical Psychology · traducción de López-Cavada y Jódar (2017).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Cuando las cosas van mal en nuestra vida o no funcionan como lo esperábamos, y sentimos que podríamos haberlo hecho mejor, a veces tenemos pensamientos negativos y auto-críticos. Esto puede llevar la forma de sentimientos de falta de valía, de inutilidad, e inferioridad, etc. Sin embargo, las personas pueden también probar a ser de apoyo consigo mismos. Debajo hay una serie de pensamientos y sentimientos que a veces las personas tienen. Lee atentamente cada frase y rodea el número que mejor describa cómo de verdadera es esa afirmación para ti. Cuando las cosas me van mal…"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada",
     "Un poco",
     "Moderadamente",
     "Bastante",
     "Extremadamente"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Me decepciono fácilmente conmigo mismo.",
     "2. Hay una parte de mí que me critica.",
     "3. Soy capaz de recordarme a mí mismo cosas positivas de mí.",
     "4. Encuentro difícil controlar mi enfado y frustración hacia mí.",
     "5. Encuentro fácil perdonarme a mí mismo.",
     "6. Hay una parte de mí que siente que no soy suficientemente bueno.",
     "7. Me siento agotado por mis pensamientos autocríticos.",
     "8. Aún me gusta ser yo.",
     "9. He llegado a estar tan enfadado conmigo mismo que quiero herirme o lesionarme a mí mismo.",
     "10. Tengo un sentimiento de repulsión conmigo mismo.",
     "11. Aún me puedo sentir digno de amor y aceptable.",
     "12. He parado de cuidarme a mí mismo.",
     "13. Encuentro fácil gustarme a mí mismo.",
     "14. Recuerdo y me aflijo por mis fracasos.",
     "15. A veces me digo cosas ofensivas a mí mismo.",
     "16. Soy amable conmigo mismo y me apoyo.",
     "17. No puedo aceptar fallos y contratiempos sin sentirme insuficiente.",
     "18. Pienso que merezco mi autocrítica.",
     "19. Soy capaz de mirar y cuidar de mí mismo.",
     "20. Hay una parte de mí que quiere deshacerse de las partes que no me gustan.",
     "21. Me animo/aliento para el futuro.",
     "22. No me gusta ser yo."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Yo inadecuado",
     "js": "L([1, 2, 4, 6, 7, 14, 17, 18, 20])",
     "texto": "De 0 a 36: a mayor puntaje, más autocrítica por sentirse insuficiente."
    },
    {
     "n": "Yo odiado",
     "js": "L([9, 10, 12, 15, 22])",
     "texto": "De 0 a 20: a mayor puntaje, más desprecio hacia uno mismo. Si es alto, indague el riesgo de autolesión."
    },
    {
     "n": "Yo tranquilizador",
     "js": "L([3, 5, 8, 11, 13, 16, 19, 21])",
     "texto": "De 0 a 32: a mayor puntaje, más capacidad de tranquilizarse."
    }
   ]
  }
 },
 "mbi": {
  "clave": "MBI",
  "sigla": "MBI",
  "titulo": "Inventario de Burnout de Maslach",
  "para": "Medir el síndrome de quemarse por el trabajo en profesionales que atienden personas: agotamiento emocional, despersonalización (trato frío y distante) y baja realización personal.",
  "areas": [
   "Cuidadores y desgaste laboral"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Maslach y Jackson (1981, 1986) · adaptación española de Seisdedos (1997), TEA.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Alguna vez al año o menos",
     "Una vez al mes o menos",
     "Algunas veces al mes",
     "Una vez a la semana",
     "Varias veces a la semana",
     "Diariamente"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Agotamiento emocional",
     "js": "L([1, 2, 3, 6, 8, 13, 14, 16, 20])",
     "rangos": [
      [
       0,
       18,
       "Bajo"
      ],
      [
       19,
       26,
       "Medio"
      ],
      [
       27,
       54,
       "Alto"
      ]
     ]
    },
    {
     "n": "Despersonalización",
     "js": "L([5, 10, 11, 15, 22])",
     "rangos": [
      [
       0,
       5,
       "Baja"
      ],
      [
       6,
       9,
       "Media"
      ],
      [
       10,
       30,
       "Alta"
      ]
     ]
    },
    {
     "n": "Realización personal",
     "js": "L([4, 7, 9, 12, 17, 18, 19, 21])",
     "rangos": [
      [
       0,
       33,
       "Baja (indica burnout)"
      ],
      [
       34,
       39,
       "Media"
      ],
      [
       40,
       48,
       "Alta"
      ]
     ]
    }
   ]
  },
  "hoja": true
 },
 "mcq-30": {
  "clave": "MCQ-30",
  "sigla": "MCQ-30",
  "titulo": "Cuestionario de Metacogniciones",
  "para": "Medir las creencias sobre el propio pensamiento que mantienen la preocupación y la rumiación: que preocuparse sirve, que es incontrolable y peligroso, la poca confianza en la memoria, la necesidad de controlar los pensamientos y la vigilancia de la propia mente. Es la medida de la terapia metacognitiva.",
  "areas": [
   "Procesos psicológicos: aceptación, metacognición y regulación",
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Wells y Cartwright-Hatton (2004), Behaviour Research and Therapy · traducción de Neurocorp (Ecuador).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Este cuestionario indaga sobre las creencias que las personas tienen acerca de su pensamiento. A continuación se enumeran varias creencias que las personas suelen expresar. Por favor, lea cada ítem e indique cuán de acuerdo está con cada descripción."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No estoy de acuerdo",
     "Ligeramente de acuerdo",
     "Moderadamente de acuerdo",
     "Fuertemente de acuerdo"
    ],
    "vals": [
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Estar preocupado me ayuda a organizar mi mente",
     "2. Estar preocupado me ayuda a afrontar las cosas",
     "3. Necesito preocuparme para funcionar bien",
     "4. Estar preocupado me ayuda a solucionar los problemas",
     "5. Necesito preocuparme para seguir organizado",
     "6. Estar preocupado me ayuda a evitar problemas en el futuro",
     "7. Mis pensamientos preocupantes persisten, independientemente de cómo intente detenerlos",
     "8. Cuando empiezo a preocuparme no puedo parar",
     "9. Podría llegar a enfermar de preocupación",
     "10. No puedo ignorar los pensamientos que me preocupan",
     "11. Mi preocupación podría volverme loco",
     "12. Considero que preocuparme es peligroso para mí",
     "13. No confío en mi memoria",
     "14. Tengo mala memoria",
     "15. Tengo poca confianza en mi memoria sobre hechos",
     "16. Tengo poca confianza en mi memoria sobre lugares",
     "17. Tengo poca confianza en mi memoria sobre palabras y nombres",
     "18. Mi memoria me puede engañar a veces",
     "19. Si no pudiera controlar mis pensamientos, yo no podría funcionar",
     "20. No poder controlar mis pensamientos es una señal de debilidad",
     "21. Debería controlar mis pensamientos todo el tiempo",
     "22. Es malo tener ciertos pensamientos",
     "23. Si yo no controlara un pensamiento preocupante y luego ocurriese, sería por mi culpa",
     "24. Recibiré un castigo por no controlar ciertos pensamientos",
     "25. Soy consciente constantemente de lo que pienso",
     "26. Presto mucha atención a la manera en que mi mente funciona",
     "27. Pienso mucho acerca de mis pensamientos",
     "28. Examino constantemente mis pensamientos",
     "29. Monitorizo mis pensamientos",
     "30. Me doy cuenta de cómo funciona mi mente mientras pienso en cómo solucionar un problema"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Creencias positivas sobre la preocupación",
     "js": "S(1,6)",
     "texto": "De 6 a 24."
    },
    {
     "n": "Creencias negativas: incontrolabilidad y peligro",
     "js": "S(7,12)",
     "texto": "De 6 a 24."
    },
    {
     "n": "Baja confianza cognitiva",
     "js": "S(13,18)",
     "texto": "De 6 a 24."
    },
    {
     "n": "Necesidad de controlar los pensamientos",
     "js": "S(19,24)",
     "texto": "De 6 a 24."
    },
    {
     "n": "Autoconciencia cognitiva",
     "js": "S(25,30)",
     "texto": "De 6 a 24."
    },
    {
     "n": "Total",
     "js": "S(1,30)",
     "texto": "De 30 a 120. Sin puntos de corte."
    }
   ]
  }
 },
 "mspss": {
  "clave": "MSPSS",
  "sigla": "MSPSS",
  "titulo": "Escala Multidimensional de Apoyo Social Percibido",
  "para": "Medir cuánto apoyo siente la persona que recibe de tres fuentes: la familia, los amigos y una persona especial. Mide apoyo percibido, no el tamaño de la red: alguien con pocos vínculos puede sentirse muy apoyado, y al revés.",
  "areas": [
   "Bienestar y apoyo social"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Zimet et al. (1988); versión en español y validación colombiana de Trejos-Herrera et al. (2018), Psychosocial Intervention, CC BY-NC-ND.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Indique cuán de acuerdo o en desacuerdo está con cada afirmación, marcando un número de 1 a 7."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Muy en desacuerdo",
     "",
     "",
     "Ni de acuerdo ni en desacuerdo",
     "",
     "",
     "Muy de acuerdo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "1. Existe una persona especial que está cerca de mí cuando la necesito",
     "2. Existe una persona especial con la que puedo compartir alegrías y tristezas",
     "3. Mi familia trata realmente de ayudarme",
     "4. Tengo la ayuda y el apoyo emocional que necesito de mi familia",
     "5. Tengo una persona especial que es una fuente real de consuelo para mí",
     "6. Mis amigos tratan realmente de ayudarme",
     "7. Puedo contar con mis amigos cuando las cosas van mal",
     "8. Puedo hablar de mis problemas con mi familia",
     "9. Tengo amigos con los que puedo compartir mis alegrías y mis penas",
     "10. Hay una persona especial en mi vida que se preocupa de mis sentimientos",
     "11. Mi familia está dispuesta a ayudarme a tomar decisiones",
     "12. Puedo hablar de mis problemas con mis amigos"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Persona especial",
     "js": "L([1,2,5,10])",
     "rangos": [
      [
       4,
       11,
       "Apoyo bajo"
      ],
      [
       12,
       20,
       "Apoyo moderado"
      ],
      [
       21,
       28,
       "Apoyo alto"
      ]
     ]
    },
    {
     "n": "Familia",
     "js": "L([3,4,8,11])",
     "rangos": [
      [
       4,
       11,
       "Apoyo bajo"
      ],
      [
       12,
       20,
       "Apoyo moderado"
      ],
      [
       21,
       28,
       "Apoyo alto"
      ]
     ]
    },
    {
     "n": "Amigos",
     "js": "L([6,7,9,12])",
     "rangos": [
      [
       4,
       11,
       "Apoyo bajo"
      ],
      [
       12,
       20,
       "Apoyo moderado"
      ],
      [
       21,
       28,
       "Apoyo alto"
      ]
     ]
    },
    {
     "n": "Total",
     "js": "S(1,12)",
     "rangos": [
      [
       12,
       35,
       "Apoyo bajo"
      ],
      [
       36,
       60,
       "Apoyo moderado"
      ],
      [
       61,
       84,
       "Apoyo alto"
      ]
     ]
    }
   ]
  }
 },
 "oasis": {
  "clave": "OASIS",
  "sigla": "OASIS",
  "titulo": "Escala Global de Gravedad e Interferencia de la Ansiedad",
  "para": "Medir en cinco preguntas la frecuencia y la intensidad de la ansiedad, la evitación y cuánto interfiere en el trabajo, el estudio, el hogar y la vida social durante la última semana. No es específica de un trastorno: sirve para cualquier problema de ansiedad, también por debajo del umbral diagnóstico, y está pensada para aplicarse en cada sesión.",
  "areas": [
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Norman, Cissell, Means-Christensen y Stein (2006) · versión en castellano de Osma et al. (2019), en el Protocolo unificado (Alianza).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Los siguientes ítems preguntan sobre ansiedad. Para cada ítem, rodee el número que mejor describa su experiencia durante la última semana."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No me sentí ansioso durante la última semana.",
     "Ansiedad infrecuente. Me sentí ansioso en algunos momentos.",
     "Ansiedad ocasional. La mitad del tiempo me sentí ansioso y la otra mitad no. Me costó relajarme.",
     "Ansiedad frecuente. Me sentí ansioso la mayor parte del tiempo. Me resultó muy difícil relajarme.",
     "Ansiedad constante. Me sentí ansioso todo el tiempo y nunca llegué a relajarme."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Durante la última semana, ¿con qué frecuencia te has sentido ansioso?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Poco o nada. La ansiedad estuvo ausente o casi no la noté.",
     "Leve. La ansiedad fue de baja intensidad. Pude relajarme cuando lo intenté. Los síntomas físicos fueron solo un poco molestos.",
     "Moderada. La ansiedad me generó malestar en algunos momentos. Me resultó difícil relajarme o concentrarme, pero pude hacerlo cuando lo intenté. Los síntomas físicos fueron molestos.",
     "Severa. La ansiedad fue intensa la mayor parte del tiempo. Me resultó muy difícil relajarme o concentrarme en cualquier otra cosa. Los síntomas físicos fueron enormemente molestos.",
     "Extrema. La ansiedad me sobrepasó. Me fue totalmente imposible relajarme. Los síntomas físicos fueron insoportables."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "2. Durante la última semana, cuando te sentiste ansioso, ¿cómo de intensa o grave fue tu ansiedad?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguna. No evité lugares, situaciones, actividades o cosas por miedo.",
     "Infrecuente. Evité algunas cosas de vez en cuando, pero por lo general me enfrenté a las situaciones u objetos. Mi estilo de vida no se vio afectado.",
     "Ocasional. Tuve algo de miedo a ciertas situaciones, lugares u objetos, pero todavía pude manejarlos. Mi estilo de vida sufrió pocos cambios. Siempre o casi siempre evité las cosas que me dan miedo si estaba solo, pero las pude manejar si alguien venía conmigo.",
     "Frecuente. Tuve bastante miedo y realmente intenté evitar las cosas que me asustan. He hecho cambios significativos en mi estilo de vida para evitar objetos, situaciones, actividades o lugares.",
     "Todo el tiempo. Evitar objetos, situaciones, actividades o lugares ha ocupado gran parte de mi vida. Mi estilo de vida se ha visto enormemente afectado y ya no hago cosas con las que solía disfrutar."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "3. Durante la última semana, ¿con qué frecuencia evitaste situaciones, lugares, objetos o actividades debido a tu ansiedad o miedo?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada. La ansiedad no interfirió en mi trabajo/hogar/colegio.",
     "Leve. La ansiedad me causó algo de interferencia en mi trabajo/hogar/colegio. Las cosas eran más difíciles, pero pude realizar todo lo que necesitaba hacer.",
     "Moderada. La ansiedad definitivamente interfirió en mis tareas. He podido realizar la mayoría de las cosas, pero solo algunas las he hecho tan bien como en el pasado.",
     "Severa. La ansiedad verdaderamente ha cambiado mi capacidad para hacer las cosas. Algunas cosas las he podido realizar, pero otras no. Mi rendimiento se ha visto definitivamente afectado.",
     "Extrema. La ansiedad ha llegado a ser incapacitante. He sido incapaz de completar mis tareas y he tenido que irme del colegio, he dejado o me han despedido de mi trabajo o he sido incapaz de completar las tareas del hogar y he sufrido consecuencias como desalojos, cobradores de facturas, etc."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "4. Durante la última semana, ¿en qué medida ha interferido la ansiedad en tu capacidad para hacer las cosas que necesitabas hacer en el trabajo, el colegio o en tu hogar?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada. La ansiedad no interfirió en mis relaciones.",
     "Leve. La ansiedad apenas interfirió en mis relaciones. Algunas de mis amistades y otras relaciones se han visto afectadas, pero en conjunto mi vida social sigue siendo satisfactoria.",
     "Moderada. La ansiedad interfirió algo en mi vida social, pero sigo teniendo algunas relaciones cercanas. No paso tanto tiempo con otros como en el pasado, pero sigo teniendo relaciones sociales algunas veces.",
     "Severa. Mis amistades y otras relaciones se han visto muy afectadas a causa de mi ansiedad. No disfruto de las actividades sociales. Tengo muy pocas relaciones sociales.",
     "Extrema. La ansiedad ha alterado completamente mis actividades sociales. Todas mis relaciones se han visto afectadas o han finalizado. Mi vida familiar es extremadamente tensa."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "5. Durante la última semana, ¿en qué medida ha interferido la ansiedad en tu vida social y en tus relaciones?"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,5)",
     "rangos": [
      [
       0,
       9,
       "Por debajo del punto de corte"
      ],
      [
       10,
       20,
       "Sobre el punto de corte (10, Osma et al., 2019); en la validación colombiana el corte es 11"
      ]
     ]
    }
   ]
  }
 },
 "oci-r": {
  "clave": "OCI-R",
  "sigla": "OCI-R",
  "titulo": "Inventario Obsesivo-Compulsivo Revisado",
  "para": "Medir la gravedad de los síntomas obsesivo-compulsivos y su tipo: lavado, comprobación, orden, acumulación, neutralización (contar, números) y obsesiones. Es breve y sirve para tamizar y para seguir el tratamiento.",
  "areas": [
   "TOC y conductas repetitivas"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Foa et al. (2002), Psychological Assessment · versión española de Belloch et al. (2013).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Marca una opción por ítem según la siguiente escala:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "En absoluto",
     "Un poco",
     "Bastante",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Acumular cosas hasta el punto que le estorban.",
     "2. Comprobar las cosas más a menudo de lo necesario.",
     "3. Que las cosas no estén bien ordenadas.",
     "4. Sentir la necesidad de contar mientras está haciendo cosas.",
     "5. Tocar un objeto cuando sabe que lo han tocado desconocidos o ciertas personas.",
     "6. No poder controlar sus propios pensamientos.",
     "7. Acumular cosas que no necesita.",
     "8. Comprobar repetidamente puertas, ventanas, cajones...",
     "9. Que los demás cambien la manera en que ha ordenado las cosas.",
     "10. Tener necesidad de repetir ciertos números.",
     "11. Tener a veces que asearse o lavarse por el mero hecho de sentirse contaminado/a.",
     "12. Tener pensamientos desagradables en contra de su voluntad.",
     "13. Sentirse incapaz de tirar cosas por temor a necesitarlas después.",
     "14. Comprobar repetidamente el gas, el agua y la luz después de haberlos cerrado/apagado.",
     "15. Tener la necesidad de que las cosas estén ordenadas de una determinada manera.",
     "16. Sentir que existen números buenos y malos.",
     "17. Lavarse las manos más a menudo y durante más tiempo de lo necesario.",
     "18. Tener con frecuencia pensamientos repugnantes y que le cueste librarse de ellos."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,18)",
     "rangos": [
      [
       0,
       20,
       "Por debajo del punto de corte"
      ],
      [
       21,
       72,
       "Probable TOC (21 o más): confirme con entrevista"
      ]
     ]
    },
    {
     "n": "Acumulación",
     "js": "L([1, 7, 13])",
     "texto": "De 0 a 12."
    },
    {
     "n": "Comprobación",
     "js": "L([2, 8, 14])",
     "texto": "De 0 a 12."
    },
    {
     "n": "Orden",
     "js": "L([3, 9, 15])",
     "texto": "De 0 a 12."
    },
    {
     "n": "Neutralización",
     "js": "L([4, 10, 16])",
     "texto": "De 0 a 12."
    },
    {
     "n": "Lavado",
     "js": "L([5, 11, 17])",
     "texto": "De 0 a 12."
    },
    {
     "n": "Obsesión",
     "js": "L([6, 12, 18])",
     "texto": "De 0 a 12."
    }
   ]
  }
 },
 "odsis": {
  "clave": "ODSIS",
  "sigla": "ODSIS",
  "titulo": "Escala Global de Gravedad e Interferencia de la Depresión",
  "para": "Medir en cinco preguntas la frecuencia y la intensidad de la depresión, la pérdida de interés en lo que se disfrutaba y cuánto interfiere en el trabajo, el estudio, el hogar y la vida social durante la última semana. Es la hermana de la OASIS: no es específica de un trastorno y está pensada para aplicarse en cada sesión.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Bentley, Gallagher, Carl y Barlow (2014) · versión en castellano de Osma et al. (2019), en el Protocolo unificado (Alianza).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Los siguientes ítems preguntan sobre depresión. Para cada ítem, rodee el número que mejor describa su experiencia durante la última semana."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No me sentí deprimido durante la última semana.",
     "Depresión infrecuente. Me sentí deprimido en algunos momentos.",
     "Depresión ocasional. La mitad del tiempo me sentí deprimido y la otra mitad no.",
     "Depresión frecuente. Me sentí deprimido la mayor parte del tiempo.",
     "Depresión constante. Me sentí deprimido todo el tiempo."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Durante la última semana, ¿con qué frecuencia te has sentido deprimido?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Poco o nada. La depresión estuvo ausente o casi no la noté.",
     "Leve. La depresión fue de baja intensidad.",
     "Moderada. La depresión me generó malestar en algunos momentos.",
     "Severa. La depresión fue intensa la mayor parte del tiempo.",
     "Extrema. La depresión me sobrepasó."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "2. Durante la última semana, cuando te sentiste deprimido, ¿cómo de intensa o grave fue tu depresión?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguna. No tuve dificultades para realizar o interesarme en actividades que normalmente disfruto debido a la depresión.",
     "Infrecuente. Algunas veces tuve dificultades para realizar actividades o interesarme en actividades que normalmente disfruto, debido a la depresión. Mi estilo de vida no se vio afectado.",
     "Ocasional. Tuve algunas dificultades para realizar actividades o interesarme en actividades que normalmente disfruto, debido a la depresión. Mi estilo de vida sufrió pocos cambios.",
     "Frecuente. Tuve bastantes dificultades para realizar actividades o interesarme en actividades que normalmente disfruto, debido a la depresión. He realizado cambios significativos en mi estilo de vida por no poder interesarme en actividades que solía disfrutar.",
     "Todo el tiempo. No he podido participar o interesarme en actividades que normalmente disfruto, debido a la depresión. Mi estilo de vida se ha visto enormemente afectado y ya no hago cosas que solía disfrutar."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "3. Durante la última semana, ¿con qué frecuencia tuviste dificultad para realizar o interesarte en actividades que normalmente disfrutas debido a tu depresión?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada. La depresión no interfirió en mi trabajo/hogar/colegio.",
     "Leve. La depresión me causó algo de interferencia en mi trabajo/hogar/colegio. Las cosas fueron más difíciles, pero pude realizar todo lo que necesitaba hacer.",
     "Moderada. La depresión definitivamente interfirió en mis tareas. He podido realizar la mayoría de las cosas, pero solo algunas las he hecho tan bien como en el pasado.",
     "Severa. La depresión verdaderamente ha interferido en mis tareas. Algunas tareas las he podido realizar, pero muchas otras no. Mi rendimiento se ha visto definitivamente afectado.",
     "Extrema. La depresión ha llegado a ser incapacitante. He sido incapaz de completar mis tareas y he tenido que irme del colegio, he dejado o me han despedido de mi trabajo o he sido incapaz de completar las tareas del hogar y he sufrido consecuencias como desalojos, cobradores de facturas, etc."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "4. Durante la última semana, ¿en qué medida ha interferido la depresión en tu capacidad para hacer las cosas que necesitabas hacer en el trabajo, el colegio o en tu hogar?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada. La depresión no interfirió en mis relaciones.",
     "Leve. La depresión apenas interfirió en mis relaciones. Algunas de mis amistades y otras relaciones se han visto afectadas, pero en conjunto mi vida social sigue siendo satisfactoria.",
     "Moderada. La depresión ha interferido algo en mi vida social, pero sigo teniendo algunas relaciones cercanas. No paso tanto tiempo con otros como en el pasado, pero sigo manteniendo relaciones sociales algunas veces.",
     "Severa. Mis amistades y otras relaciones se han visto muy afectadas a causa de mi depresión. No disfruto de las actividades sociales. Tengo muy pocas relaciones sociales.",
     "Extrema. La depresión ha alterado completamente mis actividades sociales. Todas mis relaciones se han visto afectadas o han finalizado. Mi vida familiar es extremadamente tensa."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "5. Durante la última semana, ¿en qué medida ha interferido la depresión en tu vida social y en tus relaciones?"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,5)",
     "rangos": [
      [
       0,
       9,
       "Por debajo del punto de corte"
      ],
      [
       10,
       20,
       "Sobre el punto de corte (10, Osma et al., 2019); en la validación colombiana el corte es 12"
      ]
     ]
    }
   ]
  }
 },
 "pais": {
  "clave": "PAIS",
  "sigla": "PAIS-SR",
  "titulo": "Escala de Adaptación Psicosocial a la Enfermedad, autoaplicada",
  "para": "Evaluar cómo se adapta la persona a una enfermedad médica en siete áreas: cuidado de la salud, trabajo y economía, vida doméstica, sexualidad, vida social, apoyo de la familia y malestar psicológico. Señala dónde la enfermedad está afectando más.",
  "areas": [
   "Salud, sueño y síntomas físicos"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Derogatis (1986), Journal of Psychosomatic Research · PAIS-SR de 38 preguntas, tesis de la UNAM (anexo).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 1"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 2"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 3"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 4"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 5"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 6"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 7"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 8"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 9"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 10"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 11"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 12"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 13"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 14"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 15"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 16"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 17"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 18"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 19"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 20"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 21"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 22"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 23"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 24"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 25"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 26"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 27"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 28"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 29"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 30"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 31"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 32"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 33"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 34"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 35"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 36"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     3,
     2,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 37"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "a",
     "b",
     "c",
     "d"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 38"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Orientación al cuidado de la salud",
     "js": "S(1,5)",
     "texto": "De 0 a 15: a mayor puntaje, peor adaptación."
    },
    {
     "n": "Recursos físicos y económicos",
     "js": "S(6,10)",
     "texto": "De 0 a 15: a mayor puntaje, peor adaptación."
    },
    {
     "n": "Ámbito doméstico",
     "js": "S(11,14)",
     "texto": "De 0 a 12: a mayor puntaje, peor adaptación."
    },
    {
     "n": "Relaciones sexuales",
     "js": "S(15,20)",
     "texto": "De 0 a 18: a mayor puntaje, peor adaptación."
    },
    {
     "n": "Entorno social",
     "js": "S(21,27)",
     "texto": "De 0 a 21: a mayor puntaje, peor adaptación."
    },
    {
     "n": "Apoyo familiar",
     "js": "S(28,31)",
     "texto": "De 0 a 12: a mayor puntaje, peor adaptación."
    },
    {
     "n": "Malestar psicológico",
     "js": "S(32,38)",
     "texto": "De 0 a 21: a mayor puntaje, peor adaptación."
    },
    {
     "n": "Total",
     "js": "S(1,38)",
     "texto": "De 0 a 114: a mayor puntaje, peor adaptación. Percentiles 25, 50 y 75 de la muestra de la tesis (231 pacientes mexicanos): 22, 32 y 44.",
     "rangos": [
      [
       0,
       21,
       "Alta adaptación (por debajo del percentil 25)"
      ],
      [
       22,
       44,
       "Entre los percentiles 25 y 75"
      ],
      [
       45,
       114,
       "Baja adaptación (por encima del percentil 75)"
      ]
     ]
    }
   ]
  },
  "hoja": true
 },
 "panas": {
  "clave": "PANAS",
  "sigla": "PANAS",
  "titulo": "Escalas de Afecto Positivo y Negativo",
  "para": "Medir por separado el afecto positivo (interés, entusiasmo, energía) y el afecto negativo (miedo, culpa, irritabilidad, nerviosismo). En el tratamiento del afecto positivo se aplica al comienzo de cada sesión.",
  "areas": [
   "Bienestar y apoyo social",
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Watson, Clark y Tellegen (1988) · versión española de López-Gómez, Hervás y Vázquez (2015), Psicología Conductual.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Marque con una cruz la opción que refleje mejor cómo se ha sentido en la última semana, incluyendo el día de hoy:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada o muy ligeramente",
     "Un poco",
     "Moderadamente",
     "Bastante",
     "Mucho"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "1. Interesado/a por las cosas",
     "2. Angustiado/a",
     "3. Ilusionado/a o emocionado/a",
     "4. Afectado/a",
     "5. Fuerte",
     "6. Culpable",
     "7. Asustado/a",
     "8. Agresivo/a",
     "9. Entusiasmado/a",
     "10. Satisfecho/a consigo mismo/a",
     "11. Irritable",
     "12. Despierto/a",
     "13. Avergonzado/a",
     "14. Inspirado/a",
     "15. Nervioso/a",
     "16. Decidido/a",
     "17. Concentrado/a",
     "18. Agitado/a",
     "19. Activo/a",
     "20. Miedoso/a"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Afecto positivo",
     "js": "L([1, 3, 5, 9, 10, 12, 14, 16, 17, 19])",
     "texto": "De 10 a 50: a mayor puntaje, más afecto positivo. Referencia: 32,7 (DE 8,3) en población general española (López-Gómez et al., 2015, n = 1071)."
    },
    {
     "n": "Afecto negativo",
     "js": "L([2, 4, 6, 7, 8, 11, 13, 15, 18, 20])",
     "texto": "De 10 a 50: a mayor puntaje, más afecto negativo. Referencia: 20,1 (DE 7,6) en población general española, algo más alto en mujeres (López-Gómez et al., 2015)."
    }
   ]
  }
 },
 "pdss": {
  "clave": "PDSS",
  "sigla": "PDSS",
  "titulo": "Escala de Gravedad del Trastorno de Pánico",
  "para": "Medir la gravedad del trastorno de pánico en la última semana: frecuencia y malestar de las crisis, ansiedad anticipatoria, evitación de situaciones y de sensaciones, e interferencia en el trabajo y en la vida social. Sirve para seguir el tratamiento sesión a sesión.",
  "areas": [
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Shear et al. (1997) · traducción del Labpsitec (2003) · interpretación de Furukawa et al. (2009).",
  "bloques": [
   {
    "t": "consigna",
    "x": "A continuación, le presentamos una serie de preguntas relacionadas con sus ataques de pánico. Marque con una cruz la respuesta que mejor explique cómo interfieren estos ataques en su vida."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ni ataques de pánico ni crisis de síntomas limitados.",
     "Ligero: Ningún ataque de pánico y no más de una crisis de síntomas limitada al día.",
     "Moderado: Uno o dos ataques de pánico y/o múltiples crisis de síntomas limitados al día.",
     "Severo: Más de dos ataques de pánico, pero no más de uno al día en promedio",
     "Extremo: Los ataques de pánico ocurrieron más de una vez al día la mayoría de días."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. ¿Cuántos ataques de pánico y crisis de síntomas limitados ha tenido durante la semana?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "En absoluto desagradables, o sin ataques de pánico ni crisis de síntomas limitados durante la semana pasada.",
     "Ligeramente desagradable (no demasiado intenso).",
     "Moderadamente desagradable (intenso, pero manejable).",
     "Severamente desagradable (muy intenso).",
     "Extremadamente desagradable (extremo malestar durante todos los ataques)."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "2. Si ha tenido algún ataque de pánico durante la semana pasada, ¿cuán desagradables (molestos, espantosos) fueron mientras estaban sucediendo? (si ha tenido más de uno saque un promedio entre ellos; si no ha tenido ningún ataque de pánico pero sí crisis de síntomas limitados, responda teniendo en cuenta estas crisis)."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No, en absoluto.",
     "Ocasional o tan solo ligeramente.",
     "Frecuentemente o de manera moderada.",
     "Muy a menudo o de una manera muy molesta.",
     "Prácticamente siempre y de manera muy molesta."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "3. Durante la semana pasada, ¿cuánto le ha preocupado o sentido ansiedad acerca de cuándo sería el próximo ataque de pánico o acerca de miedos relacionados con los ataques? (por ejemplo, que signifiquen que tiene problemas físicos o mentales, o que puedan avergonzarle en público)."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguno. Ni miedo ni evitación.",
     "Ligero. Miedo y/o evitación ocasional, aunque normalmente pude controlar o aguantar la situación. Mi día a día apenas cambió debido a esto.",
     "Moderado. Miedo y/o evitación evidente, pero aún manejable. Evité algunas situaciones, pero pude afrontarlas en compañía. Mi día a día se vio ligeramente afectado, pero mi funcionamiento general no se resintió.",
     "Severo. Evitación considerable. Mi día a día se modificó notablemente a causa de la evitación, lo que me dificultó realizar actividades cotidianas.",
     "Extremo. Temor y/o evitación extremadamente incapacitante. Mi día a día se vio tan afectado que no realicé incluso tareas importantes."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "4. Durante la semana pasada, ¿hubo algún lugar o situación (por ejemplo, transportes públicos, cines, multitudes, puentes, túneles, centros comerciales o estar solo) que evitara o que temiera (que se sintiera incómodo, quisiera evitar o irse) por temor a tener un ataque de pánico? ¿Hay otras situaciones que haya evitado o que haya temido durante la semana por el mismo motivo? Si ha sido así, por favor, valore su nivel de miedo y evitación durante la semana pasada."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ni miedo ni evitación hacia actividades o situaciones debido a sensaciones físicas molestas.",
     "Ligero. Miedo y/o evitaciones ocasionales que normalmente pude controlar o aguantar, aunque con ligero malestar. Son actividades que me generan sensaciones físicas. Mi día a día no se vio afectado debido a esto.",
     "Moderado. La evitación era evidente pero manejable. Mi día a día se modificó, pero mi funcionamiento general no se vio afectado.",
     "Severo. Evitación importante. Mi día a día se modificó de manera importante y afectó a mi funcionamiento.",
     "Extremo. Evitación extremadamente incapacitante, mi día a día se vio tan afectado que no realicé ni las tareas importantes."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "5. Durante la semana pasada, ¿hubo alguna actividad (por ejemplo, ejercicio físico, relaciones sexuales, tomar un baño o una ducha calientes, beber café, mirar una película de acción o de miedo) que evitara o le diera miedo (que le resultara molesta, quisiera evitarla o detenerla) porque le generase sensaciones físicas similares a aquellas que siente durante los ataques de pánico o porque temiera que le provocara un ataque de pánico? ¿Hay otras actividades que, por ese mismo motivo, hubiera evitado, o le hubieran asustado si se hubieran presentado durante la semana? Si la respuesta es sí a cualquiera de las dos preguntas, por favor, valore el nivel de miedo y evitación hacia esas actividades durante la pasada semana."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sin interferencia en el trabajo ni en las responsabilidades del hogar.",
     "Ligera interferencia en trabajo o en las responsabilidades del hogar. Aun así pude hacer las cosas como las hubiera hecho sin tener esos problemas.",
     "Interferencia significativa con el trabajo o las tareas del hogar. A pesar de eso pude hacer las cosas que tenía que hacer.",
     "Interferencia importante en el trabajo o en las responsabilidades del hogar. Hubo varias cosas importantes que no pude hacer debido a estos problemas.",
     "Interferencia extremadamente incapacitante. En esencia fui incapaz de ocuparme del trabajo o de las responsabilidades del hogar."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "6. Durante la semana pasada, ¿en qué medida los síntomas que ha visto, en su conjunto (ataques de pánico, crisis de síntomas limitados y la preocupación por los ataques), han interferido con su habilidad para trabajar o llevar a cabo sus responsabilidades en el hogar? (si su trabajo o responsabilidades del hogar han sido inferiores a lo habitual durante la semana pasada, conteste en relación con lo que hubieran interferido en una semana normal)."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sin interferencia.",
     "Ligera interferencia con actividades sociales, pero pude hacer casi todo lo que haría sin haber tenido estos problemas.",
     "Interferencia significativa con actividades sociales, pero pude ser capaz de hacer la mayoría de cosas haciendo un esfuerzo.",
     "Interferencia importante en las actividades sociales. Hubo algunas actividades sociales que no pude hacer debido a estos problemas.",
     "Interferencia extremadamente incapacitante, tanto que prácticamente no hubo ninguna actividad social que pudiera hacer."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "7. Durante la semana pasada, ¿cuánto interfirieron en su vida social los ataques de pánico o las crisis de síntomas limitados, la preocupación por dichos ataques o el temor ante ciertas situaciones y actividades? (si durante la semana pasada no tuvo muchas oportunidades para socializar, responda cuánto cree que habría interferido de haberlas tenido)."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Para el clínico: ¿la persona tiene agorafobia?"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total (0 a 28)",
     "js": "S(1,7)",
     "rangos_por": [
      {
       "si": "r[8] === 1",
       "rangos": [
        [
         0,
         2,
         "Normal"
        ],
        [
         3,
         7,
         "Límite"
        ],
        [
         8,
         10,
         "Levemente enfermo"
        ],
        [
         11,
         15,
         "Moderadamente enfermo"
        ],
        [
         16,
         28,
         "Marcadamente enfermo"
        ]
       ]
      },
      {
       "si": "r[8] === 0",
       "rangos": [
        [
         0,
         1,
         "Normal"
        ],
        [
         2,
         5,
         "Límite"
        ],
        [
         6,
         9,
         "Levemente enfermo"
        ],
        [
         10,
         13,
         "Moderadamente enfermo"
        ],
        [
         14,
         28,
         "Marcadamente enfermo"
        ]
       ]
      }
     ],
     "sin_rango": "Responda la pregunta final (agorafobia) para ver la gravedad. Remisión: 5 o menos."
    }
   ]
  }
 },
 "psyrats": {
  "clave": "PSYRATS",
  "sigla": "PSYRATS",
  "titulo": "Escalas de Valoración de los Síntomas Psicóticos",
  "para": "Medir en detalle las alucinaciones auditivas y los delirios, más allá de su presencia: frecuencia, duración, convicción, contenido negativo, angustia, interferencia en la vida y control. Sirve para formular el caso y para seguir el cambio en la terapia cognitiva de la psicosis.",
  "areas": [
   "Síntomas psicóticos"
  ],
  "quien": [
   "profesional"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Haddock et al. (1999), Psychological Medicine · versión española de González et al. (2003), Actas Españolas de Psiquiatría.",
  "bloques": [
   {
    "t": "consigna",
    "x": "La siguiente entrevista estructurada está diseñada para elicitar detalles específicos que tenga en cuenta diferentes dimensiones de las alucinaciones auditivas. Cuando se hacen las preguntas, la entrevista está diseñada para valorar las experiencias del paciente en la última semana para la mayoría de los ítems. Hay dos excepciones para esto, por ejemplo, cuando se pregunta sobre las creencias que tienen que ver con las causas de las voces, se valoran las respuestas de los pacientes basadas en lo que ellos creen en el momento de ser entrevistados. La intensidad de las voces también sería valorado de acuerdo con la intensidad de las voces en el momento de la entrevista o en el último momento en el que el paciente la experimentó."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no se presentan o se presenta menos de una vez a la semana.",
     "1 Las voces ocurren al menos una vez a la semana.",
     "2 Las voces ocurren al menos una vez al día.",
     "3 Las voces ocurren al menos una vez a la hora.",
     "4 Las voces ocurren continuamente o casi constantemente, por ejemplo, sólo paran unos pocos segundos o minutos."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Frecuencia. ¿Con qué frecuencia escuchas voces? (por ejemplo, cada día, a lo largo de todo el día)."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no se presentan.",
     "1 Las voces duran unos pocos segundos, son fugaces.",
     "2 Las voces duran unos pocos minutos.",
     "3 Las voces duran al menos una hora.",
     "4 Las voces duran cuatro horas a la vez."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "2. Duración. Cuando escuchas tus voces, ¿Cuánto tiempo duran? (por ejemplo, unos pocos segundos, minutos, todo el día)."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no se presentan.",
     "1 Las voces parecen estar solamente dentro de la cabeza.",
     "2 Las voces están fuera de la cabeza, pero cerca de los oídos o cara. Las voces también pueden estar dentro de la cabeza.",
     "3 Las voces parecen como si estuvieran dentro o cerca de los oídos y fuera de la cabeza lejos de los oídos.",
     "4 Las voces parecen estar solamente fuera de la cabeza."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "3. Localización. Cuando escuchas tus voces ¿De dónde te parecen que vienen? ¿de dentro de tu cabeza o de fuera de tu cabeza? Si te parecen que vienen de fuera de tu cabeza, ¿de dónde te parecen que vienen?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no se presentan.",
     "1 La intensidad de las voces es más baja que la propia voz, son susurros.",
     "2 Más o menos de igual intensidad que la propia voz.",
     "3 Más alta que la propia voz.",
     "4 Extremadamente alta, gritan."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "4. Intensidad. ¿Son muy fuertes tus voces? ¿Las escuchas más fuerte que tu propia voz o son más calladas, como un cuchicheo?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no se presentan.",
     "1 El paciente cree que las voces son solamente generadas internamente y relacionadas con el yo.",
     "2 El paciente mantiene una convicción menor del 50% de que las voces son originadas por causas externas.",
     "3 El paciente mantiene una convicción del 50% o más (pero menos del 100%), de que las voces son originadas por causas externas.",
     "4 El paciente cree que las voces son solamente debidas a causas externas (100% de convicción)."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "5. Creencias sobre la procedencia de las voces. ¿Qué crees que produce o causa tus voces? ¿Son producidas por factores relacionados contigo mismo o debido a otras personas o factores externos? Si el paciente expresa un origen externo: ¿En qué medida crees que tus voces son causadas por......................................... (añade la atribución del paciente) sobre una escala de 0 a 100, siendo 100 que estás totalmente convencido, que no tiene dudas y 0 que no estás completamente convencido?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no presentan un contenido desagradable.",
     "1 Presentan ocasionalmente un contenido desagradable.",
     "2 Una minoría de las voces presentan un contenido desagradable o negativo (menos del 50%).",
     "3 La mayoría de las voces presentan un contenido desagradable o negativo (50% o más).",
     "4 El contenido de todas las voces es desagradable y negativo."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "6. Cantidad de contenido negativo de las voces. ¿Las voces te dicen cosas desagradables o negativas? ¿Puedes darme algún ejemplo de lo que te dicen las voces? (registra los ejemplos) ¿Cuántas veces las voces te dicen ese tipo de cosas desagradables o negativas?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no presentan un contenido desagradable o negativo.",
     "1 Las voces presentan algún grado de contenido negativo, pero no son comentarios personales relacionados con el yo o la familia, por ejemplo, palabrotas o comentarios no dirigidos al yo (\"el lechero es peligroso\").",
     "2 El contenido de las voces son insultos personales, comentarios sobre la conducta, por ejemplo, \"no deberías hacer esto\", \"no digas esto\".",
     "3 El contenido de las voces son insultos personales relacionados con el autoconcepto, por ejemplo, \"perezoso\", \"feo\", \"loco\", \"pervertido\".",
     "4 El contenido de las voces son amenazas personales al yo, por ejemplo, amenazas de dañar al yo o a la familia, instrucciones extremas u órdenes de dañarse a sí mismo u a otros e insultos personales como en el ítem número 3."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "7. Grado del contenido negativo. (Valorar usando los criterios sobre una escala, pidiéndole al paciente que los detalle más si es necesario)."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no son totalmente angustiantes.",
     "1 Las voces ocasionalmente son angustiantes, la mayoría no lo son. (<10%).",
     "2 Se presentan igual cantidad de voces angustiantes y no angustiantes. (50%).",
     "3 La mayoría de las voces son angustiantes, una minoría no lo son. (>50%).",
     "4 Las voces son siempre angustiantes."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "8. Cantidad de angustia. ¿Son tus voces angustiantes? ¿Por cuánto tiempo son angustiantes?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no son totalmente angustiantes.",
     "1 Las voces son ligeramente angustiantes.",
     "2 Las voces son moderadamente angustiantes.",
     "3 Las voces son muy angustiantes, aunque el paciente podría sentirse peor.",
     "4 Las voces son extremadamente angustiantes, el paciente no puede sentirse peor."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "9. Intensidad de la angustia. Cuando las voces son angustiantes, ¿cuánta angustia te causan? ¿Te causan una angustia mínima, moderada o grave?, ¿Son las más angustiantes que jamás has tenido?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las voces no producen un trastorno en la vida diaria del paciente, es capaz de mantener una vida independiente sin problemas en las habilidades para la vida diaria.",
     "1 Las voces causan un mínimo trastorno en la vida del paciente, por ejemplo, interfieren en la concentración aunque es capaz de mantener las actividades de la vida diaria y las relaciones sociales y familiares, es capaz de mantener vida independiente sin apoyo.",
     "2 Las voces provocan una cantidad moderada de trastorno en la vida del paciente, causando alguna perturbación en la actividad diaria y/o en las actividades familiares y sociales. El paciente no está en el hospital aunque puede vivir en un alojamiento protegido o recibir ayuda adicional en las habilidades de la vida diaria.",
     "3 Las voces provocan un trastorno severo en la vida del paciente de forma que su hospitalización es normalmente necesaria. El paciente es capaz de mantener algunas actividades diarias, auto-cuidado y relaciones durante su estancia en el hospital. El paciente puede también estar en un alojamiento protegido pero experimentando una severa perturbación de la vida en términos actividades, habilidades para la vida diaria y/o relaciones.",
     "4 Las voces provocan un completo trastorno en la vida diaria del paciente requiriendo hospitalización. Es incapaz de mantener actividades y relaciones sociales. El auto-cuidado está también gravemente trastornado."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "10. Trastorno causado por las voces en la vida del paciente. ¿Causan las voces mucho trastorno en tu vida diaria? ¿Las voces te impiden trabajar o hacer otras actividades diarias? ¿Interfieren en tus relaciones con amigos y/o familiares? ¿Ellas te impiden que te cuides a ti mismo, por ejemplo, bañarte, cambiarte de ropa, etc.?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 El paciente cree que tiene control sobre las voces y puede siempre provocarlas y eliminarlas a voluntad.",
     "1 El paciente cree que tiene algún control sobre las voces en la mayoría de las ocasiones.",
     "2 El paciente cree que tiene algún control sobre las voces aproximadamente la mitad de las veces.",
     "3 El paciente cree que tiene algún control sobre las voces pero solo ocasionalmente. La mayoría de las veces el paciente experimenta voces incontrolables.",
     "4 El paciente no tiene ningún control sobre la ocurrencia de las voces y no puede disminuirlas o aumentarlas."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "11. Control sobre las voces. ¿Piensas que tienes algún control sobre las voces para que ocurran? ¿Puedes a voluntad disminuir o aumentar las voces?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "consigna",
    "x": "La siguiente entrevista estructurada está diseñada para elicitar detalles específicos que tenga en cuenta diferentes dimensiones de las creencias delirantes. Cuando se hacen las preguntas, la entrevista está diseñada para valorar las experiencias del paciente en la última semana para la mayoría de los ítems. Hay una excepción para esto. Cuando valoramos la convicción, preguntar al paciente su convicción en el momento de la entrevista."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 El paciente no refiere delirios o refiere pensar en ellos menos de una vez a la semana.",
     "1 El paciente piensa en sus creencias al menos una vez a la semana.",
     "2 El paciente piensa en sus creencias al menos una vez al día.",
     "3 El paciente piensa en sus creencias al menos una vez a la hora.",
     "4 El paciente piensa en sus delirios continuamente o casi constantemente."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Cantidad de preocupación sobre los delirios. ¿Cuánto tiempo dedicas a pensar en tus creencias? (todo el tiempo, diariamente, semanalmente, etc.)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 El paciente no refiere ningún delirio.",
     "1 Los pensamientos sobre las creencias duran unos pocos segundos, son pensamientos fugaces.",
     "2 Los pensamientos sobre las creencias duran varios minutos.",
     "3 Los pensamientos sobre las creencias duran al menos una hora.",
     "4 Los pensamientos sobre las creencias normalmente duran varias horas a la vez."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "2. Duración de la preocupación con los delirios. Cuando piensas en tus creencias, ¿cuánto tiempo piensas en ellas? (unos pocos segundos, minutos, horas, etc.)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 El paciente no está convencido de sus creencias.",
     "1 Muy poca convicción en la realidad de sus creencias, menos del 10%.",
     "2 Algunas dudas con relación a la convicción de sus creencias, entre 10 y 49%.",
     "3 La convicción en sus creencias es muy fuerte, entre 50 y 99%.",
     "4 La convicción es del 100%."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "3. Convicción (en el momento de la entrevista). En este momento, ¿qué grado de convicción tienes que tus creencias son verdaderas? ¿Puedes valorarlas en una escala de 0 a 100, donde 100 significa que estás totalmente convencido de que tus creencias son auténticas y 0 significa que no estás convencido de ellas?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las creencias nunca provocan angustia.",
     "1 Las creencias provocan angustia en unas pocas ocasiones.",
     "2 Las creencias provocan angustia aproximadamente en el 50% de las ocasiones.",
     "3 Las creencias provocan angustia en la mayoría de las ocasiones, esto es, entre el 50 y 99% de las veces.",
     "4 Las creencias siempre provocan angustia cuando ocurren."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "4. Cantidad de angustia. ¿Te causan angustia tus creencias? ¿Cuántas veces te provocan angustia?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las creencias no provocan angustia.",
     "1 Las creencias provocan una ligera angustia.",
     "2 Las creencias provocan una moderada angustia.",
     "3 Las creencias provocan una marcada angustia.",
     "4 Las creencias provocan una angustia extrema, no pueden ser peor."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "5. Intensidad de la angustia. Cuando tus creencias te provocan angustia, ¿con qué grado de intensidad lo sientes?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Las creencias no trastornan su vida, es capaz de mantener una vida independiente sin problemas en las habilidades para la vida diaria. Es capaz de mantener relaciones familiares y sociales (si se presentan).",
     "1 Las creencias provocan una mínima cantidad de trastorno de la vida diaria, por ejemplo, interfieren en la concentración aunque es capaz de mantener las actividades diarias y las relaciones sociales y familiares y también en capaz de mantener una vida independiente sin apoyo.",
     "2 Las creencias provocan una cantidad moderada de trastorno en la vida, causando algún trastorno en las actividades diarias y/o en las actividades sociales o familiares. El paciente no está ingresado en el hospital aunque puede vivir en recurso protegido o recibir ayuda adicional en las habilidades para la vida diaria.",
     "3 Las creencias provocan un trastorno severo en la vida del paciente, de forma que la hospitalización es normalmente necesaria. Es capaz de mantener algunas actividades diarias, auto-cuidado y relaciones durante su estancia en el hospital. El paciente puede también estar en recurso protegido pero experimentando un trastorno severo en su vida con relación a actividades, habilidades para la vida diaria, y/o relaciones.",
     "4 Las creencias provocan un completo trastorno en su vida diaria siendo necesario la hospitalización. El paciente es incapaz de mantener cualquier actividad diaria y relaciones sociales. El auto-cuidado está gravemente trastornado."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "6. Trastorno en la vida diaria causado por las creencias. ¿Cuánto trastorno te provocan tus creencias en tu vida diaria? ¿Te impiden trabajar o hacer otras actividades diarias? ¿Interfieren en tus relaciones con amigos y/o familiares? ¿Te interfieren en tus habilidades para cuidarte a tí mismo, por ejemplo, bañarte, cambiarte de ropa, etc.?"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Alucinaciones auditivas",
     "js": "S(1,11)",
     "texto": "De 0 a 44: a mayor puntaje, alucinaciones más frecuentes, angustiantes e incontrolables. Sin puntos de corte: sirve para seguir el cambio."
    },
    {
     "n": "Delirios",
     "js": "S(12,17)",
     "texto": "De 0 a 24: a mayor puntaje, más preocupación, convicción, angustia e interferencia. Sin puntos de corte: sirve para seguir el cambio."
    }
   ]
  }
 },
 "ras": {
  "clave": "RAS",
  "sigla": "RAS",
  "titulo": "Inventario de Asertividad de Rathus",
  "para": "Medir la conducta asertiva: expresar desacuerdo, quejarse, decir que no, pedir, opinar y expresar sentimientos, frente a la inhibición y la evitación. Sirve para planear el entrenamiento en habilidades sociales y ver su efecto.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Rathus (1973), Behavior Therapy · versión española reproducida por Roca.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Indica hasta qué punto estás de acuerdo con cada una de las frases siguientes."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Muy de acuerdo",
     "Bastante de acuerdo",
     "Algo de acuerdo",
     "Algo en desacuerdo",
     "Bastante en desacuerdo",
     "Muy en desacuerdo"
    ],
    "vals": [
     3,
     2,
     1,
     -1,
     -2,
     -3
    ],
    "puntua": true,
    "items": [
     "1. Mucha gente parece ser más agresiva que yo.",
     "2. He dudado en solicitar o aceptar citas por timidez.",
     "3. Cuando la comida que me han servido en un restaurante no está hecha a mi gusto me quejo al camarero o camarera.",
     "4. Me esfuerzo en evitar ofender los sentimientos de otras personas aun cuando me hayan molestado.",
     "5. Cuando un vendedor se ha molestado mucho mostrándome un producto que luego no me agrada, paso un mal rato al decir \"no\".",
     "6. Cuando me dicen que haga algo, insisto en saber por qué.",
     "7. Hay veces en que provoco abiertamente una discusión.",
     "8. Lucho, como la mayoría de la gente, por mantener mi posición.",
     "9. En realidad, la gente se aprovecha con frecuencia de mí.",
     "10. Disfruto entablando conversación con conocidos y extraños.",
     "11. Con frecuencia no sé qué decir a personas atractivas del otro sexo.",
     "12. Rehuyo telefonear a instituciones y empresas.",
     "13. En caso de solicitar un trabajo o la admisión en una institución preferiría escribir cartas a realizar entrevistas personales.",
     "14. Me resulta embarazoso devolver un artículo comprado.",
     "15. Si un pariente cercano o respetable me molesta, prefiero ocultar mis sentimientos antes que expresar mi disgusto.",
     "16. He evitado hacer preguntas por miedo a parecer tonto o tonta.",
     "17. Durante una discusión, con frecuencia temo alterarme tanto como para ponerme a temblar.",
     "18. Si un eminente conferenciante hiciera una afirmación que considero incorrecta, yo expondría públicamente mi punto de vista.",
     "19. Evito discutir sobre precios con dependientes o vendedores.",
     "20. Cuando he hecho algo importante o meritorio, trato de que los demás se enteren de ello.",
     "21. Soy abierto y franco en lo que respecta a mis sentimientos.",
     "22. Si alguien ha hablado mal de mí o me ha atribuido hechos falsos, lo o la busco cuanto antes para dejar las cosas claras.",
     "23. Con frecuencia paso un mal rato al decir \"no\".",
     "24. Suelo reprimir mis emociones antes de hacer una escena.",
     "25. En el restaurante o en cualquier sitio semejante, protesto por un mal servicio.",
     "26. Cuando me alaban con frecuencia, no sé qué responder.",
     "27. Si dos personas en el teatro o en una conferencia están hablando demasiado alto, les digo que se callen o que se vayan a hablar a otra parte.",
     "28. Si alguien se me cuela en una fila, le llamo abiertamente la atención.",
     "29. Expreso mis opiniones con facilidad.",
     "30. Hay ocasiones en que soy incapaz de decir nada."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "L([3, 6, 7, 8, 10, 18, 20, 21, 22, 25, 27, 28, 29]) - L([1, 2, 4, 5, 9, 11, 12, 13, 14, 15, 16, 17, 19, 23, 24, 26, 30])",
     "texto": "De −90 a +90: a mayor puntaje, más asertividad. Sin puntos de corte."
    }
   ]
  }
 },
 "sad": {
  "clave": "SAD",
  "sigla": "SAD",
  "titulo": "Escala de Ansiedad y Evitación Sociales",
  "para": "Medir el malestar en situaciones sociales y la tendencia a evitarlas. Sirve para valorar la ansiedad social y para seguir el entrenamiento en habilidades sociales o la exposición.",
  "areas": [
   "Ansiedad",
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Watson y Friend (1969) · versión española de Zubeidat, Salinas y Sierra (2007), Clínica y Salud.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor, conteste si está de acuerdo o no con las siguientes afirmaciones."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "1. Me siento relajado incluso en situaciones sociales desconocidas.",
     "2. Intento evitar situaciones que me obligan a ser muy sociable.",
     "3. Normalmente suelo estar relajado cuando estoy con personas extrañas.",
     "4. Generalmente no deseo evitar a las personas.",
     "5. A menudo encuentro desagradables las situaciones sociales.",
     "6. Generalmente me encuentro tranquilo y cómodo en situaciones sociales.",
     "7. Normalmente me encuentro a gusto cuando hablo con alguien del sexo opuesto.",
     "8. Procuro evitar hablar con la gente, a no ser que la conozca bien.",
     "9. Si tengo oportunidad de conocer a personas nuevas, normalmente suelo hacerlo.",
     "10. A menudo me encuentro nervioso o intranquilo cuando por casualidad me encuentro con un grupo de personas de ambos sexos.",
     "11. Si no conozco bien a la gente, generalmente suelo sentirme nervioso cuando estoy con ellos.",
     "12. Normalmente me siento relajado cuando estoy con un grupo de personas.",
     "13. A menudo quiero evadirme de la gente.",
     "14. Normalmente me siento cómodo cuando estoy con un grupo de personas que no conozco.",
     "15. Normalmente me siento relajado cuando conozco a alguien por primera vez.",
     "16. Cuando me presentan a alguien me pongo nervioso y tenso.",
     "17. Puedo entrar en una sala aunque esté llena de personas desconocidas.",
     "18. Normalmente suelo evitar juntarme con un grupo grande de personas.",
     "19. Cuando mis superiores quieren hablar conmigo, lo hago con gusto.",
     "20. Cuando estoy con un grupo de gente suelo estar muy nervioso.",
     "21. Procuro evitar a las personas.",
     "22. No me importa hablar con gente en reuniones sociales.",
     "23. Raras veces me encuentro a gusto cuando estoy con un grupo de gente.",
     "24. Generalmente suelo inventar excusas para evitar los compromisos sociales.",
     "25. Algunas veces acepto la responsabilidad de presentar a las personas.",
     "26. Procuro evitar situaciones sociales formales.",
     "27. Generalmente acudo siempre a cualquier compromiso social que tenga.",
     "28. Creo que es fácil estar relajado en presencia de otras personas."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "C([2, 5, 8, 10, 11, 13, 16, 18, 20, 21, 23, 24, 26], 1) + C([1, 3, 4, 6, 7, 9, 12, 14, 15, 17, 19, 22, 25, 27, 28], 0)",
     "texto": "De 0 a 28. Sin puntos de corte; medias en adolescentes españoles: 7,6 sin psicopatología, 13,4 en ansiedad social específica y 17,0 en generalizada."
    }
   ]
  }
 },
 "scoff": {
  "clave": "SCOFF",
  "sigla": "SCOFF",
  "titulo": "Cuestionario SCOFF",
  "para": "Tamizar en cinco preguntas el riesgo de anorexia y bulimia: vómito provocado, pérdida de control sobre lo que se come, pérdida de peso, imagen corporal distorsionada y comida que domina la vida. Es breve y fácil de recordar, por eso sirve en consulta general y en entornos escolares.",
  "areas": [
   "Alimentación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Morgan et al. (1999), BMJ; versión colombiana de Rueda Jaimes et al. (2005), Atención Primaria, tabla 1.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Responda «Sí» o «No» a cada pregunta."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "1. ¿Usted se provoca el vómito porque se siente muy llena?",
     "2. ¿Le preocupa que haya perdido el control sobre la cantidad de comida que ingiere?",
     "3. ¿Ha perdido recientemente más de 7 kg en un período de 3 meses?",
     "4. ¿Cree que está gorda aunque los demás digan que está demasiado delgada?",
     "5. ¿Usted diría que la comida domina su vida?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Respuestas «Sí»",
     "js": "C([1,2,3,4,5],1)",
     "rangos": [
      [
       0,
       1,
       "Tamizaje negativo"
      ],
      [
       2,
       5,
       "Tamizaje positivo: riesgo de trastorno de la conducta alimentaria (2 o más)"
      ]
     ]
    }
   ]
  }
 },
 "scs": {
  "clave": "SCS",
  "sigla": "SCS",
  "titulo": "Escala de Autocompasión",
  "para": "Medir cómo se trata la persona a sí misma en los momentos difíciles: los tres componentes de la autocompasión (amabilidad consigo misma, humanidad común y mindfulness) y sus opuestos (autojuicio, aislamiento y sobreidentificación). Es la medida con que se evaluaron los estudios del programa de autocompasión consciente.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales",
   "Bienestar y apoyo social"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Neff (2003) · versión española de García-Campayo et al. (2014), Health and Quality of Life Outcomes · uso libre.",
  "bloques": [
   {
    "t": "consigna",
    "x": "¿Cómo actúo habitualmente hacia mí mismo en momentos difíciles?"
   },
   {
    "t": "consigna",
    "x": "Lea cada frase cuidadosamente antes de contestar. En cada frase, marque la frecuencia con que se comporta de la manera indicada, utilizando la siguiente escala:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "",
     "",
     "",
     "Casi siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "1. Desapruebo mis propios defectos e incapacidades y soy crítico/a respecto a ellos.",
     "2. Cuando me siento bajo/a de ánimo, tiendo a obsesionarme y a fijarme en todo lo que va mal.",
     "3. Cuando las cosas me van mal, veo las dificultades como parte de lo que a todo el mundo le toca vivir",
     "4. Cuando pienso en mis deficiencias, tiendo a sentirme más separado/a y aislado/a del resto del mundo.",
     "5. Trato de ser cariñoso/a conmigo mismo/a cuando siento malestar emocional.",
     "6. Cuando fallo en algo importante para mí, me consumen los sentimientos de ineficacia.",
     "7. Cuando estoy desanimado y triste, me acuerdo de que hay muchas personas en el mundo que se sienten como yo.",
     "8. Cuando vienen épocas muy difíciles, tiendo a ser duro/a conmigo mismo/a.",
     "9. Cuando algo me disgusta trato de mantener mis emociones en equilibrio.",
     "10. Cuando me siento incapaz de alguna manera, trato de recordarme que casi todas las personas comparten sentimientos de incapacidad.",
     "11. Soy intolerante e impaciente con aquellos aspectos de mi personalidad que no me gustan.",
     "12. Cuando lo estoy pasando verdaderamente mal, me doy el cuidado y el cariño que necesito.",
     "13. Cuando estoy bajo/a de ánimo, tiendo a pensar que, probablemente, la mayoría de la gente es más feliz que yo.",
     "14. Cuando me sucede algo doloroso trato de mantener una visión equilibrada de la situación.",
     "15. Trato de ver mis defectos como parte de la condición humana.",
     "16. Cuando veo aspectos de mí mismo/a que no me gustan, me critico continuamente.",
     "17. Cuando fallo en algo importante para mí, trato de ver las cosas con perspectiva.",
     "18. Cuando realmente estoy en apuros, tiendo a pensar que otras personas lo tienen más fácil.",
     "19. Soy amable conmigo mismo/a cuando estoy experimentando sufrimiento.",
     "20. Cuando algo me molesta me dejo llevar por mis sentimientos.",
     "21. Puedo ser un poco insensible hacia mí mismo/a cuando estoy experimentando sufrimiento.",
     "22. Cuando me siento deprimido/a trato de observar mis sentimientos con curiosidad y apertura de mente.",
     "23. Soy tolerante con mis propios defectos e imperfecciones o debilidades.",
     "24. Cuando sucede algo doloroso tiendo a hacer una montaña de un grano de arena.",
     "25. Cuando fallo en algo que es importante para mí, tiendo a sentirme solo en mi fracaso.",
     "26. Trato de ser comprensivo y paciente con aquellos aspectos de mi personalidad que no me gustan."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total (promedio de las seis, con las negativas invertidas)",
     "js": "Math.round(((L([5, 12, 19, 23, 26]) / 5) + (6 - (L([1, 8, 11, 16, 21]) / 5)) + (L([3, 7, 10, 15]) / 4) + (6 - (L([4, 13, 18, 25]) / 4)) + (L([9, 14, 17, 22]) / 4) + (6 - (L([2, 6, 20, 24]) / 4))) / 6 * 100) / 100",
     "rangos": [
      [
       1,
       2.49,
       "Autocompasión baja"
      ],
      [
       2.5,
       3.5,
       "Autocompasión moderada"
      ],
      [
       3.51,
       5,
       "Autocompasión alta"
      ]
     ]
    },
    {
     "n": "Autoamabilidad (promedio)",
     "js": "Math.round((L([5, 12, 19, 23, 26]) / 5) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, más autocompasión. Referencia: 3,14 (DE 0,68) en universitarios españoles (García-Campayo et al., 2014, n = 268)."
    },
    {
     "n": "Autojuicio (promedio)",
     "js": "Math.round((L([1, 8, 11, 16, 21]) / 5) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, menos autocompasión. Referencia: 3,02 (DE 0,71) en universitarios españoles (García-Campayo et al., 2014, n = 268)."
    },
    {
     "n": "Humanidad común (promedio)",
     "js": "Math.round((L([3, 7, 10, 15]) / 4) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, más autocompasión. Referencia: 2,91 (DE 0,65) en universitarios españoles (García-Campayo et al., 2014, n = 268)."
    },
    {
     "n": "Aislamiento (promedio)",
     "js": "Math.round((L([4, 13, 18, 25]) / 4) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, menos autocompasión. Referencia: 2,87 (DE 0,72) en universitarios españoles (García-Campayo et al., 2014, n = 268)."
    },
    {
     "n": "Mindfulness (promedio)",
     "js": "Math.round((L([9, 14, 17, 22]) / 4) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, más autocompasión. Referencia: 3,18 (DE 0,74) en universitarios españoles (García-Campayo et al., 2014, n = 268)."
    },
    {
     "n": "Sobreidentificación (promedio)",
     "js": "Math.round((L([2, 6, 20, 24]) / 4) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, menos autocompasión. Referencia: 3,14 (DE 0,77) en universitarios españoles (García-Campayo et al., 2014, n = 268)."
    }
   ]
  }
 },
 "shaps": {
  "clave": "SHAPS",
  "sigla": "SHAPS",
  "titulo": "Escala de Placer de Snaith-Hamilton",
  "para": "Medir la anhedonia de forma directa: cuánto puede la persona disfrutar de experiencias comunes de cuatro dominios, que son los intereses y pasatiempos, la vida social, las sensaciones y la comida y la bebida. No mide tristeza: es útil cuando lo que domina es la pérdida de placer.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Snaith et al. (1995); versión en español de Fresán y Berlanga (2013), Actas Españolas de Psiquiatría, figura 1.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Instrucciones: Este cuestionario está diseñado para evaluar qué tanto ha podido usted experimentar agrado o sensaciones placenteras durante los últimos días. Es importante que lea completas las oraciones y marque con una «X» la respuesta que mejor lo describa. La información obtenida servirá para poder conocer mejor su sentir y brindarle el tratamiento más adecuado."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Totalmente en desacuerdo",
     "En desacuerdo",
     "De acuerdo",
     "Totalmente de acuerdo"
    ],
    "vals": [
     1,
     1,
     0,
     0
    ],
    "puntua": true,
    "items": [
     "1. Disfruto de mi programa favorito de radio o televisión",
     "2. Disfruto estar con mi familia o amigos",
     "3. Disfruto mis pasatiempos",
     "4. Disfruto de mi comida favorita",
     "5. Disfruto de un baño caliente o refrescante",
     "6. Me causa placer percibir el aroma de las flores, de la brisa o del pan recién hecho",
     "7. Disfruto ver a otras personas sonreír",
     "8. Disfruto el verme bien cuando trato de cuidar mi apariencia",
     "9. Disfruto leer un libro, una revista o el periódico",
     "10. Me resulta muy agradable el tomar una taza de café, de té o de mi bebida favorita",
     "11. Me produce placer el fijarme en pequeños detalles como un día soleado o una llamada telefónica de un amigo",
     "12. Disfruto un paisaje o una vista hermosa",
     "13. Disfruto el poder ayudar a otros",
     "14. Disfruto cuando otras personas me halagan"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,14)",
     "rangos": [
      [
       0,
       2,
       "Tono hedónico dentro de lo esperado"
      ],
      [
       3,
       14,
       "Anhedonia (más de 2)"
      ]
     ]
    }
   ]
  }
 },
 "spin": {
  "clave": "SPIN",
  "sigla": "SPIN",
  "titulo": "Inventario de Fobia Social",
  "para": "Medir la ansiedad social en la última semana en sus tres componentes: miedo a las situaciones sociales y de evaluación, evitación y malestar físico (sonrojo, sudor, temblor, palpitaciones). Sirve para tamizar y para seguir el tratamiento.",
  "areas": [
   "Ansiedad",
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Connor et al. (2000), British Journal of Psychiatry · traducción de EspectroAutista.Info.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Las siguientes frases describen problemas que usted puede haber padecido. Recapacite sobre las ocasiones en que los ha sufrido durante la última semana, e indique cuál de las 5 opciones describe mejor cuánto le han afectado esos problemas."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Muy poco",
     "Un poco",
     "Muchísimo",
     "Sin cesar"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Me espanto ante la gente con autoridad.",
     "2. Me molesta sonrojarme delante de la gente.",
     "3. Las fiestas y acontecimientos sociales me asustan.",
     "4. Evito hablar con la gente que no conozco.",
     "5. Cuando me critican me alarmo mucho.",
     "6. El miedo a sentirme avergonzado me lleva a evitar hacer cosas o a hablar con la gente.",
     "7. Sudar delante de la gente me incomoda.",
     "8. Evito ir a fiestas.",
     "9. Evito las actividades en las que soy el centro de atención.",
     "10. Hablar con desconocidos me asusta.",
     "11. Evito tener que hablar ante una audiencia.",
     "12. Haría cualquier cosa para evitar ser criticado.",
     "13. Me molesta tener palpitaciones cuando estoy entre la gente.",
     "14. Me atemoriza hacer cosas cuando la gente me mira.",
     "15. Sentirme avergonzado o parecer estúpido son mis peores miedos.",
     "16. Evito hablar a cualquier persona importante.",
     "17. Me incomoda temblar o agitarme delante de la gente."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,17)",
     "rangos": [
      [
       0,
       18,
       "Por debajo del corte orientativo"
      ],
      [
       19,
       68,
       "Por encima del corte (19 o más): probable ansiedad social, confirme con entrevista"
      ]
     ]
    }
   ]
  }
 },
 "tmms-24": {
  "clave": "TMMS-24",
  "sigla": "TMMS-24",
  "titulo": "Escala Rasgo de Metaconocimiento Emocional",
  "para": "Evaluar la inteligencia emocional percibida en tres dimensiones de ocho ítems: atención a los propios sentimientos, claridad para comprenderlos y reparación, es decir, la capacidad de regular los estados emocionales. Orienta el trabajo en regulación emocional; no diagnostica.",
  "areas": [
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Fernández-Berrocal, Extremera y Ramos (2004), Psychological Reports · formato y puntos de corte del grupo de investigación de la Universidad de Málaga · permiso por confirmar.",
  "bloques": [
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Hombre",
     "Mujer"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Sexo de la persona evaluada (los puntos de corte cambian según el sexo)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "consigna",
    "x": "A continuación encontrará algunas afirmaciones sobre sus emociones y sentimientos. Lea atentamente cada frase y indique por favor el grado de acuerdo o desacuerdo con respecto a las mismas. Señale con una “X” la respuesta que más se aproxime a sus preferencias. No hay respuestas correctas o incorrectas, ni buenas o malas. No emplee mucho tiempo en cada respuesta."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada de acuerdo",
     "Algo de acuerdo",
     "Bastante de acuerdo",
     "Muy de acuerdo",
     "Totalmente de acuerdo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "Presto mucha atención a los sentimientos.",
     "Normalmente me preocupo mucho por lo que siento.",
     "Normalmente dedico tiempo a pensar en mis emociones.",
     "Pienso que merece la pena prestar atención a mis emociones y estado de ánimo.",
     "Dejo que mis sentimientos afecten a mis pensamientos.",
     "Pienso en mi estado de ánimo constantemente.",
     "A menudo pienso en mis sentimientos.",
     "Presto mucha atención a cómo me siento.",
     "Tengo claros mis sentimientos.",
     "Frecuentemente puedo definir mis sentimientos.",
     "Casi siempre sé cómo me siento.",
     "Normalmente conozco mis sentimientos sobre las personas.",
     "A menudo me doy cuenta de mis sentimientos en diferentes situaciones.",
     "Siempre puedo decir cómo me siento.",
     "A veces puedo decir cuáles son mis emociones.",
     "Puedo llegar a comprender mis sentimientos.",
     "Aunque a veces me siento triste, suelo tener una visión optimista.",
     "Aunque me sienta mal, procuro pensar en cosas agradables.",
     "Cuando estoy triste, pienso en todos los placeres de la vida.",
     "Intento tener pensamientos positivos aunque me sienta mal.",
     "Si doy demasiadas vueltas a las cosas, complicándolas, trato de calmarme.",
     "Me preocupo por tener un buen estado de ánimo.",
     "Tengo mucha energía cuando me siento feliz.",
     "Cuando estoy enfadado intento cambiar mi estado de ánimo."
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Atención (ítems 1 a 8)",
     "js": "S(2,9)",
     "rangos_por": [
      {
       "si": "r[1] === 0",
       "rangos": [
        [
         8,
         21,
         "Debe mejorar: presta poca atención"
        ],
        [
         22,
         32,
         "Adecuada atención"
        ],
        [
         33,
         40,
         "Debe mejorar: presta demasiada atención"
        ]
       ]
      },
      {
       "si": "r[1] === 1",
       "rangos": [
        [
         8,
         24,
         "Debe mejorar: presta poca atención"
        ],
        [
         25,
         35,
         "Adecuada atención"
        ],
        [
         36,
         40,
         "Debe mejorar: presta demasiada atención"
        ]
       ]
      }
     ],
     "sin_rango": "Marque el sexo para ver la interpretación."
    },
    {
     "n": "Claridad (ítems 9 a 16)",
     "js": "S(10,17)",
     "rangos_por": [
      {
       "si": "r[1] === 0",
       "rangos": [
        [
         8,
         25,
         "Debe mejorar su claridad"
        ],
        [
         26,
         35,
         "Adecuada claridad"
        ],
        [
         36,
         40,
         "Excelente claridad"
        ]
       ]
      },
      {
       "si": "r[1] === 1",
       "rangos": [
        [
         8,
         23,
         "Debe mejorar su claridad"
        ],
        [
         24,
         34,
         "Adecuada claridad"
        ],
        [
         35,
         40,
         "Excelente claridad"
        ]
       ]
      }
     ],
     "sin_rango": "Marque el sexo para ver la interpretación."
    },
    {
     "n": "Reparación (ítems 17 a 24)",
     "js": "S(18,25)",
     "rangos_por": [
      {
       "si": "r[1] === 0",
       "rangos": [
        [
         8,
         23,
         "Debe mejorar su reparación"
        ],
        [
         24,
         35,
         "Adecuada reparación"
        ],
        [
         36,
         40,
         "Excelente reparación"
        ]
       ]
      },
      {
       "si": "r[1] === 1",
       "rangos": [
        [
         8,
         23,
         "Debe mejorar su reparación"
        ],
        [
         24,
         34,
         "Adecuada reparación"
        ],
        [
         35,
         40,
         "Excelente reparación"
        ]
       ]
      }
     ],
     "sin_rango": "Marque el sexo para ver la interpretación."
    }
   ]
  }
 },
 "ysq": {
  "clave": "YSQ",
  "sigla": "YSQ-S3",
  "titulo": "Cuestionario de Esquemas de Young, versión corta III",
  "para": "Identificar los esquemas tempranos desadaptativos de la persona (18 esquemas, de privación emocional a castigo) para formular el caso y orientar la terapia de esquemas.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Young (2005), Young Schema Questionnaire, versión corta 3 · traducción del formato del docente.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Totalmente falso",
     "La mayoría de las veces falso",
     "Más falso que verdadero",
     "Más verdadero que falso",
     "La mayoría de las veces verdadero",
     "Totalmente verdadero"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23",
     "Ítem 24",
     "Ítem 25",
     "Ítem 26",
     "Ítem 27",
     "Ítem 28",
     "Ítem 29",
     "Ítem 30",
     "Ítem 31",
     "Ítem 32",
     "Ítem 33",
     "Ítem 34",
     "Ítem 35",
     "Ítem 36",
     "Ítem 37",
     "Ítem 38",
     "Ítem 39",
     "Ítem 40",
     "Ítem 41",
     "Ítem 42",
     "Ítem 43",
     "Ítem 44",
     "Ítem 45",
     "Ítem 46",
     "Ítem 47",
     "Ítem 48",
     "Ítem 49",
     "Ítem 50",
     "Ítem 51",
     "Ítem 52",
     "Ítem 53",
     "Ítem 54",
     "Ítem 55",
     "Ítem 56",
     "Ítem 57",
     "Ítem 58",
     "Ítem 59",
     "Ítem 60",
     "Ítem 61",
     "Ítem 62",
     "Ítem 63",
     "Ítem 64",
     "Ítem 65",
     "Ítem 66",
     "Ítem 67",
     "Ítem 68",
     "Ítem 69",
     "Ítem 70",
     "Ítem 71",
     "Ítem 72",
     "Ítem 73",
     "Ítem 74",
     "Ítem 75",
     "Ítem 76",
     "Ítem 77",
     "Ítem 78",
     "Ítem 79",
     "Ítem 80",
     "Ítem 81",
     "Ítem 82",
     "Ítem 83",
     "Ítem 84",
     "Ítem 85",
     "Ítem 86",
     "Ítem 87",
     "Ítem 88",
     "Ítem 89",
     "Ítem 90"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Privación emocional",
     "js": "L([1, 19, 37, 55, 73])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Abandono",
     "js": "L([2, 20, 38, 56, 74])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Desconfianza y abuso",
     "js": "L([3, 21, 39, 57, 75])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Aislamiento social",
     "js": "L([4, 22, 40, 58, 76])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Defectuosidad",
     "js": "L([5, 23, 41, 59, 77])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Fracaso",
     "js": "L([6, 24, 42, 60, 78])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Dependencia o incompetencia",
     "js": "L([7, 25, 43, 61, 79])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Vulnerabilidad",
     "js": "L([8, 26, 44, 62, 80])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Simbiosis",
     "js": "L([9, 27, 45, 63, 81])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Subyugación",
     "js": "L([10, 28, 46, 64, 82])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Autosacrificio",
     "js": "L([11, 29, 47, 65, 83])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Inhibición emocional",
     "js": "L([12, 30, 48, 66, 84])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Estándares inalcanzables",
     "js": "L([13, 31, 49, 67, 85])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Grandiosidad",
     "js": "L([14, 32, 50, 68, 86])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Disciplina insuficiente",
     "js": "L([15, 33, 51, 69, 87])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Búsqueda de reconocimiento",
     "js": "L([16, 34, 52, 70, 88])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Negatividad",
     "js": "L([17, 35, 53, 71, 89])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Castigo",
     "js": "L([18, 36, 54, 72, 90])",
     "texto": "De 5 a 30. Frases en 5 o 6: se cuentan aparte."
    },
    {
     "n": "Esquemas con 2 o más frases en 5 o 6",
     "js": "([1, 19, 37, 55, 73].filter(i => r[i] >= 5).length >= 2) + ([2, 20, 38, 56, 74].filter(i => r[i] >= 5).length >= 2) + ([3, 21, 39, 57, 75].filter(i => r[i] >= 5).length >= 2) + ([4, 22, 40, 58, 76].filter(i => r[i] >= 5).length >= 2) + ([5, 23, 41, 59, 77].filter(i => r[i] >= 5).length >= 2) + ([6, 24, 42, 60, 78].filter(i => r[i] >= 5).length >= 2) + ([7, 25, 43, 61, 79].filter(i => r[i] >= 5).length >= 2) + ([8, 26, 44, 62, 80].filter(i => r[i] >= 5).length >= 2) + ([9, 27, 45, 63, 81].filter(i => r[i] >= 5).length >= 2) + ([10, 28, 46, 64, 82].filter(i => r[i] >= 5).length >= 2) + ([11, 29, 47, 65, 83].filter(i => r[i] >= 5).length >= 2) + ([12, 30, 48, 66, 84].filter(i => r[i] >= 5).length >= 2) + ([13, 31, 49, 67, 85].filter(i => r[i] >= 5).length >= 2) + ([14, 32, 50, 68, 86].filter(i => r[i] >= 5).length >= 2) + ([15, 33, 51, 69, 87].filter(i => r[i] >= 5).length >= 2) + ([16, 34, 52, 70, 88].filter(i => r[i] >= 5).length >= 2) + ([17, 35, 53, 71, 89].filter(i => r[i] >= 5).length >= 2) + ([18, 36, 54, 72, 90].filter(i => r[i] >= 5).length >= 2)",
     "texto": "Número de esquemas (de 18) con al menos dos frases en 5 o 6: orientan qué esquemas explorar."
    }
   ]
  },
  "hoja": true
 },
 "srq-20-srq-30": {
  "clave": "SRQ-20 / SRQ-30",
  "sigla": "SRQ-30",
  "titulo": "Cuestionario de Autorreporte de Síntomas (Self Report Questionnaire)",
  "para": "Tamizar problemas de salud mental comunes, posible psicosis, trastorno convulsivo y problemas con el alcohol en el último mes. Es el que el Ministerio de Salud sugiere en la Ruta de Promoción y Mantenimiento de la Salud desde los 16 años.",
  "areas": [
   "Malestar general"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Organización Mundial de la Salud; versión colombiana del Ministerio de Salud y Protección Social (2020), Anexo 11.",
  "bloques": [
   {
    "t": "items",
    "titulo": null,
    "cab": "Pregunta",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "¿Tiene frecuentes dolores de cabeza?",
     "¿Tiene mal apetito?",
     "¿Duerme mal?",
     "¿Se asusta con facilidad?",
     "¿Sufre de temblor de manos?",
     "¿Se siente nervioso, tenso o aburrido?",
     "¿Sufre de mala digestión?",
     "¿No puede pensar con claridad?",
     "¿Se siente triste?",
     "¿Llora usted con mucha frecuencia?",
     "¿Tiene dificultad en disfrutar de sus actividades diarias?",
     "¿Tiene dificultad para tomar decisiones?",
     "¿Tiene dificultad en hacer su trabajo? (¿Sufre usted con su trabajo?)",
     "¿Es incapaz de desempeñar un papel útil en su vida?",
     "¿Ha perdido interés en las cosas?",
     "¿Siente que usted es una persona inútil?",
     "¿Ha tenido la idea de acabar con su vida?",
     "¿Se siente cansado todo el tiempo?",
     "¿Tiene sensaciones desagradables en su estómago?",
     "¿Se cansa con facilidad?",
     "¿Siente usted que alguien ha tratado de herirlo en alguna forma?",
     "¿Es usted una persona mucho más importante que lo que piensan los demás?",
     "¿Ha notado interferencias o algo raro en sus pensamientos?",
     "¿Oye voces sin saber de dónde vienen o que otras personas no pueden oír?",
     "¿Ha tenido convulsiones, ataques o caídas al suelo, como movimientos de brazos y piernas; con mordeduras de lengua o pérdida del conocimiento?",
     "¿Alguna vez le ha parecido a su familia, sus amigos, su médico o a su sacerdote que usted estaba bebiendo demasiado licor?",
     "¿Alguna vez ha querido dejar de beber, pero no ha podido?",
     "¿Ha tenido alguna vez dificultades en el trabajo (o estudio) a causa de la bebida, como beber en el trabajo o en el colegio, o faltar a ellos?",
     "¿Ha estado en riñas o lo han detenido estando borracho?",
     "¿Le ha parecido alguna vez que usted bebía demasiado?"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Problemas comunes (1-20)",
     "js": "C(RANGO(1,20),1)",
     "rangos": [
      [
       0,
       10,
       "Por debajo del corte"
      ],
      [
       11,
       20,
       "Alta probabilidad de un problema de salud mental común"
      ]
     ]
    },
    {
     "n": "Posible psicosis (21-24)",
     "js": "C([21,22,23,24],1)",
     "rangos": [
      [
       0,
       0,
       "Negativo"
      ],
      [
       1,
       4,
       "Posible caso"
      ]
     ]
    },
    {
     "n": "Trastorno convulsivo (25)",
     "js": "r[25] === 1 ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "Negativo"
      ],
      [
       1,
       1,
       "Alta probabilidad"
      ]
     ]
    },
    {
     "n": "Alcohol (26-30)",
     "js": "C([26,27,28,29,30],1)",
     "rangos": [
      [
       0,
       0,
       "Negativo"
      ],
      [
       1,
       5,
       "Alto riesgo: aplique el AUDIT"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "r[17] === 1",
     "texto": "Hay una respuesta que indica posible riesgo suicida. Pregunte directamente, en esta misma atención, y siga el protocolo de riesgo: la persona no se va sin una valoración de seguridad."
    }
   ]
  }
 },
 "rqc": {
  "clave": "RQC",
  "sigla": "RQC",
  "titulo": "Cuestionario de Síntomas para Niños",
  "para": "Detectar signos y síntomas de interés en salud mental en niñas y niños de 5 a 15 años, referidos a los últimos seis meses. Es el tamizaje infantil que sugiere el Ministerio de Salud en la Ruta de Promoción y Mantenimiento de la Salud.",
  "areas": [
   "Malestar general",
   "Neurodesarrollo y cognición"
  ],
  "quien": [
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Giel et al. (1981); versión colombiana del Ministerio de Salud y Protección Social (2020), Anexo 11.",
  "bloques": [
   {
    "t": "items",
    "titulo": null,
    "cab": "Preguntas",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "¿El lenguaje del niño es anormal en alguna forma?",
     "¿El niño duerme mal?",
     "¿Ha tenido el niño en algunas ocasiones convulsiones o caídas al suelo sin razón?",
     "¿Sufre el niño de dolores frecuentes de cabeza?",
     "¿El niño ha huido de casa frecuentemente?",
     "¿Ha robado algo de la casa?",
     "¿Se asusta o se pone nervioso sin razón?",
     "¿Parece como retardado o lento para aprender?",
     "¿El niño casi nunca juega con otros niños?",
     "¿El niño se orina o defeca en la ropa?"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Respuestas «Sí»",
     "js": "C(RANGO(1,10),1)",
     "rangos": [
      [
       0,
       0,
       "Negativo"
      ],
      [
       1,
       10,
       "Remitir a evaluación integral"
      ]
     ]
    }
   ]
  }
 },
 "crafft": {
  "clave": "CRAFFT",
  "sigla": "CRAFFT",
  "titulo": "CRAFFT 2.1+N",
  "para": "Tamizar el consumo de alcohol, cannabis y otras drogas en adolescentes de 12 a 21 años, con una parte de dependencia a la nicotina y al vaporizador. Sirve para decidir si hace falta una evaluación completa y para el consejo breve.",
  "areas": [
   "Consumo, juego y pantallas"
  ],
  "quien": [
   "profesional"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Knight et al.; CRAFFT 2.1+N, Boston Children's Hospital (2020), versión en español.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Entrevista que el profesional hace de forma oral. Comienzo: “Te voy a hacer algunas preguntas que les hago a todos los pacientes. Por favor responde sinceramente. Tus respuestas serán confidenciales”"
   },
   {
    "t": "dato",
    "x": "1. ¿Has bebido algo más que unos sorbos de cerveza, vino o alguna bebida con alcohol? Di “0” si la respuesta es ninguno.",
    "tipo": "numero",
    "unidad": "días"
   },
   {
    "t": "dato",
    "x": "2. ¿Has usado algún tipo de marihuana (cannabis, aceite, cera, para fumar, vaporizar, fumar dosis muy concentradas o “dabs” o en los alimentos) o “marihuana sintética” (como “K2”, “Spice”)? Di “0” si la respuesta es ninguno.",
    "tipo": "numero",
    "unidad": "días"
   },
   {
    "t": "dato",
    "x": "3. ¿Has usado algo más para drogarte (como otras drogas ilegales, medicamentos recetados o de venta libre, y cosas para inhalar, esnifar, vaporizar o inyectarse)? Di “0” si la respuesta es ninguno.",
    "tipo": "numero",
    "unidad": "días"
   },
   {
    "t": "dato",
    "x": "4. ¿Has usado un dispositivo vaporizador* que contiene nicotina o sabores, o algún producto de tabaco†? Di “0” si la respuesta es ninguno. * Como cigarrillos electrónicos, “mods”, dispositivos “pod” como JUUL, vaporizadores descartables como Puff Bar, vaporizadores tipo bolígrafo o pipas de agua electrónicas. † Pitillos, cigarros, cigarrillos, pipas, tabaco de mascar, tabaco rapé, “snus” o solubles.",
    "tipo": "numero",
    "unidad": "días"
   },
   {
    "t": "consigna",
    "x": "Si respondió 0 en todas las preguntas de la parte A, haga solo la primera pregunta de la parte B (CAR) y deténgase. Con 1 o más en las preguntas 1, 2 o 3, haga las 6 preguntas de la parte B. Con 1 o más en la pregunta 4, haga las 10 de la parte C."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     "C (CAR). ¿Alguna vez has viajado en un vehículo (CAR) conducido por alguien (incluido/a tú mismo/a) que estaba drogado o que había consumido alcohol o drogas?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     {
      "x": "R (RELAX). ¿Alguna vez consumes alcohol o drogas para relajarte (RELAX), sentirte mejor contigo mismo/a o integrarte en un grupo?",
      "si": "((r[1] || 0) + (r[2] || 0) + (r[3] || 0)) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     {
      "x": "A (ALONE). ¿Alguna vez consumes alcohol o drogas cuando estás solo/a (ALONE) o sin compañía?",
      "si": "((r[1] || 0) + (r[2] || 0) + (r[3] || 0)) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     {
      "x": "F (FORGET). ¿Alguna vez te olvidas (FORGET) de cosas que has hecho mientras consumías alcohol o drogas?",
      "si": "((r[1] || 0) + (r[2] || 0) + (r[3] || 0)) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     {
      "x": "F (FAMILY/FRIENDS). ¿Tus familiares o amigos (FAMILY or FRIENDS) alguna vez te dicen que deberías disminuir el consumo de alcohol o drogas?",
      "si": "((r[1] || 0) + (r[2] || 0) + (r[3] || 0)) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     {
      "x": "T (TROUBLE). ¿Alguna vez te has metido en problemas (TROUBLE) al consumir alcohol o drogas?",
      "si": "((r[1] || 0) + (r[2] || 0) + (r[3] || 0)) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "1. ¿Alguna vez has intentado DEJAR de consumir, pero no pudiste?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "2. ¿ACTUALMENTE usas vaporizador o tabaco porque te resulta muy difícil dejar de consumir?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "3. ¿Alguna vez has sentido que eres ADICTO/A al vaporizador o al tabaco?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "4. ¿Alguna vez sientes muchas GANAS de usar vaporizador o tabaco?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "5. ¿Alguna vez has sentido que realmente NECESITABAS usar vaporizador o tabaco?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "6. ¿Te resulta difícil evitar usar vaporizador o tabaco en LUGARES donde supuestamente no debes hacerlo, como la escuela?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "7. CuandoNO HAS USADO vaporizador o tabaco durante un tiempo (o cuando has intentado dejar de usarlo)…"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "7a. ¿te resultó difícil CONCENTRARTE porque no podías usar vaporizador o tabaco?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "7b. ¿te sentiste más IRRITABLE porque no podías usar vaporizador o tabaco?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "7c. ¿sentiste NECESIDAD o ganas intensas de usar vaporizador o tabaco?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     {
      "x": "7d. ¿te sentiste NERVIOSO/A, inquieto/a o ansioso/a porque no podías usar vaporizador o tabaco?",
      "si": "(r[4] || 0) > 0"
     }
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje CRAFFT (parte B)",
     "js": "S(5,10)",
     "rangos": [
      [
       0,
       1,
       "Riesgo bajo: menos de 2 respuestas «sí»"
      ],
      [
       2,
       6,
       "Problema serio con el consumo (2 o más): siga evaluando"
      ]
     ]
    },
    {
     "n": "Parte C (nicotina)",
     "js": "S(11,20)",
     "rangos": [
      [
       0,
       0,
       "Sin respuestas «sí»"
      ],
      [
       1,
       10,
       "Problema serio con la nicotina (1 o más «sí»): siga evaluando"
      ]
     ]
    }
   ]
  }
 },
 "cy-bocs": {
  "clave": "CY-BOCS",
  "sigla": "CY-BOCS",
  "titulo": "Escala de Yale-Brown para el Trastorno Obsesivo-Compulsivo en Niños y Adolescentes",
  "para": "Medir la gravedad del trastorno obsesivo-compulsivo en niños y adolescentes con una entrevista semiestructurada: tiempo, interferencia, malestar, resistencia y control de las obsesiones y de las compulsiones. Es la medida habitual para seguir el tratamiento.",
  "areas": [
   "TOC y conductas repetitivas"
  ],
  "quien": [
   "profesional"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Scahill et al. (1997), JAACAP · versión de Ulloa y de la Peña (México).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Marque con una «X» todos los síntomas presentes (considere presente lo que se describe en la última semana) o en el pasado (considere síntomas presentes en el episodio más severo en el pasado (EMSP) y señale con una «P» los síntomas principales. (El evaluador debe detectar si las conductas reportadas son síntomas genuinos del trastorno obsesivo-compulsivo y no síntomas de otros trastornos tales como fobia simple o hipocondriasis. Los reactivos señalados con un asterisco [*] pueden o no formar parte del trastorno obsesivo-compulsivo)."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Obsesiones de contaminación",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Preocupación por suciedad, gérmenes o algunas enfermedades",
     "Preocupación o repugnancia por desechos o secreciones del cuerpo (p. ej., orina, heces fecales, saliva)",
     "Preocupación excesiva por contaminantes ambientales (p. ej., asbestos, radiaciones, desechos",
     "Preocupación excesiva por artículos domésticos de limpieza (p. ej., blanqueadores, solventes)",
     "Preocupación excesiva por animales (p. ej., insectos)",
     "Se molesta excesivamente por sustancias pegajosas o por residuos",
     "Preocupación por que los contaminantes lo enfermen",
     "Preocupación de enfermar a otros por esparcir contaminantes (agresivo)",
     "Sólo se preocupa por cómo se sentirían las consecuencias de la contaminación",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Obsesiones de agresión",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Temor de lastimarse a sí mismo",
     "Temor de lastimar a los demás",
     "Temor de que algún daño venga a él/ella",
     "Temor de que otros resulten dañados por algo que él/ella hizo o no hizo",
     "Imágenes horribles o violentas",
     "Temor a expresar repentinamente obscenidades o insultos",
     "Temor de hacer algo vergonzoso*",
     "Temor de actuar de acuerdo a impulsos indeseables (p. ej., apuñalar a un familiar)",
     "Temor de robarse cosas",
     "Temor de ser responsable de que algo terrible pueda pasar (p. ej., incendio, asalto, inundación)",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Obsesiones sexuales. ¿Tienes pensamientos sobre el sexo? ¿Son repetitivos y preferirías no tenerlos porque te molestan?",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Pensamientos, imágenes o impulsos sexuales prohibidos o perversos",
     "El contenido involucra homosexualidad*",
     "Conducta sexual hacia otros (agresiva o en forma intencional)*",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Obsesiones de atesorar o coleccionar. ¿Tienes la idea repetitiva de guardar o coleccionar algo?",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Miedo a perder las cosas"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Pensamientos mágicos o supersticiones",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Números de buena o mala suerte, colores con significado especial",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Obsesiones somáticas",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Preocupaciones con enfermedades o padecimientos*",
     "Preocupación excesiva por alguna parte del cuerpo o la apariencia (dismorfofobia)*"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Obsesiones religiosas (escrupulosidad)",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Preocupación excesiva por ofender a Dios u otros objetos religiosos",
     "Preocupación excesiva con lo bueno y lo malo y con la moralidad"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Obsesiones varias",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Necesidad de saber o recordar",
     "Temor de decir ciertas cosas",
     "Temor de no decir las cosas correctamente",
     "Imágenes intrusivas (no violentas)",
     "Sonidos, palabras, música o números intrusivos",
     "Simetría, exactitud",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "Preguntas acerca de pensamientos obsesivos: Voy a preguntarte acerca de los pensamientos que no puedes evitar tener."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 NADA",
     "1 POCO Menos de una hora al día o intrusión ocasional.",
     "2 MODERADO De 1 a 3 horas al día o intrusión frecuente.",
     "3 MUCHO Más de 3 y hasta 8 horas al día o intrusiones muy frecuentes.",
     "4 EXTREMO Más de 8 horas al día, casi intrusión constante."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1.a) Tiempo ocupado por pensamientos obsesivos. ¿Cuánto tiempo pasas pensando en estas cosas? Cuando las obsesiones aparecen como intrusiones breves o intermitentes puede ser difícil establecer el tiempo que ocupan en horas totales. En estos casos, estime qué tan frecuentemente ocurren. Considere tanto el número de veces que las intrusiones aparecen como cuántas horas del día están afectadas. Evalúe la suma total de tiempo en el día. Pregunte: ¿Con qué frecuencia aparecen los pensamientos obsesivos y cuánto tiempo te duran? Esté seguro de excluir rumiaciones y preocupaciones, las cuales, a diferencia de las obsesiones, son egosintónicas y racionales, pero exageradas."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 SIN SÍNTOMAS",
     "1 LEVE Intervalos largos libres de síntomas, más de 8 horas consecutivas al día libres de síntomas.",
     "2 MODERADO Intervalos relativamente largos libres de síntomas, más de 3 horas y hasta 8 horas consecutivas al día libres de síntomas.",
     "3 SEVERO Intervalos cortos libres de síntomas, de 1 a 3 horas consecutivas al día libres de síntomas.",
     "4 EXTREMO Intervalos extremadamente cortos libres de síntomas, menos de una hora consecutiva al día libre de síntomas."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1.b) Intervalos libres de obsesiones (No se incluyen en el puntaje total). En promedio, ¿cuánto es la mayor cantidad de horas consecutivas que has podido pasar sin pensamientos obsesivos estando despierto? Si es necesario pregunte: ¿Cuál ha sido el tiempo más largo en el que los pensamientos obsesivos se encuentran ausentes?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 NINGUNA",
     "1 LEVE Discreta interferencia con actividades sociales y ocupacionales, sin afectarse el desempeño global.",
     "2 MODERADA Interferencia definitiva con el desempeño ocupacional y social, pero aún manejable.",
     "3 SEVERA Causa deterioro substancial en el desempeño social o escolar.",
     "4 EXTREMA Incapacitante."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "2. Interferencia debida a pensamientos obsesivos. ¿Qué tanto tus pensamientos obsesivos interfieren con tu trabajo en la escuela o las cosas que haces con tus amigos? ¿Hay algo que no hagas a causa de ellos? Si actualmente no va a la escuela, estime qué tanto del desempeño del paciente estaría afectado si estuviese acudiendo."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 NINGUNO",
     "1 LEVE Molestia infrecuente y no muy intensa.",
     "2 MODERADO Frecuentemente molesto pero aún manejable.",
     "3 SEVERO Muy frecuente y severamente molesto.",
     "4 EXTREMO Casi constante, malestar incapacitante."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "3. Malestar asociado a pensamientos obsesivos. ¿Qué tanto estos pensamientos te preocupan molestan o afectan? En la mayoría de los casos, malestar es igual a ansiedad; sin embargo, los pacientes pueden reportar que sus obsesiones son molestas pero niegan ansiedad. Sólo califique la ansiedad o frustración que parece estar disparada por las obsesiones, no la ansiedad generalizada o la ligada a otros síntomas."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Hace un esfuerzo para RESISTIR SIEMPRE, o los síntomas son tan insignificantes que no necesita resistirlos activamente.",
     "1 Trata de RESISTIR LA MAYOR PARTE del tiempo.",
     "2 Hace ALGÚN ESFUERZO para resistir.",
     "3 CEDE a las obsesiones sin intentar controlarlas, pero lo hace con cierto desgano.",
     "4 Completa y voluntariamente CEDE A TODAS las obsesiones."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "4. Resistencia contra las obsesiones. ¿Qué tanto esfuerzo haces para detener o ignorar los pensamientos obsesivos? Sólo califique el esfuerzo hecho para resistir, no el éxito o el fracaso en realmente controlar las obsesiones. Cuanto se resista el paciente a sus obsesiones puede o no correlacionarse con su habilidad para controlarlas. Observe que esta pregunta no mide directamente la severidad de los pensamientos intrusivos; más bien evalúa una manifestación de salud, por ejemplo el esfuerzo que el paciente hace para contrarrestar las obsesiones por medios distintos a la evitación o realización de compulsiones. Por lo tanto, cuanto más trate de esforzarse por resistir, menos daño habrá en este aspecto de su funcionamiento. Si las obsesiones son mínimas el paciente puede no sentir la necesidad de resistirlas. En estos casos deberá ser dada una calificación de 0."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 COMPLETO CONTROL",
     "1 MUCHO CONTROL Usualmente es capaz de detener o desviar obsesiones con esfuerzo y concentración.",
     "2 MODERADO CONTROL Algunas veces es capaz de detener o desviar las obsesiones.",
     "3 POCO CONTROL Raramente tiene éxito en detener las obsesiones, puede solamente desviar la atención con dificultad.",
     "4 NO CONTROL Se experimentan como completamente involuntarios, pocas veces capaz de desviar el pensamiento aún momentáneamente."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "5. Grado de control sobre los pensamientos obsesivos. Cuando tratas de pelear contra los pensamientos, ¿puedes vencerlos? ¿Qué tanto control tienes sobre tus pensamientos obsesivos? En contraste al reactivo anterior sobre resistencia, la habilidad del paciente en controlar sus obsesiones está más estrechamente relacionada con la severidad de los pensamientos intrusivos."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Compulsiones de limpieza o lavado",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Lavado de manos excesivo o ritualizado",
     "Baño, lavado de dientes, arreglo personal excesivo o ritualizado o rutinas para hacer sus necesidades",
     "Limpieza excesiva de objetos personales u otros objetos",
     "Otras medidas para prevenir o eliminar el contacto con contaminantes",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Compulsiones de revisar",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Revisar cerraduras, juguetes, libros de la escuela, etc",
     "Revisar que esté adecuadamente lavado, vestido o desvestido",
     "Revisar que no hizo/hará daño a otros",
     "Revisar que no se hizo/hará daño a sí mismo",
     "Revisar que nada terrible ocurrió/ocurrirá",
     "Revisar que no se hayan cometido errores",
     "Chequeo ligado a obsesiones somáticas",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Rituales de repetición",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Releer, borrar o reescribir",
     "Necesidad de repetir actividades rutinarias (p. ej., entrar/salir por la puerta, sentarse/pararse de la silla)",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Compulsiones de contar",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Objetos, números, palabras."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Compulsiones de ordenar o arreglar",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Necesidad de arreglar en forma simétrica o de acuerdo a un patrón específico."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Compulsiones de guardar o coleccionar. (Distinguir de los pasatiempos y del interés por objetos con valor sentimental o económico)",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Dificultad para tirar cosas, guardar pedazos de papel, de cuerda, etc",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Juegos mágicos excesivos, conductas supersticiosas",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "(Distinguir de los juegos mágicos apropiados para su edad). Por ejemplo, pararse sobre ciertas manchas del piso, tocar un objeto o a sí mismos cierto número de veces como un juego de rutina para evitar que pase algo malo"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Rituales que involucran a otras personas",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Necesidad de involucrar a otros, regularmente a uno de los padres, en el ritual, por ejemplo pedirle al padre que conteste repetidamente la misma pregunta, hacer que la madre realice rituales a la hora de los alimentos.*"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Compulsiones varias",
    "ops": [
     "Presente",
     "EMSP"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Rituales mentales (otros diferentes a revisar) contar, cantar, rezar",
     "Necesidad de decir, preguntar o confesar",
     "Medidas para prevenir daño a sí mismo, daño a otros, terribles consecuencias",
     "Conductas ritualizadas al comer*",
     "Hacer listas en exceso",
     "Necesidad de tocar, acariciar o frotar*",
     "Necesidad de hacer cosas (p. ej., tocar o arreglar) hasta que «esté bien»*",
     "Rituales que incluyen parpadeo o fijar la mirada*",
     "Tricotilomanía*",
     "Otras conducta de autodaño o automutilación*",
     "Otras (describir)"
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "Ahora voy a preguntarte acerca de las conductas que no puedes evitar y te molestan. Preguntas sobre las compulsiones: Ahora te voy a preguntar acerca de las conductas que tienes y no puedes detener. Mencione los síntomas blanco y refiérase a ellos al hacer las preguntas."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 NADA",
     "1 POCO Emplea menos de 1 hora/día realizando compulsiones, u ocasional realización de conductas compulsivas.",
     "2 MODERADO Emplea de 1 a 3 horas por día realizando compulsiones, o realización frecuente de conductas compulsivas.",
     "3 MUCHO Emplea más de 3 y hasta 8 horas por día realizando compulsiones, o muy frecuentemente realiza conductas compulsivas.",
     "4 EXTREMO Emplea más de 8 horas por día realizando compulsiones, o la realización casi constante de conductas compulsivas (muy numerosas para ser contadas)."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "6.a) Tiempo ocupado en la realización de conductas compulsivas. ¿Cuanto tiempo ocupas haciendo estas cosas? Cuando los rituales que forman parte principal de las actividades de la vida diaria se encuentran presentes, pregunte: ¿Cuánto más tiempo que el normal para las otras personas te toma completar tus actividades diarias a causa de tus hábitos o estas conductas repetitivas? Cuando las compulsiones aparecen como conductas breves e intermitentes puede ser imposible el determinar el tiempo empleado en realizarlas en términos de horas totales. En estos casos estime el tiempo, determinando qué tan frecuentemente éstas son realizadas. Considere tanto el número de veces que se realicen las compulsiones como el número de horas del día que están afectadas. Pregunte: ¿Qué tan frecuentemente realizas estas conductas? Cuente por separado las conductas compulsivas, no el número de repeticiones, por ejemplo, un paciente que entra al baño 20 veces al día, para lavarse las manos 5 veces rápidamente, realiza compulsiones 20 veces al día, no 5 o 5 x 20 = 100. En la mayoría de los casos, las compulsiones son conductas observables (p. ej., lavado de manos), pero hay ocasiones en las que las compulsiones no son observables (p. ej., revisar en silencio)."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 SIN SÍNTOMAS",
     "1 INTERVALOS LARGOS libres de síntomas, más de 8 horas consecutivas al día libres de síntomas.",
     "2 INTERVALOS MODERADAMENTE LARGOS libres de síntomas, más de 3 horas y hasta 8 horas consecutivas al día libres de síntomas.",
     "3 INTERVALOS CORTOS libres de síntomas, de 1 a 3 horas consecutivas al día libres de síntomas.",
     "4 INTERVALO LIBRE DE SÍNTOMAS EXTREMADAMENTE CORTO, menos de 1 hora consecutiva al día libre de síntomas."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "6.b) Intervalo libre de compulsiones (No se incluye en el puntaje total). ¿Cuánto tiempo puedes estar sin realizar tus conductas compulsivas/hábitos? Si es necesario pregunte: ¿Cuánto es el mayor tiempo en que las compulsiones están ausentes?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 NINGUNA",
     "1 LEVE Discreta interferencia con actividades sociales y escolares, pero el desempeño global no está alterado.",
     "2 MODERADA Interferencia definitiva con el desempeño social u ocupacional, pero aún manejable.",
     "3 SEVERA Causa deterioro substancial en el desempeño ocupacional y social.",
     "4 EXTREMA Incapacitante."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "7. Interferencia debida a las conductas compulsivas. ¿Qué tanto tus conductas compulsivas interfieren con tu trabajo en la escuela o las cosas que haces con tus amigos? ¿Hay algo que no hagas debido a las compulsiones? Si actualmente el paciente no está en la escuela, determine qué tanto desempeño estaría afectado si estuviera asistiendo."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 NINGUNO",
     "1 LEVE Sólo discretamente ansioso si se previenen las compulsiones o sólo discreta ansiedad durante la ejecución de las compulsiones.",
     "2 MODERADO Reporta que la ansiedad se incrementa, pero es aún manejable si las compulsiones son prevenidas, o que la ansiedad se incrementa, pero permanece manejable durante la ejecución de las compulsiones.",
     "3 SEVERO Prominente y muy molesto incremento en la ansiedad si las compulsiones son interrumpidas o prominente y muy molesto incremento en la ansiedad durante la realización de las compulsiones.",
     "4 EXTREMO Ansiedad incapacitante ante cualquier intervención que tenga por objetivo modificar la actividad, o se desarrolla ansiedad incapacitante durante la ejecución de las compulsiones."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "8. Malestar asociado a conducta compulsiva. ¿Cómo te sentirías si alguien evitara que realizaras tus conductas? ¿Qué tan molesto te sentirías? Califique al grado de malestar que el paciente experimentaría si la realización de su compulsión fuera repentinamente interrumpida sin decirle palabras tranquilizadoras. En la mayoría, pero no en todos los casos, la ejecución de compulsiones reduce la ansiedad y frustración: ¿Qué tan molesto te sientes mientras haces tus compulsiones hasta que se han completado satisfactoriamente?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 Hace un ESFUERZO PARA RESISTIR SIEMPRE, o los síntomas son tan insignificantes que no necesita resistir activamente.",
     "1 Trata de resistir la MAYOR PARTE DEL TIEMPO.",
     "2 Hace ALGO DE ESFUERZO para resistir.",
     "3 CEDE A CASI TODAS las compulsiones sin intentar controlarlas, pero lo hace con alguna resistencia.",
     "4 Completa y voluntariamente CEDE A TODAS sus compulsiones."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "9. Resistencia en contra de las compulsiones. ¿Cuánto esfuerzo haces para resistir las compulsiones ? Sólo califique el esfuerzo realizado para resistir, no el éxito o fracaso en realmente controlar las compulsiones. Qué tanto el paciente resiste sus compulsiones puede o no correlacionarse con su habilidad para controlarlas. Observe que esta pregunta no mide directamente la severidad de las compulsiones; más bien evalúa una manifestación de salud, por ejemplo el esfuerzo que el paciente hace para contrarrestar las compulsiones. Así, lo más que el paciente trate de resistirlas, lo menos incapacitado está este aspecto de su funcionamiento. Si las compulsiones son mínimas, el paciente puede no sentir la necesidad de resistirlas. En estos casos, debe ser otorgada una calificación de 0."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "0 COMPLETO CONTROL",
     "1 MUCHO CONTROL Experimenta presión para ejecutar la conducta, pero usualmente es capaz de ejercer control voluntario sobre ésta.",
     "2 MODERADO CONTROL Fuerte presión para ejecutar la conducta, puede controlarla sólo con dificultad.",
     "3 POCO CONTROL Impulso muy fuerte de ejecutar la conducta, debe ser llevada a cabo hasta su finalización, sólo se puede demorar con dificultad.",
     "4 NO CONTROL El impulso de ejecutar la conducta se experimenta como completamente involuntario y muy poderoso, raramente es capaz de demorar la actividad aún momentáneamente."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "10. Grado de control sobre las conductas compulsivas. ¿Qué tan fuerte es la sensación de que tienes que realizar tus conductas? ¿Qué pasa cuando tratas de resistirte a hacerlo? Para niños mayores preguntar: ¿Qué tanto control tienes sobre tus conductas? En contraste con la pregunta anterior acerca de la resistencia, la capacidad del paciente para controlar sus compulsiones, se encuentra más estrechamente relacionada con la severidad de las compulsiones."
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Obsesiones",
     "js": "(r[40] || 0) + (r[42] || 0) + (r[43] || 0) + (r[44] || 0) + (r[45] || 0)",
     "texto": "De 0 a 20."
    },
    {
     "n": "Compulsiones",
     "js": "(r[79] || 0) + (r[81] || 0) + (r[82] || 0) + (r[83] || 0) + (r[84] || 0)",
     "texto": "De 0 a 20."
    },
    {
     "n": "Total",
     "js": "(r[40] || 0) + (r[42] || 0) + (r[43] || 0) + (r[44] || 0) + (r[45] || 0) + (r[79] || 0) + (r[81] || 0) + (r[82] || 0) + (r[83] || 0) + (r[84] || 0)",
     "texto": "De 0 a 40: a mayor puntaje, más gravedad. Sin puntos de corte en el formato; sirve para seguir el cambio."
    }
   ]
  }
 },
 "ecbi": {
  "clave": "ECBI",
  "sigla": "ECBI",
  "titulo": "Inventario Eyberg del Comportamiento en Niños",
  "para": "Medir con qué frecuencia el niño (2 a 16 años) presenta conductas disruptivas en casa (desobediencia, rabietas, agresión, problemas de atención) y cuáles de ellas son un problema para los padres. Sirve para tamizar y para evaluar el entrenamiento de padres.",
  "areas": [
   "Familia, pareja y violencia",
   "Neurodesarrollo y cognición"
  ],
  "quien": [
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Eyberg y Ross (1978) · validación española de García-Tornel et al. (1998), Anales Españoles de Pediatría.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca (1)",
     "2",
     "3",
     "Alguna vez (4)",
     "5",
     "6",
     "Siempre (7)"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23",
     "Ítem 24",
     "Ítem 25",
     "Ítem 26",
     "Ítem 27",
     "Ítem 28",
     "Ítem 29",
     "Ítem 30",
     "Ítem 31",
     "Ítem 32",
     "Ítem 33",
     "Ítem 34",
     "Ítem 35",
     "Ítem 36"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23",
     "Ítem 24",
     "Ítem 25",
     "Ítem 26",
     "Ítem 27",
     "Ítem 28",
     "Ítem 29",
     "Ítem 30",
     "Ítem 31",
     "Ítem 32",
     "Ítem 33",
     "Ítem 34",
     "Ítem 35",
     "Ítem 36"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Intensidad",
     "js": "S(1,36)",
     "rangos": [
      [
       36,
       131,
       "Por debajo del corte"
      ],
      [
       132,
       252,
       "Más de 131: sospecha de problemas de conducta"
      ]
     ]
    },
    {
     "n": "Problema",
     "js": "S(37,72)",
     "rangos": [
      [
       0,
       15,
       "Por debajo del corte"
      ],
      [
       16,
       36,
       "Más de 15: las conductas son un problema para los padres"
      ]
     ]
    }
   ]
  },
  "hoja": true
 },
 "fas": {
  "clave": "FAS",
  "sigla": "FAS",
  "titulo": "Escala de Acomodación Familiar a los síntomas del TOC",
  "para": "Medir cuánto participa la familia en los síntomas obsesivo-compulsivos del niño o adolescente: dar seguridad, esperar, facilitar rituales y evitaciones, cambiar rutinas o asumir responsabilidades del paciente. La acomodación mantiene el TOC, así que es un blanco directo del tratamiento.",
  "areas": [
   "TOC y conductas repetitivas",
   "Familia, pareja y violencia"
  ],
  "quien": [
   "profesional"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Calvocoressi et al. (1999); versión española de Otero y Rivas (2007), Actas Españolas de Psiquiatría, tabla 1.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Con la información que aporta la familia en la entrevista, puntúe cuánto se da cada tipo de acomodación a los síntomas del TOC."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada o no aplicable",
     "Leve",
     "Moderado",
     "Severo",
     "Grave"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Proporcionar seguridad al paciente",
     "2. Observar (vigilar) al paciente deliberadamente completando sus rituales",
     "3. Esperar por el paciente",
     "4. Abstenerse de decir o hacer cosas",
     "5. Facilitar la evitación",
     "6. Facilitar las compulsiones",
     "7. Participar en las compulsiones",
     "8. Ayudar en tareas simples",
     "9. Tolerar conductas extrañas o perturbación del hogar",
     "10. Modificar la rutina personal",
     "11. Modificar la rutina familiar",
     "12. Asumir responsabilidades del paciente"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,12)",
     "texto": "De 0 a 48. Sin puntos de corte; media en la validación española al inicio del tratamiento: 16,2."
    }
   ]
  }
 },
 "m-chat-r-f": {
  "clave": "M-CHAT-R/F",
  "sigla": "M-CHAT-R/F",
  "titulo": "Cuestionario Modificado de Detección Temprana de Autismo, revisado y con entrevista de seguimiento",
  "para": "Identificar riesgo de trastorno del espectro autista en niños de 16 a 30 meses, con lo que informan los padres. Detecta riesgo y lleva a derivar; no hace diagnóstico.",
  "areas": [
   "Neurodesarrollo y cognición"
  ],
  "quien": [
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Robins, Fein y Barton (2009) · M-CHAT-R/F, versión en español de mchatscreen.com.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor conteste las siguientes preguntas teniendo en cuenta el comportamiento que su hijo/a presenta usualmente. Si ha notado cierto comportamiento algunas veces, pero no es algo que hace usualmente, por favor conteste no. Conteste cada una de las preguntas, marcando con un círculo, la palabra sí o no como respuesta. Muchas gracias."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "1. ¿Si usted señala un objeto del otro lado del cuarto, su hijo/a lo mira? (POR EJEMPLO ¿Si usted señala un juguete o un animal, su hijo/a mira al juguete o al animal?)",
     "2. ¿Alguna vez se ha preguntado si su hijo/a es sordo/a?",
     "3. ¿Su hijo/a juega juegos de fantasía o imaginación? (POR EJEMPLO finge beber de una taza vacía, finge hablar por teléfono o finge darle de comer a una muñeca o un peluche)",
     "4. ¿A su hijo/a le gusta treparse a las cosas? (POR EJEMPLO muebles, escaleras o juegos infantiles)",
     "5. ¿Su hijo/a hace movimientos inusuales con los dedos cerca de sus ojos? (POR EJEMPLO ¿Mueve sus dedos cerca de sus ojos de manera inusual?)",
     "6. ¿Su hijo/a apunta o señala con un dedo cuando quiere pedir algo o pedir ayuda? (POR EJEMPLO señala un juguete o algo para comer que está fuera de su alcance)",
     "7. ¿Su hijo/a apunta o señala con un dedo cuando quiere mostrarle algo interesante? (POR EJEMPLO señala un avión en el cielo o un camión grande en el camino)",
     "8. ¿Su hijo/a muestra interés en otros niños? (POR EJEMPLO ¿mira con atención a otros niños, les sonríe o se les acerca?)",
     "9. ¿Su hijo/a le muestra cosas acercándoselas a usted o levantándolas para que usted las vea, no para pedir ayuda sino para compartirlas con usted? (POR EJEMPLO le muestra una flor, un peluche o un camión/carro de juguete)",
     "10. ¿Su hijo/a responde cuando usted le llama por su nombre? (POR EJEMPLO ¿Cuando usted lo llama por su nombre: lo mira a usted, habla, balbucea, o deja de hacer lo que estaba haciendo?)",
     "11. ¿Cuándo usted le sonríe a su hijo/a, él o ella le devuelve la sonrisa?",
     "12. ¿A su hijo/a le molestan los ruidos cotidianos? (POR EJEMPLO ¿Llora o grita cuando escucha la aspiradora o música muy fuerte?)",
     "13. ¿Su hijo/a camina?",
     "14. ¿Su hijo/a le mira a los ojos cuando usted le habla, juega con él/ella o lo/la viste?",
     "15. ¿Su hijo/a trata de imitar sus movimientos? (POR EJEMPLO decir adiós con la mano, aplaudir o algún ruido chistoso que usted haga)",
     "16. ¿Si usted se voltea a ver algo, su hijo/a trata de ver que es lo que usted está mirando?",
     "17. ¿Su hijo/a trata que usted lo mire? (POR EJEMPLO ¿Busca que usted lo/la halague, o dice “mirame”?)",
     "18. ¿Su hijo/a le entiende cuando usted le dice que haga algo? (POR EJEMPLO ¿Su hijo/a entiende “pon el libro en la silla” o “tráeme la cobija” sin que usted haga señas?)",
     "19. ¿Si algo nuevo ocurre, su hijo/a lo mira a la cara para ver cómo se siente usted al respecto? (POR EJEMPLO ¿Si oye un ruido extraño o ve un juguete nuevo, se voltearía a ver su cara?)",
     "20. ¿A su hijo/a le gustan las actividades con movimiento? (POR EJEMPLO Le gusta que lo mezan/columpien, o que lo haga saltar en sus rodillas)"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No se hizo",
     "0 o 1",
     "2 o más"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": false,
    "items": [
     "Entrevista de seguimiento (con riesgo medio): preguntas que siguen sin pasar"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Respuestas de riesgo",
     "js": "(r[1] === 0) + (r[2] === 1) + (r[3] === 0) + (r[4] === 0) + (r[5] === 1) + (r[6] === 0) + (r[7] === 0) + (r[8] === 0) + (r[9] === 0) + (r[10] === 0) + (r[11] === 0) + (r[12] === 1) + (r[13] === 0) + (r[14] === 0) + (r[15] === 0) + (r[16] === 0) + (r[17] === 0) + (r[18] === 0) + (r[19] === 0) + (r[20] === 0)",
     "rangos": [
      [
       0,
       2,
       "Riesgo bajo"
      ],
      [
       3,
       7,
       "Riesgo medio: haga la entrevista de seguimiento"
      ],
      [
       8,
       20,
       "Riesgo alto: derive a evaluación diagnóstica"
      ]
     ]
    },
    {
     "n": "Entrevista de seguimiento",
     "js": "r[21] == null ? 0 : r[21]",
     "rangos": [
      [
       0,
       0,
       "Sin entrevista de seguimiento registrada"
      ],
      [
       1,
       1,
       "Negativa: 0 o 1 preguntas sin pasar"
      ],
      [
       2,
       2,
       "Positiva: 2 o más sin pasar; derive a evaluación diagnóstica"
      ]
     ]
    }
   ]
  }
 },
 "phq-a": {
  "clave": "PHQ-A",
  "sigla": "PHQ-A",
  "titulo": "Cuestionario sobre la Salud del Paciente, versión adolescente",
  "para": "Tamizar síntomas depresivos de las dos últimas semanas en adolescentes, con el lenguaje del PHQ-9 ajustado a esa edad (incluye la irritabilidad). Trae además preguntas sobre el ánimo del último año, la interferencia y las ideas e intentos de suicidio. No diagnostica.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Johnson et al. (2002); adaptación al castellano para Chile de Borghero et al. (2018), Revista Médica de Chile · familia PHQ, de reproducción libre.",
  "bloques": [
   {
    "t": "consigna",
    "x": "¿Con qué frecuencia te han incomodado alguno de los siguientes síntomas durante las últimas dos semanas? (Para cada síntoma marca con una \"x\" la respuesta que mejor describe cómo te has sentido)"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Algunos días",
     "Más de la mitad de los días",
     "Casi todos los días"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "¿Te has sentido bajoneado/a, deprimido/a, irritable o desesperanzado/a?",
     "¿Has sentido poco interés o placer al hacer las cosas?",
     "¿Has sentido problemas para quedarte dormido/a, permanecer dormido/a, o has estado durmiendo demasiado?",
     "¿Te has sentido cansado/a o con poca energía?",
     "¿Has tenido poco apetito, has bajado de peso, o has comido excesivamente?",
     "¿Te has sentido mal respecto a ti mismo/a o has sentido que tú eres un/a fracasado/a, o que has decepcionado a tu familia o a ti mismo/a?",
     "¿Has tenido problemas para concentrarte en actividades como trabajos escolares, leer, o ver televisión?",
     "¿Te has movido o hablado tan lento que las otras personas podrían haberlo notado? O al contrario ¿has estado tan inquieto/a que estabas moviéndote de un lado para otro mucho más de lo usual?",
     "¿Has pensado que sería mejor estar muerto/a o has pensado hacerte daño de alguna manera?"
    ],
    "numerar": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "a. En el último año, ¿te has sentido deprimido o triste la mayoría de los días, aunque te sientas a veces bien?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguna dificultad",
     "Algo de dificultad",
     "Bastante dificultad",
     "Extrema Dificultad"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": false,
    "items": [
     "b. Si estás experimentando alguno de los problemas de este cuestionario, ¿cuánto hacen esos problemas que se te dificulte hacer tu trabajo, tus labores en la casa, o llevarte bien con los demás?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "c. Durante el último mes ¿has pensado en algún momento seriamente en terminar con tu vida?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "d. Alguna vez en tu vida, ¿has tratado de matarte o has hecho un intento de suicidio?"
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "Si has tenido pensamientos de que sería mejor estar muerto/a o has pensado en hacerte daño de alguna manera, por favor convérsalo con el/la profesional que está a cargo de tu caso."
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total (ítems 1 a 9)",
     "js": "S(1,9)",
     "rangos": [
      [
       0,
       10,
       "Por debajo del punto de corte"
      ],
      [
       11,
       27,
       "Probable episodio depresivo (corte 11 de la validación chilena): confirme con entrevista"
      ]
     ]
    }
   ],
   "alertas": [
    {
     "js": "r[9] > 0 || r[12] === 1 || r[13] === 1",
     "texto": "Hay una respuesta que indica posible riesgo suicida. Pregunte directamente, en esta misma atención, y siga el protocolo de riesgo: la persona no se va sin una valoración de seguridad."
    }
   ]
  }
 },
 "rcads": {
  "clave": "RCADS",
  "sigla": "RCADS-30",
  "titulo": "Escala Revisada de Ansiedad y Depresión Infantil, versión de 30 ítems",
  "para": "Medir síntomas de depresión y de cinco tipos de ansiedad en niños y adolescentes: pánico, fobia social, ansiedad de separación, ansiedad generalizada y síntomas obsesivo-compulsivos. Es breve y sirve para seguir el cambio en ansiedad y depresión a la vez.",
  "areas": [
   "Ansiedad",
   "Ánimo y depresión"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Chorpita et al. (2000); versión de 30 ítems en español de Sandín et al. (2010), validada en Colombia por Barajas y Ruiz (2024).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor rodea con un círculo la palabra que mejor refleje la frecuencia con que te ocurre cada una de las siguientes cosas. No hay respuestas buenas ni malas."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "A veces",
     "A menudo",
     "Siempre"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "1. Me siento triste o decaído/a",
     "2. De repente siento como si no pudiera respirar sin saber por qué",
     "3. Me preocupa parecer tonto/a ante la gente",
     "4. Sentiría miedo si estuviera solo/a en casa",
     "5. Me preocupo mucho por las cosas",
     "6. Me siento mal por tener pensamientos malos o tontos, o imágenes en mi cabeza",
     "7. Me cuesta divertirme o pasarlo bien",
     "8. De repente empiezo a temblar o a agitarme sin saber por qué",
     "9. Me da miedo hacer las cosas mal",
     "10. Estar lejos de mis padres me da miedo",
     "11. Me preocupa que le ocurra algo terrible a alguno de mis familiares",
     "12. Tengo que seguir comprobando que he hecho las cosas bien (como que el interruptor está apagado o la puerta cerrada)",
     "13. Me siento con muy poca energía para hacer las cosas",
     "14. De repente me siento muy asustado/a sin saber por qué",
     "15. Me preocupa lo que otras personas piensen de mí",
     "16. Si tengo que dormir solo/a siento miedo",
     "17. Me preocupa que me ocurran cosas malas",
     "18. Tengo pensamientos malos o tontos que no puedo quitar de mi cabeza",
     "19. Me resulta muy difícil pensar con claridad",
     "20. De repente mi corazón empieza a latir rápido sin saber por qué",
     "21. Me da miedo si tengo que hablar delante de la clase",
     "22. Por las mañanas al ir al colegio me da miedo separarme de mis padres",
     "23. Me preocupa que me ocurra algo malo",
     "24. Tengo que concentrarme en pensamientos especiales (como números o palabras) para que no ocurran cosas malas",
     "25. Siento que no valgo para nada",
     "26. Me preocupa que de repente me sienta asustado/a, aunque no haya nada por lo que deba tener miedo",
     "27. Me asusta ponerme en ridículo delante de la gente",
     "28. Sentiría miedo si tuviera que pasar la noche fuera de casa",
     "29. Me preocupa lo que vaya a ocurrir",
     "30. Tengo que repetir algunas cosas una y otra vez (como lavarme las manos, limpiar o colocar cosas en un orden determinado)"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Depresión mayor",
     "js": "L([1, 7, 13, 19, 25])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas. Media en niños y adolescentes españoles: 3,4 (DE 2,4)."
    },
    {
     "n": "Trastorno de pánico",
     "js": "L([2, 8, 14, 20, 26])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas. Media en niños y adolescentes españoles: 1,7 (DE 2,2)."
    },
    {
     "n": "Fobia social",
     "js": "L([3, 9, 15, 21, 27])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas. Media en niños y adolescentes españoles: 6,0 (DE 3,4)."
    },
    {
     "n": "Ansiedad de separación",
     "js": "L([4, 10, 16, 22, 28])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas. Media en niños y adolescentes españoles: 2,9 (DE 2,6)."
    },
    {
     "n": "Ansiedad generalizada",
     "js": "L([5, 11, 17, 23, 29])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas. Media en niños y adolescentes españoles: 8,1 (DE 3,5)."
    },
    {
     "n": "Obsesivo-compulsivo",
     "js": "L([6, 12, 18, 24, 30])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas. Media en niños y adolescentes españoles: 4,1 (DE 2,6)."
    },
    {
     "n": "Total",
     "js": "S(1,30)",
     "texto": "De 0 a 90. Sin puntos de corte. Media en niños y adolescentes españoles: 25,5 (DE 12,3); niñas 26,9, niños 24,3 (Sandín et al., 2010, n = 544). Compare también con aplicaciones anteriores."
    }
   ]
  }
 },
 "scared": {
  "clave": "SCARED",
  "sigla": "SCARED",
  "titulo": "Pantalla de Trastornos Emocionales Relacionados con la Ansiedad Infantil",
  "para": "Tamizar síntomas de ansiedad en niños y adolescentes desde los 8 años, con una forma para el niño y otra para los padres. Además del total da cinco puntajes: pánico o síntomas somáticos, ansiedad generalizada, ansiedad de separación, ansiedad social y evitación escolar.",
  "areas": [
   "Ansiedad"
  ],
  "quien": [
   "persona",
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Birmaher et al. (1997, 1999) · versiones en español para Colombia publicadas por el autor (Universidad de Pittsburgh) · sin costo.",
  "bloques": [
   {
    "t": "consigna",
    "x": "FORMA PARA NIÑOS (8 años o mayores)"
   },
   {
    "t": "consigna",
    "x": "Esta es una lista de cosas que describen cómo se siente usted. Marque el 0 si casi nunca o nunca es cierto. Marque el 1 si es cierto algunas veces. Marque el 2 si casi siempre o siempre es cierto. Por favor conteste las preguntas lo mejor que pueda."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca o nunca es cierto",
     "Es cierto algunas veces",
     "Casi siempre o siempre es cierto"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": true,
    "items": [
     "1. Cuando tengo miedo, no puedo respirar bien.",
     "2. Cuando estoy en la escuela me duele la cabeza.",
     "3. No me gusta estar con personas que no conozco bien.",
     "4. Cuando duermo en una casa que no es la mía me siento con miedo.",
     "5. Me preocupa saber si le caigo bien a la gente.",
     "6. Cuando tengo miedo, siento que me voy a desmayar.",
     "7. Soy una persona nerviosa.",
     "8. Sigo a mis padres a donde ellos van.",
     "9. La gente me dice que me veo nervioso(a).",
     "10. Me pongo nervioso(a) cuando estoy con personas que no conozco bien.",
     "11. Cuando estoy en la escuela me duele el estómago (panza).",
     "12. Cuando tengo mucho miedo, me siento como si me fuera a enloquecer.",
     "13. Me preocupo cuando tengo que dormir solo(a).",
     "14. Me preocupo de ser tan bueno(a) como los otros niños (por ejemplo: en mis estudios o deportes).",
     "15. Cuando tengo mucho miedo, siento como si las cosas fueran diferentes o no reales.",
     "16. En las noches sueño que cosas malas le van a pasar a mis padres.",
     "17. Me preocupo cuando tengo que ir a la escuela.",
     "18. Cuando tengo mucho miedo, el corazón me late muy rápido.",
     "19. Cuando tengo mucho miedo, yo tiemblo.",
     "20. En las noches tengo pesadillas de que me va a pasar algo malo.",
     "21. Me preocupa pensar cómo me van a salir las cosas.",
     "22. Sudo mucho cuando tengo miedo.",
     "23. Me preocupo demasiado.",
     "24. Me preocupo sin motivo.",
     "25. Me da miedo estar solo(a) en la casa.",
     "26. Me cuesta trabajo hablar con personas que no conozco.",
     "27. Cuando tengo miedo, siento como si no pudiera tragar.",
     "28. Las personas me dicen que yo me preocupo demasiado.",
     "29. No me gusta estar lejos de mi familia.",
     "30. Tengo miedo de tener ataques de nervios (pánico).",
     "31. Me preocupa pensar que algo malo le va a pasar a mis padres.",
     "32. Me da vergüenza cuando estoy con personas que no conozco.",
     "33. Me preocupa qué me pasará cuando sea grande.",
     "34. Cuando tengo miedo me dan ganas de vomitar.",
     "35. Me preocupa saber si hago las cosas bien.",
     "36. Tengo miedo de ir al colegio.",
     "37. Me preocupan las cosas que ya han pasado.",
     "38. Cuando tengo miedo, me siento mareado(a).",
     "39. Me siento nervioso(a) cuando tengo que hacer algo delante de otros niños o adultos (ejemplos: leer en voz alta, hablar, jugar)",
     "40. Me siento nervioso(a) de ir a fiestas, bailes, o alguna parte donde hay gente que no conozco.",
     "41. Soy tímido(a)"
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "FORMA PARA LOS PADRES"
   },
   {
    "t": "consigna",
    "x": "Esta es una lista de cosas que describen cómo se siente su hijo(a). Marque el 0 si casi nunca o nunca es cierto. Marque el 1 si es cierto algunas veces. Marque el 2 si casi siempre o siempre es cierto. Por favor conteste las preguntas lo mejor que pueda."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca o nunca es cierto",
     "Es cierto algunas veces",
     "Casi siempre o siempre es cierto"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": true,
    "items": [
     "1. Cuando siente miedo, no puede respirar bien.",
     "2. Cuando está en la escuela, se queja de dolor de cabeza.",
     "3. No le gusta estar con personas que no conoce bien.",
     "4. Le da miedo dormir en otras casas.",
     "5. Se preocupa de lo que piensan de él (ella).",
     "6. Cuando tiene miedo, siente que se va a desmayar.",
     "7. Es un niño(a) nervioso(a).",
     "8. Me sigue a todas partes donde voy (es como mi \"sombra\").",
     "9. La gente dice que mi hijo(a) se ve nervioso(a).",
     "10. Se pone nervioso(a) con personas que no conoce bien.",
     "11. Cuando está en la escuela le duele el estómago.",
     "12. Cuando tiene mucho miedo, se siente como si se fuera a \"enloquecer\".",
     "13. Se preocupa si tiene que dormir solo(a).",
     "14. Se preocupa de ser tan bueno(a) como los otros niños.",
     "15. Cuando tiene mucho miedo siente como si las cosas no fueran reales.",
     "16. Sueña que algo malo le va a pasar a su mamá o a su papá.",
     "17. Se preocupa cuando tiene que ir a la escuela.",
     "18. Cuando tiene miedo, el corazón le late muy rápido.",
     "19. Cuando tiene miedo, se pone tembloroso.",
     "20. Sueña que algo malo le va a pasar a él (ella).",
     "21. Le preocupa cómo le van a salir las cosas.",
     "22. Cuando tiene miedo (nervios) suda mucho.",
     "23. Se preocupa demasiado.",
     "24. Le da miedo sin tener ningún motivo.",
     "25. Le da miedo estar solo en casa.",
     "26. Le cuesta trabajo hablar con personas que no conoce.",
     "27. Cuando tiene miedo, siente que no puede tragar.",
     "28. Las personas dicen que se preocupa demasiado.",
     "29. No le gusta estar separado de la familia.",
     "30. Le da miedo de tener ataques de nervios (pánico).",
     "31. Le preocupa que algo malo les pueda pasar a sus padres.",
     "32. Le da vergüenza cuando está con personas que no conoce.",
     "33. Le preocupa qué le vaya a pasar en el futuro.",
     "34. Cuando tiene miedo le dan ganas de vomitar.",
     "35. Le preocupa saber si está haciendo las cosas bien.",
     "36. Tiene miedo de ir al colegio.",
     "37. Le preocupan las cosas que ya han pasado.",
     "38. Cuando tiene miedo, se siente mareado(a).",
     "39. Se siente nervioso(a) cuando tiene que hacer algo delante de otros niños o adultos (por ejemplo: leer en voz alta, hablar, jugar).",
     "40. Se siente nervioso(a) de ir a fiestas, bailes o alguna parte donde hay gente que no conoce.",
     "41. Mi hijo(a) es tímido(a)."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Niño: Total",
     "js": "L([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41])",
     "rangos": [
      [
       0,
       24,
       "Por debajo del corte"
      ],
      [
       25,
       30,
       "25 o más: puede indicar un trastorno de ansiedad"
      ],
      [
       31,
       82,
       "Más de 30: resultado más específico"
      ]
     ]
    },
    {
     "n": "Niño: Pánico o somático",
     "js": "L([1, 6, 9, 12, 15, 18, 19, 22, 24, 27, 30, 34, 38])",
     "rangos": [
      [
       0,
       6,
       "Por debajo del corte"
      ],
      [
       7,
       26,
       "Puede indicar trastorno de pánico o síntomas somáticos significativos"
      ]
     ]
    },
    {
     "n": "Niño: Ansiedad generalizada",
     "js": "L([5, 7, 14, 21, 23, 28, 33, 35, 37])",
     "rangos": [
      [
       0,
       8,
       "Por debajo del corte"
      ],
      [
       9,
       18,
       "Puede indicar trastorno de ansiedad generalizada"
      ]
     ]
    },
    {
     "n": "Niño: Ansiedad de separación",
     "js": "L([4, 8, 13, 16, 20, 25, 29, 31])",
     "rangos": [
      [
       0,
       4,
       "Por debajo del corte"
      ],
      [
       5,
       16,
       "Puede indicar ansiedad de separación"
      ]
     ]
    },
    {
     "n": "Niño: Ansiedad social",
     "js": "L([3, 10, 26, 32, 39, 40, 41])",
     "rangos": [
      [
       0,
       7,
       "Por debajo del corte"
      ],
      [
       8,
       14,
       "Puede indicar fobia social"
      ]
     ]
    },
    {
     "n": "Niño: Evitación escolar",
     "js": "L([2, 11, 17, 36])",
     "rangos": [
      [
       0,
       2,
       "Por debajo del corte"
      ],
      [
       3,
       8,
       "Puede indicar evitación escolar significativa"
      ]
     ]
    },
    {
     "n": "Padres: Total",
     "js": "L([42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82])",
     "rangos": [
      [
       0,
       24,
       "Por debajo del corte"
      ],
      [
       25,
       30,
       "25 o más: puede indicar un trastorno de ansiedad"
      ],
      [
       31,
       82,
       "Más de 30: resultado más específico"
      ]
     ]
    },
    {
     "n": "Padres: Pánico o somático",
     "js": "L([42, 47, 50, 53, 56, 59, 60, 63, 65, 68, 71, 75, 79])",
     "rangos": [
      [
       0,
       6,
       "Por debajo del corte"
      ],
      [
       7,
       26,
       "Puede indicar trastorno de pánico o síntomas somáticos significativos"
      ]
     ]
    },
    {
     "n": "Padres: Ansiedad generalizada",
     "js": "L([46, 48, 55, 62, 64, 69, 74, 76, 78])",
     "rangos": [
      [
       0,
       8,
       "Por debajo del corte"
      ],
      [
       9,
       18,
       "Puede indicar trastorno de ansiedad generalizada"
      ]
     ]
    },
    {
     "n": "Padres: Ansiedad de separación",
     "js": "L([45, 49, 54, 57, 61, 66, 70, 72])",
     "rangos": [
      [
       0,
       4,
       "Por debajo del corte"
      ],
      [
       5,
       16,
       "Puede indicar ansiedad de separación"
      ]
     ]
    },
    {
     "n": "Padres: Ansiedad social",
     "js": "L([44, 51, 67, 73, 80, 81, 82])",
     "rangos": [
      [
       0,
       7,
       "Por debajo del corte"
      ],
      [
       8,
       14,
       "Puede indicar fobia social"
      ]
     ]
    },
    {
     "n": "Padres: Evitación escolar",
     "js": "L([43, 52, 58, 77])",
     "rangos": [
      [
       0,
       2,
       "Por debajo del corte"
      ],
      [
       3,
       8,
       "Puede indicar evitación escolar significativa"
      ]
     ]
    }
   ],
   "nota": "Responda solo la forma que vaya a calificar (la del niño o la de los padres); la otra queda en blanco y vale 0."
  }
 },
 "sdq": {
  "clave": "SDQ",
  "sigla": "SDQ",
  "titulo": "Cuestionario de Capacidades y Dificultades, forma para padres y docentes",
  "para": "Tamizar dificultades emocionales y de conducta en niños y adolescentes de 4 a 17 años: síntomas emocionales, problemas de conducta, hiperactividad, relación con compañeros y conducta prosocial.",
  "areas": [
   "Malestar general",
   "Neurodesarrollo y cognición"
  ],
  "quien": [
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Goodman (1997) · SDQ-Cas para padres y docentes, sdqinfo.org.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor, ponga una cruz en el cuadro que usted cree que corresponde a cada una de las preguntas: No es cierto, Un tanto cierto, Absolutamente cierto. Nos sería de gran ayuda si respondiese a todas las preguntas lo mejor que pudiera, aunque no esté completamente seguro/a de la respuesta. Por favor, responda a las preguntas basándose en el comportamiento del niño/a durante los últimos seis meses o durante el presente curso escolar."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No es cierto",
     "Un tanto cierto",
     "Absolutamente cierto"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": true,
    "items": [
     "1. Tiene en cuenta los sentimientos de otras personas",
     "2. Es inquieto/a, hiperactivo/a, no puede permanecer quieto/a por mucho tiempo",
     "3. Se queja con frecuencia de dolor de cabeza, de estómago o de náuseas",
     "4. Comparte frecuentemente con otros niños/as chucherías, juguetes, lápices, etc",
     "5. Frecuentemente tiene rabietas o mal genio",
     "6. Es más bien solitario/a y tiende a jugar solo/a",
     "7. Por lo general es obediente, suele hacer lo que le piden los adultos",
     "8. Tiene muchas preocupaciones, a menudo parece inquieto/a o preocupado/a",
     "9. Ofrece ayuda cuando alguien resulta herido, disgustado, o enfermo",
     "10. Está continuamente moviéndose y es revoltoso",
     "11. Tiene por lo menos un/a buen/a amigo/a",
     "12. Pelea con frecuencia con otros niños/as o se mete con ellos/ellas",
     "13. Se siente a menudo infeliz, desanimado o lloroso",
     "14. Por lo general cae bien a los otros niños/as",
     "15. Se distrae con facilidad, su concentración tiende a dispersarse",
     "16. Es nervioso/a o dependiente ante nuevas situaciones, fácilmente pierde la confianza en sí mismo/a",
     "17. Trata bien a los niños/as más pequeños/as",
     "18. A menudo miente o engaña",
     "19. Los otros niños/as se meten con él/ella o se burlan de él/ella",
     "20. A menudo se ofrece para ayudar (a padres, maestros, otros niños/as)",
     "21. Piensa las cosas antes de hacerlas",
     "22. Roba cosas en casa, en la escuela o en otros sitios",
     "23. Se lleva mejor con adultos que con otros niños/as",
     "24. Tiene muchos miedos, se asusta fácilmente",
     "25. Termina lo que empieza, tiene buena concentración"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Madre, padre u otro cuidador",
     "Docente"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": false,
    "items": [
     "Quién responde"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Síntomas emocionales",
     "js": "(r[3] == null ? 0 : r[3]) + (r[8] == null ? 0 : r[8]) + (r[13] == null ? 0 : r[13]) + (r[16] == null ? 0 : r[16]) + (r[24] == null ? 0 : r[24])",
     "rangos_por": [
      {
       "si": "r[26] === 0",
       "rangos": [
        [
         0,
         3,
         "Normal"
        ],
        [
         4,
         4,
         "Límite"
        ],
        [
         5,
         10,
         "Anormal"
        ]
       ]
      },
      {
       "si": "r[26] === 1",
       "rangos": [
        [
         0,
         4,
         "Normal"
        ],
        [
         5,
         5,
         "Límite"
        ],
        [
         6,
         10,
         "Anormal"
        ]
       ]
      }
     ],
     "sin_rango": "Marque quién responde (al final) para ver la banda."
    },
    {
     "n": "Problemas de conducta",
     "js": "(r[5] == null ? 0 : r[5]) + (r[7] == null ? 0 : 2 - r[7]) + (r[12] == null ? 0 : r[12]) + (r[18] == null ? 0 : r[18]) + (r[22] == null ? 0 : r[22])",
     "rangos_por": [
      {
       "si": "r[26] === 0",
       "rangos": [
        [
         0,
         2,
         "Normal"
        ],
        [
         3,
         3,
         "Límite"
        ],
        [
         4,
         10,
         "Anormal"
        ]
       ]
      },
      {
       "si": "r[26] === 1",
       "rangos": [
        [
         0,
         2,
         "Normal"
        ],
        [
         3,
         3,
         "Límite"
        ],
        [
         4,
         10,
         "Anormal"
        ]
       ]
      }
     ],
     "sin_rango": "Marque quién responde (al final) para ver la banda."
    },
    {
     "n": "Hiperactividad",
     "js": "(r[2] == null ? 0 : r[2]) + (r[10] == null ? 0 : r[10]) + (r[15] == null ? 0 : r[15]) + (r[21] == null ? 0 : 2 - r[21]) + (r[25] == null ? 0 : 2 - r[25])",
     "rangos_por": [
      {
       "si": "r[26] === 0",
       "rangos": [
        [
         0,
         5,
         "Normal"
        ],
        [
         6,
         6,
         "Límite"
        ],
        [
         7,
         10,
         "Anormal"
        ]
       ]
      },
      {
       "si": "r[26] === 1",
       "rangos": [
        [
         0,
         5,
         "Normal"
        ],
        [
         6,
         6,
         "Límite"
        ],
        [
         7,
         10,
         "Anormal"
        ]
       ]
      }
     ],
     "sin_rango": "Marque quién responde (al final) para ver la banda."
    },
    {
     "n": "Problemas con compañeros",
     "js": "(r[6] == null ? 0 : r[6]) + (r[11] == null ? 0 : 2 - r[11]) + (r[14] == null ? 0 : 2 - r[14]) + (r[19] == null ? 0 : r[19]) + (r[23] == null ? 0 : r[23])",
     "rangos_por": [
      {
       "si": "r[26] === 0",
       "rangos": [
        [
         0,
         2,
         "Normal"
        ],
        [
         3,
         3,
         "Límite"
        ],
        [
         4,
         10,
         "Anormal"
        ]
       ]
      },
      {
       "si": "r[26] === 1",
       "rangos": [
        [
         0,
         3,
         "Normal"
        ],
        [
         4,
         4,
         "Límite"
        ],
        [
         5,
         10,
         "Anormal"
        ]
       ]
      }
     ],
     "sin_rango": "Marque quién responde (al final) para ver la banda."
    },
    {
     "n": "Conducta prosocial",
     "js": "(r[1] == null ? 0 : r[1]) + (r[4] == null ? 0 : r[4]) + (r[9] == null ? 0 : r[9]) + (r[17] == null ? 0 : r[17]) + (r[20] == null ? 0 : r[20])",
     "rangos_por": [
      {
       "si": "r[26] === 0",
       "rangos": [
        [
         0,
         4,
         "Anormal"
        ],
        [
         5,
         5,
         "Límite"
        ],
        [
         6,
         10,
         "Normal"
        ]
       ]
      },
      {
       "si": "r[26] === 1",
       "rangos": [
        [
         0,
         4,
         "Anormal"
        ],
        [
         5,
         5,
         "Límite"
        ],
        [
         6,
         10,
         "Normal"
        ]
       ]
      }
     ],
     "sin_rango": "Marque quién responde (al final) para ver la banda."
    },
    {
     "n": "Total de dificultades",
     "js": "(r[3] == null ? 0 : r[3]) + (r[8] == null ? 0 : r[8]) + (r[13] == null ? 0 : r[13]) + (r[16] == null ? 0 : r[16]) + (r[24] == null ? 0 : r[24]) + (r[5] == null ? 0 : r[5]) + (r[7] == null ? 0 : 2 - r[7]) + (r[12] == null ? 0 : r[12]) + (r[18] == null ? 0 : r[18]) + (r[22] == null ? 0 : r[22]) + (r[2] == null ? 0 : r[2]) + (r[10] == null ? 0 : r[10]) + (r[15] == null ? 0 : r[15]) + (r[21] == null ? 0 : 2 - r[21]) + (r[25] == null ? 0 : 2 - r[25]) + (r[6] == null ? 0 : r[6]) + (r[11] == null ? 0 : 2 - r[11]) + (r[14] == null ? 0 : 2 - r[14]) + (r[19] == null ? 0 : r[19]) + (r[23] == null ? 0 : r[23])",
     "rangos_por": [
      {
       "si": "r[26] === 0",
       "rangos": [
        [
         0,
         13,
         "Normal"
        ],
        [
         14,
         16,
         "Límite"
        ],
        [
         17,
         40,
         "Anormal"
        ]
       ]
      },
      {
       "si": "r[26] === 1",
       "rangos": [
        [
         0,
         11,
         "Normal"
        ],
        [
         12,
         15,
         "Límite"
        ],
        [
         16,
         40,
         "Anormal"
        ]
       ]
      }
     ],
     "sin_rango": "Marque quién responde (al final) para ver la banda."
    }
   ]
  }
 },
 "smfq": {
  "clave": "SMFQ",
  "sigla": "SMFQ",
  "titulo": "Cuestionario Breve de Ánimo y Sentimientos",
  "para": "Tamizar síntomas depresivos de las dos últimas semanas en niños y adolescentes de 6 a 17 años, con una forma para el niño y otra para el padre, la madre o el adulto a cargo. Por su brevedad sirve también para seguir la gravedad de los síntomas y la respuesta al tratamiento, sesión a sesión.",
  "areas": [
   "Ánimo y depresión"
  ],
  "quien": [
   "persona",
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Angold et al. (1995) · versiones en español de Angold y Costello (Duke University) · uso no comercial sin costo.",
  "bloques": [
   {
    "t": "consigna",
    "x": "FORMA DEL NIÑO O EL JOVEN"
   },
   {
    "t": "consigna",
    "x": "Este formulario se trata de cómo te pudiste haber sentido o actuado recientemente. Por cada pregunta, por favor señala qué tanto te has sentido o actuado de esta forma durante las últimas dos semanas. Si la frase es cierta en tu caso la mayor parte del tiempo, marca CIERTO. Si la frase es cierta sólo ocasionalmente, marca ALGUNAS VECES. Si la frase no es cierta, marca NO ES CIERTO."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No es cierto",
     "Algunas veces",
     "Cierto"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": true,
    "items": [
     "1. Me sentí triste o amargado/a.",
     "2. Nada me ha causado agrado.",
     "3. Me sentí tan cansado que sólo me senté y no hice nada.",
     "4. Estuve muy inquieto/a.",
     "5. Sentí que ya no servía para nada.",
     "6. Lloré mucho.",
     "7. Se me hizo muy difícil pensar o concentrarme en algo.",
     "8. Me odié a mí mismo/a.",
     "9. Fui una mala persona.",
     "10. Me sentí solo/a.",
     "11. Pensé que nadie me quería.",
     "12. Pensé que jamás sería tan bueno como otros niños/as.",
     "13. Hice todo mal."
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "FORMA DEL PADRE, LA MADRE O EL ADULTO A CARGO"
   },
   {
    "t": "consigna",
    "x": "Este formulario se trata de cómo su niño/a se pudo haber sentido o actuado recientemente. Por cada pregunta, por favor señale qué tanto su niño/a se ha sentido o actuado de esta forma durante las últimas dos semanas. Si la frase es cierta en el caso de su niño/a la mayor parte del tiempo, marque CIERTO. Si la frase es cierta en el caso de su niño/a sólo ocasionalmente, marque ALGUNAS VECES. Si la frase no es cierta en el caso de su niño/a, marque NO ES CIERTO."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No es cierto",
     "Algunas veces",
     "Cierto"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": true,
    "items": [
     "1. El/Ella se sintió triste o amargado/a.",
     "2. El/Ella no mostró agrado por nada.",
     "3. El/Ella se sintió tan cansado/a que sólo se sentó y no hizo nada.",
     "4. El/Ella estuvo muy inquieto/a.",
     "5. El/Ella sintió que ya no servía para nada.",
     "6. El/Ella lloró mucho.",
     "7. Se le hizo muy difícil pensar o concentrarse en algo.",
     "8. El/Ella se odió a sí mismo/a.",
     "9. El/Ella sintió que era una mala persona.",
     "10. Se sintió solo/a.",
     "11. El/Ella pensó que nadie le quería.",
     "12. Pensó que jamás sería tan bueno como otros niños/as.",
     "13. El/Ella sintió que todo cuanto hacía estaba mal."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Niño: puntaje total",
     "js": "S(1,13)",
     "rangos": [
      [
       0,
       7,
       "Por debajo del punto de corte"
      ],
      [
       8,
       26,
       "Sobre el punto de corte (8): síntomas depresivos significativos; confirme con entrevista"
      ]
     ]
    },
    {
     "n": "Adulto a cargo: puntaje total",
     "js": "S(14,26)",
     "rangos": [
      [
       0,
       7,
       "Por debajo del punto de corte"
      ],
      [
       8,
       26,
       "Sobre el punto de corte (8): síntomas depresivos significativos; confirme con entrevista"
      ]
     ]
    }
   ],
   "nota": "Responda solo la forma que vaya a calificar (la del niño o la del adulto); la otra queda en blanco y vale 0."
  }
 },
 "snap-iv": {
  "clave": "SNAP-IV",
  "sigla": "SNAP-IV",
  "titulo": "Escala SNAP-IV, versión argentina",
  "para": "Detectar síntomas de inatención y de hiperactividad e impulsividad en niños de 4 a 14 años, a partir de los criterios diagnósticos del TDAH, según lo que observa el docente o la familia. Es una herramienta de tamizaje: un puntaje sobre el corte pide una evaluación diagnóstica, no la reemplaza.",
  "areas": [
   "Neurodesarrollo y cognición"
  ],
  "quien": [
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Swanson, Nolan y Pelham · versión argentina de Grañana et al. (2011), Revista Panamericana de Salud Pública, cuadro 1.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Lea cada frase anteponiendo «A menudo…» y marque cuánto describe al niño o la niña."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada",
     "Poco",
     "Bastante",
     "Mucho"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "1. Le cuesta prestar atención a detalles o comete errores por descuido en las tareas escolares o trabajo.",
     "2. Tiene dificultades para mantener la atención en tareas o en actividades lúdicas.",
     "3. Parece no escuchar cuando se le habla directamente.",
     "4. Le cuesta seguir instrucciones y no finaliza tareas escolares, encargos u obligaciones.",
     "5. Tiene dificultad en organizar sus tareas y actividades.",
     "6. Evita, le disgusta o es reacio a dedicarse a tareas que requieren un esfuerzo mental sostenido.",
     "7. Extravía objetos necesarios para realizar sus actividades (p. ej. juguetes, ejercicios escolares, lápices o libros).",
     "8. Se distrae por estímulos irrelevantes de su tarea.",
     "9. Es descuidado en sus actividades diarias.",
     "10. Le cuesta mantenerse alerta, responder a lo que se le pide, o ejecutar consignas.",
     "11. Mueve las manos y los pies o se retuerce en el asiento.",
     "12. Abandona su asiento en clase u otras situaciones en que se espera que permanezca sentado.",
     "13. Corre o salta excesivamente en situaciones en que es inapropiado.",
     "14. Tiene dificultades para jugar o dedicarse a actividades de ocio tranquilamente.",
     "15. Está «en marcha» o actúa como si tuviera un motor encendido.",
     "16. Habla en exceso.",
     "17. Precipita respuestas antes de haber sido terminadas las preguntas.",
     "18. Tiene dificultades para aguardar su turno.",
     "19. Interrumpe o se inmiscuye en las actividades de otros (p. ej. se entromete en conversaciones o juegos).",
     "20. Tiene dificultad para permanecer sentado, quedarse quieto o inhibir impulsos en la clase o en el hogar."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Inatención (1 a 9)",
     "js": "S(1,9)",
     "rangos": [
      [
       0,
       14,
       "Por debajo del corte"
      ],
      [
       15,
       27,
       "Sobre el corte (15, versión argentina para docentes)"
      ]
     ]
    },
    {
     "n": "Hiperactividad e impulsividad (11 a 19)",
     "js": "S(11,19)",
     "rangos": [
      [
       0,
       15,
       "Por debajo del corte"
      ],
      [
       16,
       27,
       "Sobre el corte (16, versión argentina para docentes)"
      ]
     ]
    }
   ],
   "nota": "Las preguntas 10 y 20 son generales y no entran en la suma. Los cortes se validaron con la forma que responden los docentes."
  }
 },
 "sras-r": {
  "clave": "SRAS-R",
  "sigla": "SRAS-R-C",
  "titulo": "Escala Revisada de Evaluación del Rechazo Escolar, versión para niños",
  "para": "Identificar para qué rechaza el niño la escuela: evitar el malestar que le causa, escapar de situaciones sociales o de evaluación, conseguir la atención de sus padres u obtener cosas agradables fuera de la escuela. La función dominante orienta el tratamiento.",
  "areas": [
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Kearney (2002) · versión española de 18 ítems de Gonzálvez et al. (2016), tesis doctoral de C. Gonzálvez, Universidad de Alicante.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Lee cada pregunta y marca con qué frecuencia te pasa lo que dice. No hay respuestas buenas ni malas."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Rara vez",
     "Algunas veces",
     "La mitad de las veces",
     "Normalmente",
     "Casi siempre",
     "Siempre"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "1. ¿Cuántas veces tienes sentimientos negativos hacia la escuela porque tienes miedo a algo relacionado con la escuela (por ejemplo: exámenes, transporte escolar, maestro, alarma de incendio)?",
     "2. ¿Cuántas veces tratas de no ir a la escuela porque te resulta difícil hablar con los otros chicos(as) en la escuela?",
     "3. ¿Cuántas veces preferirías estar con tus padres en vez de ir a la escuela?",
     "4. Cuando no estás en la escuela durante la semana, ¿cuántas veces sales de casa y haces algo divertido?",
     "5. ¿Cuántas veces tratas de no ir a la escuela porque si vas te sentirás triste o deprimido?",
     "6. ¿Cuántas veces tratas de no ir a la escuela porque te da vergüenza estar delante de otras personas en la escuela?",
     "7. ¿Cuántas veces piensas en tus padres o en tu familia cuando estás en la escuela?",
     "8. Cuando estás en la escuela durante la semana, ¿cuántas veces hablas o te relacionas con otras personas (aparte de tu familia)?",
     "9. ¿Cuántas veces te sientes peor al estar en la escuela (por ejemplo, asustado, nervioso o triste) que cuando estás en casa con amigos?",
     "10. ¿Cuántas veces tratas de no ir a la escuela porque no tienes muchos amigos allí?",
     "11. ¿Cuántas veces preferirías estar con tu familia más que ir a la escuela?",
     "12. Cuando no estás en la escuela durante la semana, ¿cuánto disfrutas haciendo cosas distintas (por ejemplo, estar con amigos, salir)?",
     "13. ¿Con qué frecuencia tienes sentimientos negativos hacia la escuela (por ejemplo, asustado, nervioso o triste) cuando piensas en la escuela el sábado o el domingo?",
     "14. ¿Con qué frecuencia evitas ciertos lugares en la escuela (por ejemplo, pasillos, lugares en los que hay grupos de gente) en los que tendrías que hablar con alguien?",
     "15. ¿Cuántas veces preferirías que tus padres te enseñaran en casa en vez de tu profesor/a en la escuela?",
     "21. ¿Cuántas veces tienes más pensamientos negativos hacia la escuela (por ejemplo, asustado, nervioso o triste) que otros chicos(as) de tu edad?",
     "22. ¿Cuántas veces evitas a otras personas en la escuela, en comparación con otros chicos(as) de tu edad?",
     "23. ¿Te gustaría estar en casa con tus padres más de lo que les gustaría a los otros chicos(as) de tu edad estar en casa con sus padres?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Evitar el malestar que provocan la escuela o sus situaciones (promedio)",
     "js": "((r[1] || 0) + (r[5] || 0) + (r[9] || 0) + (r[13] || 0) + (r[16] || 0)) / 5",
     "texto": "Suma dividida por 5, de 0 a 6. Compare los cuatro promedios: el más alto orienta la función principal. Promedio en escolares españoles de 3.º a 6.º de primaria: 1,5 (Gonzálvez et al., 2016, n = 1078)."
    },
    {
     "n": "Escapar de situaciones sociales o de evaluación (promedio)",
     "js": "((r[2] || 0) + (r[6] || 0) + (r[10] || 0) + (r[14] || 0) + (r[17] || 0)) / 5",
     "texto": "Suma dividida por 5, de 0 a 6. Compare los cuatro promedios: el más alto orienta la función principal. Promedio en escolares españoles de 3.º a 6.º de primaria: 0,7 (Gonzálvez et al., 2016, n = 1078)."
    },
    {
     "n": "Buscar la atención de personas significativas (promedio)",
     "js": "((r[3] || 0) + (r[7] || 0) + (r[11] || 0) + (r[15] || 0) + (r[18] || 0)) / 5",
     "texto": "Suma dividida por 5, de 0 a 6. Compare los cuatro promedios: el más alto orienta la función principal. Promedio en escolares españoles de 3.º a 6.º de primaria: 2,5 (Gonzálvez et al., 2016, n = 1078)."
    },
    {
     "n": "Buscar refuerzos tangibles fuera de la escuela (promedio)",
     "js": "((r[4] || 0) + (r[8] || 0) + (r[12] || 0)) / 3",
     "texto": "Suma dividida por 3, de 0 a 6. Compare los cuatro promedios: el más alto orienta la función principal. Promedio en escolares españoles de 3.º a 6.º de primaria: 4,0 (Gonzálvez et al., 2016, n = 1078)."
    }
   ]
  }
 },
 "vanderbilt": {
  "clave": "Vanderbilt",
  "sigla": "Vanderbilt",
  "titulo": "Escala de Evaluación Vanderbilt, formulario para padres",
  "para": "Evaluar síntomas de TDAH (inatención e hiperactividad-impulsividad) y las comorbilidades más frecuentes (oposicionismo, conducta, ansiedad y depresión), junto con el rendimiento escolar y social, con lo que informan los padres.",
  "areas": [
   "Neurodesarrollo y cognición"
  ],
  "quien": [
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Wolraich et al. (2003) · Escala Vanderbilt para padres, kit de TDAH de la AAP (3.ª ed.), versión en español.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Cada calificación debe ser considerada en el contexto de lo que es adecuado para la edad de su hijo. Cuando complete este formulario, piense sobre el comportamiento de su hijo en los últimos 6 meses."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Tomaba medicamentos",
     "No tomaba medicamentos",
     "No está seguro"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": false,
    "items": [
     "Esta evaluación está basada en un tiempo cuando su hijo:"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "De vez en cuando",
     "A menudo",
     "Muy a menudo"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "1. No presta atención a detalles o comete errores que parecen descuidos, por ejemplo, con las tareas domiciliarias.",
     "2. Tiene dificultad para prestar atención a las tareas o actividades que se deben realizar.",
     "3. Cuando se le habla directamente parece no escuchar.",
     "4. No sigue las instrucciones o no termina las actividades (no porque se niegue ni porque no entienda).",
     "5. Tiene dificultad para organizar las tareas y las actividades.",
     "6. Evita, no le gustan o no quiere comenzar las tareas que requieren esfuerzo mental continuo.",
     "7. Pierde cosas que necesita para las tareas o actividades (p. ej. juguetes, deberes, lápices, libros).",
     "8. Se distrae con facilidad con ruidos u otros estímulos.",
     "9. Se muestra olvidadizo en las actividades diarias.",
     "10. Juguetea con o golpea las manos o los pies o se retuerce en el asiento.",
     "11. Se levanta de su asiento cuando se espera que permanezca sentado.",
     "12. Corre o trepa en exceso cuando se espera que permanezca sentado.",
     "13. Tiene dificultad para jugar o comenzar a desarrollar juegos tranquilos.",
     "14. Está siempre activo o con frecuencia actúa como si \"tuviera un motor\".",
     "15. Habla demasiado.",
     "16. Responde a las preguntas sin esperar que terminen de hacerlas.",
     "17. Tiene dificultad para esperar su turno.",
     "18. Interrumpe o se entromete en las conversaciones o actividades de los demás, o ambas cosas.",
     "19. Pierde los estribos.",
     "20. Es quisquilloso o se molesta fácilmente.",
     "21. Se enoja o muestra resentimiento.",
     "22. Discute con figuras de autoridad o con adultos.",
     "23. Desafía activamente o se niega a cumplir solicitudes o reglas.",
     "24. Molesta a otras personas deliberadamente.",
     "25. Culpa a los demás por sus errores o mal comportamiento.",
     "26. Es rencoroso y vengativo.",
     "27. Hostiga, amenaza o intimada a otros.",
     "28. Comienza las peleas físicas.",
     "29. Ha usado un arma que puede causar daño grave (p. ej., bate, cuchillo, ladrillo, pistola).",
     "30. Ha sido físicamente cruel con las personas.",
     "31. Ha sido físicamente cruel con animales.",
     "32. Ha robado confrontando a una persona.",
     "33. Ha forzado a alguien a mantener una actividad sexual.",
     "34. Ha prendido fuego deliberadamente para causar daño.",
     "35. Destruye deliberadamente las cosas de otras personas.",
     "36. Ha ingresado con violencia en otra casa, tienda o auto.",
     "37. Miente para salir de un problema, obtener cosas o favores o evitar obligaciones (p.ej., embauca a los demás).",
     "38. Ha robado objetos de valor.",
     "39. Ha pasado la noche fuera de su casa sin permiso desde antes de los 13 años de edad.",
     "40. Se ha escapado de casas dos veces o una vez por un período prolongado.",
     "41. Suele faltar a la escuela.",
     "42. Es temeroso, ansioso o se preocupa.",
     "43. Teme hacer cosas nuevas por miedo a cometer errores.",
     "44. Se siente despreciable o inferior.",
     "45. Se culpa por problemas o se siente culpable.",
     "46. Se siente solo, no querido o no amado; a menudo dice que nadie lo quiere.",
     "47. No es feliz; está triste o deprimido.",
     "48. Es acomplejado, tímido o se avergüenza con facilidad."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Excelente",
     "Por encima del promedio",
     "Promedio",
     "Algo problemático",
     "Problemático"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "49. Rendimiento escolar en general.",
     "50. Lectura.",
     "51. Escritura.",
     "52. Matemática.",
     "53. Relación con los padres.",
     "54. Relación con los hermanos.",
     "55. Relación con los compañeros.",
     "56. Participación en actividades organizadas (p. ej. equipos)."
    ],
    "numerar": false
   },
   {
    "t": "dato",
    "x": "¿Qué edad tenía su hijo cuando observó los comportamientos por primera vez?",
    "tipo": "numero",
    "unidad": "años"
   },
   {
    "t": "consigna",
    "x": "A su leal saber y entender, indique si su hijo exhibe los siguientes comportamientos:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No hay tics presentes",
     "Sí, casi todos los días, pero pasan desapercibidos para la mayoría de las personas",
     "Sí, los tics evidentes se manifiestan casi todos los días"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": false,
    "items": [
     "1. Tics motores: Movimientos rápidos y repetitivos como pestañear, hacer muecas faciales, mover la nariz, sacudir la cabeza, encogerse de hombros, sacudir los brazos, sacudir el cuerpo y dar patadas rápidas"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No hay tics presentes",
     "Sí, casi todos los días, pero pasan desapercibidos para la mayoría de las personas",
     "Sí, los tics evidentes se manifiestan casi todos los días"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": false,
    "items": [
     "2. Tics fónicos (vocales): Ruidos repetidos que incluyen carraspear, toser, silbar, aspirar ruidosamente por la nariz, resoplar, dar alaridos, producir una especie de ladridos, gruñir o repetir palabras y frases cortas"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     "3. Si respondió SÍ en 1 ó 2, ¿estos tics interfieren con las actividades de su hijo (como leer, escribir, caminar, hablar o comer)?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     "1. ¿A su hijo le han diagnosticado TDAH o TDA?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     "2. ¿Toma medicamentos para el TDAH o el TDA?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     "3. ¿A su hijo se le ha diagnosticado un trastorno de tics o síndrome de Tourette?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Sí"
    ],
    "vals": [
     0,
     1
    ],
    "puntua": true,
    "items": [
     "4. ¿Su hijo toma medicamentos para un trastorno de tics o el síndrome de Tourette?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Deterioro en el rendimiento",
     "js": "(RANGO(50,57).filter(i => r[i] === 4).length >= 2 || RANGO(50,57).filter(i => r[i] === 5).length >= 1) ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "No (menos de dos 4 y ningún 5)"
      ],
      [
       1,
       1,
       "Sí"
      ]
     ]
    },
    {
     "n": "Inatención: síntomas en 2 o 3",
     "js": "RANGO(2,10).filter(i => r[i] != null && r[i] >= 2).length",
     "texto": "De 0 a 9; el cuadro pide 6 o más."
    },
    {
     "n": "Hiperactividad-impulsividad: síntomas en 2 o 3",
     "js": "RANGO(11,19).filter(i => r[i] != null && r[i] >= 2).length",
     "texto": "De 0 a 9; el cuadro pide 6 o más."
    },
    {
     "n": "TDAH, predominio inatento",
     "js": "(RANGO(2,10).filter(i => r[i] != null && r[i] >= 2).length >= 6 && RANGO(11,19).filter(i => r[i] != null && r[i] >= 2).length < 6 && (RANGO(50,57).filter(i => r[i] === 4).length >= 2 || RANGO(50,57).filter(i => r[i] === 5).length >= 1)) ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "No se sugiere"
      ],
      [
       1,
       1,
       "Se sugiere: confirme con la entrevista y el formulario del docente"
      ]
     ]
    },
    {
     "n": "TDAH, predominio hiperactivo-impulsivo",
     "js": "(RANGO(11,19).filter(i => r[i] != null && r[i] >= 2).length >= 6 && RANGO(2,10).filter(i => r[i] != null && r[i] >= 2).length < 6 && (RANGO(50,57).filter(i => r[i] === 4).length >= 2 || RANGO(50,57).filter(i => r[i] === 5).length >= 1)) ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "No se sugiere"
      ],
      [
       1,
       1,
       "Se sugiere: confirme con la entrevista y el formulario del docente"
      ]
     ]
    },
    {
     "n": "TDAH combinado",
     "js": "(RANGO(2,10).filter(i => r[i] != null && r[i] >= 2).length >= 6 && RANGO(11,19).filter(i => r[i] != null && r[i] >= 2).length >= 6 && (RANGO(50,57).filter(i => r[i] === 4).length >= 2 || RANGO(50,57).filter(i => r[i] === 5).length >= 1)) ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "No se sugiere"
      ],
      [
       1,
       1,
       "Se sugiere: confirme con la entrevista y el formulario del docente"
      ]
     ]
    },
    {
     "n": "Trastorno negativista desafiante",
     "js": "(RANGO(20,27).filter(i => r[i] != null && r[i] >= 2).length >= 4 && (RANGO(50,57).filter(i => r[i] === 4).length >= 2 || RANGO(50,57).filter(i => r[i] === 5).length >= 1)) ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "No se sugiere"
      ],
      [
       1,
       1,
       "Se sugiere: confirme con la entrevista y el formulario del docente"
      ]
     ]
    },
    {
     "n": "Trastorno de conducta",
     "js": "(RANGO(28,42).filter(i => r[i] != null && r[i] >= 2).length >= 3 && (RANGO(50,57).filter(i => r[i] === 4).length >= 2 || RANGO(50,57).filter(i => r[i] === 5).length >= 1)) ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "No se sugiere"
      ],
      [
       1,
       1,
       "Se sugiere: confirme con la entrevista y el formulario del docente"
      ]
     ]
    },
    {
     "n": "Ansiedad o depresión",
     "js": "(RANGO(43,49).filter(i => r[i] != null && r[i] >= 2).length >= 3 && (RANGO(50,57).filter(i => r[i] === 4).length >= 2 || RANGO(50,57).filter(i => r[i] === 5).length >= 1)) ? 1 : 0",
     "rangos": [
      [
       0,
       0,
       "No se sugiere"
      ],
      [
       1,
       1,
       "Se sugiere: confirme con la entrevista y el formulario del docente"
      ]
     ]
    }
   ]
  }
 },
 "lie-bet": {
  "clave": "Lie/Bet",
  "sigla": "Lie/Bet",
  "titulo": "Cuestionario Lie-Bet",
  "para": "Tamizar en un minuto problemas con el juego de apuestas, con dos preguntas: haber mentido sobre cuánto se juega y haber necesitado apostar cada vez más dinero. Es el tamizaje más breve de la guía.",
  "areas": [
   "Consumo, juego y pantallas"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Johnson et al. (1997), Psychological Reports · redacción en español citada en Salinas (2004), Salud y Drogas.",
  "bloques": [
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "¿Alguna vez has tenido que mentir a gente importante para ti acerca de cuánto juegas?",
     "¿Alguna vez has sentido la necesidad de apostar más y más dinero?"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Respuestas «Sí»",
     "js": "C([1,2],1)",
     "rangos": [
      [
       0,
       0,
       "Tamizaje negativo"
      ],
      [
       1,
       2,
       "Tamizaje positivo: siga con una evaluación más completa"
      ]
     ]
    }
   ]
  }
 },
 "sogs": {
  "clave": "SOGS",
  "sigla": "SOGS",
  "titulo": "Cuestionario de Juego Patológico de South Oaks",
  "para": "Tamizar el juego patológico a partir de sus conductas y consecuencias: volver a jugar para recuperar lo perdido, mentir, discutir por el dinero, pedir prestado. Pregunta también de dónde salió el dinero, que suele mostrar el alcance real del problema.",
  "areas": [
   "Consumo, juego y pantallas"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Lesieur y Blume (1987); versión española de Echeburúa, Báez, Fernández-Montalvo y Páez (1994) · se reproduce tal como está impreso.",
  "bloques": [
   {
    "t": "items",
    "titulo": "1. Indique, por favor, cuál de los siguientes juegos ha practicado usted en su vida. Señale para cada tipo una contestación:",
    "cab": "",
    "ops": [
     "Nunca",
     "Menos de una vez por semana",
     "Una vez por semana o más"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": false,
    "items": [
     "a) jugar a cartas con dinero de por medio",
     "b) apostar en las carreras de caballos",
     "c) apostar en el frontón o en los deportes rurales",
     "d) jugar a la lotería, a las quinielas, a la primitiva, a la bono-loto o a los ciegos",
     "e) jugar en el casino",
     "f) jugar al bingo",
     "g) especular en la bolsa de valores",
     "h) jugar en las máquinas tragaperras",
     "i) practicar cualquier deporte o poner a prueba cualquier habilidad por una apuesta"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca he jugado dinero",
     "Menos de 1.000 pesetas",
     "Entre 1.000 y 5.000 pesetas",
     "Entre 5.000 y 10.000 pts.",
     "Entre 10.000 y 50.000 pesetas",
     "Más de 50.000 pesetas"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": false,
    "items": [
     "2. ¿Cuál es la mayor cantidad de dinero que ha gastado en jugar en un solo día?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "mi padre",
     "mi madre",
     "un hermano",
     "un abuelo",
     "mi cónyuge o pareja",
     "alguno de mis hijos",
     "otro familiar",
     "un amigo o alguien importante para mí"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": false,
    "items": [
     "3. Señale quién de las siguientes personas allegadas tiene o ha tenido un problema de juego."
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Algunas veces, pero menos de la mitad",
     "La mayoría de las veces que pierdo",
     "Siempre que pierdo"
    ],
    "vals": [
     0,
     0,
     1,
     1
    ],
    "puntua": true,
    "items": [
     "4. Cuando usted juega dinero, ¿con qué frecuencia vuelve otra vez a jugar para recuperar lo perdido?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Sí, pero menos de la mitad de las veces que he perdido",
     "La mayoría de las veces"
    ],
    "vals": [
     0,
     1,
     1
    ],
    "puntua": true,
    "items": [
     "5. ¿Ha afirmado usted alguna vez haber ganado dinero en el juego cuando en realidad había perdido?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Ahora no, pero en el pasado sí",
     "Ahora sí"
    ],
    "vals": [
     0,
     1,
     1
    ],
    "puntua": true,
    "items": [
     "6. ¿Cree usted que tiene o ha tenido alguna vez problemas con el juego?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "7. ¿Ha jugado alguna vez más dinero de lo que tenía pensado?",
     "8. ¿Le ha criticado la gente por jugar dinero o le ha dicho alguien que tenía un problema de juego, a pesar de que usted cree que no es cierto?",
     "9. ¿Se ha sentido alguna vez culpable por jugar o por lo que le ocurre cuando juega?",
     "10. ¿Ha intentado alguna vez dejar de jugar y no ha sido capaz de ello?",
     "11. ¿Ha ocultado alguna vez a su pareja, a sus hijos o a otros seres queridos billetes de lotería, fichas de apuestas, dinero obtenido en el juego u otros signos de juego?",
     "12. ¿Ha discutido alguna vez con las personas con que convive sobre la forma de administrar el dinero?",
     "13. (Si ha respondido sí a la pregunta anterior) ¿Se han centrado alguna vez las discusiones de dinero sobre el juego?",
     "14. ¿Ha pedido en alguna ocasión dinero prestado a alguien y no se lo ha devuelto a causa del juego?",
     "15. ¿Ha perdido alguna vez tiempo de trabajo o de clase debido al juego?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": "16. Si ha pedido prestado dinero para jugar o pagar deudas, ¿a quién se lo ha pedido o de dónde lo ha obtenido? (ponga una X en las respuestas que sean ciertas en su caso)",
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "a) del dinero de casa",
     "b) a mi pareja",
     "c) a otros familiares",
     "d) de bancos y cajas de ahorro",
     "e) de tarjetas de crédito",
     "f) de prestamistas",
     "g) de la venta de propiedades personales o familiares",
     "h) de la firma de cheques falsos o de extender cheques sin fondos",
     "i) de una cuenta de crédito en el mismo casino"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total (0 a 19)",
     "js": "L([12,13,14]) + C([15,16,17,18,19,21,22,23],1) + C(RANGO(24,31),1)",
     "rangos": [
      [
       0,
       3,
       "Por debajo del punto de corte"
      ],
      [
       4,
       19,
       "Probable jugador patológico (4 o más)"
      ]
     ]
    }
   ],
   "nota": "Las preguntas 1, 2, 3, 12 y 16i no puntúan. En línea la pregunta 3 admite una sola marca; en la ficha en PDF, varias."
  }
 },
 "igds9-sf": {
  "clave": "IGDS9-SF",
  "sigla": "IGDS9-SF",
  "titulo": "Escala breve de Trastorno de Juego por Internet",
  "para": "Tamizar el trastorno de juego por internet (videojuegos) con nueve preguntas, una por cada criterio propuesto en el DSM-5, referidas a los últimos doce meses. Da un puntaje de gravedad y un conteo de criterios.",
  "areas": [
   "Consumo, juego y pantallas"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos",
   "infancia"
  ],
  "cita": "Pontes y Griffiths (2015); versión española de Beranuy et al. (2020), IJERPH · acceso abierto, CC BY 4.0.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Los siguientes ítems hacen referencia a tu actividad con los videojuegos durante el último año (es decir, los últimos 12 meses). Por actividad en los videojuegos entendemos cualquier acción relacionada con los mismos (jugar desde un ordenador/portátil o desde una videoconsola) o desde cualquier otro tipo de dispositivo (por ejemplo, teléfono móvil, tablet, etc.) tanto conectado a Internet como sin estarlo y a cualquier tipo de juego"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "Preguntas",
    "ops": [
     "Nunca",
     "Raramente",
     "Ocasionalmente",
     "A menudo",
     "Muy a menudo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "¿Te sientes preocupado por tu comportamiento con el juego? (Algunos ejemplos: ¿Piensas en exceso cuando no estás jugando o anticipas en exceso a la próxima sesión de juego?, ¿Crees que el juego se ha convertido en la actividad dominante en tu vida diaria?)",
     "¿Sientes irritabilidad, ansiedad o incluso tristeza cuando intentas reducir o detener tu actividad de juego?",
     "¿Sientes la necesidad de pasar cada vez más tiempo jugando para lograr satisfacción o placer?",
     "¿Fallas sistemáticamente al intentar controlar o terminar tu actividad de juego?",
     "¿Has perdido intereses en aficiones anteriores y otras actividades de entretenimiento como resultado de tu compromiso con el juego?",
     "¿Has continuado jugando a pesar de saber que te estaba causando problemas con otras personas? (pareja, amistad o familia)",
     "¿Has engañado a alguno de tus familiares, terapeutas o amigos sobre el tiempo que pasas jugando?",
     "¿Juegas para escapar temporalmente o aliviar un estado de ánimo negativo (por ejemplo, desesperanza, tristeza, culpa o ansiedad)?",
     "¿Has comprometido o perdido una relación importante, un trabajo o una oportunidad educativa debido a tu actividad de juego?"
    ],
    "numerar": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,9)",
     "texto": "De 9 a 45: a mayor puntaje, mayor gravedad. Referencia: en estudiantes españoles que juegan, quienes se declararon adictos promediaron 19,2 (DE 8,3) y los demás 13,4 (DE 4,7) (Beranuy et al., 2020)."
    },
    {
     "n": "Criterios cumplidos («A menudo» o «Muy a menudo»)",
     "js": "C(RANGO(1,9),4) + C(RANGO(1,9),5)",
     "rangos": [
      [
       0,
       3,
       "Menos de cuatro criterios"
      ],
      [
       4,
       4,
       "En riesgo: cuatro criterios"
      ],
      [
       5,
       9,
       "Cinco o más criterios: posible trastorno de juego por internet; confirme con entrevista"
      ]
     ]
    }
   ]
  }
 },
 "iat": {
  "clave": "IAT",
  "sigla": "IAT",
  "titulo": "Test de Adicción a Internet",
  "para": "Medir el uso problemático de internet: pérdida de control del tiempo conectado, desatención de obligaciones y relaciones, preocupación por conectarse y malestar cuando no se puede. Sirve para tamizar y para seguir el cambio en adolescentes y adultos.",
  "areas": [
   "Consumo, juego y pantallas"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos",
   "infancia"
  ],
  "cita": "Young (1998) · traducción sin autor identificado; validación colombiana de Puerta-Cortés et al. (2012).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Marque el casillero, para cada una de las 20 preguntas, que represente con mayor precisión lo que usted experimenta respecto al uso de Internet:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Raramente",
     "Ocasionalmente",
     "Frecuentemente",
     "Muy a menudo",
     "Siempre"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "1. ¿Con qué frecuencia se encuentra con que lleva más tiempo navegando del que pretendía estar?",
     "2. ¿Desatiende las labores de su hogar por pasar más tiempo frente a la computadora navegando?",
     "3. ¿Prefiere excitarse con fotos o videos a través de Internet en lugar de buscar intimidad con su pareja?",
     "4. ¿Con qué frecuencia establece relaciones amistosas con gente que sólo conoce a través de Internet?",
     "5. ¿Con qué frecuencia personas de su entorno le recriminan que pasa demasiado tiempo conectado a Internet?",
     "6. ¿Su actividad académica (escuela, universidad) se ve perjudicada porque dedica demasiado tiempo a navegar?",
     "7. ¿Con qué frecuencia chequea el correo electrónico antes de realizar otras tareas prioritarias?",
     "8. ¿Su productividad en el trabajo se ve perjudicada por el uso de Internet?",
     "9. ¿Se vuelve precavido o reservado cuando alguien le pregunta a qué dedica el tiempo que pasa navegando?",
     "10. ¿Se evade de sus problemas de la vida real pasando un rato conectado a Internet?",
     "11. ¿Se encuentra alguna vez pensando en lo que va a hacer la próxima vez que se conecte a Internet?",
     "12. ¿Teme que su vida sin Internet sea aburrida y vacía?",
     "13. ¿Se siente molesto cuando alguien lo o la interrumpe mientras está navegando?",
     "14. ¿Con qué frecuencia pierde horas de sueño pasándolas conectado a Internet?",
     "15. ¿Se encuentra a menudo pensando en cosas relacionadas a Internet cuando no está conectado?",
     "16. ¿Le ha pasado alguna vez eso de decir \"solo unos minutitos más\" antes de apagar la computadora?",
     "17. ¿Ha intentado alguna vez pasar menos tiempo conectado a Internet y no lo ha logrado?",
     "18. ¿Trata de ocultar cuánto tiempo pasa realmente navegando?",
     "19. ¿Prefiere pasar más tiempo online que con sus amigos en la vida real?",
     "20. ¿Se siente ansioso, nervioso, deprimido o aburrido cuando no está conectado a Internet?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "S(1,20)",
     "rangos": [
      [
       0,
       30,
       "Uso dentro de lo normal"
      ],
      [
       31,
       49,
       "Adicción leve"
      ],
      [
       50,
       79,
       "Adicción moderada"
      ],
      [
       80,
       100,
       "Adicción grave"
      ]
     ]
    }
   ]
  }
 },
 "asrs-v1-1": {
  "clave": "ASRS v1.1",
  "sigla": "ASRS v1.1",
  "titulo": "Escala de Autorreporte de Síntomas de TDAH en Adultos",
  "para": "Tamizar el TDAH en adultos. La parte A, de seis preguntas, es la que mejor predice el trastorno; la parte B completa los 18 síntomas del DSM y orienta la entrevista.",
  "areas": [
   "Neurodesarrollo y cognición"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Kessler et al. (2005), Psychological Medicine · Organización Mundial de la Salud; versión en español.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Responda a las siguientes preguntas autoevaluándose en cada uno de los criterios que se muestran, utilizando la escala a la derecha de la página. Cuando responda cada pregunta, ponga una X en la casilla que mejor describa cómo se ha sentido y comportado durante los últimos 6 meses."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Rara vez",
     "Algunas veces",
     "Con frecuencia",
     "Con mucha frecuencia"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. ¿Con qué frecuencia tiene dificultad para terminar los detalles finales de un proyecto después de haber hecho las partes difíciles?",
     "2. ¿Con qué frecuencia le cuesta poner las cosas en orden cuando tiene que hacer una tarea que requiere organización?",
     "3. ¿Con qué frecuencia tiene problemas para acordarse de citas u obligaciones?",
     "4. Cuando tiene una tarea que exige pensar mucho, ¿con qué frecuencia evita o retrasa su comienzo?",
     "5. ¿Con qué frecuencia se mueve nerviosamente o retuerce las manos o los pies cuando tiene que estar sentado por un tiempo prolongado?",
     "6. ¿Con qué frecuencia se siente demasiado activo e impulsado a hacer cosas, como si tuviera un motor adentro?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Rara vez",
     "Algunas veces",
     "Con frecuencia",
     "Con mucha frecuencia"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "7. ¿Con qué frecuencia comete errores por descuido cuando tiene que trabajar en un proyecto difícil o aburrido?",
     "8. ¿Con qué frecuencia le cuesta mantener la atención cuando está haciendo un trabajo aburrido o repetitivo?",
     "9. ¿Con qué frecuencia le cuesta concentrarse en lo que otras personas le dicen, incluso cuando le están hablando directamente a usted?",
     "10. ¿Con qué frecuencia embolata o le cuesta encontrar cosas en la casa o el trabajo?",
     "11. ¿Con qué frecuencia lo distraen las actividades o ruidos que lo rodean?",
     "12. ¿Con qué frecuencia deja su asiento en reuniones u otras situaciones en las que se espera que se mantenga sentado?",
     "13. ¿Con qué frecuencia se siente inquieto o agitado?",
     "14. ¿Con qué frecuencia le cuesta despreocuparse y relajarse cuando tiene tiempo libre?",
     "15. ¿Con qué frecuencia encuentra que habla demasiado cuando está en situaciones sociales?",
     "16. Cuando participa en una conversación, ¿con qué frecuencia encuentra que termina las frases de las personas con las que habla antes de que ellas puedan terminarlas?",
     "17. ¿Con qué frecuencia le cuesta esperar su turno en situaciones en las que es necesario esperar turno?",
     "18. ¿Con qué frecuencia interrumpe a otras personas cuando están ocupadas?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Parte A: preguntas positivas",
     "js": "(r[1] != null && r[1] >= 2) + (r[2] != null && r[2] >= 2) + (r[3] != null && r[3] >= 2) + (r[4] != null && r[4] >= 3) + (r[5] != null && r[5] >= 3) + (r[6] != null && r[6] >= 3)",
     "rangos": [
      [
       0,
       3,
       "Por debajo del corte"
      ],
      [
       4,
       6,
       "Compatible con TDAH en el adulto (4 o más): evalúe en entrevista"
      ]
     ]
    },
    {
     "n": "Parte B: síntomas frecuentes",
     "js": "RANGO(7,18).filter(i => r[i] != null && r[i] >= 3).length",
     "texto": "De 0 a 12: preguntas en «con frecuencia» o más. Sin corte; orientan la entrevista."
    }
   ]
  }
 },
 "mini-cog": {
  "clave": "Mini-Cog",
  "sigla": "Mini-Cog",
  "titulo": "Prueba Mini-Cog",
  "para": "Tamizar rápidamente el deterioro cognitivo en adultos mayores: recuerdo de tres palabras y dibujo del reloj. Toma unos tres minutos y depende poco de la escolaridad y del idioma.",
  "areas": [
   "Neurodesarrollo y cognición"
  ],
  "quien": [
   "profesional"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Borson et al. (2000, 2003) · Mini-Cog©, versión oficial en español.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Mire directamente a la persona y dígale, \"Escuche con cuidado. Voy a decir tres palabras que quiero que usted repita ahora y trate de recordar. Las palabras son [seleccione una lista de palabras de las versiones que aparecen a continuación]. \"Ahora repita las palabras.” Si la persona no es capaz de repetir las palabras después de tres intentos, continúe al Paso N.º 2 (Dibujo de reloj)."
   },
   {
    "t": "consigna",
    "x": "Diga: \"Ahora, quiero que me dibuje un reloj. Primero, coloque los números donde van\". Una vez que el cliente haya terminado, diga: \"Ahora, ponga las manecillas del reloj en la posición que indiquen las 11:10\". Use la página con el círculo impreso (vea la siguiente página) para este ejercicio. Repita las instrucciones según sea necesario ya que esto no es una prueba de memoria. Continúe al"
   },
   {
    "t": "consigna",
    "x": "Pídale a la persona que repita las tres palabras que usted dijo en el Paso N.º 1. Diga: “¿Cuáles fueron las tres palabras que le pedí que recordara?” Registre el número de versión de lista de palabras y las respuestas de la persona a continuación."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Versión 1",
     "Versión 2",
     "Versión 3",
     "Versión 4",
     "Versión 5",
     "Versión 6"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": false,
    "items": [
     "Versión de la lista de palabras usada"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguna",
     "1",
     "2",
     "3"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Memoria de palabras (0 a 3): 1 punto por cada palabra que recuerde espontáneamente, sin pistas"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Anormal, no lo dibuja o se rehúsa",
     "Normal"
    ],
    "vals": [
     0,
     2
    ],
    "puntua": true,
    "items": [
     "Dibujo de reloj (0 o 2). Reloj normal = 2 puntos. Un reloj normal tiene todos los números colocados en la secuencia y posición aproximadamente correctas (p. ej., 12, 3, 6, 9 están en posiciones de anclaje y 2 (11:10). Longitud de la manecilla no se cuenta en el puntaje. Si la persona no es capaz de dibujar un reloj o se rehúsa (anormal) = 0 puntos."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje total",
     "js": "(r[2] || 0) + (r[3] || 0)",
     "rangos": [
      [
       0,
       2,
       "Positivo para demencia (menos de 3): evalúe a fondo"
      ],
      [
       3,
       3,
       "Por encima del corte habitual; con el corte más sensible (menos de 4), conviene evaluar más"
      ],
      [
       4,
       5,
       "Negativo"
      ]
     ]
    }
   ]
  }
 },
 "hits": {
  "clave": "HITS",
  "sigla": "HITS",
  "titulo": "Tamizaje de Violencia de Pareja (HITS)",
  "para": "Tamizar la violencia de pareja en consulta con cuatro preguntas: con qué frecuencia la pareja lastima, insulta, amenaza o grita. Abre la conversación y orienta la ruta de atención.",
  "areas": [
   "Familia, pareja y violencia"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Sherin et al. (1998), Family Medicine · versión en español (hoja de la AAP, capítulo de Virginia).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Marque la respuesta que indique con qué frecuencia su pareja actuó de la manera descrita durante el último mes."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Rara vez",
     "A veces",
     "Bastante a menudo",
     "Frecuentemente"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "1. ¿Cuán a menudo su pareja le lastima físicamente?",
     "2. ¿Cuán a menudo su pareja le insulta o le habla en una forma que le hace sentir inferior?",
     "3. ¿Cuán a menudo su pareja le amenaza de hacerle daño?",
     "4. ¿Cuán a menudo su pareja le grita o le maldice?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,4)",
     "rangos": [
      [
       4,
       10,
       "Negativo (10 o menos): si hay preocupación, igual converse sobre seguridad"
      ],
      [
       11,
       20,
       "Positivo (más de 10): evalúe riesgo y active la ruta de atención"
      ]
     ]
    }
   ]
  }
 },
 "wast": {
  "clave": "WAST",
  "sigla": "WAST",
  "titulo": "Herramienta de Tamizaje de Maltrato a la Mujer, versión corta",
  "para": "Abrir el tema de la violencia de pareja con dos preguntas que no la nombran de entrada: cuánta tensión hay en la relación y con cuánta dificultad se resuelven las discusiones. Son las dos preguntas del WAST con las que las mujeres dijeron sentirse más cómodas.",
  "areas": [
   "Familia, pareja y violencia"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Brown et al. (1996); versión corta en español de Fogarty y Brown (2002), en Plazaola-Castaño et al. (2008), Gaceta Sanitaria.",
  "bloques": [
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Mucha tensión",
     "Alguna tensión",
     "Sin tensión"
    ],
    "vals": [
     1,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "1. En general, ¿cómo describiría usted su relación con su pareja?"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Mucha dificultad",
     "Alguna dificultad",
     "Sin dificultad"
    ],
    "vals": [
     1,
     1,
     0
    ],
    "puntua": true,
    "items": [
     "2. Usted y su pareja resuelven sus discusiones con:"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Puntaje (primer criterio)",
     "js": "S(1,2)",
     "rangos": [
      [
       0,
       1,
       "Tamizaje negativo"
      ],
      [
       2,
       2,
       "Tamizaje positivo: siga preguntando y valore la seguridad"
      ]
     ]
    }
   ]
  }
 },
 "lsns-6": {
  "clave": "LSNS-6",
  "sigla": "LSNS-6",
  "titulo": "Escala de Red Social de Lubben, versión abreviada",
  "para": "Medir el tamaño y la cercanía de la red de familiares y de amigos con que cuenta la persona: con cuántos se ve o habla, con cuántos puede conversar de lo privado y a cuántos podría llamar si necesita ayuda. Mide red efectiva, no apoyo percibido, y tamiza el riesgo de aislamiento social en personas mayores.",
  "areas": [
   "Bienestar y apoyo social"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Lubben et al. (2006); ítems en español de Moyano-Díaz et al. (2025), MedUNAB, CC BY-NC-ND · opciones y cortes del original.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Para cada pregunta, marque cuántas personas corresponden."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguno",
     "Uno",
     "Dos",
     "Tres o cuatro",
     "Cinco a ocho",
     "Nueve o más"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "1. ¿Con cuántos familiares tiene usted contacto personal o telefónico al menos una vez por mes?",
     "2. ¿Con cuántos familiares se siente usted cómodo para conversar con facilidad sobre los asuntos privados que a usted le preocupan?",
     "3. ¿A cuántos familiares los siente usted lo suficientemente cercanos como para llamarlos en caso de necesitar ayuda?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Ninguno",
     "Uno",
     "Dos",
     "Tres o cuatro",
     "Cinco a ocho",
     "Nueve o más"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "4. ¿Con cuántos amigos (personas con algún vínculo, pero NO parientes) tiene usted contacto personal o telefónico al menos una vez por mes?",
     "5. ¿Con cuántos amigos se siente usted cómodo para conversar con facilidad sobre los asuntos privados que a usted le preocupan?",
     "6. ¿A cuántos amigos los siente usted lo suficientemente cercanos como para llamarlos en caso de necesitar ayuda?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Familia",
     "js": "S(1,3)",
     "rangos": [
      [
       0,
       5,
       "Red familiar escasa (menor de 6)"
      ],
      [
       6,
       15,
       "Sin indicio de red familiar escasa"
      ]
     ]
    },
    {
     "n": "Amigos",
     "js": "S(4,6)",
     "rangos": [
      [
       0,
       5,
       "Red de amigos escasa (menor de 6)"
      ],
      [
       6,
       15,
       "Sin indicio de red de amigos escasa"
      ]
     ]
    },
    {
     "n": "Total",
     "js": "S(1,6)",
     "rangos": [
      [
       0,
       11,
       "Riesgo de aislamiento social (menor de 12)"
      ],
      [
       12,
       30,
       "Sin riesgo de aislamiento según el corte"
      ]
     ]
    }
   ]
  }
 },
 "rosenberg": {
  "clave": "Rosenberg",
  "sigla": "Rosenberg",
  "titulo": "Escala de Autoestima de Rosenberg",
  "para": "Medir la autoestima global: cuánto se valora y se acepta la persona a sí misma. Son diez frases, la mitad positivas y la mitad negativas. Es la escala de autoestima más usada en el mundo y sirve para comparar a la persona consigo misma al inicio y al final de una intervención.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Rosenberg (1965) · versión española de Atienza, Moreno y Balaguer (2000) · uso libre.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor, lee las frases que figuran a continuación y señala el nivel de acuerdo o desacuerdo que tienes con cada una de ellas, marcando con un aspa la alternativa elegida."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Muy en desacuerdo",
     "En desacuerdo",
     "De acuerdo",
     "Muy de acuerdo"
    ],
    "vals": [
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Me siento una persona tan valiosa como las otras",
     "2. Generalmente me inclino a pensar que soy un fracaso",
     "3. Creo que tengo algunas cualidades buenas",
     "4. Soy capaz de hacer las cosas tan bien como los demás",
     "5. Creo que no tengo mucho de lo que estar orgulloso",
     "6. Tengo una actitud positiva hacia mí mismo",
     "7. En general me siento satisfecho conmigo mismo",
     "8. Me gustaría tener más respeto por mí mismo",
     "9. Realmente me siento inútil en algunas ocasiones",
     "10. A veces pienso que no sirvo para nada"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "L([1,3,4,6,7]) + R(2,5) + R(5,5) + R(8,5) + R(9,5) + R(10,5)",
     "texto": "De 10 a 40: a mayor puntaje, mayor autoestima. Sin puntos de corte. Referencia: en universitarios españoles la media fue 32,5 (DE 3,9) en hombres y 31,1 (DE 4,6) en mujeres (Martín-Albo et al., 2007, n = 420)."
    },
    {
     "n": "Autoestima positiva (1, 3, 4, 6, 7)",
     "js": "L([1,3,4,6,7])",
     "texto": "De 5 a 20."
    },
    {
     "n": "Autoestima negativa invertida (2, 5, 8, 9, 10)",
     "js": "R(2,5) + R(5,5) + R(8,5) + R(9,5) + R(10,5)",
     "texto": "De 5 a 20: a mayor puntaje, menos autoevaluación negativa."
    }
   ]
  }
 },
 "whiteley": {
  "clave": "Whiteley",
  "sigla": "Whiteley",
  "titulo": "Índice Whiteley de hipocondría",
  "para": "Tamizar la ansiedad por la salud (hipocondría): miedo a enfermar, convicción de estar enfermo y preocupación por las sensaciones corporales. Sirve también para medir el cambio con el tratamiento.",
  "areas": [
   "Salud, sueño y síntomas físicos",
   "Ansiedad"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Pilowsky (1967), British Journal of Psychiatry · versión en español del formato del docente.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor responda sí o no a cada una de las siguientes preguntas:"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "1. ¿A menudo se preocupa por la posibilidad de tener una enfermedad grave?",
     "2. ¿Sufre de dolores y achaques diversos?",
     "3. ¿A menudo se da cuenta de distintos síntomas que ocurren en su cuerpo?",
     "4. ¿Está muy preocupado por su salud?",
     "5. ¿Con frecuencia tiene síntomas de enfermedades muy graves?",
     "6. ¿Si tiene noticias de alguna enfermedad (a través de la radio, la TV, los periódicos o de algún conocido) se preocupa por la posibilidad de padecerla?",
     "7. ¿Cuando está enfermo, se molesta si alguien le dice que tiene mejor aspecto?",
     "8. ¿Se encuentra mal por muchos síntomas diferentes?",
     "9. ¿Le resulta fácil olvidarse de sí mismo y pensar en cualquier otra cosa?",
     "10. ¿Le cuesta creer al médico cuando le dice que no tiene ningún motivo para preocuparse?",
     "11. ¿Tiene la sensación de que la gente no se toma suficientemente en serio su enfermedad?",
     "12. ¿Cree que se preocupa por su salud más que la mayoría de la gente?",
     "13. ¿Cree que hay algo que funciona francamente mal en su cuerpo?",
     "14. ¿Tiene miedo a la enfermedad?"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "(r[1] === 1) + (r[2] === 1) + (r[3] === 1) + (r[4] === 1) + (r[5] === 1) + (r[6] === 1) + (r[7] === 1) + (r[8] === 1) + (r[9] === 0) + (r[10] === 1) + (r[11] === 1) + (r[12] === 1) + (r[13] === 1) + (r[14] === 1)",
     "rangos": [
      [
       0,
       7,
       "Por debajo del corte"
      ],
      [
       8,
       14,
       "Compatible con ansiedad por la salud (8 o más): explore en la entrevista"
      ]
     ]
    }
   ]
  }
 },
 "sss": {
  "clave": "SSS",
  "sigla": "SSS-8",
  "titulo": "Escala de Síntomas Somáticos (SSS-8)",
  "para": "Medir la carga de síntomas somáticos de la última semana: digestivos, dolor de espalda, de extremidades, de cabeza y de pecho o falta de aire, mareo, cansancio y sueño. Sirve para tamizar y seguir el trastorno de síntomas somáticos.",
  "areas": [
   "Salud, sueño y síntomas físicos"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Gierk et al. (2014), JAMA Internal Medicine · traducción sin autor identificado.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Durante los últimos 7 días, ¿cuánto le han molestado cualquiera de los siguientes problemas?"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada",
     "Un poco",
     "Algo",
     "Bastante",
     "Mucho"
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Problemas estomacales o intestinales",
     "2. Dolor de espalda",
     "3. Dolor en brazos, piernas o articulaciones",
     "4. Dolores de cabeza",
     "5. Dolor en el pecho o dificultad para respirar",
     "6. Mareos",
     "7. Se siente cansado o que tiene baja energía",
     "8. Problemas para dormir"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,8)",
     "rangos": [
      [
       0,
       3,
       "Nada o mínima"
      ],
      [
       4,
       7,
       "Baja"
      ],
      [
       8,
       11,
       "Media"
      ],
      [
       12,
       15,
       "Alta"
      ],
      [
       16,
       32,
       "Muy alta"
      ]
     ]
    }
   ]
  }
 },
 "fmps": {
  "clave": "FMPS",
  "sigla": "FMPS",
  "titulo": "Escala Multidimensional de Perfeccionismo de Frost",
  "para": "Medir el perfeccionismo en sus distintas caras: miedo a cometer errores y dudas sobre lo que se hace, exigencias y expectativas de logro, influencia de las expectativas y críticas de los padres, y organización. Distingue el perfeccionismo que daña del que no.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales",
   "TOC y conductas repetitivas"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Frost et al. (1990) · versión española de Carrasco, Belloch y Perpiñá (2010), Análisis y Modificación de Conducta.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23",
     "Ítem 24",
     "Ítem 25",
     "Ítem 26",
     "Ítem 27",
     "Ítem 28",
     "Ítem 29",
     "Ítem 30",
     "Ítem 31",
     "Ítem 32",
     "Ítem 33",
     "Ítem 34",
     "Ítem 35"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Miedo a los errores",
     "js": "(r[9] || 0) + (r[10] || 0) + (r[14] || 0) + (r[17] || 0) + (r[21] || 0) + (r[23] || 0) + (r[25] || 0) + (r[28] || 0) + (r[32] || 0) + (r[33] || 0) + (r[34] || 0)",
     "texto": "De 11 a 55. Media en universitarios españoles: 19,2 (DE 6,8); percentiles 25/50/75: 14, 18 y 23."
    },
    {
     "n": "Influencias paternas",
     "js": "(r[1] || 0) + (r[3] || 0) + (r[5] || 0) + (r[11] || 0) + (r[15] || 0) + (r[20] || 0) + (r[22] || 0) + (r[26] || 0) + (r[35] || 0)",
     "texto": "De 9 a 45. Media en universitarios españoles: 14,3 (DE 6,4); percentiles 25/50/75: 10, 12 y 16."
    },
    {
     "n": "Expectativas de logro",
     "js": "(r[4] || 0) + (r[6] || 0) + (r[12] || 0) + (r[13] || 0) + (r[16] || 0) + (r[18] || 0) + (r[19] || 0) + (r[24] || 0) + (r[30] || 0)",
     "texto": "De 9 a 45. Media en universitarios españoles: 19,3 (DE 6,8); percentiles 25/50/75: 14, 18 y 24."
    },
    {
     "n": "Organización",
     "js": "(r[2] || 0) + (r[7] || 0) + (r[8] || 0) + (r[27] || 0) + (r[29] || 0) + (r[31] || 0)",
     "texto": "De 6 a 30. Media en universitarios españoles: 18,4 (DE 5,1); percentiles 25/50/75: 15, 18 y 22."
    },
    {
     "n": "Total",
     "js": "S(1,35)",
     "texto": "De 35 a 175. En la muestra española, la mediana fue 67 y el percentil 75, 82."
    }
   ]
  },
  "hoja": true
 },
 "mgh-hs": {
  "clave": "MGH-HS",
  "sigla": "MGH-HS",
  "titulo": "Escala de Arrancamiento de Pelo del Hospital General de Massachusetts",
  "para": "Medir la gravedad del arrancamiento de pelo (tricotilomanía) en la última semana: frecuencia e intensidad de los impulsos, control sobre ellos, frecuencia del arrancamiento, intentos de resistirlo y malestar. Es la medida habitual para seguir el tratamiento.",
  "areas": [
   "TOC y conductas repetitivas"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Keuthen et al. (1995), Psychotherapy and Psychosomatics · traducción sin autor identificado.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Para cada pregunta, elija la afirmación dentro de cada grupo que mejor describa sus conductas y/o sentimientos durante la última semana. Si ha tenido altibajos, trate de estimar un promedio para la última semana. Asegúrese de leer todas las afirmaciones antes de hacer su elección."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Esta semana no sentí ningún impulso de arrancarme el cabello.",
     "Esta semana sentí un impulso ocasional de arrancarme el cabello.",
     "Esta semana sentí con frecuencia el impulso de arrancarme el cabello.",
     "Esta semana sentí muy frecuentemente el impulso de arrancarme el cabello.",
     "Esta semana sentí impulsos casi constantes de arrancarme el cabello."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "1. Frecuencia de los impulsos (día promedio)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Esta semana no sentí ningún impulso de arrancarme el cabello.",
     "Esta semana sentí impulsos leves de arrancarme el cabello.",
     "Esta semana sentí impulsos moderados de arrancarme el cabello.",
     "Esta semana sentí impulsos severos de arrancarme el cabello.",
     "Esta semana sentí impulsos extremos de arrancarme el cabello."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "2. Intensidad de los impulsos (día promedio)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Esta semana siempre pude controlar los impulsos, o no sentí ningún impulso.",
     "Esta semana pude distraerme de los impulsos la mayor parte del tiempo.",
     "Esta semana pude distraerme de los impulsos algunas veces.",
     "Esta semana rara vez pude distraerme de los impulsos.",
     "Esta semana nunca pude distraerme de los impulsos."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "3. Capacidad para controlar los impulsos (día promedio)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Esta semana no me arranqué el cabello.",
     "Esta semana me arranqué el cabello ocasionalmente.",
     "Esta semana me arranqué el cabello con frecuencia.",
     "Esta semana me arranqué el cabello muy frecuentemente.",
     "Esta semana me arranqué el cabello con tanta frecuencia que sentí que lo hacía todo el tiempo."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "4. Frecuencia del arrancamiento (día promedio)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Esta semana no sentí ningún impulso de arrancarme el cabello.",
     "Esta semana intenté resistir casi todo el tiempo.",
     "Esta semana intenté resistir algunas veces.",
     "Esta semana rara vez intenté resistir.",
     "Esta semana nunca intenté resistir."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "5. Intentos de resistir el arrancamiento (día promedio)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Esta semana no me arranqué el cabello.",
     "Esta semana pude resistir casi todo el tiempo.",
     "Esta semana pude resistir la mayor parte del tiempo.",
     "Esta semana pude resistir algunas veces.",
     "Esta semana rara vez pude resistir."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "6. Control sobre el arrancamiento (día promedio)"
    ],
    "numerar": false,
    "lista": true
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No me sentí incómodo/a por arrancarme el cabello.",
     "Me sentí levemente incómodo/a.",
     "Me sentí claramente incómodo/a.",
     "Me sentí significativamente incómodo/a.",
     "Me sentí intensamente incómodo/a."
    ],
    "vals": [
     0,
     1,
     2,
     3,
     4
    ],
    "puntua": true,
    "items": [
     "7. Malestar asociado (última semana)"
    ],
    "numerar": false,
    "lista": true
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,7)",
     "texto": "De 0 a 28: a mayor puntaje, más gravedad. Sin puntos de corte ni normas: sirve para seguir el cambio. Referencia: en el estudio piloto del manual de Woods y Twohig (2008) el puntaje bajó en promedio un 63 % al terminar el tratamiento."
    },
    {
     "n": "Impulsos (1 a 3)",
     "js": "S(1,3)",
     "texto": "De 0 a 12."
    },
    {
     "n": "Arrancamiento (4 a 6)",
     "js": "S(4,6)",
     "texto": "De 0 a 12."
    }
   ]
  }
 },
 "smq": {
  "clave": "SMQ",
  "sigla": "SMQ",
  "titulo": "Cuestionario de Mutismo Selectivo",
  "para": "Medir con qué frecuencia el niño habla en tres contextos: la escuela, la familia y las situaciones sociales fuera de la escuela. Lo responden los padres y sirve para ver dónde está el mutismo y para seguir el tratamiento.",
  "areas": [
   "Ansiedad"
  ],
  "quien": [
   "padres"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Bergman et al. (2008); versión española de Olivares-Olivares et al. (2021), IJCHP, apéndice A.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor, considere el comportamiento de su hijo en el último mes y califique con qué frecuencia es verdadera cada una de las siguientes afirmaciones."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Rara vez",
     "A menudo",
     "Siempre"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "1. Cuando es oportuno, mi hijo/a habla con la mayoría de sus compañeros en la escuela",
     "2. Cuando es adecuado, mi hijo/a habla con sus compañeros preferidos (sus amigos/as) en la escuela",
     "3. Cuando su maestro/a le hace preguntas mi hijo/a le contesta",
     "4. Cuando es oportuno, mi hijo/a le hace preguntas a su maestro/a",
     "5. Cuando corresponde, mi hijo/a habla con la mayoría de los maestros y personal de la escuela",
     "6. Cuando es oportuno, mi hijo/a habla en grupos pequeños o delante de la clase"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Rara vez",
     "A menudo",
     "Siempre"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "7. Cuando está en casa, mi hijo/a habla cómodamente con los miembros de la familia que viven en el hogar familiar",
     "8. Cuando es adecuado, mi hijo/a habla con los miembros de la familia en lugares desconocidos",
     "9. Cuando es apropiado, mi hijo/a habla con los familiares que no viven con él/ella (por ejemplo, con sus abuelos, con sus primos/as, etc.)",
     "10. Cuando corresponde, mi hijo/a habla por teléfono con sus padres y sus hermanos",
     "11. Cuando es oportuno, mi hijo/a habla con amigos de la familia conocidos por él/ella",
     "12. Mi hijo habla al menos con una cuidadora"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nunca",
     "Rara vez",
     "A menudo",
     "Siempre"
    ],
    "vals": [
     0,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "13. Cuando es oportuno, mi hijo/a habla con otros niños que no conoce",
     "14. Cuando es adecuado, mi hijo/a habla con amigos de la familia que no conoce",
     "15. Cuando corresponde, mi hijo/a habla con su médico y/o dentista",
     "16. Cuando es apropiado, mi hijo/a habla con los empleados de las tiendas y/o con los camareros",
     "17. Cuando es oportuno, mi hijo/a habla cuando está en clubes, equipos o actividades organizadas fuera de la escuela"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Escuela (1 a 6)",
     "js": "S(1,6)",
     "texto": "De 0 a 18: a menor puntaje, menos habla en la escuela. En niños con mutismo selectivo: 2,4 (DE 2,3)."
    },
    {
     "n": "Familia (7 a 12)",
     "js": "S(7,12)",
     "texto": "De 0 a 18: a menor puntaje, menos habla con la familia. En niños con mutismo selectivo: 6,0 (DE 3,1)."
    },
    {
     "n": "Social (13 a 17)",
     "js": "S(13,17)",
     "texto": "De 0 a 15: a menor puntaje, menos habla fuera de la escuela. En niños con mutismo selectivo: 1,4 (DE 1,6)."
    },
    {
     "n": "Total",
     "js": "S(1,17)",
     "texto": "De 0 a 51: a menor puntaje, más mutismo. Sin puntos de corte. Referencia clínica: 9,8 (DE 5,8) en 110 niños españoles con mutismo selectivo diagnosticado (Olivares-Olivares et al., 2021)."
    }
   ]
  }
 },
 "fiat-q": {
  "clave": "FIAT-Q",
  "sigla": "FIAT-Q",
  "titulo": "Cuestionario de Evaluación Idiográfica Funcional",
  "para": "Funcionamiento interpersonal en cinco clases —expresión de necesidades, comunicación en ambos sentidos, conflicto, cercanía y experiencia y expresión emocional— para identificar las conductas clínicamente relevantes de la persona en la psicoterapia analítica funcional.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Darrow et al. (2014), FIAT-Q, apéndice A · traducción al español del formato del docente, sin fuente identificada.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "−3",
     "−2",
     "−1",
     "+1",
     "+2",
     "+3"
    ],
    "vals": [
     -3,
     -2,
     -1,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "−3",
     "−2",
     "−1",
     "+1",
     "+2",
     "+3"
    ],
    "vals": [
     -3,
     -2,
     -1,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 13",
     "Ítem 14",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23",
     "Ítem 24",
     "Ítem 25"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "−3",
     "−2",
     "−1",
     "+1",
     "+2",
     "+3"
    ],
    "vals": [
     -3,
     -2,
     -1,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 14",
     "Ítem 15",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "−3",
     "−2",
     "−1",
     "+1",
     "+2",
     "+3"
    ],
    "vals": [
     -3,
     -2,
     -1,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23",
     "Ítem 24"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "−3",
     "−2",
     "−1",
     "+1",
     "+2",
     "+3"
    ],
    "vals": [
     -3,
     -2,
     -1,
     1,
     2,
     3
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17",
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23",
     "Ítem 24"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Clase A. Identificación y expresión de necesidades",
     "js": "(r[1] + R(2,0) + R(3,0) + r[4] + r[5] + R(6,0) + r[7] + R(8,0) + R(9,0) + R(10,0) + r[11] + r[12] + r[13] + R(14,0) + r[15] + r[16] + r[17] + R(18,0) + r[19] + r[20] + r[21])",
     "texto": "De −63 a +63 (21 afirmaciones): a mayor puntaje, más problemas."
    },
    {
     "n": "Clase B. Comunicación bidireccional: impacto y retroalimentación",
     "js": "(r[22] + r[23] + r[24] + r[25] + R(26,0) + R(27,0) + R(28,0) + r[29] + R(30,0) + r[31] + r[32] + r[33] + r[34] + r[35] + r[36] + r[37] + r[38] + r[39] + r[40] + R(41,0) + r[42] + r[43])",
     "texto": "De −66 a +66 (22 afirmaciones): a mayor puntaje, más problemas."
    },
    {
     "n": "Clase C. Conflicto",
     "js": "(r[44] + r[45] + R(46,0) + r[47] + R(48,0) + r[49] + r[50] + r[51] + r[52] + r[53] + r[54] + r[55] + R(56,0) + r[57] + R(58,0) + r[59] + r[60] + r[61] + r[62] + r[63] + r[64])",
     "texto": "De −63 a +63 (21 afirmaciones): a mayor puntaje, más problemas."
    },
    {
     "n": "Clase D. Cercanía interpersonal",
     "js": "(r[65] + R(66,0) + r[67] + R(68,0) + r[69] + r[70] + r[71] + r[72] + R(73,0) + r[74] + r[75] + r[76] + R(77,0) + r[78] + R(79,0) + r[80] + R(81,0) + r[82] + r[83] + r[84] + r[85] + r[86] + R(87,0) + r[88])",
     "texto": "De −72 a +72 (24 afirmaciones): a mayor puntaje, más problemas."
    },
    {
     "n": "Clase E. Experiencia y expresión emocional",
     "js": "(r[89] + r[90] + R(91,0) + r[92] + R(93,0) + R(94,0) + R(95,0) + r[96] + r[97] + r[98] + R(99,0) + r[100] + R(101,0) + r[102] + r[103] + r[104] + r[105] + r[106] + R(107,0) + r[108] + r[109] + r[110] + r[111])",
     "texto": "De −69 a +69 (23 afirmaciones): a mayor puntaje, más problemas."
    },
    {
     "n": "Total",
     "js": "(r[1] + R(2,0) + R(3,0) + r[4] + r[5] + R(6,0) + r[7] + R(8,0) + R(9,0) + R(10,0) + r[11] + r[12] + r[13] + R(14,0) + r[15] + r[16] + r[17] + R(18,0) + r[19] + r[20] + r[21]) + (r[22] + r[23] + r[24] + r[25] + R(26,0) + R(27,0) + R(28,0) + r[29] + R(30,0) + r[31] + r[32] + r[33] + r[34] + r[35] + r[36] + r[37] + r[38] + r[39] + r[40] + R(41,0) + r[42] + r[43]) + (r[44] + r[45] + R(46,0) + r[47] + R(48,0) + r[49] + r[50] + r[51] + r[52] + r[53] + r[54] + r[55] + R(56,0) + r[57] + R(58,0) + r[59] + r[60] + r[61] + r[62] + r[63] + r[64]) + (r[65] + R(66,0) + r[67] + R(68,0) + r[69] + r[70] + r[71] + r[72] + R(73,0) + r[74] + r[75] + r[76] + R(77,0) + r[78] + R(79,0) + r[80] + R(81,0) + r[82] + r[83] + r[84] + r[85] + r[86] + R(87,0) + r[88]) + (r[89] + r[90] + R(91,0) + r[92] + R(93,0) + R(94,0) + R(95,0) + r[96] + r[97] + r[98] + R(99,0) + r[100] + R(101,0) + r[102] + r[103] + r[104] + r[105] + r[106] + R(107,0) + r[108] + r[109] + r[110] + r[111])",
     "texto": "De −333 a +333 (111 afirmaciones): a mayor puntaje, más problemas en el funcionamiento interpersonal. Sin baremos ni puntos de corte."
    }
   ]
  },
  "hoja": true
 },
 "eoss": {
  "clave": "EOSS",
  "sigla": "EOSS",
  "titulo": "Escala de Experiencia del Yo",
  "para": "Grado en que la experiencia del yo depende de los demás —lo que la persona siente, necesita, opina y hace— en general, con conocidos y en las relaciones cercanas, además de la espontaneidad, la creatividad y la sensibilidad a la crítica. Sirve para evaluar los problemas del yo y comparar antes y después del tratamiento.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Kanter, Parker y Kohlenberg (2001), EOSS · adaptación española de Valero, Ferro, López y Selva (2012, 2014), versión 2013.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4",
     "Ítem 5",
     "Ítem 6",
     "Ítem 7"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11",
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16",
     "Ítem 17"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Ítem 18",
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 22",
     "Ítem 23",
     "Ítem 24",
     "Ítem 25",
     "Ítem 26",
     "Ítem 27"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "puntua": true,
    "items": [
     "Ítem 28",
     "Ítem 29",
     "Ítem 30",
     "Ítem 31",
     "Ítem 32",
     "Ítem 33",
     "Ítem 34",
     "Ítem 35",
     "Ítem 36",
     "Ítem 37"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Sección I. Sí mismo en general",
     "js": "L([1,2,3,4,7]) + R(5,8) + R(6,8)",
     "texto": "De 7 a 49. Media en la muestra española: 16,9 no clínica; 21,9 clínica."
    },
    {
     "n": "Sección II. Con conocidos",
     "js": "S(8,17)",
     "texto": "De 10 a 70. Media: 20,4 no clínica; 24,0 clínica."
    },
    {
     "n": "Sección III. En relaciones cercanas",
     "js": "S(18,27)",
     "texto": "De 10 a 70. Media: 27,4 no clínica; 31,4 clínica."
    },
    {
     "n": "Sección IV. Sí mismo en relación con los demás",
     "js": "L([28,29,32,33,34,37]) + R(30,8) + R(31,8) + R(35,8) + R(36,8)",
     "texto": "De 10 a 70. Media: 25,5 no clínica; 30,5 clínica."
    },
    {
     "n": "Total",
     "js": "(L([1,2,3,4,7]) + R(5,8) + R(6,8)) + (S(8,17)) + (S(18,27)) + (L([28,29,32,33,34,37]) + R(30,8) + R(31,8) + R(35,8) + R(36,8))",
     "texto": "De 37 a 259: a mayor puntaje, más control público del yo. Sin puntos de corte; media 90,2 (DE 25,7) no clínica y 107,7 (DE 33,0) clínica."
    },
    {
     "n": "Factor 1. Yo en las relaciones íntimas",
     "js": "S(18,27)",
     "texto": "Ítems 18 a 27."
    },
    {
     "n": "Factor 2. Yo con conocidos",
     "js": "S(8,17)",
     "texto": "Ítems 8 a 17."
    },
    {
     "n": "Factor 3. Yo en general",
     "js": "L([1,2,3,4,7,28,29,32,33,34,37])",
     "texto": "De 11 a 77."
    },
    {
     "n": "Factor 4. Experiencia positiva del yo",
     "js": "L([5,6,30,31,35,36])",
     "texto": "De 6 a 42, sumados tal como se responden: un puntaje alto indica más creatividad y espontaneidad."
    }
   ]
  },
  "hoja": true
 },
 "acips": {
  "clave": "ACIPS",
  "sigla": "ACIPS",
  "titulo": "Escala de Placer Interpersonal Anticipatorio y Consumatorio",
  "para": "Medir la capacidad de disfrutar de las relaciones con otros, tanto al anticipar un encuentro como al vivirlo: la anhedonia social. Sirve en la depresión, en el espectro de la esquizofrenia y en el retraimiento social, y para seguir el cambio.",
  "areas": [
   "Ánimo y depresión",
   "Bienestar y apoyo social"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Gooding y Pflum (2014) · versión española de Gooding, Fonseca-Pedrero et al. (2016), Revista de Psiquiatría y Salud Mental.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Lee cada afirmación cuidadosamente y decide qué grado de verdad tienen para ti en general. En el caso de que nunca hayas tenido la experiencia descrita, piensa en la experiencia más parecida que hayas tenido y marque la opción que más se aproxime. No te preocupes acerca de ser totalmente coherente en todas tus respuestas. Elige entre las siguientes seis opciones de respuesta e indique su respuesta en el espacio a la derecha de cada ítem."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Totalmente falsa para mí",
     "Moderadamente falsa para mí",
     "Ligeramente falsa para mí",
     "Ligeramente verdadera para mí",
     "Moderadamente verdadera para mí",
     "Totalmente verdadera para mí"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "1. Estoy deseando ver a la gente cuando voy de camino a una fiesta o a quedar con otras personas.",
     "2. Disfruto mirando fotografías de mis amigos y familia.",
     "3. Realmente no me gustan las reuniones familiares o las tertulias (reuniones con otras personas).",
     "4. Disfruto bromeando y hablando con un amigo o un compañero de trabajo.",
     "5. Una buena comida siempre tiene mejor sabor cuando comes con un amigo cercano.",
     "6. Me gusta cuando la gente llama o manda mensajes de texto sólo para decir hola.",
     "7. Cuando algo bueno me pasa, no puedo esperar a compartirlo con otros.",
     "8. Si conociera un grupo donde las personas compartieran los mismos intereses que yo, estaría interesado en unirme a ellos.",
     "9. Disfruto viendo películas sobre la amistad o relaciones con mis amigos.",
     "10. Me imagino que sería muy divertido ir de vacaciones con un amigo o alguien a quien amas.",
     "11. Valoro mucho cuando me invitan a quedar con gente que conozco después del colegio o del trabajo.",
     "12. Estoy feliz cuando veo un amigo o alguien a quien amo que no he visto en mucho tiempo.",
     "13. Disfruto haciendo actividades grupales, como ir a eventos deportivos o conciertos con mis amigos.",
     "14. Me gusta ver mis programas favoritos de televisión con mis amigos.",
     "15. Me emociono cuando un amigo que no he visto en un tiempo me llama para hacer planes.",
     "16. Me gusta hablar con otros mientras espero en una fila.",
     "17. Disfruto cuando charlo con un amigo sobre cosas importantes."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Total",
     "js": "S(1,17) - (r[3] == null ? 0 : r[3]) + R(3,7)",
     "texto": "De 17 a 102: a menor puntaje, más anhedonia social. Sin puntos de corte; media en universitarios españoles sin trastorno: 87,9 (DE 10,8)."
    }
   ]
  }
 },
 "fiat-q-breve": {
  "clave": "FIAT-Q-breve",
  "sigla": "FIAT-Q-breve",
  "titulo": "Cuestionario de Evaluación Idiográfica Funcional, versión breve",
  "para": "Versión breve y validada en España del FIAT-Q: dificultades interpersonales en las cinco clases de la psicoterapia analítica funcional, con centiles de población general. Sirve para el tamizaje y para comparar antes y después del tratamiento; el FIAT-Q completo da el detalle para formular el caso.",
  "areas": [
   "Autoestima, autocrítica y habilidades sociales"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Macías, Ruiz García, López Pinar y Valero Aguayo (2025), FIAT-Q-breve, anexo 1.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Hoja de respuestas: aplique la prueba con su protocolo original y anote aquí la respuesta de cada ítem. Esta hoja no reproduce los ítems, cuyos derechos son del editor."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Ítem 1",
     "Ítem 2",
     "Ítem 3",
     "Ítem 4"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Ítem 5",
     "Ítem 6",
     "Ítem 8",
     "Ítem 9",
     "Ítem 10",
     "Ítem 11"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Ítem 12",
     "Ítem 13",
     "Ítem 14",
     "Ítem 15",
     "Ítem 16"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Ítem 17",
     "Ítem 18"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "puntua": true,
    "items": [
     "Ítem 19",
     "Ítem 20",
     "Ítem 21",
     "Ítem 23",
     "Ítem 24",
     "Ítem 26",
     "Ítem 27",
     "Ítem 28",
     "Ítem 29",
     "Ítem 30"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Clase A. Expresión de necesidades",
     "js": "L([1,2,3,4])",
     "texto": "De 4 a 24: a mayor puntaje, más dificultades."
    },
    {
     "n": "Clase B. Comunicación bidireccional",
     "js": "L([5,6,7,8,9,10])",
     "texto": "De 6 a 36: a mayor puntaje, más dificultades."
    },
    {
     "n": "Clase C. Manejo de conflictos",
     "js": "L([11,12,13,14,15])",
     "texto": "De 5 a 30: a mayor puntaje, más dificultades."
    },
    {
     "n": "Clase D. Revelación emocional y apertura interpersonal",
     "js": "L([16,17])",
     "texto": "De 2 a 12: a mayor puntaje, más dificultades."
    },
    {
     "n": "Clase E. Experiencia y expresión emocional",
     "js": "L([18,19,20,21,22,23,24,25,26,27])",
     "texto": "De 10 a 60: a mayor puntaje, más dificultades."
    },
    {
     "n": "Total",
     "js": "S(1,27)",
     "rangos": [
      [
       27,
       37,
       "Por debajo del centil 10"
      ],
      [
       38,
       47,
       "Entre los centiles 10 y 20"
      ],
      [
       48,
       53,
       "Entre los centiles 20 y 30"
      ],
      [
       54,
       62,
       "Entre los centiles 30 y 40"
      ],
      [
       63,
       69,
       "Entre los centiles 40 y 50"
      ],
      [
       70,
       79,
       "Entre los centiles 50 y 60"
      ],
      [
       80,
       88,
       "Entre los centiles 60 y 70"
      ],
      [
       89,
       96,
       "Entre los centiles 70 y 80"
      ],
      [
       97,
       108,
       "Entre los centiles 80 y 90"
      ],
      [
       109,
       134,
       "Entre los centiles 90 y 99"
      ],
      [
       135,
       162,
       "Centil 99 o más"
      ]
     ],
     "texto": "De 27 a 162. Centiles de población general española (n = 400): no son puntos de corte."
    }
   ]
  },
  "hoja": true
 },
 "idc-r": {
  "clave": "IDC-R",
  "sigla": "IDC-R",
  "titulo": "Inventario de Duelo Complicado Revisado",
  "para": "Evaluar si un duelo se ha vuelto complicado: añoranza intensa, incredulidad, evitación, vacío y pérdida de sentido, con su duración y el deterioro que causan. Incluye los criterios de duelo complicado de Prigerson para valorarlos con la persona.",
  "areas": [
   "Trauma y duelo"
  ],
  "quien": [
   "persona",
   "profesional"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Prigerson, Kasl y Jacobs (2001) · versión española de García-García et al. (2001).",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor, marque con una cruz las respuestas que mejor describan cómo se ha sentido durante el último mes. Los espacios en blanco y subrayados son para poner el nombre de la persona fallecida. Por ejemplo en: Veo a ___________ como si lo tuviera delante; si la persona fallecida se llamaba Juan es: Veo a Juan como si lo tuviera delante."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "1. La muerte de ___________ hace que me sienta abatido/a o destrozado/a."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "2. Pienso tanto en ___________ que a veces me resulta difícil hacer las cosas que hago normalmente."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "3. Los recuerdos de ___________ me afectan y me trastornan."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "4. Siento que me cuesta aceptar su muerte."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "5. Me doy cuenta que deseo con todas mis fuerzas que _________ esté conmigo, y que recordar su ausencia me provoca una enorme y profunda tristeza."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "6. Me siento atraído/a por los lugares y las cosas relacionadas con ___________ ."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "7. No puedo evitar sentirme enfadado/a por la muerte de __________ ."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "8. Siento que no me puedo creer que ___________ esté muerto/a."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "9. Me siento como “atontado/a”, aturdido/a o conmocionado/a por la muerte de ___________."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "10. Tras la muerte de ___________ me es difícil confiar en la gente."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "11. Tras la muerte de ___________ es como si hubiera perdido el interés por los demás o me sintiera distante de la gente que me importa."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "12. Tengo los mismos dolores que __________ , o alguno de sus síntomas, o a veces mi forma de ser se parece en algo a la suya o me comporto como él/ella lo hacía."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "13. ¿Piensa usted que antes de la muerte de ___________ solía hacer cosas que ahora no hace, o solía ver a personas que ahora no ve?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Nada",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     {
      "x": "13a. En caso de haber contestado “Sí” a la pregunta anterior ¿Cuanto le afecta no hacer esas cosas o no ver a esas personas?",
      "si": "r[13] === 1"
     }
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "14. Hago lo posible por evitar todo aquello que hace que me acuerde de él/ella (cosas, personas, lugares,...)."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "15. Hago lo posible por evitar todo lo que me recuerda que ___________ está muerto/a."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "16. A veces, las personas que han perdido a un ser querido se sienten mal por seguir adelante con su vida. ¿Es difícil para usted seguir adelante con su vida, por ejemplo: hacer nuevos amigos o interesarse por cosas nuevas?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "17. Sin ___________ siento que mi vida está vacía o que no tiene sentido."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "18. Oigo la voz de ____________ que me habla."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "19. Veo a ___________ como si le/la tuviera delante."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "20. Siento que tras la muerte de __________ me he hecho más frío/a e insensible."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "21. Creo que es injusto que yo siga vivo/a estando __________ muerto/a, y me siento culpable por ello."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Bastante",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "22. Estoy amargado/a por la muerte de ___________ ."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "23. Siento envidia de la gente que no ha perdido a un ser querido."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "24. Sin __________ es como si el futuro no tuviera ningún sentido, o como si todo fuera inútil."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "25. Tras la muerte de ___________ me siento sola."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "26. Me siento incapaz de imaginar una vida plena sin __________ ."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Casi nunca",
     "Pocas veces",
     "Algunas veces",
     "Muchas veces",
     "Siempre"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "27. Siento que una parte de mí se ha muerto con él/ella."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "28. Siento que su muerte ha cambiado mi manera de ver el mundo."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "29. He perdido la sensación de seguridad, o de estar a salvo, que tenía antes de la muerte de ___________."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "30. He perdido la sensación de control que tenía antes de la muerte de ___________."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "31. Creo que, como consecuencia de mi dolor, se han deteriorado de manera importante mis relaciones sociales, mi trabajo u otras actividades de mi vida."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No",
     "Un poco",
     "Algo",
     "Mucho",
     "Muchísimo"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "32. Tras su muerte me he sentido nervioso/a, irritable o asustadizo/a."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Bien",
     "Un poco mal",
     "Algo mal",
     "Muy mal",
     "Fatal"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5
    ],
    "puntua": true,
    "items": [
     "33. Tras su muerte he dormido...."
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "34. En general, estos sentimientos de los que hemos estado hablando ¿aparecieron nada más morirse él/ella?"
    ],
    "numerar": false
   },
   {
    "t": "dato",
    "x": "35. y…¿cuánto tiempo lleva notándolos?",
    "tipo": "numero",
    "unidad": "meses"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "36. ¿En algún momento, estos sentimientos, han desaparecido… y después de un tiempo han aparecido otra vez?"
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "37. Finalmente… ¿puede describir cómo han ido cambiando, estos sentimientos, desde la muerte de ____________ hasta ahora?: ________________________________________________ ________________________________________________ ________________________________________________"
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "38. ¿Considera el entrevistador que la persona encuestada tiene un duelo complicado?"
    ],
    "numerar": false
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "Sí",
     "No"
    ],
    "vals": [
     1,
     0
    ],
    "puntua": true,
    "items": [
     "39. ¿Cumple la persona encuestada los siguientes criterios de duelo complicado? (¡Atención: antes de contestar esta pregunta responda la 38!)."
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "A2. Estrés por la separación",
     "js": "[2, 3, 5, 6, 26].filter(i => r[i] != null && r[i] >= 4).length",
     "rangos": [
      [
       0,
       2,
       "No se cumple (menos de 3 preguntas en 4 o más)"
      ],
      [
       3,
       5,
       "Se cumple"
      ]
     ]
    },
    {
     "n": "B. Estrés por el trauma",
     "js": "[4, 7, 8, 9, 11, 16, 18, 21, 23, 25, 27, 30].filter(i => r[i] != null && r[i] >= 4).length",
     "rangos": [
      [
       0,
       5,
       "No se cumple (menos de 6 preguntas en 4 o más)"
      ],
      [
       6,
       12,
       "Se cumple"
      ]
     ]
    },
    {
     "n": "C. Cronología (meses)",
     "js": "Math.floor(r[36] || 0)",
     "rangos": [
      [
       0,
       5,
       "No se cumple (menos de 6 meses)"
      ],
      [
       6,
       null,
       "Se cumple"
      ]
     ]
    },
    {
     "n": "D. Deterioro (pregunta 31)",
     "js": "r[32] || 0",
     "rangos": [
      [
       0,
       3,
       "No se cumple"
      ],
      [
       4,
       5,
       "Se cumple"
      ]
     ]
    },
    {
     "n": "Criterios cumplidos",
     "js": "([2, 3, 5, 6, 26].filter(i => r[i] != null && r[i] >= 4).length >= 3) + ([4, 7, 8, 9, 11, 16, 18, 21, 23, 25, 27, 30].filter(i => r[i] != null && r[i] >= 4).length >= 6) + (r[36] != null && r[36] >= 6) + (r[32] != null && r[32] >= 4)",
     "rangos": [
      [
       0,
       3,
       "No se cumplen todos: no orienta a duelo complicado"
      ],
      [
       4,
       4,
       "Se cumplen los cuatro: orienta a duelo complicado; confirme en entrevista"
      ]
     ]
    }
   ]
  }
 },
 "sdq-18": {
  "clave": "SDQ-18",
  "sigla": "SDQ-18",
  "titulo": "Cuestionario de Capacidades y Dificultades, autoinforme de 18 años o más",
  "para": "Describir dificultades emocionales y de conducta en jóvenes y adultos con la misma estructura del SDQ: síntomas emocionales, problemas de conducta, hiperactividad, relación con los demás y conducta prosocial.",
  "areas": [
   "Malestar general"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Goodman (1997) · SDQ-Cas de autoinforme para mayores de 18 años, sdqinfo.org.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor ponga una cruz en el cuadro que crea que corresponde a cada una de las preguntas: No es verdad, Es verdad a medias, Verdaderamente sí. Es importante que responda a todas las preguntas lo mejor que pueda, aunque no esté completamente seguro/ a de la respuesta. Por favor, responda a las preguntas según como le han ido las cosas en los últimos seis meses."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No es verdad",
     "Es verdad a medias",
     "Verdaderamente sí"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": true,
    "items": [
     "1. Procuro ser agradable con los demás. Tengo en cuenta los sentimientos de las otras personas",
     "2. Soy inquieto/a hiperactivo/a, me resulta difícil permanecer sentado/a durante mucho tiempo",
     "3. Suelo tener muchos dolores de cabeza, estómago o náuseas",
     "4. Normalmente comparto mis cosas con otras personas, por ejemplo comida o bebida",
     "5. Cuando me enfado, me enfado mucho y pierdo el control",
     "6. Prefiero estar solo/a a estar con gente",
     "7. En general estoy dispuesto/a a hacer lo que otras personas quieren",
     "8. A menudo estoy preocupado/a",
     "9. Ayudo si alguien está enfermo, disgustado o herido",
     "10. Estoy todo el tiempo moviéndome, me muevo demasiado",
     "11. Tengo un/a buen/a amigo/a por lo menos",
     "12. Peleo con frecuencia, puedo conseguir que otras personas hagan lo que yo quiero",
     "13. Me siento a menudo triste, desanimado/a o con ganas de llorar",
     "14. Por lo general caigo bien a la gente",
     "15. Me distraigo con facilidad, me cuesta concentrarme",
     "16. Me pongo nervioso/a con las situaciones nuevas, fácilmente pierdo la confianza en mí mismo/a",
     "17. Soy amable con los niños",
     "18. A menudo me acusan de mentir o de hacer trampas",
     "19. Otras personas se meten conmigo o se burlan de mí",
     "20. A menudo me ofrezco para ayudar a los demás (familiares, amigos/as, compañeros/as)",
     "21. Pienso las cosas antes de hacerlas",
     "22. Cojo cosas que no son mías, de casa, del trabajo o de otros sitios",
     "23. Me llevo mejor con personas que son mayores que yo que con la gente de mi edad",
     "24. Tengo muchos miedos, me asusto fácilmente",
     "25. Termino lo que empiezo, tengo buena concentración"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Síntomas emocionales",
     "js": "(r[3] == null ? 0 : r[3]) + (r[8] == null ? 0 : r[8]) + (r[13] == null ? 0 : r[13]) + (r[16] == null ? 0 : r[16]) + (r[24] == null ? 0 : r[24])",
     "texto": "De 0 a 10: a mayor puntaje, más dificultades. Sin bandas validadas para mayores de 18: los autores recomiendan usar el puntaje continuo y compararlo entre aplicaciones."
    },
    {
     "n": "Problemas de conducta",
     "js": "(r[5] == null ? 0 : r[5]) + (r[7] == null ? 0 : 2 - r[7]) + (r[12] == null ? 0 : r[12]) + (r[18] == null ? 0 : r[18]) + (r[22] == null ? 0 : r[22])",
     "texto": "De 0 a 10: a mayor puntaje, más dificultades. Sin bandas validadas para mayores de 18: los autores recomiendan usar el puntaje continuo y compararlo entre aplicaciones."
    },
    {
     "n": "Hiperactividad",
     "js": "(r[2] == null ? 0 : r[2]) + (r[10] == null ? 0 : r[10]) + (r[15] == null ? 0 : r[15]) + (r[21] == null ? 0 : 2 - r[21]) + (r[25] == null ? 0 : 2 - r[25])",
     "texto": "De 0 a 10: a mayor puntaje, más dificultades. Sin bandas validadas para mayores de 18: los autores recomiendan usar el puntaje continuo y compararlo entre aplicaciones."
    },
    {
     "n": "Problemas con compañeros",
     "js": "(r[6] == null ? 0 : r[6]) + (r[11] == null ? 0 : 2 - r[11]) + (r[14] == null ? 0 : 2 - r[14]) + (r[19] == null ? 0 : r[19]) + (r[23] == null ? 0 : r[23])",
     "texto": "De 0 a 10: a mayor puntaje, más dificultades. Sin bandas validadas para mayores de 18: los autores recomiendan usar el puntaje continuo y compararlo entre aplicaciones."
    },
    {
     "n": "Conducta prosocial",
     "js": "(r[1] == null ? 0 : r[1]) + (r[4] == null ? 0 : r[4]) + (r[9] == null ? 0 : r[9]) + (r[17] == null ? 0 : r[17]) + (r[20] == null ? 0 : r[20])",
     "texto": "De 0 a 10: a mayor puntaje, más conducta prosocial. Sin bandas validadas para mayores de 18: los autores recomiendan usar el puntaje continuo y compararlo entre aplicaciones."
    },
    {
     "n": "Total de dificultades",
     "js": "(r[3] == null ? 0 : r[3]) + (r[8] == null ? 0 : r[8]) + (r[13] == null ? 0 : r[13]) + (r[16] == null ? 0 : r[16]) + (r[24] == null ? 0 : r[24]) + (r[5] == null ? 0 : r[5]) + (r[7] == null ? 0 : 2 - r[7]) + (r[12] == null ? 0 : r[12]) + (r[18] == null ? 0 : r[18]) + (r[22] == null ? 0 : r[22]) + (r[2] == null ? 0 : r[2]) + (r[10] == null ? 0 : r[10]) + (r[15] == null ? 0 : r[15]) + (r[21] == null ? 0 : 2 - r[21]) + (r[25] == null ? 0 : 2 - r[25]) + (r[6] == null ? 0 : r[6]) + (r[11] == null ? 0 : 2 - r[11]) + (r[14] == null ? 0 : 2 - r[14]) + (r[19] == null ? 0 : r[19]) + (r[23] == null ? 0 : r[23])",
     "texto": "De 0 a 40. Sin bandas validadas para mayores de 18: los autores recomiendan usar el puntaje continuo y compararlo entre aplicaciones."
    }
   ]
  }
 },
 "sdq-ai": {
  "clave": "SDQ-AI",
  "sigla": "SDQ-AI",
  "titulo": "Cuestionario de Capacidades y Dificultades, autoinforme de 11 a 17 años",
  "para": "Tamizar dificultades emocionales y de conducta con lo que informa el propio adolescente: síntomas emocionales, problemas de conducta, hiperactividad, relación con compañeros y conducta prosocial.",
  "areas": [
   "Malestar general"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "infancia",
  "pob": [
   "infancia"
  ],
  "cita": "Goodman (1997, 2001) · SDQ-Cas de autoinforme de 11 a 17 años, sdqinfo.org.",
  "bloques": [
   {
    "t": "consigna",
    "x": "Por favor pon una cruz en el cuadro que creas que corresponde a cada una de las preguntas: No es verdad, Es verdad a medias, Verdaderamente sí. Es importante que respondas a todas las preguntas lo mejor que puedas, aunque no estés completamente seguro/a de la respuesta. Por favor, responde a las preguntas según como te han ido las cosas en los últimos seis meses."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "No es verdad",
     "Es verdad a medias",
     "Verdaderamente sí"
    ],
    "vals": [
     0,
     1,
     2
    ],
    "puntua": true,
    "items": [
     "1. Procuro ser agradable con los demás. Tengo en cuenta los sentimientos de las otras personas",
     "2. Soy inquieto/a, hiperactivo/a, no puedo permanecer quieto/a por mucho tiempo",
     "3. Suelo tener muchos dolores de cabeza, estómago o náuseas",
     "4. Normalmente comparto con otros mis juguetes, chucherías, lápices, etc",
     "5. Cuando me enfado, me enfado mucho y pierdo el control",
     "6. Prefiero estar solo/a que con gente de mi edad",
     "7. Por lo general soy obediente",
     "8. A menudo estoy preocupado/a",
     "9. Ayudo si alguien está enfermo, disgustado o herido",
     "10. Estoy todo el tiempo moviéndome, me muevo demasiado",
     "11. Tengo un/a buen/a amigo/a por lo menos",
     "12. Peleo con frecuencia con otros, manipulo a los demás",
     "13. Me siento a menudo triste, desanimado o con ganas de llorar",
     "14. Por lo general caigo bien a la otra gente de mi edad",
     "15. Me distraigo con facilidad, me cuesta concentrarme",
     "16. Me pongo nervioso/a con las situaciones nuevas, fácilmente pierdo la confianza en mí mismo/a",
     "17. Trato bien a los niños/as más pequeños/as",
     "18. A menudo me acusan de mentir o de hacer trampas",
     "19. Otra gente de mi edad se mete conmigo o se burla de mí",
     "20. A menudo me ofrezco para ayudar (a padres, maestros, niños)",
     "21. Pienso las cosas antes de hacerlas",
     "22. Cojo cosas que no son mías de casa, la escuela o de otros sitios",
     "23. Me llevo mejor con adultos que con otros de mi edad",
     "24. Tengo muchos miedos, me asusto fácilmente",
     "25. Termino lo que empiezo, tengo buena concentración"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Síntomas emocionales",
     "js": "(r[3] == null ? 0 : r[3]) + (r[8] == null ? 0 : r[8]) + (r[13] == null ? 0 : r[13]) + (r[16] == null ? 0 : r[16]) + (r[24] == null ? 0 : r[24])",
     "rangos": [
      [
       0,
       5,
       "Normal"
      ],
      [
       6,
       6,
       "Límite"
      ],
      [
       7,
       10,
       "Anormal"
      ]
     ]
    },
    {
     "n": "Problemas de conducta",
     "js": "(r[5] == null ? 0 : r[5]) + (r[7] == null ? 0 : 2 - r[7]) + (r[12] == null ? 0 : r[12]) + (r[18] == null ? 0 : r[18]) + (r[22] == null ? 0 : r[22])",
     "rangos": [
      [
       0,
       3,
       "Normal"
      ],
      [
       4,
       4,
       "Límite"
      ],
      [
       5,
       10,
       "Anormal"
      ]
     ]
    },
    {
     "n": "Hiperactividad",
     "js": "(r[2] == null ? 0 : r[2]) + (r[10] == null ? 0 : r[10]) + (r[15] == null ? 0 : r[15]) + (r[21] == null ? 0 : 2 - r[21]) + (r[25] == null ? 0 : 2 - r[25])",
     "rangos": [
      [
       0,
       5,
       "Normal"
      ],
      [
       6,
       6,
       "Límite"
      ],
      [
       7,
       10,
       "Anormal"
      ]
     ]
    },
    {
     "n": "Problemas con compañeros",
     "js": "(r[6] == null ? 0 : r[6]) + (r[11] == null ? 0 : 2 - r[11]) + (r[14] == null ? 0 : 2 - r[14]) + (r[19] == null ? 0 : r[19]) + (r[23] == null ? 0 : r[23])",
     "rangos": [
      [
       0,
       3,
       "Normal"
      ],
      [
       4,
       5,
       "Límite"
      ],
      [
       6,
       10,
       "Anormal"
      ]
     ]
    },
    {
     "n": "Conducta prosocial",
     "js": "(r[1] == null ? 0 : r[1]) + (r[4] == null ? 0 : r[4]) + (r[9] == null ? 0 : r[9]) + (r[17] == null ? 0 : r[17]) + (r[20] == null ? 0 : r[20])",
     "rangos": [
      [
       0,
       4,
       "Anormal"
      ],
      [
       5,
       5,
       "Límite"
      ],
      [
       6,
       10,
       "Normal"
      ]
     ]
    },
    {
     "n": "Total de dificultades",
     "js": "(r[3] == null ? 0 : r[3]) + (r[8] == null ? 0 : r[8]) + (r[13] == null ? 0 : r[13]) + (r[16] == null ? 0 : r[16]) + (r[24] == null ? 0 : r[24]) + (r[5] == null ? 0 : r[5]) + (r[7] == null ? 0 : 2 - r[7]) + (r[12] == null ? 0 : r[12]) + (r[18] == null ? 0 : r[18]) + (r[22] == null ? 0 : r[22]) + (r[2] == null ? 0 : r[2]) + (r[10] == null ? 0 : r[10]) + (r[15] == null ? 0 : r[15]) + (r[21] == null ? 0 : 2 - r[21]) + (r[25] == null ? 0 : 2 - r[25]) + (r[6] == null ? 0 : r[6]) + (r[11] == null ? 0 : 2 - r[11]) + (r[14] == null ? 0 : 2 - r[14]) + (r[19] == null ? 0 : r[19]) + (r[23] == null ? 0 : r[23])",
     "rangos": [
      [
       0,
       15,
       "Normal"
      ],
      [
       16,
       19,
       "Límite"
      ],
      [
       20,
       40,
       "Anormal"
      ]
     ]
    }
   ]
  }
 },
 "vlq-2": {
  "clave": "VLQ-2",
  "sigla": "VLQ-2",
  "titulo": "Cuestionario de Vida Valiosa",
  "para": "Medir cuánto importa a la persona cada área de su vida y cuánto actuó de acuerdo con ella en la última semana. La distancia entre las dos señala dónde trabajar valores y acción comprometida en la terapia de aceptación y compromiso.",
  "areas": [
   "Procesos psicológicos: aceptación, metacognición y regulación"
  ],
  "quien": [
   "persona"
  ],
  "estilo": "adultos",
  "pob": [
   "adultos"
  ],
  "cita": "Wilson y Groom (2002); Wilson et al. (2010), The Psychological Record · traducción sin validar.",
  "bloques": [
   {
    "t": "consigna",
    "x": "A continuación, encontrarás diversas áreas de la vida que pueden ser significativas para algunas personas. Nos interesa conocer cómo percibes tu calidad de vida en cada una de ellas. Una parte fundamental de la calidad de vida está relacionada con la importancia que le otorgas a estas áreas. Por ello, te pedimos que evalúes el nivel de importancia que cada una tiene para ti , utilizando la siguiente escala del 1 al 10: 1 significa que esa área no tiene ninguna importancia en tu vida. 10 significa que esa área es de máxima importancia para ti. Es importante recordar que cada persona tiene prioridades y valores únicos , por lo que no todas las áreas serán igualmente relevantes para todos. No hay respuestas correctas o incorrectas ; simplemente, valora cada una según tu perspectiva y experiencia personal."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "9",
     "10"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10
    ],
    "puntua": true,
    "items": [
     "1. Familia (excepto matrimonio o crianza)",
     "2. Matrimonio / Pareja / Relaciones íntimas",
     "3. Crianza",
     "4. Amigos / Vida social",
     "5. Trabajo",
     "6. Educación / Entrenamiento",
     "7. Recreación / Diversión",
     "8. Espiritualidad",
     "9. Ciudadanía / Participación comunitaria",
     "10. Cuidado físico personal (dieta, ejercicio, sueño)"
    ],
    "numerar": false
   },
   {
    "t": "consigna",
    "x": "En esta sección, indica cómo de consistentes han sido tus acciones con tus valores en cada área durante la última semana. No se trata de tus ideales, ni de lo que otros piensan, sino de cómo consideras que te has comportado."
   },
   {
    "t": "items",
    "titulo": null,
    "cab": "",
    "ops": [
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "9",
     "10"
    ],
    "vals": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10
    ],
    "puntua": true,
    "items": [
     "1. Familia (excepto matrimonio o crianza)",
     "2. Matrimonio / Pareja / Relaciones íntimas",
     "3. Crianza",
     "4. Amigos / Vida social",
     "5. Trabajo",
     "6. Educación / Entrenamiento",
     "7. Recreación / Diversión",
     "8. Espiritualidad",
     "9. Ciudadanía / Participación comunitaria",
     "10. Cuidado físico personal (dieta, ejercicio, sueño)"
    ],
    "numerar": false
   }
  ],
  "calif": {
   "escalas": [
    {
     "n": "Compuesto de vida valiosa",
     "js": "Math.round(RANGO(1,10).reduce((s, i) => s + (r[i] || 0) * (r[i + 10] || 0), 0) / 10 * 10) / 10",
     "texto": "De 1 a 100: promedio, en las 10 áreas, de importancia por coherencia. A mayor puntaje, más vida de acuerdo con los valores. Sin puntos de corte."
    }
   ]
  }
 }
};
