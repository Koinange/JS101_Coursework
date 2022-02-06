function findFibonacciIndexByLength(targetNumberLength) {
  let fibonacciIndex = [1n , 1n];
  let numberLength = 1n;
  
  while (numberLength < targetNumberLength) {
    fibonacciIndex.push(fibonacciIndex[fibonacciIndex.length - 1] + fibonacciIndex[fibonacciIndex.length - 2]);
    numberLength = String(fibonacciIndex[fibonacciIndex.length - 1]).length;
  }
  return fibonacciIndex.length;
}

console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));
