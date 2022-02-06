function bubbleSort(array) {
  let swapCount = 0;
   do {
    swapCount = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let oldspot = array[i];
        array[i] = array[i + 1];
        array[i + 1] = oldspot;
        swapCount += 1;
      }
    }
  } while (swapCount > 0);
  console.log(array);
  return array;
}

let array1 = [5, 3];
bubbleSort(array1);

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
