function halvsies(array) {
  if (array.length % 2 === 0) {
    let array1 = array.slice(0,(array.length/2));
    let array2 = array.slice(array.length/2);
    return [array1, array2];
  }
  else {
    let array1 = array.slice(0,(array.length/2) + 1);
    let array2 = array.slice((array.length/2) + 1);
    return [array1, array2];
  }
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]