const totalScore = {
  computerScore: 0,
  playerScore: 0,
}
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumb = Math.floor(Math.random()*3)
  return rpsChoice[randomNumb]
}

function getResult(playerChoce, computerChoice){
  let score = null;
  if(playerChoce === computerChoice ){
    score = 0;
  } else if(playerChoce === 'Rock' && computerChoice === 'Scissors'){
    score = 1;
  }else if(playerChoce === 'Scissors' && computerChoice === 'Paper'){
    score = 1;
  }else if(playerChoce === 'Paper' && computerChoice === 'Rock'){
    score = 1;
  } else {
    score = -1;
  }
  return score
}

function showResult(score,computer, user){
  const result = document.getElementById('result')
  switch(score) {
    case 0 : {
      result.innerText = "IT's drew"
      break
    }
    case 1 : {
      result.innerText = `Won !!`
      break
    }
    case -1 : {
      result.innerText = 'Loose '
      break
    }
  }
  const resultTotal = document.getElementById('result-detail')
  resultTotal.innerText = `Me:  ${user}, computer : ${computer},
      나의 점수는 ${totalScore.playerScore}`
}

function onClickRPS (playerChoice){
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, computerChoice, playerChoice.value)
  totalScore.playerScore += score
}

// function playGame() {
  let rpsButton = document.querySelectorAll('.rps')
  rpsButton.forEach(rps => {
    rps.onclick = () => onClickRPS(rps)
  })
  let restart = document.getElementById('game-start')
  restart.onclick = () => restartGame()
// }

function restartGame() {
  const resultText = document.getElementById('result')
  const resultTotal = document.getElementById('result-detail')
  totalScore.playerScore = 0
  totalScore.computerScore = 0

  resultText.innerText = ''
  resultTotal.innerText = ''
}

// playGame()
