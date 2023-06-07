// Tipos de Datos y Variables en JS
/*

Declaración de variables

var: utilizamos esta palabra reservada para variables globales -> Se pueden usar para todo el codigo

let: utilizamos esta palabra reservada para variables locales -> Se usa para un pedazo especifico de codigo

const: Esta palabra reservada la utilizamos para datos o información que no pueden cambiar su valor

var nombreDeVariable = valorDeLaVariable;




*/
// Tipos de Dato numérico (Number)

/*
Los tipos de dato numérico se expresan sin comillas
Se pueden trabajar enteros, decimales, positivos, negativos

*/

//typeof(variable);-> Sirve para saber el tipo de variable. 

var edad = 25;
var peso = 77;
var añoDeNacimiento = 1998;

var edadTexto = "22";

var nuevaEdad = Number(edadTexto); //Convierte una variable de texto a un dato numerico. 

//Tipo de Dato cadena de texto (string)

var nombre = "Max"; //variable de tipo sTRING   
var ciudad = "Tecámac";
varcolorFavo = "Negro";

//Los tipos de datos string o cadenas de tezto utilizan comillas dobles o sencillas para asignar un valor. 

// Son un tipo de valor muy sencillo y flexible, sin embargo hay que utilizarlos con cuidado. 

var edadString = String(edad);//Convierte una variable de numerica a un dato en cadena. 

// Tipo de dato booleano (boolean)

/* Los tipos de datos booleanos solo dan 2 resultados*/

var vivo = true; 
var esMexicano = true;

var condicion = Boolean(10>5); //true
var nuevaVariable = null; //Varriable con valor nulo

 //Variables booleanas: 

 var diaNoche = true; 
 var conVida = true; 
 var logIn = false;
 var leidoManga = false; 
 var vacunadoCovid = true; 
 var descansado = true;
 var tareaTerminada = true; 
 var ganadorSorteo = false; 
 var encendidoEstufa = false; 
 var vistoVideoSemana = false; 

 //Variables string: 
 var nombre = "Carlos"; 
 var apellido = "Cesni";
 var estado = "México";
 var nombrePadre = "Erasmo";
 var nombreMadre = "Adelaida"; 
 var nombreMascota_1 = "Piloto"
 var nombreMascota_2 = "Akira"
 var nombreHermano = "Miguel";
 var dirección = "Juan Escutia #2";
 var bandaFavorita = "Imagin Dragons";


 //Variables numericas: 
 var estatura = 1.77; 
 var kilometrosCorridos =3.2; 
 var premios = 2; 
 var docisMedicina = 125; 
 var docisMedicina_fin = 150; 
 var kills = 4; 
 var asistencias = 3;
 var muertes = 2;
 var tragos = 3; 
 var dinero = 121; 


 //Vriables constantes

 const pi = 4.141692; 

 // Arrays y objetos

 /*
Array, tambien conocido como Arreglo, es un tipo de dato que pertenece a JS, en el cual almacena una coleeción de elementos de manera ordenada. 

Primer Elemento = indice 0; 
Hasta n cantidad de indices. 

 */

var ejemploDeArray =["Saludos", "Que hay", "Buenos dias"];
var otroArray = [64, "Saludos", 117, 6];


/* 
////////////////////Objetos

Objetos los encontramos como Objetc
Son tipo de dato similares a los Arrays, sn embargo no son lo mismo y su estructura y semantica indican su motor de Js del navegador como trabajar con estos elemento.

Key = llave; 
value = valor; 
No tienen un orden.
Formato JSON
*/

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

var ejemploDeObjeto = {
    nombreObjt: "Max", 
    apellidoObjt: "Cesni", 
    edadObjt: 25, 
    estado: "estudiando",

};


////////////////////Funciones; 

/*
Function + nombreFucion (variables de que recibe){
    console.log("Do Something");
}
*/


