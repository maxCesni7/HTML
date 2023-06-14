/* Expresiones condicionales 

Son el conjunto de instrucciones que se ejecutan si se cumple una condición. 


--if
--else
--else if
--switch

====Declaración if

sintaxis IF
if(condición){
    //bloque de condición que se ejecuatra si la condición es verdadera.
}

===Declaración Else
Se utilizara como instruccion para especificar un bloque de condigo que se ejecutara si la condición es falsa. 
*/

//Ejemplo para validad la mayoria de edad. 

let edadDaniel = 7; 

if (edadDaniel >= 18){
    console.log("El es mayor de edad.");
}
else{ console.log("El no es mayor de edad.")}

//Ejemplo de declaración if -else entre dos variables. 
//  console.log(`El numero ${num1} es mayor.`); Segunda forma para encadenar elementos que no necesiten + comillas invertidas(Alt + 96)

let num1 =23; 
let num2 = 23; 

if (num1==num2){console.log("Ambos numeros son iguales");}
else if (num1>num2){
    //  console.log("El numero " + num1 +" es mayor.");
    console.log(`El numero ${num1} es mayor.`); 
    }
else{console.log("El numero " + num2 +" es mayor.");}

//Guardar Resultado en un variable

let resultado; 

if (num1==num2){
    console.log("Ambos numeros son iguales");  
    resultado=num1;
}

else if (num1>num2){
    //  console.log("El numero " + num1 +" es mayor.");
    console.log(`El numero ${num1} es mayor.`); 
    resultado=num1;
    }

else{
    console.log("El numero " + num2 +" es mayor."); 
    resultado = num2
}

console.log(`La variable resultado es: ${resultado}`); 


//Determinar si un numero es par
let num3 = 1298473; 

if (num3%2==0){
    console.log(`El numero ${num3} es par.`); 
}
else{
    console.log(`El numero ${num3} es impar.`);
}


/*
======================Operador ternario=======================
Son una forma concisa de escribiuna expresión condicional en un lenguaje de porgrmación. Se puede utilizar para realizar la misma tarea de una declaración if-else copleta.

Sintaxis 
(condición) ? expresion_true : expresion_falsa;
*/

(num3%2==0) ? console.log(`El numero ${num3} es par.`) : console.log(`El numero ${num3} es impar.`);

//Tercera forma tiene que ser con concatenación "" + ""
// let operadorTernario = (num3%2==0) ? console.log(`El numero ${num3} es par.`) : console.log(`El numero ${num3} es impar.`);

// console.log(operadorTernario);

/*
====Declaración if

sintaxis IF
if(condición3){
    //bloque de condición que se ejecuatra si la condición es verdadera.
}
else if(condición2){
    //bloque de condición que se ejecuatra si la condición es verdadera.
}
else if(condición3){
    //bloque de condición que se ejecuatra si la condición es verdadera.
}
else (Defautl){
    //bloque de condición que se ejecuatra si la condición es verdadera.
}
 */


//Desterminar que día de la semana corresponde según la siguinet tabla: 

//  -1 = lunes
//  -2 = martes
//  -3 = miercoles
//  -4 = jueves
//  -5 = viernes

let dia = 3; 

if(dia==1){console.log(`El dia es lunes`)}
else if(dia==2){console.log(`El dia es Martes`)}
else if(dia==3){console.log(`El dia es Miercoles`)}
else if(dia==4){console.log(`El dia es Jueves`)}
else if(dia==5){console.log(`El dia es Viernes`)}
else if(dia==6){console.log(`El dia es Sabado`)}
else if(dia==7){console.log(`El dia es Domingo`)}
else{console.log(`No sé que dia es xd`)}

/*
    
*/

//Introducción de datos por mensaje emergente. 
// let prueba; 
// prueba = prompt("Que soy: " , "");
// console.log("Tu eres: " + prueba);

/* Instrucciones: Crea un programa en JavaScript en donde le muestres al usuario si es de mañana, de tarde, de noche o de madrugada.
Requerimientos:
    - La hora almacenada en una variable (let hora)
    - Establecer el formato de 24 horas (0 - 23 horas)
    - Tablita para determinar los horarios correspondientes a mañana, tarde, noche y madrugada:
        * 6 - 12 es de mañana (hora >= 6 && hora <= 12)
        * 13 - 18 es de tarde (hora >= 13 && hora <=18)
        * 19 - 23 de noche (hora >= 19 && hora <= 23)
        * 0 - 5 es de madrugada (hora >= 0 && hora <= 5)
        * Si hora está fuera de los valores 0 a 23, es inválido
 */
function saberHora(){

    let hora; 
    hora = prompt("¿Qué hora es?" , "");

    if(hora<12 && hora >=6){
        console.log("La hora " + hora +" es de Mañana");
    }
    else if(hora<=18 && hora >=12){
        console.log("La hora " +hora +" es de la Tarde");
    }
    else if(hora<=19 && hora >=23){
        console.log("La hora " + hora+" es de la Noche");
    }
    else if(hora>=0 && hora <=5){
        console.log("La hora " + hora+" es de Madrugda");
    }
    else if(hora==24){
        console.log("La hora " + hora+" es el reinicio del ciclo de un día y tecnicamente no existe.");
    }
    else {
        console.log("Esa hora no existe xd");
    }
}
/*
===============Sentencias anidades ================

*/

