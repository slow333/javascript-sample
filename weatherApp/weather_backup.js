const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a8e71c9932b20c4ceb0aed183e6a83bb',
    // 'X-RapidAPI-Key': '2d26a12669mshf286b9e288f6beap14db0fjsn7487a41c608c',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};
//
const cityName = document.getElementById('city-name')
const weatherMain = document.getElementById('weather-main')
const tempAvg = document.getElementById('temp-avg')
const tempMin = document.getElementById('temp-min')
const tempMax = document.getElementById('temp-max')
//
const getWeather = async (cityName) => {
  const url = `https://open-weather13.p.rapidapi.com/city/${cityName}`
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data
}

const searchCity = async () => {
  const searchCityInput = document.getElementById('search-city')
  const data = await getWeather(searchCityInput.value)
  viewTemp(data)
}

function viewTemp(data) {
  cityName.innerText =`${data.name}`
  weatherMain.innerText = `${data.weather[0].main}`
  tempAvg.innerText = `${data.main.temp}`
  tempMin.innerText = `${data.main.temp_min}`
  tempMax.innerText = `${data.main.temp_max}`
}
//

// fetch('https://open-weather13.p.rapidapi.com/city/seoul', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
