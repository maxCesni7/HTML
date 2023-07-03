class Serpiente extends Mascota{
    comportamiento = ""; 

    constructor(comportamiento, nombre, edad, especie){
        super(nombre, edad, especie);
        this.Ccomportamiento = comportamiento; 
    }

    saludos(){
        console.log("Hola soy una serpiente llamada "+this.nombre); ; 
    }
}

let Serp = new Serpiente("Cazador", "Serp", 12, "Cobra");

Serp.saludos(); 
Serp.love(); 