/* Preguntas y reglas de calificación de las fichas completas. Lo escribe
   _planes-fuente/instrumentos/generar.py: no se edita a mano. */
const CALIFICAR = {
 "phq-9": {
  "clave": "PHQ-9",
  "sigla": "PHQ-9",
  "titulo": "Cuestionario sobre la Salud del Paciente-9",
  "para": "Tamizar síntomas depresivos de las dos últimas semanas y estimar su gravedad. Cada ítem corresponde a un criterio del episodio depresivo mayor, así que sirve también para seguir el cambio sesión a sesión. No diagnostica: un puntaje alto pide una entrevista clínica.",
  "estilo": "adultos",
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
 "aaq-ii": {
  "clave": "AAQ-II",
  "sigla": "AAQ-II",
  "titulo": "Cuestionario de Aceptación y Acción II",
  "para": "Medir la inflexibilidad psicológica y la evitación experiencial: cuánto se lucha contra los pensamientos, emociones y recuerdos difíciles, y cuánto esa lucha estorba la vida que la persona quiere. Es la medida de proceso central de la terapia de aceptación y compromiso.",
  "estilo": "adultos",
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
 "pcl-5": {
  "clave": "PCL-5",
  "sigla": "PCL-5",
  "titulo": "Lista de Verificación del Trastorno de Estrés Postraumático para el DSM-5",
  "para": "Tamizar y medir la gravedad de los síntomas de estrés postraumático del último mes. Sus 20 ítems siguen los 20 síntomas del DSM-5, agrupados en intrusión, evitación, alteraciones negativas de cognición y ánimo, y activación. Sirve para tamizar, para apoyar un diagnóstico provisional y para seguir el cambio.",
  "estilo": "adultos",
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
 "srq-20-srq-30": {
  "clave": "SRQ-20 / SRQ-30",
  "sigla": "SRQ-30",
  "titulo": "Cuestionario de Autorreporte de Síntomas (Self Report Questionnaire)",
  "para": "Tamizar problemas de salud mental comunes, posible psicosis, trastorno convulsivo y problemas con el alcohol en el último mes. Es el que el Ministerio de Salud sugiere en la Ruta de Promoción y Mantenimiento de la Salud desde los 16 años.",
  "estilo": "adultos",
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
 }
};
