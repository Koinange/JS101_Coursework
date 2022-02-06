function twice(number) {
  let numberString = String(number);
  if (numberString.length % 2 === 1) return number * 2;
  else {
    let string1 = numberString.slice(0,(numberString.length/2));
    let string2 = numberString.slice((numberString.length/2));
    if (string1 === string2) return number;
    else return number * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676