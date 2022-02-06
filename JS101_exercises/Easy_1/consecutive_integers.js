const readlineSync = require('readline-sync');

let sum = 0;
let product = 1;

let integer = parseFloat(readlineSync.question('Please enter an integer greater than 0: '));

if (integer <= 0 || Number.isInteger(integer) === false) {
  console.log('invalid input: not an integer above 0');
}
else {
  let command = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  if (command === 's') {
    for (let i = 1; i <= integer; i++) {
      sum += i;
    }
    console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
  }
  if (command === 'p') {
    for (let i = 1; i <= integer; i++) {
      product *= i;
    }
    console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
  }
  else console.log('invalid input: input was not "s" or "p"');
}
