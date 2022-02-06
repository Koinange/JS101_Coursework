function featured(number) {
  if (number >= 9876543201) return "There is no possible number that fulfills those requirements.";
  
  let featuredNumber = number + (7 - (number % 7));
  
  while (isDigitRepeating(featuredNumber) || featuredNumber % 2 === 0) {
    featuredNumber += 7;
  }
  console.log(featuredNumber);
  return featuredNumber;
}

function isDigitRepeating(number) {
  let stringNumber = String(number);
  let numbersIncludedArray = [];
  for (let i = 0; i < stringNumber.length; i++) {
    if (numbersIncludedArray.includes(stringNumber[i]) === false) numbersIncludedArray.push(stringNumber[i]);
    else return true;
  }
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."


