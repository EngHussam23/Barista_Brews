'use strict'






let inputName=document.getElementsByClassName('name');
  
  let inputemail=document.getElementsByClassName('email');
  
  let feedback=document.getElementsByClassName('feedback');
 



function final(e){
  e.preventDefault();
if(inputName.textContent ==='null' && inputemail.textContent ==='null' && feedback.textContent ==='null' ) {
  alert('fill the blank')
}
else {
alert('thank you' )
 }
};


let submitform=document.getElementsByClassName('input');
submitform.addEventListener('submit',final(e));

