
//Ejemplo de hosting en funciones

saludo(); 

function saludo(){
    console.log("hola")
}

saludo(); 

/*
 Json (Javascript Object Notion) Notación de Objetos de JS. 
    Es un formato estandar ligero basado en texto y que nos sirve para representar datos estructurados basados en la sintaxis de Js

    Es utilizado para transmitir datos en aplicaciones web, desde el usuario al servidor y viceversa. 

 */

//oBJETO COMUN DE JAVA SCRIPT
let  laika = {
    nombre: "Laika", 
    edad: 5, 
    color: "cafe"
}

console.log(laika+ " Objeto normal"); 
console.log(typeof(laika));

//Object Json 

let laikaJSON = `{
    "nombre": "Laika",
    "edad": 5,
    "color": "cafe"
}`;

console.log(laikaJSON+ "Objeto JSON");
console.log(typeof(laikaJSON));

/**
 * lOS JSON son utilies para transmitir datos a través de la red, pero deben ser convertidos a objetos nativos de JS para acceder a sus datos. 
 
--Serialización 
    Proceso para convertir un objeto en una secuencia de bytes o en una cadena de caracteres que puede ser almacenada o transmitida. 

--Deserialización
    proceso de tomar una secuencia de bytes o una cade de caracteres serializados y convertirlos en un objeto de memoria. 
 */


    //JSON 
    let scoobidoo = `{
        "nombre": "scoobidoo",
        "edad": 25,
        "color": "cafe"
    }`

    //Nativo JS
    let Pilot = {
        nombre: "Piloto",
        edad: 9,
        color: "cafe"
    }

    console.log(scoobidoo);
/*
Para convertir (Serialización y deserealización) los diferentes tipo de objetos (nativos y json), recurrimos a dos metodos de JS: 

-JSON.parset() analiza una cadena de texto como JSON, transformandolo. 

- JSON.stringify(); convierte un objeto de js en una cade de texto tipo JSON
*/

//Metodo JSON.parse() De json A object
const sultanTransformado = JSON.parse(scoobidoo);
console.log(sultanTransformado);

//Método stringfy(). De object a JSON
let pilototransformado = JSON.stringify(Pilot);
console.log(pilototransformado);

//Anidacion de objetos en objetos

const empleado = {empleado: [
    {firstName: "Carlos", lastname: "Navarro", age:29},
    {firstName: "Jonathan", lastname: "Mendoza", age:25},
    {firstName: "Nancy", lastname: "Peréz", age:24}],
}
console.log(typeof(empleado));
console.log(empleado);
console.log(empleado.empleado[0]);

let empleadoTransformado = JSON.stringify(empleado); 
console.log(empleadoTransformado);
console.log(typeof(empleadoTransformado));


 let rickSanchez = `{"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)"}}`;
 console.log(rickSanchez);
 console.log(typeof(rickSanchez));
let ObjectRickSanchez = JSON.parse(rickSanchez);
console.log(ObjectRickSanchez);