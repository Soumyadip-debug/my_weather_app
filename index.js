const inputValue = document.querySelector('.inputvalue');
const button = document.querySelector('#seButton');
const temperature = document.querySelector('.tempareture'); 
const cityName = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
const weImages = document.querySelector('.weImage');

async function weatherResult(city) {
    const apiKey = "965aedc31d0dc1e442c886a1539cc44c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const weatherData = await fetch(apiUrl).then(response => response.json());
        console.log(weatherData);

        
        temperature.innerHTML = `${Math.round(weatherData.main.temp)}°C`;
        humidity.innerHTML = `${weatherData.main.humidity}%`;
        windSpeed.innerHTML = `${weatherData.wind.speed} km/h`;
        cityName.innerHTML = weatherData.name;

        
        const iconCode = weatherData.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weImages.src = iconUrl;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

button.addEventListener('click', () => {
    weatherResult(inputValue.value);
});
