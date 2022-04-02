Para inicializar Docker en el puerto 4000
1) Inicializar Docker (software)

2) Después de finalizar el proyecto, escribir este comando en terminal (en carpeta raíz) para crear el contenedor en Docker: docker build . -t app-node-js 

3) Para inicializar la app en el puerto 4000, ejecutar este comando en terminal en la carpeta raíz: docker run -d -p 4000:4000 app-node-js.

4)En el software de Docker, acceder a la imagen correspondiente, y a su contenedor, y presionar el icono con el mensaje "open in browser", que te redirigirá al localhost:4000.

*cuando se borren elementos de la tabla, recomiendo refrescar la página.