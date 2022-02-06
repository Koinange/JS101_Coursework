function triangle(number) {
  for (let i = 1; i <= number; i++) {
    console.log(`${' '.repeat(number - i)}${'*'.repeat(i)}`);
  }
}

triangle(5);
triangle(9);