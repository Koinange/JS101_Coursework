function leadingSubstrings(string) {
  let leadingSubstringsresult = [];
  for (let idx = 0; idx < string.length; idx++) {
    leadingSubstringsresult.push(string.slice(0,idx + 1));
  }
  return leadingSubstringsresult;
}

function substrings(string) {
  const originalStringLength = string.length;
  let result = [];
  let idx = 1;
  while (idx <= originalStringLength) {
    result = result.concat(leadingSubstrings(string));
    string = string.slice(1);
    idx += 1;
  }
  return result;
}

function palindromes(string) {
  let totalSubstrings = substrings(string).filter(element => element.length > 1);
  return totalSubstrings.filter(element => element === element.split('').reverse().join(''));
}

console.log(palindromes('abcd')); 
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));