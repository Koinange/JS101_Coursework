const readline = require('readline-sync');

const PLAYER_MAXIMUM = 21;
const DEALER_MINIMUM = 17;
const WINS_TO_END_GAME = 2;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function joinOr(array, separator = ', ', word = 'or') {
  array = array.slice(0);
  if (array.includes(11) || array.includes(1)) {
    array[array.indexOf(11)] = 'A';
    array[array.indexOf(1)] = 'A';
    array[array.indexOf(1)] = 'A';
    array[array.indexOf(1)] = 'A';
    array[array.indexOf(1)] = 'A';
  }
  if (array.length === 0) return '';
  if (array.length === 1) return `${array[0]}`;
  if (array.length === 2) {
    array.splice(array.length - 1, 1, `${word} ${array[array.length - 1]}`);
    return array.join(' ');
  }
  array.splice(array.length - 1, 1, `${word} ${array[array.length - 1]}`);
  return array.join(`${separator}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function dealCards(deckOfCards) {
  return [deckOfCards.shift(), deckOfCards.shift()];
}

function calculateSumOfCards(arrayOfCards) {
  while (true) {
    let score = 0;
    for (let idx = 0; idx < arrayOfCards.length; idx++) {
      if (arrayOfCards[idx] === 'J' || arrayOfCards[idx] === 'Q' || arrayOfCards[idx] === 'K') arrayOfCards[idx] = 10;
      else if (arrayOfCards[idx] === 'A') arrayOfCards[idx] = 11;
      score += arrayOfCards[idx];
    }
    if (score > PLAYER_MAXIMUM && arrayOfCards.includes(11)) {
      arrayOfCards[arrayOfCards.indexOf(11)] = 1;
    } else return score;
  }
}

function busted(score) {
  if (score > PLAYER_MAXIMUM) return true;
  else return false;
}

function playAgain() {
  console.log('-------------');
  let answer;
  while (true) {
    prompt('Do you want to play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (answer === 'y' || answer === 'n') break;
    else prompt('Sorry, Invalid Input: Must enter "Y", "y", "N", or "n"');
  }
  return answer === 'y';
}

function detectResult(playerScore, dealerScore) {

  if (playerScore > PLAYER_MAXIMUM) {
    return 'PLAYER_BUSTED';
  } else if (dealerScore > PLAYER_MAXIMUM) {
    return 'DEALER_BUSTED';
  } else if (dealerScore < playerScore) {
    return 'PLAYER';
  } else if (dealerScore > playerScore) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(playerScore, dealerScore) {
  let result = detectResult(playerScore, dealerScore);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function displayCards(playerCards, playerScore, dealerCards, dealerScore) {
  console.log('==============');
  prompt(`Player has ${joinOr(playerCards,', ', 'and')}, for a total of: ${playerScore}`);
  prompt(`Dealer has ${joinOr(dealerCards,', ', 'and')}, for a total of: ${dealerScore}`);
  console.log('==============');
}


let deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'J', 'J', 'J', 'J', 'Q', 'Q', 'Q', 'Q', 'K', 'K', 'K', 'K', 'A', 'A', 'A', 'A'];

let playerWins = 0;
let dealerWins = 0;
while (true) {
  prompt('Welcome to 21!');

  shuffle(deck);

  let playerCards = [];
  let dealerCards = [];

  playerCards.push(...dealCards(deck));
  dealerCards.push(...dealCards(deck));

  prompt(`Dealer has: ${dealerCards[0]} and unknown card`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}`);

  let playerScore = calculateSumOfCards(playerCards);
  let dealerScore = calculateSumOfCards(dealerCards);

  while (true) {
    prompt('hit or stay?');
    let playerDecision = readline.question().toLowerCase();
    if (playerDecision === 'stay') {
      prompt(`Player Score is ${playerScore}`);
      break;
    } else if (playerDecision === 'hit') {
      prompt(`You drew a ${deck[0]}`);
      playerCards.push(deck.shift());
      prompt(`You have: ${joinOr(playerCards,', ', 'and')}`);
      playerScore = calculateSumOfCards(playerCards);
      if (busted(playerScore)) break;
      else prompt(`Player Score is ${playerScore}`);
    } else prompt('Sorry, invalid input: type "hit" or "stay"');
  }

  if (busted(playerScore)) {
    if (detectResult(playerScore,dealerScore) === 'PLAYER' ||
      detectResult(playerScore,dealerScore) === 'DEALER_BUSTED') playerWins += 1;
    if (detectResult(playerScore,dealerScore) === 'DEALER' ||
      detectResult(playerScore,dealerScore) === 'PLAYER_BUSTED') dealerWins += 1;
    displayCards(playerCards, playerScore, dealerCards, dealerScore);
    displayResults(playerScore, dealerScore);
    prompt(`Player Wins: ${playerWins}, Dealer Wins: ${dealerWins}`);
    if (playerWins === WINS_TO_END_GAME) {
      prompt('Congratulations! You are the Grand Champion!');
      break;
    } else if (dealerWins === WINS_TO_END_GAME) {
      prompt('Dealer is the Grand Winner! Better luck next time, champ');
      break;
    }
    if (playAgain()) continue;
    else break;
  }

  while (true) {
    if (busted(dealerScore)) break;
    else if (dealerScore >= DEALER_MINIMUM) break;
    else {
      dealerCards.push(deck.shift());
      dealerScore = calculateSumOfCards(dealerCards);
      if (busted(dealerScore)) break;
    }
  }

  if (busted(dealerScore)) {
    if (detectResult(playerScore,dealerScore) === 'PLAYER' ||
      detectResult(playerScore,dealerScore) === 'DEALER_BUSTED') playerWins += 1;
    if (detectResult(playerScore,dealerScore) === 'DEALER' ||
      detectResult(playerScore,dealerScore) === 'PLAYER_BUSTED') dealerWins += 1;
    displayCards(playerCards, playerScore, dealerCards, dealerScore);
    displayResults(playerScore, dealerScore);
    prompt(`Player Wins: ${playerWins}, Dealer Wins: ${dealerWins}`);
    if (playerWins === WINS_TO_END_GAME) {
      prompt('Congratulations! You are the Grand Champion!');
      break;
    } else if (dealerWins === WINS_TO_END_GAME) {
      prompt('Dealer is the Grand Winner! Better luck next time, champ');
      break;
    }
    if (playAgain()) continue;
    else break;
  }


  if (detectResult(playerScore,dealerScore) === 'PLAYER' ||
      detectResult(playerScore,dealerScore) === 'DEALER_BUSTED') playerWins += 1;
  if (detectResult(playerScore,dealerScore) === 'DEALER' ||
      detectResult(playerScore,dealerScore) === 'PLAYER_BUSTED') dealerWins += 1;

  displayCards(playerCards, playerScore, dealerCards, dealerScore);
  displayResults(playerScore,dealerScore);

  prompt(`Player Wins: ${playerWins}, Dealer Wins: ${dealerWins}`);

  if (playerWins === WINS_TO_END_GAME) {
    prompt('Congratulations! You are the Grand Champion!');
    break;
  } else if (dealerWins === WINS_TO_END_GAME) {
    prompt('Dealer is the Grand Winner! Better luck next time, champ');
    break;
  }
  if (!playAgain()) break;

}

/*
Question 1: the last playAgain call
Answer: The first two playAgain calls need continue statements
The last call does not. The continue statements are necessary
to start the game loop over again from the middle of the code.
*/