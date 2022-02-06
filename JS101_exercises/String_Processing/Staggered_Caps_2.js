function staggeredCase(string) {
  let stringArray = string.split('');
  let onlytLettersArray = string.split('').filter((element) => {
    if ((element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z')) return element;
  });
  let staggeredCaseArray = onlytLettersArray.map((element,idx) => {
    if (idx % 2 === 0) return element.toUpperCase();
    else return element.toLowerCase();
  });
  
  for (let idx = 0; idx < stringArray.length; idx++) {
    if ((stringArray[idx] >= 'a' && stringArray[idx] <= 'z') || (stringArray[idx] >= 'A' && stringArray[idx] <= 'Z')) {
      stringArray[idx] = staggeredCaseArray[0];
      staggeredCaseArray.shift();
    }
  }
  return stringArray.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);