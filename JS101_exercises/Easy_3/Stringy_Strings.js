function stringy(number) {
  let newString = '';
  for (let i = 0; i < number; i++ ) {
    if (i % 2 === 1) {
      newString = newString + 0;
    } else newString = newString + 1;
  }
  return newString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"