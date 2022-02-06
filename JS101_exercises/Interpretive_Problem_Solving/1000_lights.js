function lightsOn(switches) {
  let lights = {};
  for (let i = 1; i <= switches; i++) {
    lights[i] = 'off';
  }
  
  let switchesArray = Object.keys(lights);
  
  for (let j = 0; j < switchesArray.length; j++) {
    for (let k = 0; k < switchesArray.length; k++) {
      if (switchesArray[k] % (j+1) === 0) {
        if (lights[k+1] === 'off') lights[k+1] = 'on';
        else lights[k+1] = 'off';
      }
    }
  }
  
  
  let x = switchesArray.filter(switchNumber => lights[switchNumber] === 'on');
  return x.map(element => Number(element));
  
}

console.log(lightsOn(5)); 
console.log(lightsOn(100));