function messWithVars(one, two, three) {
  one = two;
  console.log(one);
  two = three;
  console.log(two);
  three = one;
  console.log(three);
}


let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(one);
console.log(two);
console.log(three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);