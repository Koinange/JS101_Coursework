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
console.log(result);
}

substrings('abcde');
