/* Tutorial para instalar un paquete de npm
1. Crear una carpeta con un archivo .js
2. Abrir la ubicación de nuestra carpeta en la terminal
3. Ejecutar alguno de los comandos siguientes:
    $ npm init ===> package propio
    $ npm init -y ===> package de npm existente
4. Instalar el paquete desde la línea de comandos. p.e. con el package colors sería:
    $ npm install colors
5. Importar el paquete desde el archivo main/index.js
6. Ejecutar el paquete mediante la terminal utilizando nodeJS
    $node archivo.js

*/
const colors = require('colors');
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
 