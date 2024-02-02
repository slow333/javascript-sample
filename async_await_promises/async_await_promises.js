// const waitingForRamen = () => console.log('라면 준비됨')
// setTimeout(waitingForRamen, 5000)
//
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isReady = [true, false][Math.floor(Math.random()*2)]
    isReady ? resolve('RAMEN 준비됨'): reject('준비 안됨')
  }, 1000)
})
//
// console.log( promise1
//   .then(success => console.log({success}))
//   .catch(error => console.log({error})))

const getRamen = async () => {
  const review = { rating:null, points: null, tip: null }
  try{
    const response = await promise1
    console.log(response)
    review.rating = 5
    review.points = 5
    review.tip = 0.2
    return review
  } catch (error){
    console.log(error)
    review.rating = 1
    review.points = 1
    review.tip = .01
    return review
  }
}
// getRamen().then(result => console.log(result))
console.log(await getRamen())

// 아래 fetch then과 그 아래의 async는 같은 것임
/**
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(dogImg => console.log(dogImg))
*/
//이게 다루기 쉽고 깔끔함
const getDog = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}
// getDog()
