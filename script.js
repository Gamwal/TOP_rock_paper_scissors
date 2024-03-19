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

const headerDiv = document.createElement('div');
headerDiv.id = 'headerdiv';
document.body.appendChild(headerDiv);

const topHeader = document.createElement('h1');
topHeader.textContent = 'Rock! Paper! Scissors!';

headerDiv.appendChild(topHeader);


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
buttonDiv.id = 'buttoncontainer';

buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);

const resultDiv = document.createElement('div');
resultDiv.id = 'resultdiv';

const scoreBoard = document.createElement('div');
scoreBoard.id = 'scoreboard';

const gameResultText = document.createElement('h3');

document.body.appendChild(buttonDiv);
// document.body.appendChild(resultDiv);
document.body.appendChild(scoreBoard);

let wins = 0;
let losses = 0;
let ties = 0;

buttonDiv.addEventListener('click', (event) => {

  let target = event.target;

  const computerChoice = getComputerChoice()

  const gameResult = playRound(target.textContent, computerChoice);

  const gameResultSplit = gameResult.split(' ');

  if (gameResultSplit[gameResultSplit.length - 1] !== 'RockPaperScissors') {
    document.body.appendChild(resultDiv);
    resultDiv.textContent = `You: ${target.textContent} ------------- Computer: ${computerChoice}`;
    
    if (gameResultSplit[1] === 'Win!') {
      wins++;
    } else if (gameResultSplit[1] === 'Lose!') {
      losses++;
    } else {
      ties++;
    }

    scoreBoard.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
    
    if (wins + losses + ties === 5) {
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;

      const resetButton = document.createElement('button');
      resetButton.id = 'resetbutton'
      resetButton.textContent = 'Reset';
      document.body.appendChild(resetButton);

      resetButton.addEventListener('click', (event) => {
        wins = 0;
        losses = 0;
        ties = 0;
        scoreBoard.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
        document.body.removeChild(resetButton);
        document.body.removeChild(resultDiv);

        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
      })
    }
  }
});
