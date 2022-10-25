//2nd Optimize (Negosiasi & kebutuhan)
/*
-Bertanya kebutuhan dan keterbatasan
-Menggunakan Sorting
-Time complexity O(n Log N)
*/
const optimize2 = (arr) => {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(optimize2([2, 1, 3, 1]));

/*
QnA :
Q: Mau tanya bang untuk 2nd optimization. Bukankah pada fungsi sort di dalamnya ada perulangan sendiri? Sehingga kompleksitasnya tidak berkurang.
A: Iya di ulang, tapi di luar perulangan for. Jadi O log N atau n log N
*/
