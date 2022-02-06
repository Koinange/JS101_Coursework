function sum(number) {
  let sum = 0;
  let numberArray = String(number).split('').map(element => Number(element));
  numberArray.forEach(element => sum += element);
  console.log(sum);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45