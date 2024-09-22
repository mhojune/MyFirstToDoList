const API_KEY = "7d86bd638b3a0ea36aaf563353f3ef26";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data=> {
        const city = document.querySelector(".more-info .location");
        const weathers = document.querySelector(".more-info .weather");
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        city.innerText = name;
        weathers.innerText = `${weather} / ${temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);