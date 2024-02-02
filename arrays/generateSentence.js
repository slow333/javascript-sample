const imgs = [
  "../img/shoes.png",
  "../img/honey-bee.webp",
  "../img/icon.png",
  "../img/korea.png",
  "../img/football.webp",
]

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
