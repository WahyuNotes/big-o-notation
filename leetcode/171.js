/*
Diberikan judul kolom string yang mewakili judul kolom seperti yang muncul di halaman excel, kembalikan nomor kolom yang sesuai

Contoh:
A -> 1
B -> 2
...
Z -> 26
AA -> 27
AB -> 28
*/

const titleToNumber = (string) => {
  string.split(""); //O(1)
  let container = 0;
  if (string.length > 1) {
    const result = string.charCodeAt(string.length - 1) - 64; //O(1)
    container += result;
    const pisah = 26 * (string.length - 1); //O(1)
    return result + pisah;
    // return container;
  }
  //Hasilnya tetap O(1)
  return string.charCodeAt(0) - 64;
};
console.log(titleToNumber("AA"));
console.log(titleToNumber("AB"));
