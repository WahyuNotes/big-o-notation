const amortized = (arr) => {
  //awalnya kapasitas cuma satu, soalnya cuma array kosong []
  arr.push(1); //kapasitas cuma 1; resize 0; Cost O(1);
  arr.push(2); //kapasitas jadi 2; resize 1; Cost O(2N);
  arr.push(3); //kapasitas jadi 4; resize 2; Cost O(2N);
  arr.push(4); //kapasitas tetap 4; resize 0; Cost O(1);
  arr.push(5); //kapasitas jadi 8; resize 4; Cost O(2N);
  arr.push(6); //kapasitas tetap 8; resize 0; Cost O(1);
  arr.push(7); //kapasitas tetap 8; resize 0; Cost O(1);
  arr.push(8); //kapasitas tetap 8; resize 0; Cost O(1);
  arr.push(9); //kapasitas jadi 16; resize 8; Cost O(2N);
  arr.push(10); //kapasitas jadi 16; resize 0; Cost O(1);
  //penambahan ruang sesuai dengan kelipatan angka/bilangan binary
  return arr;
};
console.log(amortized([]));

//Maka (Worst Cost/ Complexity terbesar)nya adalah O(2N) dan yang (terendah/Amortized)nya adalah O(1)

/*
Formula (Amortized = Cost Tertinggi/Total Operasi)
Nb: Cost Tertinggi adalah O(N) dan total operasinya adalah N
Maka:
Amortized = Cost Tertinggi/Total Operasi;
Amortized = O(N)/N;
Amortized = O(1);
*/

/*
Accounting Method (contohnya kayak di bank)
Catatan: Setiap masukin duit atau melakukan perubahan kapasitas, maka dikenakan biaya

Misal pakek contoh yang diatas, Setiap masukin duit itu O($3), maka Amortizednya tetap O(1) karena konstan
*/

/*
Potential Method
sama seperti Accounting method, cuma yang dipakai itu potensialnya.

Aturan: Potential >=0
Rumus nya: phi(h) = 2N-size
(Potential phi dari state(h) dan 2N itu didapat dari worst cost)

Maka, phi(h) = 2(N)-size => phi(h) =2(2) - 4 = 4 - 4 = 0

misal sudah terisi 3, phi(h) = 2(N)-size => phi(h) =2(3) - 4 = 4 - 6 = 2

selanjutnya, phi(h) = 2(8) - 16 = 16-16=0.


Untuk menghitung Amortized Formula itu rumusnya:
Ci + phi(h(i)) - phi(h (i-1))
=> Ci + (2i - size) - (2(i-1) - size)

nb:
phi(h(i)) = potential saat ini
phi(h(-1)) = potential saat sebelumnya
*/

//O(1) Case
/*
Ci + phi(h(i)) - phi(h (i-1))
1 + (2i - size) - (2(i-1) - size)
1 + (2i - size) - (2i - 2 - size)
1 + 2i - size + size + 2 - 2i
1 + 2i + 2 - 2i
1+2
3 => Amortized = O(3) => Amortized = O(1)
*/

//O(N) Case
/*
*Ci merupakan complexity dari operasi

Ci + phi(h(i)) - phi(h (i-1))
(i + 1) + (2i - size) - (2(i-1) - size)
(i + 1) + (2i - size) - (2i - 2 - size)
(i + 1) + 2i - size + size + 2 - 2i
i + 1 + 2i + 2 - 2i
(1+2-2-2+1)i + (1 + 2)
(0)i + (3)
3
3 => Amortized = O(3) => Amortized = O(1)
*/
