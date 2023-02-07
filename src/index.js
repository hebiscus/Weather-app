import { cloudWeather } from "./cloudWeather";
import { fogWeather , rainWeather } from "./fogWeather";
import { snowWeather} from "./snowWeather";
import { stormWeather } from "./stormWeather";
import { sunWeather } from "./sunWeather";

;

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

// eslint-disable-next-line consistent-return
async function getWeather(location) {
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
  if (weatherData === undefined || weatherData.cod === "400") {
    return;
  }
  const cityName = weatherData.city.name;
  const weatherTemperature = weatherData.list[0].main.temp;
  const weatherStatus = weatherData.list[0].weather[0].main;
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
  console.log(weatherStatus);

  // if (weatherStatus === "Clouds") {
  //   cloudWeather.render(weatherData);
  // } else if (weatherStatus === "Thunderstorm"){
  //   stormWeather.render(weatherData);
  // } else if (weatherStatus === "Clear"){
  //   sunWeather.render(weatherData);
  // } else if (weatherStatus === "Fog") {
  //   fogWeather.render(weatherData);
  // } else if (weatherStatus === "Rain") {
  //   rainWeather.render(weatherData);
  // } else if (weatherStatus === "Snow") {
  //   snowWeather.render(weatherData);
  // }
}

(function renderView() {
  const searchInput = document.querySelector(".searchInput");
  searchInput.addEventListener("search", () => {getWeather(searchInput.value).then(renderWeatherData, handleErrors)});
})();

(function renderFirstLocation() {
  getWeather("Copenhagen").then(renderWeatherData);
})();


