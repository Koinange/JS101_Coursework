function transactionsFor(id, transactionsArray) {
  let specificTransactionArray = [];
  transactionsArray.forEach(element => {
    if (Object.values(element).includes(id)) {
      specificTransactionArray.push(element);
    }
  });
  return specificTransactionArray;
}

function isItemAvailable(id, transactionsArray) {
  let specificItemTransactions = transactionsFor(id, transactionsArray);
  let sum = 0;
  specificItemTransactions.forEach(inventoryItem => {
    if (inventoryItem.movement === 'in') sum += inventoryItem.quantity;
    else sum -= inventoryItem.quantity;
  });
  if (sum > 0) return true;
  else return false;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];
                     
console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
                     