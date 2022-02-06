let spellingBlocks = [['b', 'o'], ['x', 'k'], ['d', 'q'], 
['c', 'p'], ['n', 'a'], ['g', 't'], ['r', 'e'], ['f', 's'], 
['j', 'w'], ['h', 'u'], ['v', 'i'], ['l', 'y'], ['z', 'm']
];


function isBlockWord(string) {
  let spellingBlocksCopy = spellingBlocks.slice(0);
  string = string.toLowerCase().split('');
  for (let idx = 0; idx < string.length; idx++) {
    let idx2 = 0;
    while (spellingBlocksCopy[idx2].includes(string[idx]) === false) {
      idx2 += 1;
      if (idx2 >= spellingBlocksCopy.length) return false;
    }
    spellingBlocksCopy.splice(spellingBlocksCopy.indexOf(spellingBlocksCopy[idx2]), 1);
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

