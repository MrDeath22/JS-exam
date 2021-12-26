let defLog = '123';
let defPass = '12345678';

let log = 'fo';
let pass = '1234567';
let count = 0;

if (log.length >= defLog.length || pass.length >= defPass.length) {
   if (pass.length >= defPass.length) {
      console.log('Muvaffaqiyatli royxatdan otdingiz');
   } else {
      console.log('Parol kamida 8 ta elementdan kotta bolishi kerak');
   }
} else {
   console.log('Login 3ta elementdan kam bolmasligi kerak \nParol kamida 8 ta elementdan kotta bolishi kerak');
}



