const scissorImg = document.getElementById('scissors')
const rockImg = document.getElementById('rock')
const paperImg = document.getElementById('paper')
const resultText = document.getElementById('result')
const gameRestart = document.getElementById('game-start')

const randomNumb = Math.floor(Math.random()*3) +1

const list = [scissorImg.value, rockImg.value, paperImg.value]

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumb = Math.floor(Math.random()*3)
  return rpsChoice[randomNumb]
}

function getResult(playerChoce, computerChoice){
  let score;
  if(playerChoce == computerChoice ){
    score = 0;
  } else if(playerChoce == 'Rock' && computerChoice == 'Scissors'){
    score = 1;
  }else if(playerChoce == 'Scisors' && computerChoice == 'Paper'){
    score = 1;
  }else if(playerChoce == 'Paper' && computerChoice == 'Rock'){
    score = 1;
  } else {
    score = -1;
  }
  return score
}

function onClickRPS (playerChoice){
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  resultText.innerText = score
}

function playGame() {
  const rpsButton = document.querySelectorAll('.rps')
  rpsButton.forEach(rps => {
    rps.onclick = () => onClickRPS(rps)
  })
}
