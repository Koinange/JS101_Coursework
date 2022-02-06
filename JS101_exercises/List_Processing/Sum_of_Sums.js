function sumOfSums(array) {
  let sumArray = [];
  let totalSum = 0;
  let idxSum = 0;
  array.forEach(element => {
    idxSum += element;
    sumArray.push(idxSum);
  } );
  sumArray.forEach(element => totalSum += element);
  console.log(totalSum);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

