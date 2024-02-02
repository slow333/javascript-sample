let player = {
  name : 'KONG',
  chips : 500_000,
  visits : function (){
    console.log(`반갑습니다. ${this.name} 님`)
  },
}

let cards = [];
let $sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

let $message = document.querySelector('#message-el');
// let $sumEl = document.getElementById('sumEl')
let $sumEl = document.querySelector('#sum-el')
let $cardsEl = document.querySelector('#cards-el');
let $player = document.querySelector('#player-el')
$player.innerHTML = player.name + " | " + player.chips + '&#8361';
$message.textContent = player.name +' 님 '+'게임을 시작합니다.';
function startGame(){
  isAlive = true;
  let firstCard = getRandom();
  let secondCard = getRandom();
  $sum = firstCard + secondCard;
  cards.push(firstCard);
  cards.push(secondCard);
  renderGame();
}

function restartGame(){
  window.location.reload();
}
function getRandom() {
  let result =0;
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if(randomNumber > 10){
    result = 10;
  } else if(randomNumber ===1 ){
    result = 11;
  } else {
    result = randomNumber;
  }
  return result;
}

function renderGame() {
  $cardsEl.textContent = 'Your Cards : ';
  for(let count=0; count < cards.length; count++){
    $cardsEl.textContent += cards[count] +' ';
  }

  $sumEl.textContent = 'Sum : ' + $sum;

  if ($sum <= 20) {
    message = `Do you want more card ~~~~`;
  } else if ($sum === 21) {
    message = "you've got blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  $message.textContent = player.name + '님 '+message;
}
function newCard(){
  if( isAlive === true && hasBlackJack === false){
    $message.textContent = "새로운 카드를 배포";
    let newCard = getRandom();
    cards.push(newCard);
    $sum += newCard;
    renderGame();
  } else {
    $message.textContent = "game is Over";
  }

}
