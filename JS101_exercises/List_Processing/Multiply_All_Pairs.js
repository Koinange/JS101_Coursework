function multiplyAllPairs(array1, array2) {
  let result = [];
  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });
  console.log(result.sort((a,b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);

