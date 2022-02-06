let arr = [['b', 'c', 'a'], [2, 11, -3],['blue', 'black', 'green']];

let newArray = arr.map(innerArray => {
  if (innerArray.every(element => typeof element === 'number')) {
    return innerArray.slice().sort((a,b) => a - b);
  }
  else return innerArray.slice().sort();
});

console.log(newArray);
console.log(arr);

