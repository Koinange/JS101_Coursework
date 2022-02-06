function leadingSubstrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx++) {
    result.push(string.slice(0,idx + 1));
  }
  console.log(result);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
