function digitList(number) {
  let numberStringArray = String(number).split('');
  return numberStringArray.map(element => Number(element));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));