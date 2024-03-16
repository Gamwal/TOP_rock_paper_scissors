function getComputerChoice() {
  const optionsArr = ['Rock', 'Paper', 'Scissors'];
  let randomPosition = Math.floor(Math.random() * optionsArr.length);
  return optionsArr[randomPosition];
}

function getPlayerChoice() {
  const optionsArr = ['Rock', 'Paper', 'Scissors'];
  let playerChoice;
  do {
    playerChoice = capitalizeFirstLetter(prompt("Rock, Paper or Scissors?"));
    if (!optionsArr.includes(playerChoice)) {
      console.log('Please make a valid choice.');
    }
  }
  while (!optionsArr.includes(playerChoice));
  return playerChoice;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `${playerSelection} and ${computerSelection} is a Tie`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const rockButton = document.createElement('button');
rockButton.id = 'rock';
rockButton.textContent = 'Rock';

const paperButton = document.createElement('button');
paperButton.id = 'paper';
paperButton.textContent = 'Paper';


const scissorsButton = document.createElement('button');
scissorsButton.id = 'scissors';
scissorsButton.textContent = 'Scissors'

const buttonDiv = document.createElement('div');

buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);

// const resultDiv = document.createElement('div');
const scoreBoard = document.createElement('div');

document.body.appendChild(buttonDiv);
document.body.appendChild(resultDiv);
document.body.appendChild(scoreBoard);

let wins = 0;
let loses = 0;
let ties = 0;

buttonDiv.addEventListener('click', (event) => {
  let target = event.target;

  const gameResult = playRound(target.textContent, getComputerChoice());

  // resultDiv.textContent = gameResult;

  if (gameResult.split(' ')[1] === 'Win!') {
    wins++;
  } else if (gameResult.split(' ')[1] === 'Lose!') {
    loses++;
  } else {
    ties++;
  }

  scoreBoard.textContent = `Wins: ${wins} | Loses: ${loses} | Ties: ${ties}`
  
  if (wins + loses + ties === 5) {
    scoreBoard.textContent = `Wins: ${wins} | Loses: ${loses} | Ties: ${ties}\nWe're done playing!`
    wins = 0;
    loses = 0;
    ties = 0;
  }
});


