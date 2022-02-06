let numbers = [1, 2, 3, 4, 5];

let numbers2 = numbers.slice(0).reverse();

console.log(numbers);
console.log(numbers2);

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sortedArray); // [5, 4, 3, 2, 1]


let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
