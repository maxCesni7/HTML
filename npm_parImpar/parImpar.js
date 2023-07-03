//Modulo de exportacion
//module.exports -> Es una propiedad especial de NodeJs que se utiliza para exportar valores (funciones, variables) o modulos para que puedan ser utilizados en otros archivos o modulos de nondeJS

module.exports = function (numero){
    (numero%2==0) ?  console.log( `El numero ${numero} es par`) : console.log( `El numero ${numero} no es par`)
}



