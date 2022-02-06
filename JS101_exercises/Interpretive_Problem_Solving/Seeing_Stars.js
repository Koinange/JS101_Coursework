function star(oddNumber) {
  let numberOfStarsPerRow = 3;
  for (let i = 0; i < Math.floor(oddNumber/2); i++) {
    console.log(' '.repeat(i) + '*' + ' '.repeat((oddNumber - 2*i - numberOfStarsPerRow)/2) + '*' + ' '.repeat((oddNumber - 2*i - numberOfStarsPerRow)/2) + '*' + ' '.repeat(i));
  }
  console.log('*'.repeat(oddNumber));
  for (let i = 0; i < Math.floor(oddNumber/2); i++) {
    console.log(' '.repeat(Math.floor(oddNumber/2) - i - 1) + '*' + ' '.repeat(i) + '*' + ' '.repeat(i) + '*' + ' '.repeat(Math.floor(oddNumber/2) - i - 1));
  }
}



star(7);
star(9);
