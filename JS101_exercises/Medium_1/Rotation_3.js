function rotateRightmostDigits(number, rotationNumber) {
  let stringNumber = String(number);
  let unrotatedDigitsArray = stringNumber.slice(0, stringNumber.length - rotationNumber).split('');
  let rotatedDigitsArray = stringNumber.slice(stringNumber.length - rotationNumber).split('');
  rotatedDigitsArray.push(rotatedDigitsArray.shift());
  return Number(unrotatedDigitsArray.concat(rotatedDigitsArray).join(''));
}

function maxRotation(number) {
  const originalRotationNumber = String(number).length;
  let newRotationNumber = originalRotationNumber;
  let resultNumber;
  while (newRotationNumber > 0) {
    resultNumber = rotateRightmostDigits(number, newRotationNumber);
    newRotationNumber -= 1;
    number = String(resultNumber).slice(0, originalRotationNumber - newRotationNumber) + String(resultNumber).slice(originalRotationNumber - newRotationNumber);
  }
  console.log(resultNumber);
  return resultNumber;
  
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845