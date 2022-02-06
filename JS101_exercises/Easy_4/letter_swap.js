function swap(words) {
  let wordsArray = words.split(' ');
  let result = '';
  
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length === 1) {
      result += wordsArray[i][0] + ' ';
      continue;
    }
    
    if (wordsArray[i].length === 2) {
      result += wordsArray[i][wordsArray[i].length - 1] + wordsArray[i][0] + ' ';
      continue;
    }
    
    result += wordsArray[i][wordsArray[i].length - 1];
    for (let j = 1; j < wordsArray[i].length - 1; j++) {
      result += wordsArray[i][j];
    }
    
    result += wordsArray[i][0] + ' ';
  }
  return result;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"