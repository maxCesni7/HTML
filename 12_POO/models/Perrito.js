//Crear una nueva clase llamada perridto que herede propiedades y metodos de mascota, con la palabra reservada extends

class Perrito extends Mascota{
    //Definir los atributos de la clase hija. 
    id = "";
    raza = "";

    constructor(id, raza, nombre, edad, especie){
        super(nombre, edad, especie);
        this.id = id; 
        this.raza = raza; 
    }

    propiedades(){
        console.log("Mi perrito numero "+ this.id);
        console.log("Nombre: "+ this.nombre);
        console.log("Edad: " +this.edad);
    }

    sonido(){
        console.log("WoUufff")
    }
}

let coraje = new Perrito(1, "Mestizo", "Coraje", 8, "Canis");
let cerberus = new Perrito(0, "Pitbull", "Cerberus", 12, "Cannis");

coraje.propiedades();
cerberus.propiedades();

cerberus.sonido();
coraje.love(); 
