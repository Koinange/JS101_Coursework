function countOccurrences(array) {
  let itemList = findRecurringElements(array);
  for (let idx = 0; idx < itemList.length; idx++) {
    let itemCounter = 0;
    array.forEach(element => {
      if (element === itemList[idx]) itemCounter += 1;
    });
    console.log(`${itemList[idx]} => ${itemCounter}`);
  }
}

function findRecurringElements(array) {
  let newArray =[];
  array.forEach(element => {
    if (newArray.includes(element) === false) {
      newArray.push(element);
    }
  });
  return newArray;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
