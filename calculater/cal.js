let num1 = 8; let num2 =2;
document.getElementById('input_num1').textContent = num1;
document.getElementById('input_num2').textContent = num2;
let $sum = document.getElementById('sum_text')

function  add() {
  let result = num1 + num2;
  $sum.textContent = 'sum : '+ result;
}
function  subtract() {
  let result = num1 - num2;
  $sum.textContent = 'sum : '+ result;
}
function  divide() {
  let result = num1 / num2;
  $sum.textContent = 'sum : '+ result;
}
function  multiply() {
  let result = num1 * num2;
  $sum.textContent = 'sum : '+ result;
}
