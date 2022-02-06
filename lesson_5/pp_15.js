let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArray = arr.filter(obj => {
  let truthCount = 0;
  Object.keys(obj).forEach(key => {
    if (obj[key].every(num => num % 2 === 0)) truthCount += 1;
  });
  if (truthCount === Object.keys(obj).length) return obj;
});

console.log(arr);
console.log(newArray);