const apiKey = "6800a5fb674d47ddbca22035241811";
const urlApi = "https://api.weatherapi.com/v1/current.json"


const searchLocation = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');
const renderDisplay = document.querySelector('.render');

// load fetch api
document.addEventListener('DOMContentLoaded',function() {
  showWeather("yogyakarta");
})

// populer city click
const populerCity = document.querySelectorAll('.cardCity');

populerCity.forEach(city => {
  city.addEventListener('click',function(){
    showWeather(city.textContent)
  })
})

// function fetch weather
function showWeather(value) {
  fetch(`${urlApi}?key=${apiKey}&q=${value}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      return renderWeather(data)
    })
}

function renderWeather(data) {
  return renderDisplay.innerHTML = `
          <div class="w-full">
            <img src="https:${data.current.condition.icon}" class="size-20 mx-auto lg:mx-6"  alt="${data.location.name}">
          </div>
          <div class="lg:flex block items-center text-center lg:w-[70%] w-full justify-between lg:gap-4 px-4 lg:ml-6 lg:absolute lg:bottom-10">
            <p class="lg:text-6xl text-xl font-semibold">${Math.round(data.current.temp_c)}&#8451;</p>
            <div>
              <h1 class="text-center font-medium lg:text-2xl">${data.location.name}, ${data.location.country}</h1>
              <p>${data.location.localtime}</p>
            </div>
            <div class="hidden lg:block">
              <h1 class="lg:px-8 lg:text-xl font-semibold">${data.current.condition.text}</h1>
              <p>Wind: ${data.current.wind_mph} km/h</p>
              <p>Humidity: ${data.current.humidity} %</p>
            </div>
          </div>`
}

