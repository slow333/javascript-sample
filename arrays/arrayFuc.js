let data = [{player: "KIM dong", score: 34,},{player: "JIN seo",score: 99,}]
const insertText = document.querySelector('#someText');
const scoreBtn = document.querySelector('#input-btn')


scoreBtn.addEventListener('click', function (){
  let tempStr =''
  for(let i=0; i < data.length; i++){
    tempStr += `<li> ${data[i].player}'s score is ${data[i].score} </li>`
  }
  insertText.innerHTML = tempStr
})

function generateSentence (desc, arr){
  let message = `The ${arr.length} ${desc} are `;
  for(let i=0; i< arr.length; i++){
    if(i === (arr.length - 1)){
      message += arr[i]
    } else {
      message += arr[i] + ", "
    }
  }
  return message
}
const imgs = [
  "../img/shoes.png",
  "../img/honey-bee.webp",
  "../img/icon.png",
  "../img/korea.png",
  "../img/football.webp",
]

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const container = document.querySelector('#container');
function renderImages(inputImgs){
  let imgsDOM =""
  for(let i =0; i< inputImgs.length;i++){
    imgsDOM += `<img alt="my images for ex"
                src="${inputImgs[i]}">`
  }
  container.innerHTML = imgsDOM
}
renderImages(imgs)
