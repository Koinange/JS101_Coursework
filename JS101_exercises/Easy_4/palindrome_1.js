function isPalindrome(word) {
  let i = 0;
  while (i < word.length) {
    if(word[i] !== word[word.length - i - 1]) i = word.length + 1;
    else i++;
  }
 if (i === word.length) return true;
 else return false;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true