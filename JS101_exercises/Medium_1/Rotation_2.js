function rotateRightmostDigits(number, rotationNumber) {
  let stringNumber = String(number);
  let unrotatedDigitsArray = stringNumber.slice(0, stringNumber.length - rotationNumber).split('');
  let rotatedDigitsArray = stringNumber.slice(stringNumber.length - rotationNumber).split('');
  rotatedDigitsArray.push(rotatedDigitsArray.shift());
  return Number(unrotatedDigitsArray.concat(rotatedDigitsArray).join(''));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917