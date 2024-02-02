let myStorage = `["www.app.com"]`;

// myStorage를 array로 바꿈
myStorage = JSON.parse(myStorage)
// 새항목 추가
myStorage.push('www.kalpa')
// 다시 스트링으로 변환
myStorage = JSON.stringify(myStorage)

localStorage.myStorage = JSON.stringify(myStorage);
let storedNames = JSON.parse(localStorage.myStorage);

if (typeof window !== 'undefined') {
  console.log('You are on the browser')
  // 👉️ can use localStorage here
} else {
  console.log('You are on the server')
  // 👉️ can't use localStorage
}

localStorage.setItem('myurl',"http://www.logcenter.kr")

console.log(localStorage.getItem('font'))

console.log(storedNames)

const inputEl = document.querySelector('#input-el');
const btnSave = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');


btnSave.addEventListener('click', function(){
  myLeads.push(inputEl.value)
  inputEl.value = ''
  iterator()
  // myLeads = [];
});

function iterator() {
  let listItems ='';
  for (let i=0; i < myLeads.length; i++ ) {
    // listItems += '<li><a target="_blank" href="'+myLeads[i]+'">'+myLeads[i]+"</a></li>";
    listItems += `
        <li>
          <a target="_blank" href="${myLeads[i]}">
            ${myLeads[i]}
            </a>
        </li>
        `;
  }
  ulEl.innerHTML = listItems
}
