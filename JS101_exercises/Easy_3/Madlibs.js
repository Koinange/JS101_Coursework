const readline = require('readline-sync');
console.log('Enter a noun:');
let noun = readline.question();
console.log('Enter a verb:');
let verb = readline.question();
console.log('Enter an adjective:');
let adjective = readline.question();
console.log('Enter an adverb:');
let adverb = readline.question();

console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);