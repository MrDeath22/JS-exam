function add(n1 = 0, n2 = 0) {
   if (n2 < 0) {
      console.log(`${n1}${n2}=${n1 + n2}`);
   } else {
      console.log(`${n1}+${n2}=${n1 + n2}`);
   }
   
}
add(-1, 10);