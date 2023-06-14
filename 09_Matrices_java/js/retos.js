
console.log("Retos 1: ");
console.log("==================================");

let fila =["Sofía", "David", "Juan"];
console.log("Inicia la fila.");
console.log(fila);
fila.push("Sara"); 
fila.push("Agustin"); 
//"Sofía", "David", "Juan" "Sara" "Agustin"
console.log("Se agregan 2 personas mas al final de la final ");
console.log(fila);
fila.push("Renata"); 
fila.push("Elena");
console.log(fila);
fila.splice(1, 1,"Renata")
fila.splice(5, 1);
console.log("David le cede el lugar arenata y sale de la fila. ");
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


console.log("Retos 4: ");
console.log("==================================");

let numero = 19; 

function sumarNumeros(num){
    let resultadoSuma = 0; 
    while(num>0){
        resultadoSuma= resultadoSuma + num;
        num--; 
    }
    return resultadoSuma; 
} 

console.log("Funcion normal para sumar los numero: "+sumarNumeros(numero));

const sumarNumerosFlecha = (num) =>{

    let resultadoSuma = 0; 
    while(num>0){
        resultadoSuma= resultadoSuma + num;
        num--; 
    }
    return resultadoSuma; 
}

console.log("Funcion Flecha para smar los numero enteros: " +sumarNumerosFlecha(numero));