function multiplicativeAverage(array) {
  let product = 1;
  array.forEach(element => product *= element);
  let result = (product/(array.length)).toFixed(3);
  return result;
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"