function edadSaber(){

    var edadPersona; 
    edadPersona = prompt("¿Qué edad tienes?" , "");

    if (edadPersona >= 18){
        console.log(`Eres mayor de Edad.`)
        if(edadPersona <65){
            console.log(`Eres un adulto joven`)
        }
        else{
            console.log(`Eres un adulto mayor`)
        }
        console.log(`Fin de la funcion.`)

    }
    else{
        if(edadPersona<=0){console.log(`Tienes que ingresar una edad con un valor positivo`)}
        else{
            console.log(`Eres menor de edad.`)
        }
        console.log(`Fin de la funcion.`)
    }
}

const today = new Date(); //Nuevo objeto con un constructor Date();
//Sirve para traer la fecha y hora actual. 
// let hour = today.getHours();
// console.log(today);
let hour = today.getHours();
let minut = today.getMinutes();
let hour2 = today.toLocaleTimeString();


console.log("hora: " + hour +":" +minut);
console.log("hora: " + hour2);



function grettings(){
    

    if(hour<12 && hour>=6){
        console.log("La hora " + hour +" es de Mañana");
    }
    else if(hour<=18 && hour >=12){
        console.log("La hora " +hour +" es de la Tarde");
    }
    else if(hour<=19 && hour >=23){
        console.log("La hora " + hour+" es de la Noche");
    }
    else if(hour>=0 && hour <=5){
        console.log("La hora " + hour+" es de Madrugda");
    }
    else if(hour==24){
        console.log("La hora " + hour+" es el reinicio del ciclo de un día y tecnicamente no existe.");
    }
    else {
        console.log("Esa hour no existe xd");
    }
}

//Verificar la hora del día de otra manera. 

function saludo(){

    let mensaje = "Error. 40'4"

    if(hour<12 && hour>=6){
        mensaje = "Buenos Días"; return mensaje; 
    }
    else if(hour<=18 && hour >=12){
        mensaje = "Buenas Tardes"; return mensaje; 
    }
    else if(hour<=19 && hour >=23){
        mensaje = "Buenas Noches"; return mensaje; 
    }
    else if(hour>=0 && hour <=5){
        mensaje = "Es de Madrugada"; return mensaje; 
    }

}

console.log(saludo());



//Crear un programa que evalue si un dpia corresponde a día de la semana(L-V) O FIN DE SEMANA /S Y D). 

const chercarDia= (diaSemana) => {
    let finDeSemana = diaSemana === "Sabado" || diaSemana === "Domingo"

    if(finDeSemana){
        return "Es fin de semana"; 
    }
    else{
        return "Es dia de la semana"; 
    }
};

console.log(chercarDia("Domingo"));



//switch

/*

switch (expresion){
    case etiquta1: 
    declaracion1;
    break;
    case etiquta2: 
    declaracion2;
    break;
    case etiquta3: 
    declaracion3;
    break;
    case etiquta4: 
    declaracion4;
    break;
    default:
    declaracion5;
    break;
}
 */
function diaConSwitch(){

    let diaSwitch; 
    diaSwitch = prompt("¿Qué numero del dia?");



    switch(diaSwitch){
        case "1":
            console.log(`El dia es lunes`);
            break;
        case "2": 
            console.log(`El dia es Martes`);
            break;
        case "3": 
            console.log(`El dia es Miercoles`)
            break;
        case "4": 
            console.log(`El dia es Jueves`)
            break;
        case "5": 
            console.log(`El dia es Viernes`)
            break; 
        case "6": 
            console.log(`El dia es Sabado`)
            break;
        case "7": 
            console.log(`El dia es Domingo`)
            break; 
        default: console.log(`No sé que dia es xd`)
    }
}

let fruta ="Mandarinas"; 

switch(fruta.toLowerCase()){
    case "naranja":
        console.log(`Naranja a 9.8 el KG`);
        break;
    case "manzana": 
        console.log(`Manzana a 9.8 el KG`);
        break;
    case "mandarinas": 
        console.log(`Mandarinas a 9.8 el KG`)
        break;
    case "platano": 
        console.log(`Platano a 9.8 el KG`)
        break;
    case "mangos": 
        console.log(`Mango a 9.8 el KG`)
        break;  
    default: console.log(`No sé que es eso xd`)
    break
}


function saberCalificacion(){
//let calificacion = 9.7;

let calificacion; 
calificacion = prompt("¿Cual es tu calificación");

    switch(true){
        case calificacion < 6:
            console.log(`Calificación no aprobatoria, necesitas repetir el curso`);
            break;
        case calificacion>=6 && calificacion<7: 
            if (calificacion%1==0){console.log("Tu calificación es: "+ calificacion+ " Necesitas asesorias");}
            else{calificacion= Math.ceil(calificacion)
            console.log("Tu calificación es: "+ calificacion+ " Necesitas asesorias");}
            break;
        case calificacion>7 && calificacion<8: 
            if (calificacion%1==0){console.log("Tu calificación es: "+ calificacion+ " Puedes hacerlo mucho mejor");}
            else{calificacion= Math.ceil(calificacion)
            console.log("Tu calificación es: "+ calificacion+ " Puedes hacerlo mucho mejor");}
            break;
       case calificacion>9 && calificacion<10: 
            if (calificacion%1==0){console.log("Tu calificación es: "+ calificacion+ " Lo estas haciendo muy bien");}
            else{calificacion= Math.ceil(calificacion)
            console.log("Tu calificación es: "+ calificacion+ " Lo estas haciendo muy bien");}
            break;
        case calificacion === 10: 
            console.log("Eres grande");
            break;
        default: console.log(`Introduce un numero entre 1 - 10 xd`)
            break
    }
}
saberCalificacion();
