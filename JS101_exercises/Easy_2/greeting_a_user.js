const readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name?\n');

if (name.split('').includes('!')) console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
else console.log(`Hello ${name}.`);


