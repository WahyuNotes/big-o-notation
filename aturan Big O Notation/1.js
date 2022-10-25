//Hilangkan konstanta
/*
misal:
-O(2N) adalah O(N)
-O(3N) adalah O(N)
-O(...N) adalah O(N)
*/

const pair = (cuy) => {
  let container = [];
  //1 kali looping itu O(N)
  for (let i = 0; i < cuy.length; i++) {
    if (cuy[i] == Math.max(...cuy)) {
      container.push(cuy[i]);
    }
  }
  //1 kali looping itu O(N)
  for (let j = 0; j < cuy.length; j++) {
    if (cuy[j] == Math.min(...cuy)) {
      container.push(cuy[j]);
    }
  }
  /*
  total ada 2 kali looping berarti bukannya O(2N)?
  iya, tapi tetep aja dianggepnya O(N). Karena harus menghilangkan konstanta
  */
  return container;
};

console.log(pair([1, 6, 4, 2, 9])); //[ 9, 1 ]
