const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'r' && (computerChoice === 'sc' || computerChoice === 'l')) ||
      (choice === 'p' && (computerChoice === 'r' || computerChoice === 'sp')) ||
      (choice === 'sc' && (computerChoice === 'p' || computerChoice === 'l')) ||
      (choice === 'l' && (computerChoice === 'sp' || computerChoice === 'p')) ||
      (choice === 'sp' && (computerChoice === 'sc' || computerChoice === 'r'))) {
    return 'You win!';
  } else if (choice === computerChoice) {
    return "It's a tie!";
  } else {
    return 'Computer wins!';
  }
}

let computerWinCount = 0;
let userWinCount = 0;

while (userWinCount < 3 || computerWinCount < 3) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt('r = rock, p = paper, sc = scissors, l = lizard, sp = spock');
  let choice = readline.question();
  
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  displayWinner(choice, computerChoice);
  
  if (displayWinner(choice, computerChoice) === 'You win!') {
    userWinCount += 1;
  } else if (displayWinner(choice, computerChoice) === 'Computer wins!') {
  computerWinCount += 1;
  }
  
  prompt(`Score Update: User ${userWinCount} Computer ${computerWinCount}`);

  if (userWinCount === 3) {
    prompt('Congradulations! You are the grand winner!');
    break;
  } else if (computerWinCount === 3) {
    prompt('You lost. Maybe next time, champ');
    break;
  }
}



