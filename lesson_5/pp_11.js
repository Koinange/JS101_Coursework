let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);

deepCopiedArr.map(obj => {
  return Object.keys(obj).forEach(key => {
    obj[key] += 1;
  });
});

console.log(deepCopiedArr);
console.log(arr);