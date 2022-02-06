let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArray = Object.values(ages);
let minimumAge = agesArray[0];

agesArray.forEach(elem => {
  if (elem <= minimumAge) minimumAge = elem;
});

console.log(minimumAge);