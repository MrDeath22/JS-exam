let body = document.querySelector('#body');
let cont = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');

let colors = ['#3A91DA', '#36DB66', '#E88F0F', '#D43134', '#8C40AF'];

body.addEventListener('click', clickMe);

function clickMe(e) {
   if (e.shiftKey) {
      cont.style.display = 'flex';
   }
   cont.addEventListener('click', e => {
      for (let i = 1; i <= boxes.length; i++) {
         if (e.target.id == i) {
            e.target.parentElement.parentElement.style.background = colors[i-1];
         }
      }
   })
   body.addEventListener('click', e => {
      if (e.shiftKey) {
         cont.style.display = 'none';
      }
   })
}

