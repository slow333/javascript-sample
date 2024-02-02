/*
 우선 api에서 json을 받음 => 받은 것을 문서에 적용 => 랜덤해봄 => 버튼에 function을 달아서 수행
 버튼에 함수를 걸음 => 함수를 생성 => 함수 내부 정리(보여줄 내용이 길어지면 별도의 함수로)
 일반적으로 함수정의 => 버튼에 달기 => refactory(복잡한 것은 함수로 정리)
 */

const MY_TOKEN = '5574292905958511'
// base_url 잘안되면 url을 잘 봐야 함
const BASE_URL = `https://www.superheroapi.com/api.php/${MY_TOKEN}`
const searchBtn = document.getElementById('search-btn')
const heroImage = document.getElementById('hero-image')
const newHero =   document.getElementById('newHeroBtn')
const searchIn =  document.getElementById('search-text')

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(get => get.json())
    .then(json => {
      const superHero = json
      showHeroInfo(superHero)
    })
}

// bsaeurl/search => api 문서에 나옴
const getSearchSuperHero = (name) =>{
  fetch(`${BASE_URL}/search/${name}`)
    .then(get => get.json())
    .then(json => {
      const superHero = json.results[0]
      showHeroInfo(superHero)
      })
}
//json 파일로 받아서 이것을 내부 document에 적용하는 파일
const showHeroInfo = (jsonImport) => {
  const name = `<h3>${jsonImport.name}</h3>`
  const img = `<img src="${jsonImport.image.url}" style="display: inline">`

  const stats = Object.keys(jsonImport.powerstats).map(stat =>{
    return `<p> ${stat.toUpperCase()} : ${jsonImport.powerstats[stat]}</p>`
  }).join('')

  heroImage.innerHTML = `${name}${img}${stats}`
}
// 임의의 id를 getsuperhero에 적용하는 파일
const randomHero = () => {
    const randomId = Math.floor(Math.random()*731) +1
    getSuperHero(randomId)
}

newHero.onclick = () => randomHero()
// input text 값을 받아서 함수에 입력
// (getElementbyID에 value를 지정하면 값을 갖고오지 못함 분리해야서 받아와야 함???)
searchBtn.onclick = () => getSearchSuperHero(searchIn.value)
