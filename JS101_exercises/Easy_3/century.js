function century(year) {
  let century = year/100;
  if (century !== Math.floor(century)) {
    century = Math.floor(century) + 1;
  }
  let stringCentury = String(century);
  if ((stringCentury[stringCentury.length - 1] === '1' || stringCentury[stringCentury.length - 1] === '2' || stringCentury[stringCentury.length - 1] === '3') && stringCentury[stringCentury.length - 2] === '1') {
    return `${stringCentury}th`;
  }
  if (stringCentury[stringCentury.length - 1] === '1' ) {
    return `${stringCentury}st`;
  }
  if (stringCentury[stringCentury.length - 1] === '2') {
    return `${stringCentury}nd`;
  }
   if (stringCentury[stringCentury.length - 1] === '3') {
    return `${stringCentury}rd`;
  } else return `${stringCentury}th`;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"