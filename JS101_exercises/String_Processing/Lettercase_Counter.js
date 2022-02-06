function letterCaseCount(string) {
  let resultObect = {};
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let neitherCount = 0;
  string.split('').forEach(element => {
    if ((element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z')) {
      if (element === element.toUpperCase()) upperCaseCount += 1;
      if (element === element.toLowerCase()) lowerCaseCount += 1;
    }
    else neitherCount += 1;
  });
  resultObect.lowercase = lowerCaseCount;
  resultObect.uppercase = upperCaseCount;
  resultObect.neither = neitherCount;
  console.log(resultObect);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }