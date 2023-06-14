const emailInput = document.getElementById('email');
const submitBTN = document.getElementById('btn_submit');
const emailRGEX = /^[\w.+\-]+@gmail\.com$/;

submitBTN.disabled=true; 

emailInput.addEventListener('input', (e)=>{
    console.log(e);
    const text = e.target.value; 
    console.log(emailRGEX.test(text));

   if(emailRGEX.test(text)==true){
    submitBTN.disabled=false;
   }
})


//Segunda forma en forma de flecha. 
// emailInput.addEventListener('input', (e) => {
//     submitBTN.disabled = (emailRGEX.test(e.target.value)) ? false : true;
// });