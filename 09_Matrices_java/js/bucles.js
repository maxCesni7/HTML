/*=======Iteración===========
* Iteración. 
Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir ejecutar un bloque de codigo muchas veces, basado en una condición o una colección de elementos. 

--Operadores de incremento(++) y operadores de decremento (--)
==================Ciclo FOR=====================================

Sintaxis
    for(expresionInicial; expresionCondicional; expresionDeActualizacion){
        //bloque de código a ejecutar
    }

    1. Inicialización. Se debe inicializar con una variable que será evaluada en la expresión a comparar. Variable global o local.

    2. Condición. Es una expresión que debe cumplir la variable inicial (true), si no se cumple (false) el bucle termina.

    3. Pasos a realizar. Son los intervalos que cambiarán la variable inicial mientras sea true.
*/
//Programa para conatr los boletos de un concierto. 

for (let boleto = 1; boleto <=50; boleto++) {
    console.log("Numero de boleto: " + boleto);
    
}

let paletas= 1; 
for (let paletas = 1; paletas <=20; paletas++) {
    console.log(`Tengo ${paletas} paletas`);   
}

//Cuenta regresiva.
let cuentaRegresiva = 18; 
for ( cuentaRegresiva; cuentaRegresiva >=0; cuentaRegresiva--) {
    console.log(`La bomba explota en ${cuentaRegresiva}`);    
}

/*
¿CcOMO RECORREMOS ARRAY CON EL CICLO FOR?

*/

const ch28 = ["Mari", "Andrea", "Pessy", "Ana Fer", "Ingrid", "Blanca", "Pau", "Nancy", "Yare", "Magali"];

for (let contador = 0; contador < ch28.length; contador++) {
    console.log(`El indice ${contador} tiene a: ${ch28[contador]}`)   
}

/*
Variables de ciclo for: 

--for.....of nos permite recorrer el objeto (array) y devuelve el valor 
--for..... in nose permite recorrer el objeto (array) y devuelve su posicion. 
*/

let animales = ["pero", "gato", "colobri", "pantera", "leon", "grillo"];
for(let animal of animales){
    console.log(animal + " Pertenece al array animales")
}

console.log("==================================");
console.log("==================================");

//for..in
for(let animal in animales){
    console.log(animal + " Posicion del arreglo de animales"); 
}
console.log("==================================");
console.log("==================================");


//Sumar los numero del 1 al 100

let suma =0;
for (let contador = 0; contador <= 100; contador++) {
    suma = suma+contador; 
    //suma+=i; 
}
console.log(suma);

console.log("==================================");
console.log("==================================");

//Imprimir los numero pares del 1 a 20; 

for (let contador = 1; contador <=20; contador++) {
    if(contador%2==0) console.log(`El numero ${contador} es par`);
}

console.log("==================================");
console.log("==================================");


//Imprimir la tabla de multiplicar del 5. 
for (let i = 1; i <=10; i++) {
    console.log(`5 x ${i} es igual a ${i*5}`)
}

// console.log("==================================");
// console.log("Forma de Dani");

// const num5 = 5; 
// for (let i = 1; i <= 10; i++) {
//     let resultado = num5*i; 
//     console.log(`${num5} x ${i} = ${resultado}`)
// }


console.log("==================================");console.log("==================================");

/*======================Ciclo While====================
Recorre un bloque de codigo siempre que una condición especifica sea verdadera. 
Sierve para realizar una tarea repetitiva MIENTRAS una condición sea verdadera.

while (condition) {
    Bloque de codigo a ejecutar.
}

*/
console.log("==================================");console.log("==================================");

let productos=5;
while (productos > 0) {
    console.log("Productos Vendidos");
    productos--;
}

//imprime los numeros del 1 al 10
let numero1=1; 
while (numero1<10) {
    console.log(`El numero es: ${numero1}`); 
    numero1++;
}

const frutas = ["Manzana", "Platado", "Naranja", "Mandarina", "limon"];
let fruta = 0; 
while(fruta <frutas.length){
    console.log(frutas[fruta]);
    fruta++;
}

//Hacer una secuencia de ***********

// let numero; 
// numero = prompt(`Numero de Asteriscos: `, )
// let txt = "";

// for (let i = numero-1; i < numero; i++) {
//     console.log();
// }


/*======================Ciclo while=============== 
Hacer mientras, cre un bucle que ejecuta una sentencia especificada, hasta que la condicion se evalúa como falsa. 

do {
    //bloque de codigo para ejecutar. 
} while (condition);
*/

//Contar del 1 al 5 
let numero2= 1; 
do {
    console.log(numero2);
    numero2++;
} while (numero2 <6);

//Mostrar produtos vendidos
//ler productos = 5

let producto= 5;
do {
    console.log(producto+" Productos Vendidos");
    producto--;
} while (producto>=1);


/* ======= Control de ciclos =======
--- Sentencia break. Termina el bucle actual. Permite al programa salir de una sentencia, pero para que se pueda ejecutar necesita estar anidado dentro de la sentencia.

--- Sentencia continue. No termina el bucle, sino que salta a la siguiente iteración.
*/
console.log("==================================");console.log("==================================");

let numero3 = 0; 

while(numero3<100){
    numero3++;
    console.log(numero3);
    if(numero3==10)break; 
}
console.log("==================================");console.log("==================================");

//Ejemplo de continue

for (let cliente = 1; cliente <=10; cliente++) {
    if(cliente===5){
        console.log("Eres el cliente #"+cliente);
        console.log("!!!!Ganste!!!!!, cliente #"+cliente);break;
    }
    console.log("Eres el cliente #"+cliente);
    
}


console.log("Retos 1: ");
console.log("==================================");

let fila =["Sofía", "David", "Juan"];
console.log(fila);
fila.push("Sara"); 
fila.push("Agustin"); 
console.log("Se agregan 2 personas mas al final de la final ");
console.log(fila);

console.log("Retos 2: ");
console.log("==================================");

//Reto 2
// let positivo =3;
// for (; positivo > 0; positivo-.5) {
//     console.log("Numero: " +positivo)
// }
let positivo =3;
while (positivo>0) {
    console.log("Numero: " +positivo)
    positivo = positivo-.5;
}


//RETO 3 corchete leer
console.log("Retos 3: ");
console.log("==================================");


let grupo = [1, 2, 3, 4, 5, 6]; 

function leerElementos(n){
let leer = 0; 
    while (leer<n.length) {
        console.log(`Elemento ${leer+1} : ${n[leer]}`);
        leer++;
    }
}

leerElementos(grupo);

