function logInBox(text) {
  let boxLength = text.length + 2;
  let boxTop= '+';
  let boxUpperMiddle = '|';
  
  for (let i = 0; i < boxLength; i++) {
    boxTop = boxTop + '-';
    boxUpperMiddle = boxUpperMiddle + ' ';
  }
  
  boxTop = boxTop+ '+';
  boxUpperMiddle = boxUpperMiddle + '|';
  
  console.log(boxTop);
  console.log(boxUpperMiddle);
  console.log(`| ${text} |`);
  console.log(boxUpperMiddle);
  console.log(boxTop);
}

logInBox('Through the fire and flames');
logInBox('');