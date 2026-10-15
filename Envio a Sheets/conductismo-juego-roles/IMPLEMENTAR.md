# Receptor del juego de roles de 402

Proyecto propio, distinto del de los espacios de discusión. Una pestaña: «Juego de roles».

1. Con la cuenta institucional, abrir <https://script.google.com> → **Nuevo proyecto**. Nombre:
   `402 - Juego de roles`.
2. Borrar el contenido de `Código.gs` y pegar todo `Codigo.gs` de esta carpeta. Guardar.
3. Elegir la función `prepararHoja` → **Ejecutar** → aceptar los permisos. El registro muestra
   la URL de la hoja creada.
4. **Implementar → Nueva implementación → Aplicación web**. Ejecutar como: **yo**. Quién tiene
   acceso: **cualquier usuario**. Copiar la URL.
5. Pasar la URL a la forma de dominio
   (`https://script.google.com/a/macros/areandina.edu.co/s/<ID>/exec`) y pegarla en
   `conductismo/juego-roles-envio.js`, entre las comillas de `JR_ENVIO_URL`.
6. Al cambiar el código: **Administrar implementaciones → editar → Versión: nueva**, para que
   la URL no cambie.

**Clave docente.** Al ejecutar `prepararHoja`, el registro muestra también la «Clave docente para
el tablero». El tablero la pide en «Vista docente» para mostrar los nombres de los jurados y la
nota propuesta. No la compartan con los estudiantes ni la escriban en ningún archivo del sitio.
