const keyEncode = 'pEkJBEQABH94EFXJfroTrooQs%2F3cFN5gwRa2wMCySPlXcmDsPplZPrPateJ3ScrPHxSSznyLGUsRVKRD3Gfm6w%3D%3D'
const keyDecode = 'pEkJBEQABH94EFXJfroTrooQs/3cFN5gwRa2wMCySPlXcmDsPplZPrPateJ3ScrPHxSSznyLGUsRVKRD3Gfm6w=='
const startDt = '20221120'
const endDt = '20221128'
const cityID = '108'

// const cityName = document.getElementById('city-name')
// const weatherMain = document.getElementById('weather-main')
// const tempAvg = document.getElementById('temp-avg')
// const tempMin = document.getElementById('temp-min')
// const tempMax = document.getElementById('temp-max')

// const getWeather = async () => {
//   const URL = 'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList';
//   const FULL_URL = `${URL}?serviceKey=${keyEncode}&numOfRows=10&pageNo=1&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=${startDt}&endDt=${endDt}&stnIds=${cityID}`
//   const weatherPromise  = await fetch(FULL_URL);
//   return weatherPromise.then((response) => {
//     // return response.json();
//     console.log(response.json())
//   })
// }
// getWeather()
// const searchCity = async () => {
//   const searchCityInput = document.getElementById('search-city')
//   const data = await getWeather(searchCityInput.value)
//   viewTemp(data)
// }
//
// function viewTemp(data) {
//   cityName.innerText =`${data.name}`
//   weatherMain.innerText = `${data.weather[0].main}`
//   tempAvg.innerText = `${data.main.temp}`
//   tempMin.innerText = `${data.main.temp_min}`
//   tempMax.innerText = `${data.main.temp_max}`
// }

// fetch(`${FULL_URL}`)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
const getWeather = async () => {
  const URL = 'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList';
  // const FULL_URL = `${URL}?serviceKey=${keyEncode}&numOfRows=10&pageNo=1&dataCd=ASOS&dateCd=DAY&startDt=${startDt}&endDt=${endDt}&stnIds=${cityID}`
  const FULL_URL = `${URL}?serviceKey=${keyEncode}&numOfRows=10&pageNo=1&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=20220101&endDt=20220102&stnIds=108`
  const response = await fetch(FULL_URL)
  const data = await response.json()
  const temp = data.body.items.avgTa
  console.log(temp)
  // return data
}
getWeather()
