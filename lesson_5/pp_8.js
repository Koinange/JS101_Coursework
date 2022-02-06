let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

Object.keys(obj).forEach(element => {
  obj[element].forEach(innerElement => {
    innerElement.toLowerCase();
    innerElement.split('').forEach(innermostElement => {
      if (vowels.includes(innermostElement)) {
            console.log(innermostElement);
          }
    });
  });
})