let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newArray = [];

Object.keys(obj).map(key => {
  if (obj[key].type === 'vegetable') newArray.push(obj[key].size.toUpperCase());
  else if (obj[key].type === 'fruit') {
    newArray.push(obj[key].colors.map(element => element[0].toUpperCase() + element.slice(1)));
  }
});

console.log(newArray);