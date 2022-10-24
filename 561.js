/*Diketahui jumlah array integer dari 2n integers, 
kelompokkan integers ini menjadi n dengan pasangan (A1, B1), 
(A1, B1), ..., (An, Bn) sedemikian rupa sehingga jumlah dari 
min (Ai, Bi) untuk semua i dimaksimalkan. Kembalikan jumlah 
yang dimaksimalkan*/

const optimize2 = (arr) => {
  arr.sort(); // merupakan O(n log N)
  let container = 0;
  // merupakan O(N/2). Mengapa N/2? karena lompatannya setiap 2kali
  for (let i = 0; i < arr.length; i += 2) {
    container += arr[i];
  }
  //   yang dominan apa? O(n log N)
  return container;
};
console.log(optimize2([2, 1, 3, 1]));
