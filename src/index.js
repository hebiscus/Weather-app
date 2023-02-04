async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.6761&lon=12.5683&appid=98cf7b78cb1f92c6762b5df863981c84', {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
  }

  getWeather();
