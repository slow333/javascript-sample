let ask = (question, yes, no) => {
  (confirm(question)) ? yes() : no();
}
// ask("동의하십니까?",
//   () => alert("동의하셨ㅅ브니다"),
//   () => alert("취소했습니다."));


/*

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "동의하셨습니다." );
}

function showCancel() {
    alert( "취소 버튼을 누르셨습니다." );
}
 */

function pow(x, n){
  let result=1;

  for(let i=0;i<n;i++) {
    result *= x;
  }

  return result;
}

let x=prompt("x?",'');
let n=prompt("n?",'');

if (n<=0) {
  alert(`Power ${n} is not supported, 
  please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) )
}