

export const stormWeather = {
    render: (weatherData) => {
        const content = document.getElementById("content");
        content.replaceChildren();

        const cityName = weatherData.city.name;
        console.log(cityName);
    }
}