# Receptor de los espacios de discusión de 402

Un solo proyecto de Apps Script para los tres cortes (pestañas «Corte 1», «Corte 2», «Corte 3»).

1. Con la cuenta institucional, abrir <https://script.google.com> → **Nuevo proyecto**. Nombre:
   `402 - Espacios de discusión`.
2. Borrar el contenido de `Código.gs` y pegar todo `Codigo.gs` de esta carpeta. Guardar.
3. Elegir la función `prepararHoja` → **Ejecutar** → aceptar los permisos. El registro muestra
   la URL de la hoja creada.
4. **Implementar → Nueva implementación → Aplicación web**. Ejecutar como: **yo**. Quién tiene
   acceso: **cualquier usuario**. Copiar la URL.
5. Pasar la URL a la forma de dominio
   (`https://script.google.com/a/macros/areandina.edu.co/s/<ID>/exec`) y pegarla en
   `conductismo/discusion-envio.js`, entre las comillas de `DISCUSION_402_ENVIO_URL`.
6. Al cambiar el código: **Administrar implementaciones → editar → Versión: nueva**, para que
   la URL no cambie.
