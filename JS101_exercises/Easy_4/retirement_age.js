const readline = require('readline-sync');

console.log('What is your age?');
let currentAge = readline.prompt();

console.log('At what age would you like to retire?');
let retirementAge = readline.prompt();

let today = new Date();
let currentYear = today.getFullYear();

console.log(`It's ${2021}. You will retire in ${currentYear + (retirementAge - currentAge)}.`);
console.log(`You only have ${(retirementAge - currentAge)} years of work to go!`);