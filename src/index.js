async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.6761&lon=12.5683&units=metric&appid=98cf7b78cb1f92c6762b5df863981c84', {mode: 'cors'});
    const weatherData = await response.json();
    const cityName = weatherData.name;
    const weatherDescription = weatherData.weather[0].description;
    const humidity = weatherData.main
    // const rainChance = weatherData.main
    const windSpeed = weatherData.wind.speed;
    console.log(cityName);
    console.log(weatherData);
  }

  getWeather();

async function getCoordinates() {
    const copenhagen = "Copenhagen";
    const firstPart = "http://api.openweathermap.org/geo/1.0/direct?q=";
    const lastPart = "&limit=&appid=98cf7b78cb1f92c6762b5df863981c84"
    const combinedFetch = firstPart + copenhagen + lastPart
    const response = await fetch(combinedFetch, {mode: 'cors'});
    const Data = await response.json();          
    const langtitude = Data[0].lat;
    const longtitude = Data[0].lon;
    console.log(Data);
    console.log(langtitude);
    console.log(longtitude);
  }

  getCoordinates();

//   https://api.openweathermap.org/data/2.5/onecall?lat=55.6761&lon=12.5683&units=metric&exclude={part}&appid={API key}