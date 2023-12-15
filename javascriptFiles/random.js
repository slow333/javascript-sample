'use strict';
let n = 1.23455;
let str = "Hello";

function readNumber(){
  let num;
  do{
    num = prompt('number ==> ', 0);
  } while (!isFinite(num))
  if(num === null || num === '') return null;
  return +num;
}

function randomMaxMin(min, max) {
  return (Math.random() * (max-min) + min).toFixed(10);
}

function randomMaxMinToInt(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

const out = document.getElementById('test');
// out.innerText = n.toFixed(3);
out.innerText = randomMaxMinToInt(1, 3);