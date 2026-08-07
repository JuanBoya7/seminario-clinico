# Recepción de actividades en una hoja de cálculo

## Dos receptores, y dos asignaturas sobre cada uno

Desde 2026-08-07 los mismos recursos se usan en **dos asignaturas**:

| Asignatura | Institución | `ENVIO.curso` | Grupos |
|---|---|---|---|
| Seminario Profesional I - Clínico | FUAA | `SPI-2026-2` | `901`, `902`, `903` |
| Práctica II - Clínica | UDES | `PII-2026-B` | `Práctica II` (uno solo) |

Los archivos de la UDES viven en la subcarpeta **`practica-ii/`** del repositorio, con
su propia portada, y son copia de los de FUAA con el membrete y el código de curso
cambiados. El contenido pedagógico —los checklists DSM-5 y la rúbrica del simulacro— es
idéntico a propósito: si mañana se corrige un criterio, hay que corregirlo en los dos
lados.

Las dos asignaturas **comparten hoja y despliegue**. No se mezclan porque el nombre de la
pestaña incluye el grupo: `901 Elisa` (FUAA) y `Práctica II Elisa` (UDES) son pestañas
distintas. Cada receptor conoce los dos cursos en la constante `CURSOS`, arriba del todo:

```js
var CURSOS = {
  'SPI-2026-2': ['901', '902', '903'],
  'PII-2026-B': ['Práctica II']
};
```

Un envío cuyo `curso` no esté en esa lista se rechaza con un mensaje, no se escribe.

> **La cuenta dueña de las dos hojas es la de Areandina.** Es una decisión tomada a
> conciencia, no un descuido: los datos de la UDES quedan en un Drive institucional de
> otra universidad. Si algún día hay que migrar, es "Hacer una copia" de la hoja desde la
> cuenta destino —arrastra el script—, republicar y pegar la URL nueva en los HTML. Son
> unos veinte minutos, pero **la URL cambia**, así que los archivos ya descargados por
> los estudiantes seguirían apuntando a la vieja: conviene hacerlo entre semestres.
> Mientras tanto, descargar un `.xlsx` de cada hoja al cierre de cada corte alcanza como
> respaldo.

## Hay dos receptores, y son independientes

| Carpeta | Recibe | Estado |
|---|---|---|
| [`casos/Codigo.gs`](casos/Codigo.gs) | Los análisis de caso (Elisa, Susana, Sergio) | Ya publicado y en uso |
| [`pap/Codigo.gs`](pap/Codigo.gs) | El simulacro de primeros auxilios psicológicos | Falta publicarlo |

Cada uno vive en **su propio proyecto de Apps Script, vinculado a su propia hoja de
cálculo**, con su propia URL. Están separados a propósito: el de los casos ya está
validado, y una falla del simulacro —en plena aula, con treinta estudiantes enviando a
la vez— no debe poder llevarse por delante las entregas de los casos.

Los pasos de abajo sirven para los dos. Lo único que cambia es qué archivo pegás y en
qué HTML va la URL resultante:

- **Casos** → la URL va en el bloque `ENVIO` de los tres `*-Caso-*.html`, y en los tres
  de `practica-ii/`.
- **Simulacro** → la URL va en `pap/observador.html` **y** en `pap/tablero.html`, y en los
  dos equivalentes de `practica-ii/pap/`. Las cuatro páginas usan la misma dirección.

**Si tocás un `Codigo.gs`, hay que republicar para que el cambio surta efecto:**
Implementar → Administrar implementaciones → editar → Versión: **Nueva**. La URL no
cambia, así que no hay que volver a tocar ningún HTML.

> **El script necesita saber en qué hoja escribir.** Lo más simple es que el proyecto
> nazca desde la hoja: Extensiones → Apps Script *estando dentro de ella*.
>
> Si ya creaste el proyecto suelto y no querés rehacerlo, no hace falta: creá la hoja,
> copiá el tramo largo de su dirección —`docs.google.com/spreadsheets/d/`**`ESTO`**`/edit`—
> y pegalo en `ID_HOJA`, arriba del todo en `pap/Codigo.gs`. Republicá y listo; **la URL
> de la aplicación no cambia**, así que no hay que volver a tocar los HTML.
>
> El receptor de los casos no tiene `ID_HOJA` porque ya nació vinculado; si alguna vez
> hay que moverlo, se le agrega el mismo bloque.

---

El guardado local **no cambió**. Los estudiantes siguen guardando y entregando el
archivo `.html` igual que antes. Lo que se agrega es un segundo botón, **"Enviar al
docente"**, que además deja una copia de las respuestas en una hoja de cálculo tuya.

Falta un solo paso para activarlo: publicar el script y pegar su dirección en los tres
archivos. Se hace una vez.

---

## Paso 1 — Crear la hoja de cálculo

