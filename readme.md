Para inicializar Docker en el puerto 4000
1) Inicializar Docker (software)
2) Después de finalizar el proyecto, escribir este comando en terminal (en carpeta raíz) para crear el contenedor en Docker: docker build . -t app-node-js 
3) Para inicializar la app en el puerto 4000, ejecutar este comando en terminal en la carpeta raíz: docker run -d -p 4000:4000 app-node-js

*cuando se borren elementos de la tabla, recomiendo refrescar la página.