function staggeredCase(string) {
  let resultArray = [];
  string.split('').forEach((element,idx) => {
    if (idx % 2 === 0) resultArray.push(element.toUpperCase());
    else resultArray.push(element.toLowerCase());
  });
  console.log(resultArray.join(''));
  return resultArray.join('');
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"