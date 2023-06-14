/* ARRAYS 

   ======== Recursividad. 
   Se refiere a la capacidad de un función para llamarse así misma dentro de su propio cuerpo y resolver un problema de manera repetitiva. 


*/


function factorial(n){
    if(n===0){
        return 1
    }
    return n*factorial(n-1);
}

let marcasAutos = ["Mazda", "Tsuru", "Nissan", "Toyota"];

console.log(marcasAutos);

// Formato valido para arreglos que sean muy largos.
// let marcasAutos = ["Mazda", 
// "Tsuru", 
// "Nissan", 
// "Toyota"];

//Array Vacio
const computadoras =[];
console.log(computadoras); 
// Agregar elementos al array
computadoras[0]= "Rog ";
computadoras[1]= "Dell ";
computadoras[2]= "Lenovo ";
computadoras[3]= "Alien ";

console.log("Arreglo añadiendo elementos: "+computadoras); 


//Otra manera de crear un array
const celulares = new Array("Samsung", "Apple", "Motorola", "LG", "Huawei");
console.log(celulares);

//Longitud de un array 
let LongitudCelulares = celulares.length;
console.log("Tamaño del arreglo celulares: "+LongitudCelulares);

//Acceso a los elementos del array. Para accceder hacemos referencia al numero de indice del array.

console.log(celulares[0]);
console.log(celulares[1]);


//For para poder imprimir todos los elementos del array. 

for (let index = 0; index <= LongitudCelulares; index++) {
    console.log("La marca de celulares en la posición "+ (index+1) + " es "+celulares[index]);
    
}

//Acceder al ultimo elemento de un array 

let ultimoElementoCelulares = celulares[celulares.length-1];
console.log("El ultimo eleemnto de mi array celulares es: "+ ultimoElementoCelulares);

//Moificar un elemento del array mediante indices.
const listaDeCompras = ["Jamón", "Queso", "Yogurt", "Torrillnas", "Pan"];
    //Cambiar el yougurt por yogurt griego oikos. 
    listaDeCompras[2]= "Yogurt griego Oikos";
    console.log("lista de compras: "+ listaDeCompras);

console.log("========================================");

//Arreglos multidimensionales o arreglos de arreglos 
console.log("Arreglos multidimensionales");
console.log("****************************************");

const platillos = ["TACOS DE PASTOR", "Arepas", "sushi", "PIZZA"];
const paises = ["México", "Venezuela", "Italia", "Japón"];

const menu = [platillos, paises];
console.log(menu);
//Traer información de los dos arrays
console.log("Inidce 0 sub indice 0: " + menu[0][0]);

console.log("En " + menu[1][3]+ " se come "+ menu[0][2]);
console.log("****************************************");

/* ==== Métodos de Arrays ====
-- Métodos de cola (queue). Los métodos de cola implican agregar elementos al final del array y eliminar elementos del principio del array. Sigue el principio FIFO (First-In-First-Out).
    * push
    * shift
    * unshift

-- Métodos de pila (stack). Implican agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (Last-In-First-Out).
    * push
    * pop
*/

const ch28 = ["Mari", "Andrea", "Pessy", "Ana Fer", "Ingrid", "Blanca", "Pau", "Nancy", "Ingrid"];
console.log("Arreglo ch28 original: "+ ch28);

//-----indexOf() retorna el primer indice en el que se puede encontrar un elemento dado el array, o retorna -1 si el elemento no está presente. 

console.log("Indice del arreglo ch28 con index de Ingrid "+ ch28.indexOf("Ingrid"));
console.log("Indice del arreglo ch28 con index de Nancy "+ ch28.indexOf("Nancy"));

console.log("Indice del arreglo ch28 con index de Ingrid despues del indice 4 "+ ch28.indexOf("Ingrid", 5));
console.log(ch28);

console.log("Metodo POP");
console.log("****************************************");

//---pop Elimina el ultimo elemento de un arrray. 
let popch28 = ch28.pop();
console.log(ch28);

//----push() Agrega un elemento al final de un array
console.log("Metodo push");
console.log("****************************************");

let pushch28 = ch28.push("JuanK");
console.log(ch28)

//----splice() Elimina uno o vario elementos despues de una posición. 
console.log("Metodo splice");
console.log("****************************************");

// let splicech28 = ch28.splice(3, 2); //Apartir del indice 3 voy a eleminar 2 elementos. 
// console.log(ch28)

let splicech28 = ch28.splice(8, 1); //Eliminar a JuanK
console.log(ch28);


//----replace() Remplza uno o varios elementos a partir de su posición.
console.log("Metodo replace");
console.log("****************************************");

let replacech28 = ch28.splice(8, 1, "Yare"); //replazar a JuanK por YARE
console.log(ch28);



//----unshift() Añadir un elemento al principio del un array
console.log("Metodo unshift");
console.log("****************************************");

let unshiftech28 = ch28.unshift("Osvaldo"); 
console.log(ch28);



//----shift() Elimina un elemento del principio de array
console.log("Metodo shift");
console.log("****************************************");

let shiftech28 = ch28.unshift("Osvaldo"); 
console.log(ch28);


//----slice() Elimina los elementos anteriores a la posición definida sin modificar el array original 
console.log("Metodo slice");
console.log("****************************************");

let slicech28 = ch28.slice(7); 
console.log(ch28);
console.log(slicech28);

//---- Recoree el array, itera sobre cada elemento y ejecuta una función de devolución para cada eleemnto. 
console.log("Metodo foreach");
console.log("****************************************");

ch28.forEach(elemento => console.log(elemento));


//sort() Ordenamiento de array DE A a Z.
console.log("Ordenamiento de Array");
console.log("****************************************");
let sortCh28 = ch28.sort(); 
console.log(ch28);

//reverse() Cambia el sentido del ordenamiento invierte el orden del array. 
console.log("Metodo reverse");
console.log("****************************************");
letreversech28 = ch28.reverse(); 
console.log(ch28);


/***************************
Objetos en Programación: 

Un automovil es un objeto en la vida, ya que tiene propiedades y metodos especificos. 

--Propiedades del automovil
automovil
modelo
numero de llantas
peso 
color

--Metodos
frenar 
avanzar
arrancar
ect.....

A pesar de tener propiedades similares, los valores de dichas propiedades son diferentes entre cada uno. 
Tambien los metodo son similares, se van a ejecutar en momentos diferentes. 
Todos los objetos poseen propiedades y metodos co valores diferentes.

Sintaxis
    const object = {Key(property): value1, key2(property2): value2, key3(property3),....}

    Objeto en JavaScript
*/
const automovil = {
    nombre: "Kia", 
    clase: "Forte", 
    peso: 1142, 
    color: "Rojo",
    modelo: "2019",
    llantas: 4,
    puertas: 4
};

console.log(automovil);
//Acceder a las propiedades y valores de un objeto. 
let marcaAutomovil = automovil.nombre; 
console.log(marcaAutomovil);
console.log(automovil.nombre);