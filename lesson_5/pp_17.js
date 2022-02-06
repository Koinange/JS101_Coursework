function UUID() {
  const availableCharacters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let UUIDString = '';
  
  for (let i = 0; i < 8; i++) {
    UUIDString += availableCharacters[Math.floor(availableCharacters.length * Math.random())];
  }
  
  let j = 0;
  while (j < 3) {
    UUIDString += '-';
  
    for (let i = 0; i < 4; i++) {
      UUIDString += availableCharacters[Math.floor(availableCharacters.length * Math.random())];
    }
    j += 1;
  }
  
  UUIDString += '-';
  
  for (let i = 0; i < 12; i++) {
      UUIDString += availableCharacters[Math.floor(availableCharacters.length * Math.random())];
    }
    
  return UUIDString;
}

console.log(UUID());