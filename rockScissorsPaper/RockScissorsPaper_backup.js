const btnRed = document.getElementById('red')
const btnYellow = document.getElementById('yellow')
const btnGreen = document.getElementById('green')
const resultText = document.getElementById('result')
const clearScore = document.getElementById('clear-score')
const selAllBtns = document.querySelectorAll('.colorSelect')

// btnRed.onclick = () => {
//   let style = `<h1 style="color:red"> RED </h1>`
//   btnRed.innerHTML = `${style}`
//   resultText.innerHTML = `<h1> Your Red</h1>`
// }
// btnYellow.onclick = () => {
//   let style = `<h1 style="color:yellow"> YELLOW </h1>`
//   btnYellow.innerHTML = `${style}`
//   resultText.innerHTML = `<h1> Your Yellow</h1>`
// }
// btnGreen.onclick = () => {
//   let style = `<h1 style="color:green"> GREEN </h1>`
//   btnGreen.innerHTML = `${style}`
//   resultText.innerHTML = `<h1> Your Green</h1>`
// }
const timesClicked = {'red':0, 'yellow':0, 'green':0}
selAllBtns.forEach(sel => {
  sel.onclick = () =>{
    timesClicked[sel.value] += 1
    // let style = `<h1 style="color: ${sel.value}"> Your color is ${sel.value}
    //             You clicked ${timesClicked[sel.value]} times </h1>`
    // resultText.innerHTML = `${style}`
    sel.textContent = timesClicked[sel.value]
  }
})

function clearScores() {
  timesClicked.red =0
  timesClicked.yellow =0
  timesClicked.green =0
  selAllBtns.forEach(btn => btn.textContent = `${btn.value}`)
}

clearScore.onclick = () => clearScores()
