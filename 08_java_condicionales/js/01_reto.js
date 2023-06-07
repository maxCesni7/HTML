
let edadgatito=4; 

function edadGatito(edad){

    let edadfinal;

    if (edad>0 && edad<=2){
         if (edad <1){
            console.log("24 años")
         }
         else{
            console.log("12 años")
         }
    }
    else if (edad==0){
        console.log("Escribe un numero superior a 0")
       }

    else {
        edadfinal = 24 + (edad-2)*4;
        console.log("la edad del gato es: "+ edadfinal);
    }
    
}

edadGatito(edadgatito);