function sequence(number) {
  let array = [];
  let i = number - 1;
  while (i >= 0) {
    array.push(number - i);
    i -= 1;
  }
  return array;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]