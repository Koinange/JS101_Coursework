let statement = "The Flintstones Rock";

let statementArray = statement.split('');

let letterOccurence = {};

statementArray.forEach(element => {
  if (letterOccurence.hasOwnProperty(element) === false) {
    letterOccurence[element] = 1;
  } else letterOccurence[element] += 1;
});

console.log(letterOccurence);


