function reverseWords(string) {
  let stringArray = string.split(' ');
  for (let idx = 0; idx < stringArray.length; idx++) {
    if (stringArray[idx].length > 4) {
      stringArray[idx] = stringArray[idx].split('').reverse().join('');
    }
  }
  return stringArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"