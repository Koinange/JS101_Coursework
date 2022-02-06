function integerToString(integer) {
  return integer + '';
}

console.log(typeof integerToString(4321));        // "4321"
console.log(typeof integerToString(0));           // "0"
console.log(typeof integerToString(5000));        // "5000"
console.log(typeof integerToString(1234567890));  // "1234567890"
