// https://dog.ceo/api/breeds/image/random
const dogImageDiv = document.getElementById('dogImages')
const dogBtn = document.getElementById('dogBtn')

const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(응답 => 응답.json())
    .then(json => {
      console.log(json)
      dogImageDiv.innerHTML = `<img src="${json.message}"/>`
    })
}

dogBtn.onclick = () => getNewDog()

getNewDog()
