//Variable berdasarkan input
/*
- O(A*B) atau O(AB)
-A adalah input array a
-B adalah input array b
*/

const bruteforce = (arr, irr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == irr[j]) {
        return true;
      }
    }
  }
  //   jadi gak bisa dibikin O(N^2) dikarenakan 2 paramerter yang berbeda kompleksitasnya
  return false;
};
console.log(bruteforce([2, 1, 3, 1], [4, 2, 3, 1]));
