let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a,b) => {
  a = a.filter(num => num % 2 === 1)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
  b = b.filter(num => num % 2 === 1)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
  return a - b;
});

console.log(arr);