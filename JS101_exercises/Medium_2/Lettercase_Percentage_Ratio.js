function letterPercentages(string) {
  let letterPercentageObject = {};
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let neitherCount = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (isALetter(string[idx])) {
      if (string[idx] === string[idx].toUpperCase()) upperCaseCount += 1;
      else if (string[idx] === string[idx].toLowerCase()) lowerCaseCount += 1;
    }
    else neitherCount += 1;
  }
  letterPercentageObject['lowercase'] = String(((lowerCaseCount/string.length) * 100).toFixed(2));
  letterPercentageObject['uppercase'] = String(((upperCaseCount/string.length) * 100).toFixed(2));
  letterPercentageObject['neitherCount'] = String(((neitherCount/string.length) * 100).toFixed(2));
  
  return letterPercentageObject;
}

function isALetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));

