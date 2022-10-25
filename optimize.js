// Optimize (Pertukaran time & space complexity)
/*
-Extra space bisa dapat mempercepat runtime
-Menggunakan Hash table
- Time complexity O(N)
-Space complexity O(N)
*/

const optimize = (arr) => {
  const duplicate = [...arr]; //pilihan 1
  //   const duplicate = Array.from(arr); //pilihan 2
  //   const duplicate = JSON.parse(JSON.stringify(arr)); //pilihan 1
  for (let i = 0; i < duplicate.length; i++) {
    if (arr.includes(duplicate[i])) {
      return true;
    }
  }
  return false;
};
console.log(optimize([2, 1, 3, 1]));
