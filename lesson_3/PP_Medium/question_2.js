let munstersDescription = "The Munsters are creepy and spooky.";

let caseSwitchString = '';

for (let idx = 0; idx < munstersDescription.length; idx++) {
  if (munstersDescription[idx] === munstersDescription[idx].toUpperCase()) {
    caseSwitchString += munstersDescription[idx].toLowerCase();
    continue;
  }
  else if (munstersDescription[idx] === munstersDescription[idx].toLowerCase()) {
    caseSwitchString += munstersDescription[idx].toUpperCase();
    continue;
  }
  
  caseSwitchString += munstersDescription[idx];
}

console.log(caseSwitchString);