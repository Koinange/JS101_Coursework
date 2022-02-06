function diamond(oddNumber) {
  for (let i = 0; i < Math.ceil(oddNumber/2); i++) {
    console.log(' '.repeat(Math.floor(oddNumber/2) - i) + '*'.repeat(2*i + 1) + ' '.repeat(Math.floor(oddNumber/2) - i));
  }
  
  for (let i = 0; i < Math.floor(oddNumber/2); i++) {
    console.log(' '.repeat(i + 1) + '*'.repeat((oddNumber -2) - 2*i) + ' '.repeat(i + 1));
  }
}

diamond(9);
diamond(7);
diamond(5);
diamond(3);
diamond(1);