1. Entrá a [sheets.new](https://sheets.new) con tu cuenta institucional.
2. Ponele un nombre. Para los casos, **Seminario Profesional I — Entregas 2026-2**;
   para el simulacro, **Seminario Profesional I — Simulacro PAP**.

No hace falta crear pestañas ni encabezados. Las columnas se crean solas a partir de lo
que trae cada envío, y las pestañas también:

- **Casos:** una por grupo del curso y caso — `901 Elisa`, `902 Elisa`, `903 Susana`,
  `Práctica II Elisa`…
- **Simulacro:** una por grupo del curso — `901`, `902`, `903`, `Práctica II`.

## Paso 2 — Pegar el script

1. En esa hoja: menú **Extensiones → Apps Script**.
2. Borrá todo lo que aparezca en el editor.
3. Pegá el contenido completo del archivo que corresponda:
   [`casos/Codigo.gs`](casos/Codigo.gs) o [`pap/Codigo.gs`](pap/Codigo.gs).
4. Guardá con el ícono del disquete.

## Paso 3 — Publicar

1. Botón azul **Implementar → Nueva implementación**.
2. En el engranaje de la izquierda, elegí **Aplicación web**.
3. Configurá exactamente así:
   - **Ejecutar como:** Yo (tu cuenta)
   - **Quién tiene acceso:** **Cualquier usuario**
4. **Implementar**. Google va a pedirte autorización una vez: aceptá. Si aparece
   "Google no ha verificado esta aplicación", entrá por **Configuración avanzada → Ir a
   (nombre del proyecto)**. Es tu propio script, no un tercero.
5. Copiá la **URL de la aplicación web**. Termina en `/exec`.

> **Convertí esa dirección a la forma de dominio antes de pegarla.** Apps Script te
> entrega la forma corta:
>
> ```
> https://script.google.com/macros/s/AKfy…/exec
> ```
>
> Como la cuenta dueña es de Workspace (`areandina.edu.co`), esa forma corta **solo
> resuelve si el navegador no tiene sesión de Google abierta**. Con sesión iniciada
> Google la enruta por Drive y responde *"No se puede abrir el archivo en estos
> momentos"* — que parece un problema de permisos y no lo es. Reemplazá `/macros/s/`
> por `/a/macros/areandina.edu.co/s/`:
>
> ```
> https://script.google.com/a/macros/areandina.edu.co/s/AKfy…/exec
> ```
>
> Esta forma funciona en las dos condiciones, con sesión y sin ella. Está comprobada
> contra los dos receptores. **Es la que va en los HTML**: importa sobre todo para los
> estudiantes, que casi siempre entregan desde un celular con sesión de Google puesta,
> y el fallo les aparecería recién al momento de enviar.

> **"Quién tiene acceso: Cualquier usuario" es indispensable.** Si lo dejás restringido
> a la organización, los estudiantes que trabajen con una cuenta personal en el celular
> no van a poder enviar, y el error les aparece recién al momento de entregar.

Para comprobar que quedó bien: abrí esa URL en el navegador. Debe mostrar
"Receptor activo".

## Paso 4 — Pegar la dirección en los archivos

Buscá el bloque `const ENVIO` y reemplazá `"PENDIENTE"` por la URL. Para el **simulacro**
son dos archivos y llevan la **misma** dirección: `pap/observador.html` y
`pap/tablero.html`. Si el tablero queda con una URL distinta de la del observador, se
conecta a la hoja equivocada y aparece vacío sin explicar por qué.

Para los **casos** son los tres `*-Caso-*.html`:

```js
const ENVIO = {
  url: "https://script.google.com/macros/s/AKfy.../exec",
  curso: "SPI-2026-2",
  caso: "susana",
  casoLabel: "Susana"
};
```

Solo cambia `url`. **`caso` y `casoLabel` no se tocan**: junto con el grupo del curso
que elige el estudiante, son lo que define en qué pestaña cae cada entrega.

Mientras diga `PENDIENTE`, nada falla en silencio: el botón le avisa al grupo que el
envío no está configurado, y el tablero muestra el motivo en vez de quedarse vacío.
Podés repartir los archivos así sin romper nada.

---

## Cómo queda la hoja

Una pestaña por grupo del curso y caso (`901 Elisa`, `902 Elisa`, `903 Elisa`, y lo
mismo para Susana y Sergio), y dentro una fila por envío:

| Fecha de envío | Curso | Grupo | Integrantes | …una columna por pregunta… | JSON completo |
|---|---|---|---|---|---|

Las pestañas se crean solas la primera vez que un grupo de ese curso envía: si el 903
nunca entrega el caso Sergio, esa pestaña no existe.

El archivo que guardan en local sigue la misma trazabilidad en su nombre:
`902-caso-elisa-grupo-7.html`.

Ese nombre es siempre igual porque **el estudiante no escribe el formato**: la palabra
"Grupo" está fija en el diseño del campo y el input descarta todo lo que no sea un
dígito. Si alguien escribe "Grupo 7" por costumbre, queda `7`. Sin eso, cada grupo
inventa el suyo ("grupo7", "G7", "Grupo siete") y se pierde el orden de los archivos.

Las columnas del checklist llegan como texto legible: los criterios marcados con su
redacción completa, la evidencia que escribió el grupo debajo de cada uno, y el
resultado (`4 / 11 criterios · Moderada`). La última columna guarda el estado completo
en JSON, por si alguna vez necesitás reconstruir el archivo original de un grupo.

En el caso de Elisa solo se vuelca el diagnóstico que el grupo eligió en el
desplegable, no los seis: elegir *es* su respuesta.

### La hoja del simulacro

Una pestaña por grupo del curso (`901`, `902`, `903`) y una fila por observación —cada
observador envía una vez por ronda—:

| Fecha de envío | Curso | Estación | Ronda | …un ítem por componente… | Errores observados | Observación destacada |
|---|---|---|---|---|---|---|

Los ítems llegan como `Sí` / `Parcial` / `No`. El tablero agrega esas tres palabras: una
columna cuenta como ítem de cotejo justamente porque sus valores son esos, así que
**agregar o quitar ítems de la rúbrica en el HTML no obliga a tocar el script**.

El tablero lee de esta misma hoja por la URL del receptor, en modo resumen
(`?tablero=1`). No hay una segunda configuración que mantener.

## Qué conviene saber antes de usarlo con estudiantes

**Los nombres de los estudiantes van a una hoja de Google.** Si el curso ya usa Google
institucional para otras entregas, no cambia nada respecto de lo que ya hacen. Si no,
conviene revisarlo antes de repartir los archivos.

**La URL queda visible dentro del HTML.** Cualquiera que abra el archivo puede ver a
dónde se envía y, en teoría, mandar filas. El código de curso (`SPI-2026-2`) descarta
lo que no lo traiga, lo que evita el accidente pero no a alguien decidido. Para una
actividad de clase alcanza; no uses esta hoja para nada confidencial.

**Un grupo puede enviar dos veces.** Cada envío es una fila nueva; no se sobrescribe.
Ordená por fecha y quedate con el último. Es preferible a que un reenvío borre lo
anterior por error.

**Si falla la red, el archivo sigue sirviendo.** El grupo guarda con el otro botón y
entrega el archivo. Por eso conservamos las dos vías.

## Si algo no funciona

| Síntoma | Causa | Solución |
|---|---|---|
| Se abre una pestaña pidiendo iniciar sesión | La implementación no quedó en "Cualquier usuario" | Rehacer el paso 3 |
| "No se puede abrir el archivo en estos momentos" (pantalla de Drive), pero en incógnito sí abre | La dirección quedó en la forma corta `/macros/s/`, que con sesión de Google no resuelve | Pasarla a la forma de dominio `/a/macros/areandina.edu.co/s/` (ver el recuadro del paso 3) |
| "Este envío no corresponde al curso configurado" | `curso` en el HTML ≠ `CODIGO_CURSO` en el script | Igualar los dos textos |
| "Falta seleccionar el grupo del curso" | El desplegable 901/902/903 quedó vacío | El grupo lo completa y reenvía |
| Se abre un grupo nuevo (p. ej. 904) | Está en dos lados | Agregarlo al desplegable del HTML **y** a `CURSOS` en el script, bajo su código de curso |
| El tablero de una asignatura muestra observaciones de la otra | `ENVIO.curso` del `tablero.html` no coincide con el de su `observador.html` | Igualarlos: el tablero pide el resumen de un solo curso (`&curso=`) |
| El botón avisa que no está configurado | La `url` sigue en `PENDIENTE` | Paso 4 |
| El tablero dice "sin conexión con el receptor" | La `url` de `tablero.html` está vacía, mal copiada, o apunta al receptor de los casos | Igualarla a la de `observador.html` |
| El tablero carga pero sale vacío | Todavía no llegó ninguna observación, o el filtro de grupo no coincide | Enviar una de prueba y poner el filtro en "Todos" |
| Una observación cayó en la hoja de los casos | `observador.html` quedó con la URL del receptor viejo | Pegar la URL del proyecto del simulacro |
| "Este script no está vinculado a ninguna hoja de cálculo" | El proyecto se creó suelto, sin hoja | Pegar el identificador de la hoja en `ID_HOJA` y republicar |
| `getSheetByName of null` | Lo mismo, en una versión anterior del script | Actualizar `pap/Codigo.gs` y hacer lo de arriba |
| Cambiaste el script y no se refleja | Apps Script sirve la implementación publicada | **Implementar → Administrar implementaciones → editar → Versión: Nueva** (la URL no cambia) |
