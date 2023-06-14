// async function f(){
// // return'hola';

// //simulacion de una petición asyncrona
// // let promise = new Promise((resolve, reject)=>{
// //     setTimeout(()=> resolve('Exito'), 3000);}

// //     const result = await promise;
    
// //     console.log(result);
// let res = await setTimeout(()=>{
//     alert('hola')
// }, 3000);

//     alert(res);

// }

// Simulacion de una peticion asincrona

// async function f() {
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => res('done'), 3000)
//     })
    
//     let result = await promise;
    
//     alert(result);
// }

// f();

// f().then(alert);


const btn = document.getElementById('btn-count');
const p = document.getElementById('contador');
const btn2 = document.getElementById('btn-count2');

p.textContent =0;

let counter = 0; 

btn.addEventListener('click', async () =>{
    // await setTimeout(() => {
        counter++;
        p.textContent = counter;
    // }, 1000);
})

btn2.addEventListener('click', async () =>{
    // await setTimeout(() => {
        counter--;
        p.textContent = counter;
    // }, 1000);
})