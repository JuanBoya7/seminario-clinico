# Receptor de los debates de 402

Proyecto propio. Pestañas «Debate corte 1/2/3» (cada registro e intervención), «Asistencia corte 1/2/3»
(una fila por estudiante: hora de registro, número de intervenciones, segundos y palabras) y
«Valoración del docente».

1. Con la cuenta institucional, abrir <https://script.google.com> → **Nuevo proyecto**. Nombre:
   `402 - Debates`.
2. Borrar el contenido de `Código.gs` y pegar todo `Codigo.gs` de esta carpeta. Guardar.
3. Elegir la función `prepararHoja` → **Ejecutar** → aceptar los permisos. El registro muestra
   la URL de la hoja creada.
4. **Implementar → Nueva implementación → Aplicación web**. Ejecutar como: **yo**. Quién tiene
   acceso: **cualquier usuario**. Copiar la URL.
5. Pasar la URL a la forma de dominio
   (`https://script.google.com/a/macros/areandina.edu.co/s/<ID>/exec`) y pegarla en
   `conductismo/debate-envio.js`, entre las comillas de `DEBATE_402_ENVIO_URL`.
6. Al cambiar el código: **Administrar implementaciones → editar → Versión: nueva**, para que
   la URL no cambie.

**Clave docente.** Al ejecutar `prepararHoja`, el registro muestra también la «Clave docente para
el tablero». El tablero la pide en «Vista docente» para mostrar los nombres, etiquetar intervenciones, valorar a los equipos y ver la
nota propuesta. No la compartan con los estudiantes ni la escriban en ningún archivo del sitio.

**Asistencia.** Registrarse con el nombre al empezar deja la fila del estudiante en «Asistencia corte N»
aunque nunca tome la palabra (queda con 0 intervenciones). La pestaña se rehace sola con cada envío;
no se edita a mano. Tras pegar esta versión, ejecutar una vez `actualizarAsistencia` para armarla con
los envíos que ya había.
