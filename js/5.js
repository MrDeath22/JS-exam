function getPrime(arr) {
   let arr2 = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
         arr2.push(arr[i]);
      }
   }
   console.log(arr2);
}
getPrime([1, 4, 5, 7, 12]);