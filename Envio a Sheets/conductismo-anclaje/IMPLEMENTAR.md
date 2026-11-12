# Receptor del ejercicio de anclaje de 402

Una pestaña: «Anclaje» (se crea sola con el primer envío). Las respuestas son anónimas.

1. Crear una hoja de Google con la cuenta institucional, por ejemplo `402 - Anclaje T&M`, y abrir
   **Extensiones → Apps Script**.
2. Borrar el contenido de `Código.gs` y pegar todo `Codigo.gs` de esta carpeta. Guardar.
3. Elegir la función `prepararHoja` → **Ejecutar** → aceptar los permisos.
4. **Implementar → Nueva implementación → Aplicación web**. Ejecutar como: **yo**. Quién tiene
   acceso: **cualquier usuario**. Copiar la URL.
5. Pasar la URL a la forma de dominio
   (`https://script.google.com/a/macros/areandina.edu.co/s/<ID>/exec`) y pegarla en
   `conductismo/anclaje-casa-envio.js`, entre las comillas de `ANC_ENVIO_URL`.
6. Al cambiar el código: **Administrar implementaciones → editar → Versión: nueva**, para que la URL
   no cambie.

Si se cambian las anclas en `anclaje-casa-config.js`, cambiar también `CONDICIONES` en `Codigo.gs`
(el receptor rechaza un precio que no corresponda a la condición).
