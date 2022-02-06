function isColorValid(color) {
    return color === "blue" || color === "green";
  }
  
const isColorValid2 = color => ["blue", "green"].includes(color);

console.log(isColorValid('red'));
console.log(isColorValid('green'));

console.log(isColorValid2('red'));
console.log(isColorValid2('green'));