let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = 0;
Object.keys(munsters).forEach(element => {
  if (munsters[element]['gender'] === 'male') totalMaleAge += munsters[element]['age'];
});

console.log(totalMaleAge);