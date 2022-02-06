function fibonacci(number) {
  if (number <= 2) return 1;
  let fibonacciArray = [1, 1];
  while (fibonacciArray.length < number) {
    fibonacciArray.push(fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]);
  }
  console.log(fibonacciArray[fibonacciArray.length - 1]);
  return fibonacciArray[fibonacciArray.length - 1];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050