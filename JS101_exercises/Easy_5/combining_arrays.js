function union(array1, array2) {
  let combinedarray = array1.concat(array2);
  let unionArray = [];
  combinedarray.forEach((element) => {
    if (unionArray.includes(element) === false) {
      unionArray.push(element);
    }
  } );
  return unionArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));