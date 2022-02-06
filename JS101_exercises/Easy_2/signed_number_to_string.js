function integerToString(integer) {
  return integer + '';
}

function signedIntegerToString(integer) {
  if (integer > 0) return '+' + integerToString(integer);
  if (integer < 0) return integerToString(integer);
  if (integer === 0) return integerToString(integer);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
