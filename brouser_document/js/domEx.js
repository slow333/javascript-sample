console.log(window.innerHeight);

document.body.style.background='gray';
setTimeout(() => document.body.style.background = '', 1000);

// console.log(navigator.platform);
// console.log(navigator.languages);
// console.log(navigator.storage);
// console.log(navigator.vendor);

// console.log(location.href);
// if(confirm('어디로 갈거에요?')){
//   location.href = 'http://www.logcenter.kr';
// }

// <body>의 부모 노드는 <html>입니다
console.log( document.body.parentNode === document.documentElement ); // true

// <head>의 다음 형제 노드는 <body>입니다.
console.log( document.head.nextSibling ); // HTMLBodyElement

// <body>의 이전 형제 노드는 <head>입니다.
console.log( document.body.previousSibling ); // HTMLHeadElement

function changeElem() {
  let color = ['red', 'blue'];
  let rand = Math.ceil(Math.random()*2) ;
  document.getElementById('elem').style.background = color[rand];
  document.getElementById('elem').hidden = !document.getElementById('elem').hidden;
}
setInterval(() => {
  changeElem()
}, 1000);
let div = document.querySelector('div');

// div.outerHTML를 사용해 <p>...</p>로 교체
div.outerHTML = '<p>새로운 요소</p>'; // (*)

// 어! div가 그대로네요!
console.log(div.outerHTML); // <div>Hello, world!</div> (**)
// for(let i =0; i < document.body.childNodes.length; i++){
//   console.log(document.body.childNodes[i]);
// }
// for (let elem of document.body.children) {
//   console.log(elem); // DIV, UL, DIV, SCRIPT
// }
// '이'가 적힌 td를 가져옴(첫 번째 줄, 두 번째 칸)

let elements = document.querySelectorAll('tr > td:last-child');
for (let elem of elements) {
  console.log(elem.innerHTML);
}
let td = table.rows[0].cells[1];
td.style.backgroundColor = "red"; // 강조