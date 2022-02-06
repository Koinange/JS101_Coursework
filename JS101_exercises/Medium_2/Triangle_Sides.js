function triangle(side1, side2, side3) {
  let sortedSideLengthArray = [side1, side2, side3].sort((a,b) => a - b);
  if (sortedSideLengthArray.includes(0)) return 'invalid';
  if (sortedSideLengthArray[0] + sortedSideLengthArray[1] < sortedSideLengthArray[2]) return 'invalid';
  if (sortedSideLengthArray.every(num => num === sortedSideLengthArray[0])) return 'equilateral';
  for (let i = 0; i < sortedSideLengthArray.length; i++) {
    let equalSideCount = 0;
    for (let j = 0; j < sortedSideLengthArray.length; j++) {
      if (sortedSideLengthArray[i] === sortedSideLengthArray[j]) equalSideCount += 1;
    }
    if (equalSideCount === 2) return 'isosceles';
  }
  return 'scalene';
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
