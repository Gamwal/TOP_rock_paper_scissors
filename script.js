function getComputerChoice() {
  const optionsArr = ['Rock', 'Paper', 'Scissors'];
  let randomPosition = Math.floor(Math.random() * optionsArr.length);
  return optionsArr[randomPosition];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let updatedPlayerSelection = capitalizeFirstLetter(playerSelection);
  if ((updatedPlayerSelection === 'Rock' && computerSelection === 'Scissors') || (updatedPlayerSelection === 'Scissors' && computerSelection === 'Paper') || (updatedPlayerSelection === 'Paper' && computerSelection === 'Rock')) {
    return `You Win! ${updatedPlayerSelection} beats ${computerSelection}`;
  } else if (updatedPlayerSelection === computerSelection) {
    return `${updatedPlayerSelection} and ${computerSelection} is a Tie`;
  } else {
    return `You Lose! ${computerSelection} beats ${updatedPlayerSelection}`;
  }
}

function playGame(n = 5) {
  let wins = 0;
  for (let i = 0; i < n; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?: ");
    let computerSelection = getComputerChoice();
    let game = playRound(playerSelection, computerSelection);
    console.log(game)
    if (game.split(" ")[1] === "Win!") {
      wins++;
    }
  }
  if (wins > 2) {
    console.log(`You won ${wins} of ${n} rounds and hence won this game`);
  } else {
    console.log(`You won ${wins} of ${n} rounds and hence lost this game`);
  }
}
  