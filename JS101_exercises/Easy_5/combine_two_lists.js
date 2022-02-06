function interleave(array1,array2) {
  let newArray = [];
  for (let idx = 0; idx < array1.length; idx++) {
    newArray.push(array1[idx], array2[idx]);
  }
  return newArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));