const today = new Date();

let año = today.getFullYear();
let edad =1998; 

function edadSaber(edadF){

    let edadPersona;
    edadPersona = año-edadF;

    if (edadPersona >= 18){
        console.log(`Eres mayor de Edad.`)
        if(edadPersona <65){
            console.log(`Eres un adulto joven`)
        }
        else{
            console.log(`Eres un adulto mayor`)
        }
        console.log("Edad: " + edadPersona)

    }
    else{
        if(edadPersona<=0){console.log(`Tienes que ingresar una edad con un valor positivo`)}
        else{
            console.log(`Eres menor de edad.`)
        }
        console.log("Edad: " + edadPersona)
    }

}

 edadSaber(edad);


 const edadSaber2 = (edadF) => {

    let edadPersona;
    edadPersona = año-edadF;

    if (edadPersona >= 18){
        console.log(`Eres mayor de Edad.`)
        if(edadPersona <65){
            console.log(`Eres un adulto joven`)
        }
        else{
            console.log(`Eres un adulto mayor`)
        }
        console.log("Edad: " + edadPersona)

    }
    else{
        if(edadPersona<=0){console.log(`Tienes que ingresar una edad con un valor positivo`)}
        else{
            console.log(`Eres menor de edad.`)
        }
        console.log("Edad: " + edadPersona)
    }

 };

 edadSaber2(edad);
