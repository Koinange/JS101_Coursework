function repeater(string) {
  let resultStringArray = [];
  string.split('').forEach(element => resultStringArray.push(element, element));
  return resultStringArray.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""