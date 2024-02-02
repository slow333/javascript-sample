const inputPrice = document.querySelector('#food-price')
const inputTip = document.querySelector('#tip-amount')
// const calBtn = document.querySelector('#cal-btn')
const $foodPerPerson = document.querySelector('#food-per-person')
const numOfPerson = document.querySelector('#num-person')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
inputPrice.focus()

let numberOfPeople = Number (numOfPerson.innerText)

const calculateBill = () =>{
  let price = Number(inputPrice.value);
  let tip = Number(inputTip.value)/100;
  let priceTotal = Math.floor(price*tip + price)
  const perPerson = priceTotal / numberOfPeople
  $foodPerPerson.innerHTML = `${perPerson.toFixed(0).toLocaleString('ko-kr')}원`
}

const increasePeople = () =>{
  numberOfPeople += 1
  numOfPerson.innerText = numberOfPeople
  calculateBill()
}
const decreasePeople = () =>{
  if(numberOfPeople <= 1){
    return
  }
  numberOfPeople -= 1
  numOfPerson.innerText = numberOfPeople
  calculateBill()
}
