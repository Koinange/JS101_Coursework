const readlineSync = require('readline-sync');
let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let tipPercentage = parseFloat(readlineSync.question("What is the tip percentae\n"));
let tip = bill * (tipPercentage/100);
console.log(typeof tip);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(bill + tip).toFixed(2)}`);


 