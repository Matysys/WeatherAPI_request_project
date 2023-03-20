//Variáveis
const API_key = "";
let cityInput = document.querySelector("#city-input");
let btnSearch = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const weatherIcon = document.querySelector("#weatherIcon");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const country = document.querySelector("#country");
const hidden = document.querySelector(".hidden");

//Eventos
btnSearch.addEventListener('click', (e) => {

    const city = cityInput.value;
    getWeatherData(city);

});

//Funções
const getWeatherData = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_key}&lang=pt_br`;

    try{
        const response = await axios.get(URL);
        const data = await response.data;
        console.log(data);

        const descriptionCap = data.weather[0].description;

        cityElement.innerHTML = data.name;
        temperature.innerHTML = `${parseInt(data.main.temp)}ºC`;
        description.innerHTML = descriptionCap.charAt(0).toUpperCase() + descriptionCap.slice(1);
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed}km/h`;
        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        country.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
        hidden.classList.remove("hidden");



    }catch(e) {
        console.log(e);
        alert("Requisição inválida: " + e);
    }

}


/*
const getWeatherData = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_key}&lang=pt_br`;

    axios.get(URL)
    .then(response => {
        const data = response.data;
        const humidity = data.main.humidity;
        const temperature = data.main.temp;
        const description = data.weather.description;
        const wind = data.wind.speed;

        console.log(humidity);
        console.log(temperature);

    })

}*/




