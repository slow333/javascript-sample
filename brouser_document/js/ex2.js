let elem = document.querySelectorAll('ul > li');
elem.forEach(item => {
  console.log(item.textContent);
})
console.log(elem.length);

let elemUL = document.querySelectorAll('li');
for (let li of elemUL) {
  console.log(li.firstChild.data);
}

console.log(document.body.lastChild.nodeType);
console.log(document.body.firstChild.nodeType);

let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

console.log( body.firstChild.data );