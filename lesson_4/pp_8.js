function arrayPositionsObject(array) {
  let result = {};
  for (let idx = 0; idx < array.length; idx++) {
    result[array[idx]] = idx;
  }
  return result;
}

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

console.log(arrayPositionsObject(flintstones));