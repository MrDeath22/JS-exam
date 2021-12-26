let elForm = document.querySelector('.form');
let elInp = document.querySelector('.input');
let elBtn = document.querySelector('.btn');
let div = document.querySelector('.div');

elBtn.addEventListener('click', e => {
   let span = document.createElement('span');
   span.className = 'span';
   span.append(document.createTextNode(elInp.value));
   div.appendChild(span);

   let count = elInp.value;

   setInterval(() => {
      setTimeout(() => {
         span.textContent = count;
         count--;
         if (count == -1) {
            span.style.display = 'none';
         }
      })
   }, 1000)

   elInp.value = '';
})