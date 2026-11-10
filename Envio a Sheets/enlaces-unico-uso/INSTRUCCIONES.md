# Enlaces de un solo uso para la calificación en línea

Con esto, en el índice de `calificar.html` aparece junto a cada prueba:

- **Copiar enlace**: la dirección normal de la prueba (se puede usar muchas veces).
- **Enlace de un solo uso**: un enlace que abre la prueba una sola vez. Si alguien lo
  abre de nuevo, ve «Este enlace ya se usó». Si no se usa, caduca a los 30 días.

La prueba viaja cifrada: la hoja de Google solo guarda texto ilegible, y la llave va en
el propio enlace. Cuando el estudiante la abre, la hoja borra ese texto y anota la fecha.

## Instalación (una sola vez, unos 10 minutos)

1. En Google Drive, con la cuenta institucional, cree una **hoja de cálculo nueva**
   (por ejemplo «Enlaces de un solo uso - calificación»).
2. En la hoja: **Extensiones → Apps Script**. Borre lo que aparece y pegue todo el
   contenido de `Codigo.gs` de esta carpeta. Guarde.
3. En Apps Script, el engranaje **Configuración del proyecto** → al final,
   **Propiedades de la secuencia de comandos → Agregar propiedad**:
   - Propiedad: `SECRETO`
   - Valor: una clave larga que solo usted conozca (no la contraseña de la versión
     completa; otra distinta).
   Guarde.
4. **Implementar → Nueva implementación** → tipo **Aplicación web**:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
   Autorice cuando lo pida y copie la **URL de la aplicación web**.
5. Pásele esa URL al agente: la pone en `calificar.html` (constante `ENLACES.url`) y
   publica.

## Uso

1. Abra el índice de `calificar.html` (desde la guía de planes o desde su copia local).
2. La primera vez, al final del índice: **«Docente: activar los botones para
   compartir»** y escriba el valor de `SECRETO`. Queda guardado en ese dispositivo
   («Desactivar» lo borra).
3. Junto a cada prueba, **Copiar enlace** o **Enlace de un solo uso**. El enlace se
   copia solo; péguelo en el chat o el correo del estudiante.
4. Pruebas comerciales: el enlace de un solo uso necesita la versión completa abierta
   en ese dispositivo (abra cualquier prueba con contraseña y marque «Recordar»), o
   usar la copia local.

Lo que ve el estudiante: una portada con el botón **Comenzar**. La prueba se gasta al
pulsarlo, no al abrir el enlace (así la vista previa de WhatsApp no lo consume). Si
recarga la misma pestaña, la prueba sigue ahí; en otra pestaña o dispositivo, ya no.

En la hoja «Enlaces» puede ver qué enlaces se crearon y cuáles se usaron (columna
`usado_en`).

## QR con cupo en los planes exportados

Al exportar un plan (botón de PDF de la guía de planes), si en ese navegador ya activó
los botones de compartir en `calificar.html`, aparece la opción **«QR de "Calificar en
línea" con cupo»** con dos números: **Usos** (por ejemplo 40, uno por estudiante) y
**Días** de vigencia. Cada exportación crea códigos nuevos para cada instrumento
calificable del plan: el QR abre la prueba solo ese número de veces y hasta esa fecha.
Después muestra «Este código ya alcanzó su número de usos» o «Este código venció».
Sin marcar la opción, el PDF lleva los QR abiertos de siempre. En la hoja «Enlaces» se
ve cuántas veces se usó cada código (columna `usado`).

## Compartir el plan como enlace, y PDF con contraseña

En el mismo cuadro de exportación (solo con los botones activados):

- **Contraseña (opcional).** Si la escribe, el PDF exportado sale protegido y pide esa
  clave al abrirse (en el computador se descarga directamente, sin el diálogo de
  impresión). Es el cifrado básico de PDF: frena a cualquiera, pero no es inviolable.
- **Crear enlace del plan.** En lugar del PDF, crea un enlace que muestra este plan (con
  sus notas, sus QR y, si marcó el cupo, los QR con cupo) durante los **Días del
  enlace** (30 por defecto). Si escribió contraseña, el enlace la pide. Al vencer muestra
  «Este plan ya no está disponible». Para retirarlo antes, borre su fila en la hoja
  «Enlaces» (columna `prueba` empieza por «Plan:»; `usado` cuenta las veces que se abrió).

Ojo: el texto de los planes también está en la guía pública; lo que se controla es la
copia que usted comparte, con sus notas y sus códigos.

## Solo en línea: fichas y calificación sin PDF

La casilla **«Solo en línea (fichas y calificación, sin PDF)»** del cuadro de exportación
hace que el plan (PDF o enlace) no lleve ningún PDF: las fichas de trabajo pasan a su
versión en línea (`ficha.html`) y los instrumentos solo conservan «Calificar en línea»,
todos con código de cupo (Usos y Días). En las fichas en línea, las guías y los guiones
solo se leen (no se imprimen ni se copian) y los registros se exportan únicamente cuando
están diligenciados. La dirección directa `ficha.html?f=…` solo abre en el navegador
donde activó sus botones de compartir.

## Si cambia el código

Pegue el `Codigo.gs` nuevo encima del anterior, guarde y vaya a «Implementar →
Administrar implementaciones → editar (lápiz) → Versión: nueva → Implementar». Así la
URL no cambia. (Los QR con cupo, los planes compartidos y las fichas en línea con cupo, del 2026-11-10, necesitan esta actualización.)
