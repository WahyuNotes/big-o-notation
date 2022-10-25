const remove = (min, max) => {
  const double = [];
  //loopingan ini bisa disebut O(M)
  for (let i = 0; i < min.length; i++) {
    if (min[i] == Math.min(...max)) double.push(min[i]);
  }
  //loopingan ini bisa disebut O(N)
  for (let j = 0; j < min.length; j++) {
    if (max[j] == Math.max(...min)) double.push(min[j]);
  }
  /*
  O(M+N) gak bisa dijadiin O(2N) apalagi O(N)
  hal ini dikarenakan ada dua parameter dan berbeda panjang arraynya
  */
  return double;
};
console.log(remove([10, 5, 1, 12, 15], [1, 5, 7, 2])); //[1]
