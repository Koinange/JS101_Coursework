function crunch(string) {
  let stringArray = string.split('');
  let newStringArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== stringArray[i + 1]) {
      newStringArray.push(stringArray[i]);
    }
  }
  return newStringArray.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));  // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""