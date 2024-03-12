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

function playGame(n = 5) {
  let wins = 0;
  let loses = 0;
  let ties = 0;
  for (let i = 0; i < n; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let game = playRound(playerSelection, computerSelection);
    console.log(game)
    let result = game.split(" ");
    if (result[1] === "Win!") {
      wins++;
    } else if (result[1] === "Lose!") {
      loses++;
    } else {
      ties++;
    }
  }
  console.log(`You won ${wins}, lost ${loses} and tied ${ties} rounds in this game`);
  return 0;
}
  