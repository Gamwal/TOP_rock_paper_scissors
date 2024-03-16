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
