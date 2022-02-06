function joinOr(array, separator = ', ', word = 'or') {
  if (array.length === 0) return '';
  if (array.length === 1) return `${array[0]}`;
  if (array.length === 2) {
    array.splice(array.length - 1, 1, `${word} ${array[array.length - 1]}`);
    return array.join(' ');
  }
  array.splice(array.length - 1, 1, `${word} ${array[array.length - 1]}`);
  return array.join(`${separator}`);
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"