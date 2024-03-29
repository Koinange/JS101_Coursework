const MESSAGES = require('./calculator_messages.json')
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

let repeatOperation = 'y';

while (repeatOperation === 'y') {
  prompt(MESSAGES['firstNumber']);
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt(MESSAGES['validName']);
    number1 = readline.question();
  }
  
  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt(MESSAGES['validName']);
    number2 = readline.question();
  }
  
   prompt(MESSAGES['whatOperation']);
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  
  
  console.log(`The result is: ${output}`);
  
  prompt(MESSAGES['repeatCalculator']);
  repeatOperation = readline.question();
}
