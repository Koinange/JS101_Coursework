function test(object) {
  console.log(object);
  let lastNumber = object.pop();
  return object;
}

let array = [1, 2, 3];

console.log(test(array));
console.log(array);