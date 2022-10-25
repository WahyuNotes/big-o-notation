//Hilangkan yang tidak dominan
/*
-O(N^2 + N) menjadi O(N^2)
-O(N + log N) menjadi O(N)
-O(N^n + 100N^2) menjadi O(N^n)

urutannya dari kecil ke besar O(1) < O(N) < O(n Log N) < O(N^2) < O(N^n)
*/

const optimize2 = (arr) => {
  arr.sort(); //O(n Log N)

  //loopingannya termasuk ke O(N)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    }
  }

  // digabung semua kan berarti O(N+ n Log N)
  // dan dianggap dominan O(n Log N), maka hasilnya O(n Log N)
  return false;
};
console.log(optimize2([2, 1, 3, 1]));
