function swapName(fullName) {
  let fullNameArray = fullName.split(' ');
  console.log(fullNameArray[1] + ', ' + fullNameArray[0]);
}

swapName('Joe Roberts');    // "Roberts, Joe"