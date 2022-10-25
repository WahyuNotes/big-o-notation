//BruteForce (Tidak efisien namun efektif)
/*
-Sangat mudah diterapkan
-Tidak berarti buruk
-Langkah awal untuk mengoptimalkan program
-Time complexity O(N^2)
*/

const bruteforce = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log(bruteforce([2, 1, 3, 1]));
