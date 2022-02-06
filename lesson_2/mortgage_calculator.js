function mortgageCalculator(loanAmount, APR, loanDurationInYears) {
  let MPR = (APR/100)/12;
  let loanDurationInMonths = Math.ceil(loanDurationInYears * 12);
  
  if (APR === 0) return (loanAmount/loanDurationInMonths).toFixed(2);
  
  let  monthlyPayment = loanAmount * (MPR / (1 - Math.pow((1 + MPR), (-loanDurationInMonths))));
  return monthlyPayment.toFixed(2);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number(number) < 0   || Number.isNaN(Number(number));
}

const readline = require('readline-sync');

let repeatOperation = 'y';

while (repeatOperation === 'y') {
  console.log("What's the loan amount?");
  let loanAmount = readline.question();
  
  while (invalidNumber(loanAmount)) {
      console.log("What's the loan amount?");
      loanAmount = readline.question();
    }
    
  console.log("What's the Annual Percentage Rate (APR)?");
  let APR = readline.question();
  
  while (invalidNumber(APR)) {
      console.log("What's the Annual Percentage Rate (APR)?");
      APR = readline.question();
    }
  
  console.log("What's the loan duration in years (APR)?");
  let loanDurationInYears = readline.question();
  
  while (invalidNumber(loanDurationInYears)) {
      console.log("What's the loan duration in years (APR)?");
      loanDurationInYears = readline.question();
    }
    
    loanAmount = Number(loanAmount);
    APR = Number(APR);
    loanDurationInYears = Number(loanDurationInYears);
  
  
  console.log(`The monthly payment amount is $${mortgageCalculator(loanAmount, APR, loanDurationInYears)}`);
  
  console.log('Would you like to do another calculation?\n Click "y" for Yes, Click "n" for No');
  repeatOperation = readline.question().toLowerCase();
  
  while (repeatOperation !== 'y' || repeatOperation !== 'n') {
    console.log('invalid entry');
    repeatOperation = readline.question().toLowerCase();
  }
}


