function swapCase(string) {
  return string.split('').map(element => {
    if ((element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z')) {
      if (element === element.toUpperCase()) element = element.toLowerCase();
      else element = element.toUpperCase();
    }
    return element;
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"