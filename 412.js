/*Diberikan integer n, kembalikan jawaban array string, dimana:
- Jawaban == "FizzBuzz" jika i habis dibagi 3 dan 5
- Jawaban == "Buzz" jika i habis dibagi 5
- Jawaban == "Fizz" jika i habis dibagi 3
- Jawaban == i jika tidak ada kondisi di atas yang benar
*/

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      return "FizzBuzz"; //O(1)
    } else if (i % 3 == 0) {
      return "Fizz"; //O(1)
    } else if (i % 5 == 0) {
      return "Buzz"; //O(1)
    } else {
      return i; //O(1)
    }
  }
};

//Hasilnya tetap O(1)
console.log(fizzBuzz(15));
