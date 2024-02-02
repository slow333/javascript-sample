const inputPrice = document.querySelector('#food-price')
const inputTip = document.querySelector('#tip-amount')
// const calBtn = document.querySelector('#cal-btn')
const $foodPerPerson = document.querySelector('#food-per-person')
const numOfPerson = document.querySelector('#num-person')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')

inputPrice.focus()
// calBtn.addEventListener('click', result())
// const total = price + price*(tip/100)
// const perPerson = total/person
let i = 1;
plusBtn.onclick = () => {
  numOfPerson.innerHTML = `${++i}`
}
minusBtn.onclick = () => {
  numOfPerson.innerHTML = `${--i}`
}

function result(){
  let tip = parseInt(inputTip.value)
  let price = parseInt(inputPrice.value)
  let priceTotal = Math.floor((price*(tip/100) + price));

  const person = parseInt(numOfPerson.innerText)
  const perPerson = Math.floor(priceTotal/person)
  $foodPerPerson.innerHTML = `${perPerson}`
}
