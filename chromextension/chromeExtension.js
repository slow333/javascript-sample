let myURLs = [];
let tabURLs =[];
const inputEl = document.querySelector('#input-el');
const btnSave = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
const deleteEl = document.querySelector('#delete-btn');
const readFromLocalStorage = JSON.parse(localStorage.getItem('myURLs'));
const btnTab = document.querySelector('#save-btn');

if (readFromLocalStorage) {
  myURLs = readFromLocalStorage
  render(myURLs)
}

btnTab.addEventListener('click', function () {
  chrome.tabs.query({active:true, currentWindow: true}, function (tabs){
    console.log(tabs)
    myURLs.push(tabs[0].url)
    localStorage.setItem('myURLs', JSON.stringify(myURLs))
    render(myURLs)
  })
});

function render(urls) {
  let listItems = '';
  for (let i = 0; i < urls.length; i++) {
    listItems += `
        <li>
          <a target="_blank" href="${urls[i]}">
            ${urls[i]}
            </a>
        </li>
        `;
  }
  ulEl.innerHTML = listItems
}

deleteEl.addEventListener('dblclick', function () {
  localStorage.clear();
  myURLs = []
  render(myURLs)
});

btnSave.addEventListener('click', function () {
  myURLs.push(inputEl.value)
  inputEl.value = ''
  localStorage.setItem('myURLs', JSON.stringify(myURLs))
  render(myURLs)
});
