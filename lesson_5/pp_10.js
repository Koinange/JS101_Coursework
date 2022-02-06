let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArray = arr.map(innerArray => {
  if (innerArray.every(element => typeof element === 'number')) {
    return innerArray.slice().sort((a,b) => b - a);
  }
  else return innerArray.slice().sort((a,b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
});

console.log(newArray);
console.log(arr);
