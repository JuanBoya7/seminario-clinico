/* Preguntas y reglas de calificación de las fichas completas. Lo escribe
   _planes-fuente/instrumentos/generar.py: no se edita a mano. */
const CALIFICAR = {
 "phq-9": {
  "clave": "PHQ-9",
  "sigla": "PHQ-9",
  "titulo": "Cuestionario sobre la Salud del Paciente-9",
  "para": "Tamizar síntomas depresivos de las dos últimas semanas y estimar su gravedad. Cada ítem corresponde a un criterio del episodio depresivo mayor, así que sirve también para seguir el cambio sesión a sesión. No diagnostica: un puntaje alto pide una entrevista clínica.",
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
 "c-ssrs": {
  "clave": "C-SSRS",
  "sigla": "C-SSRS",
  "titulo": "Columbia-Escala de Severidad Suicida, versión exploratoria reciente",
  "para": "Tamizar el riesgo suicida en una entrevista breve: seis preguntas directas, de sí o no, que van del deseo de estar muerto a la ideación con intención y plan, y a la conducta suicida. La respuesta afirmativa de color más alto indica el nivel de riesgo y qué tan urgente es actuar.",
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
     "texto": "Indicador general de síntomas emocionales."
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
 "pcl-5": {
  "clave": "PCL-5",
  "sigla": "PCL-5",
  "titulo": "Lista de Verificación del Trastorno de Estrés Postraumático para el DSM-5",
  "para": "Tamizar y medir la gravedad de los síntomas de estrés postraumático del último mes. Sus 20 ítems siguen los 20 síntomas del DSM-5, agrupados en intrusión, evitación, alteraciones negativas de cognición y ánimo, y activación. Sirve para tamizar, para apoyar un diagnóstico provisional y para seguir el cambio.",
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
 "cbi": {
  "clave": "CBI",
  "sigla": "CBI",
  "titulo": "Inventario de Burnout de Copenhague",
  "para": "Medir el burnout como agotamiento físico y psicológico en tres ámbitos: el personal, el relacionado con el trabajo y el relacionado con el trabajo con clientes o usuarios. Se puede usar en cualquier ocupación y es de uso libre.",
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
 "eat-26": {
  "clave": "EAT-26",
  "sigla": "EAT-26",
  "titulo": "Prueba de Actitudes ante la Alimentación",
  "para": "Tamizar el riesgo de trastornos de la conducta alimentaria: preocupación por el peso y la comida, dieta, conductas bulímicas y control sobre la alimentación. No diagnostica: un puntaje sobre el corte pide una entrevista clínica.",
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
 "epds": {
  "clave": "EPDS",
  "sigla": "EPDS",
  "titulo": "Escala de Depresión Posparto de Edimburgo",
  "para": "Tamizar síntomas depresivos de la última semana en el embarazo y el posparto. No incluye los síntomas somáticos (sueño, apetito, cansancio) que se confunden con el puerperio. No diagnostica: un puntaje alto pide una entrevista clínica.",
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
 "mspss": {
  "clave": "MSPSS",
  "sigla": "MSPSS",
  "titulo": "Escala Multidimensional de Apoyo Social Percibido",
  "para": "Medir cuánto apoyo siente la persona que recibe de tres fuentes: la familia, los amigos y una persona especial. Mide apoyo percibido, no el tamaño de la red: alguien con pocos vínculos puede sentirse muy apoyado, y al revés.",
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
 "odsis": {
  "clave": "ODSIS",
  "sigla": "ODSIS",
  "titulo": "Escala Global de Gravedad e Interferencia de la Depresión",
  "para": "Medir en cinco preguntas la frecuencia y la intensidad de la depresión, la pérdida de interés en lo que se disfrutaba y cuánto interfiere en el trabajo, el estudio, el hogar y la vida social durante la última semana. Es la hermana de la OASIS: no es específica de un trastorno y está pensada para aplicarse en cada sesión.",
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
 "scs": {
  "clave": "SCS",
  "sigla": "SCS",
  "titulo": "Escala de Autocompasión",
  "para": "Medir cómo se trata la persona a sí misma en los momentos difíciles: los tres componentes de la autocompasión (amabilidad consigo misma, humanidad común y mindfulness) y sus opuestos (autojuicio, aislamiento y sobreidentificación). Es la medida con que se evaluaron los estudios del programa de autocompasión consciente.",
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
     "texto": "De 1 a 5: a mayor puntaje, más autocompasión."
    },
    {
     "n": "Autojuicio (promedio)",
     "js": "Math.round((L([1, 8, 11, 16, 21]) / 5) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, menos autocompasión."
    },
    {
     "n": "Humanidad común (promedio)",
     "js": "Math.round((L([3, 7, 10, 15]) / 4) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, más autocompasión."
    },
    {
     "n": "Aislamiento (promedio)",
     "js": "Math.round((L([4, 13, 18, 25]) / 4) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, menos autocompasión."
    },
    {
     "n": "Mindfulness (promedio)",
     "js": "Math.round((L([9, 14, 17, 22]) / 4) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, más autocompasión."
    },
    {
     "n": "Sobreidentificación (promedio)",
     "js": "Math.round((L([2, 6, 20, 24]) / 4) * 100) / 100",
     "texto": "De 1 a 5: a mayor puntaje, menos autocompasión."
    }
   ]
  }
 },
 "shaps": {
  "clave": "SHAPS",
  "sigla": "SHAPS",
  "titulo": "Escala de Placer de Snaith-Hamilton",
  "para": "Medir la anhedonia de forma directa: cuánto puede la persona disfrutar de experiencias comunes de cuatro dominios, que son los intereses y pasatiempos, la vida social, las sensaciones y la comida y la bebida. No mide tristeza: es útil cuando lo que domina es la pérdida de placer.",
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
 "tmms-24": {
  "clave": "TMMS-24",
  "sigla": "TMMS-24",
  "titulo": "Escala Rasgo de Metaconocimiento Emocional",
  "para": "Evaluar la inteligencia emocional percibida en tres dimensiones de ocho ítems: atención a los propios sentimientos, claridad para comprenderlos y reparación, es decir, la capacidad de regular los estados emocionales. Orienta el trabajo en regulación emocional; no diagnostica.",
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
 "srq-20-srq-30": {
  "clave": "SRQ-20 / SRQ-30",
  "sigla": "SRQ-30",
  "titulo": "Cuestionario de Autorreporte de Síntomas (Self Report Questionnaire)",
  "para": "Tamizar problemas de salud mental comunes, posible psicosis, trastorno convulsivo y problemas con el alcohol en el último mes. Es el que el Ministerio de Salud sugiere en la Ruta de Promoción y Mantenimiento de la Salud desde los 16 años.",
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
 "phq-a": {
  "clave": "PHQ-A",
  "sigla": "PHQ-A",
  "titulo": "Cuestionario sobre la Salud del Paciente, versión adolescente",
  "para": "Tamizar síntomas depresivos de las dos últimas semanas en adolescentes, con el lenguaje del PHQ-9 ajustado a esa edad (incluye la irritabilidad). Trae además preguntas sobre el ánimo del último año, la interferencia y las ideas e intentos de suicidio. No diagnostica.",
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
     "texto": "De 0 a 15: a mayor puntaje, más síntomas."
    },
    {
     "n": "Trastorno de pánico",
     "js": "L([2, 8, 14, 20, 26])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas."
    },
    {
     "n": "Fobia social",
     "js": "L([3, 9, 15, 21, 27])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas."
    },
    {
     "n": "Ansiedad de separación",
     "js": "L([4, 10, 16, 22, 28])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas."
    },
    {
     "n": "Ansiedad generalizada",
     "js": "L([5, 11, 17, 23, 29])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas."
    },
    {
     "n": "Obsesivo-compulsivo",
     "js": "L([6, 12, 18, 24, 30])",
     "texto": "De 0 a 15: a mayor puntaje, más síntomas."
    },
    {
     "n": "Total",
     "js": "S(1,30)",
     "texto": "De 0 a 90. Sin puntos de corte: compare con aplicaciones anteriores."
    }
   ]
  }
 },
 "scared": {
  "clave": "SCARED",
  "sigla": "SCARED",
  "titulo": "Pantalla de Trastornos Emocionales Relacionados con la Ansiedad Infantil",
  "para": "Tamizar síntomas de ansiedad en niños y adolescentes desde los 8 años, con una forma para el niño y otra para los padres. Además del total da cinco puntajes: pánico o síntomas somáticos, ansiedad generalizada, ansiedad de separación, ansiedad social y evitación escolar.",
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
 "smfq": {
  "clave": "SMFQ",
  "sigla": "SMFQ",
  "titulo": "Cuestionario Breve de Ánimo y Sentimientos",
  "para": "Tamizar síntomas depresivos de las dos últimas semanas en niños y adolescentes de 6 a 17 años, con una forma para el niño y otra para el padre, la madre o el adulto a cargo. Por su brevedad sirve también para seguir la gravedad de los síntomas y la respuesta al tratamiento, sesión a sesión.",
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
 "lie-bet": {
  "clave": "Lie/Bet",
  "sigla": "Lie/Bet",
  "titulo": "Cuestionario Lie-Bet",
  "para": "Tamizar en un minuto problemas con el juego de apuestas, con dos preguntas: haber mentido sobre cuánto se juega y haber necesitado apostar cada vez más dinero. Es el tamizaje más breve de la guía.",
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
     "texto": "De 9 a 45: a mayor puntaje, mayor gravedad."
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
 "wast": {
  "clave": "WAST",
  "sigla": "WAST",
  "titulo": "Herramienta de Tamizaje de Maltrato a la Mujer, versión corta",
  "para": "Abrir el tema de la violencia de pareja con dos preguntas que no la nombran de entrada: cuánta tensión hay en la relación y con cuánta dificultad se resuelven las discusiones. Son las dos preguntas del WAST con las que las mujeres dijeron sentirse más cómodas.",
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
     "texto": "De 10 a 40: a mayor puntaje, mayor autoestima. Sin puntos de corte en la validación española."
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
 }
};
