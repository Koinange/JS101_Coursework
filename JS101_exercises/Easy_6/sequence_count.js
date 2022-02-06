function sequence(sequenceLength, multipier) {
  let sequenceArray = [];
  for (let idx = 0; idx < sequenceLength; idx++) {
    sequenceArray.push(multipier * (idx + 1));
  }
  console.log(sequenceArray);
  return sequenceArray;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []