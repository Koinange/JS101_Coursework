function sumSquareDifference(number) {
  let sumTotal = 0;
  let squareSumTotal = 0;
  for (let i = 1; i <= number; i++ ) {
    sumTotal += i;
    squareSumTotal += i**2;
  }
  console.log((sumTotal ** 2) - squareSumTotal);
  return (sumTotal ** 2) - squareSumTotal;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150