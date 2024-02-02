'use strict';

/*let ask = ({question, yes, no}) => {
  // eslint-disable-next-line no-restricted-globals
  (confirm(question) ? yes() : no());
}
// ask("동의하십니까?",
//   () => alert("동의하셨어다"),
//   () => alert("취소했습니다."));
function pow(x, n){
  let result=1;
  for(let i=0;i<n;i++) {
    result *= x;
  }
  return result;
}

// let x=prompt("x?",'');
// let n=prompt("n?",'');

if (n<=0) {
  alert(`Power ${n} is not supported, 
  please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) )
}*/

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge(){
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    var isTrue = true;
  }
  printAge();
  return age;
}

const firstName = 'Rebecca Ferguson';
calcAge(1991);
console.log()