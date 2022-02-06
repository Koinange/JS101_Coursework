const numberWords = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9};

function wordToDigit(string) {
  return string.split(' ').map(element => {
    if (numberWords.hasOwnProperty(element.substring(0,element.length-1))) {
      return String(numberWords[element.substring(0,element.length-1)]) + element[element.length - 1];
    }
    if (numberWords.hasOwnProperty(element)) {
      console.log(numberWords[element]);
      return numberWords[element];
    }
    else return element;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));