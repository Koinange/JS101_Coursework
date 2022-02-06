const readline = require('readline-sync');
let numberArray = [];

console.log('Enter the first number:');
let firstNumber = readline.question();
numberArray.push(firstNumber);

console.log('Enter the second number:');
let secondNumber = readline.question();
numberArray.push(secondNumber);

console.log('Enter the third number:');
let thirdNumber = readline.question();
numberArray.push(thirdNumber);

console.log('Enter the fourth number:');
let fourthNumber = readline.question();
numberArray.push(fourthNumber);

console.log('Enter the fifth number:');
let fifthNumber = readline.question();
numberArray.push(fifthNumber);

console.log('Enter the last number:');
let lastNumber = readline.question();

if (numberArray.includes(lastNumber)) console.log(`The number ${lastNumber} appears in ${numberArray}`);
else console.log(`The number ${lastNumber} does not appear in ${numberArray}`);