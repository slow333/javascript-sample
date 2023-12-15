let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // as를 찾아봅시다.

let pos = -1;
let addPos = '';
while ((pos = str.indexOf(target, pos+1)) !== -1)
  addPos += `${pos} `;
const out = document.querySelector('#test');
out.innerText = `위치: ${addPos}` ;

let str1 = "Widget with id";
if (str1.indexOf("Widget") !== -1) {
  // alert("찾았다!"); // 의도한 대로 동작합니다.
}

function ucFirst(str) {
  if(!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
let compare = ucFirst("john");
out.innerText = compare;

function checkSpam(str){
  let lowerCase = str.toLowerCase();
  let t1 = ['viagra', 'xxx'];
  let b = t1.map(s => lowerCase.includes(s));

  return `검사 결과 : ${b.includes(true)} , `;
}
let result=' ';
result += checkSpam('buy ViAgRA now');
result += checkSpam('free xxxxx');
result += checkSpam("innocent rabbit");
out.innerText = result;

function extractCurrencyValue(str) {
  if(str.startsWith('$')) return str.slice(1);
}
let money = extractCurrencyValue('$1110');
out.innerText = money;