function stringToSignedInteger(string) {
  if (string === '0') return 0;
  else return string * 1;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true