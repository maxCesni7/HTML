const calculadora = require('../calculadora.js')

test('Suma 2 numero y regresa un valor resultante', ()=>{
    expect(calculadora.suma(10,12)).toBe(22);
});
//Toma el archivo a analizar y seguido del punto se coloca la funcion  y el tobe es para gla respuesta esperada.

test('Calcula potencia de un numero A elevado a B', ()=>{
    expect(calculadora.power(2,3)).toBe(8);
});

// npm test/yarn test para ejecutar en la consola