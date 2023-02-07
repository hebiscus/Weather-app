// async function getCoordinates() {
//     const copenhagen = "Copenhagen";
//     const firstPart = "http://api.openweathermap.org/geo/1.0/direct?q=";
//     const lastPart = "&limit=&appid=98cf7b78cb1f92c6762b5df863981c84"
//     const combinedFetch = firstPart + copenhagen + lastPart
//     const response = await fetch(combinedFetch, {mode: 'cors'});
//     const Data = await response.json();          
//     const langtitude = Data[0].lat;
//     const longtitude = Data[0].lon;
//     console.log(Data);
//     console.log(langtitude);
//     console.log(longtitude);
//   }

//   getCoordinates();

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

export default async function getWeather(location) {
  const apiCallBeginning = 'http://api.openweathermap.org/data/2.5/forecast?q='
  const inputCity = location;
  const apiCallEnding = '&units=metric&appid=98cf7b78cb1f92c6762b5df863981c84'
  const apiCallCombined = apiCallBeginning + inputCity + apiCallEnding;
  try {
    const response = await fetch(apiCallCombined, {mode: 'cors'})
    if (response.status === 404) {
      const err = new Error(`HTTP status code: ${response.status}`);
      err.response = response;
      err.status = response.status;
      throw err;
    }
    const weatherData = await response.json();
    return weatherData;
  }
  catch (error) {
    console.log(error);
  }
}

function renderWeatherData(weatherData) {
  if (weatherData === undefined) {
    return;
  }
  const cityName = weatherData.city.name;
  const weatherTemperature = weatherData.list[0].main.temp;
  const weatherDescription = weatherData.list[0].weather[0].description;
  const humidityStat = weatherData.list[0].main.humidity
  const rainChance = weatherData.list[0].pop
  const windSpeed = weatherData.list[0].wind.speed;
  console.log(weatherData);
  console.log(cityName);
  console.log(weatherTemperature);
  console.log(humidityStat);
  console.log(rainChance);
  console.log(windSpeed);
  console.log(weatherDescription);
}

(function renderView() {
  const searchInput = document.querySelector(".searchInput");
  searchInput.addEventListener("search", () => {getWeather(searchInput.value).then(renderWeatherData, handleErrors)});
})();



