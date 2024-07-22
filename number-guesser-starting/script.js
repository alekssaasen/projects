// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, compGuess, secretNumber) => {
  const userDifference = Math.abs(secretNumber - userGuess)
  const compDifference = Math.abs(secretNumber - compGuess)
  return userDifference <= compDifference;
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
