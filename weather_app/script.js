const API_KEY = `08d2b7aa89a86267ee70c4cf16684e65`
const form = document.querySelector("form")
const search = document.querySelector('#search')
const weather = document.querySelector('#weather')

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    weather.innerHTML = `
        <div>
            <img id="icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        </div>

        <div>
            <h2 id="temperature">${data.main.temp} ℃</h2>
            <h5 id="description">${data.weather[0].main} </h5>
            <h5 id="humidity">Humidity: ${data.main.humidity} %</h5>
            <h5 id="wind">Wind Speed: ${data.wind.speed} m/s</h5>
            <h5 id="pressure">Pressure: ${data.main.pressure} hPa</h5>
            <h5 id="sunrise">Sunrise: ${sunriseTime}</h5>
            <h5 id="sunset">Sunset: ${sunsetTime}</h5>
        </div>    
    `
}

form.addEventListener('submit', function(event) {
    getWeather(search.value)
    event.preventDefault();
})