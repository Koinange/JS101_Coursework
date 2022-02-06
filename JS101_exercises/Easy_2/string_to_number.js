function stringToInteger(string) {
  if (string === '0') return 0;
  else return string * 1;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true