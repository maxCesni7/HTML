
class Mascota {
    
    nombre = ""; 
    edad = 0; 
    especie = "";

    constructor(nombre, edad, especie){
        this.nombre = nombre; 
        this.edad= edad; 
        this.especie = especie
    }

    //Metodos
    love(){
        console.log(`${this.nombre} te quiero mucho!!!`)
    }

}

