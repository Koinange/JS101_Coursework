function buyFruit(twoDimensionalArray) {
  let result = [];
  twoDimensionalArray.forEach(element => {
    for (let idx = 0; idx < element[1]; idx++) {
      result.push(element[0]);
    }
  });
  console.log(result);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);