const readline = require('readline-sync');
console.log('Enter the length of the room in meters:');
let length = readline.question();
console.log(typeof length);

console.log('Enter the width of the room in meters:');
let width = readline.question();
console.log(typeof width);

let areaInMeters = length * width;
console.log(typeof areaInMeters);
let areaInFeet = areaInMeters * 10.7639;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);