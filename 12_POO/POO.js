// POO

// Gatito
let nombre = "Pelusa";
let edad =5; 
let especie  = "Gato";
let raza = "Angora"; 
let caracter ="Amoroso";
let color = "Blanco"; 

// Metodo 
// function comer(){}
// function trepararboles(){}
// function dormir(){}
// function maullar(){}
// function roronear(){}

//Pelusa ahora es un objeto

const gatito1 = {
    nombre : "Chomuske", 
    edad: 5, 
    especie: "Gato", 
    raza: "Demoniaca", 
    caracter: "Tranquilo", 
    color: "Negro"
}

const gatito2 = {
    nombre : "Fou", 
    edad: 1727, 
    especie: "Beast", 
    raza: "Mal de la Humanidad", 
    caracter: "Amistoso", 
    color: "Blanco"
}


console.log(gatito1); 

const gatito3 = {
    nombre : "Dexter-Starr", 
    edad: 12, 
    especie: "Gato", 
    raza: "Mestizo", 
    caracter: "Iracundo", 
    color: "Negro/Rojo"
}


console.log(gatito1); 
console.log(gatito2); 
console.log(gatito3); 

//Accediendo a las propiedades de los gatitos, mediante metodos
console.log(`El nombre del gatito 1 es: ${gatito1.nombre}`);
console.log(`Los gatitos se llaman: ${gatito1.nombre}, ${gatito2.nombre} y ${gatito3.nombre}`);


//Clases para agilizar el proceso de creación de cóidig (funcionana como plantillas.)

//1. Le decimos a Js que utilizaremos POO con la palabra rreservada class, la cual define mi clase. 

class Gatitos{
    //2. definir los atributos (propiedades) como variables, para asignarles valores posteriormente
    nombre  = ""; 
    edad = 0; 
    especie = ""; 
    raza =  ""; 
    caracter =  "";
    color =  "";

    //3. Agregar constructores., Nos permite construir los atributos de la clase, agregando valores o parametros. 
    constructor(nombre, edad, especie, raza, caracter, color){//constructor es  una plabra reservada. 
        //this es una palabra reservada para hacer referencia a  los atributos e instanciarlos. 
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie; 
        this.raza = raza; 
        this.caracter = caracter; 
        this.color = color; 
    }
        
        //4. Definir los metodos como funciones o acciones
         comer(){
            console.log("Comiendo pescados.")
         }
         trepararboles(){
            console.log("Subiendo Arboles")
         }
         dormir(){
            console.log("Durmiendo... ZZZZ")
         }
         maullar(){
            console.log("Miauuu")
         }
         roronear(){
            console.log("RRRRRRRRRrrrr.")
         }        
}

 //5. Crear objetos (gatitos), con la palabra reservada new
let Chomuske = new Gatitos("Chomuske", 5, "Gato","Demoniaca", "Tranquilo", "Negro");
let Fou = new Gatitos("Fou", 1727, "Beast", "Mal de la Humanidad", "Amistoso", "Blanco");
let Dexter = new Gatitos("Dexter-Starr", 12, "Gato", "Mestizo", "Iracundo", "Negro/Rojo");

console.log(Chomuske); 
Fou.dormir(); 
Dexter.trepararboles();


