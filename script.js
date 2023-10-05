
const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img'); /* hyphen(-) not use in js */
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found= document.querySelector('.location-not-found');
const weather_body= document.querySelector('.weather-body');

async function checkweather(city){
    const api_key ="1f5a2fa85d07783032272b2c7e91acef"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod ===`404`){
        location_not_found.style.display ="flex";
        weather_body.style.display ="none";
        console.log("error");
        return;
    } 
    location_not_found.style.display ="none";
    weather_body.style.display ="flex";
   temperature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)}°C`;
   description.innerHTML =`${(weather_data.weather[0].description)}`
   humidity.innerHTML =`${(weather_data.main.humidity)}%`;
   wind_speed.innerHTML =`${(weather_data.wind.speed)}km/H`;


/* we can also use if else */
   switch(weather_data.weather[0].main){
    case 'Rain':weather_img.src ="./img/rain.png";
    break;
    case 'Clear':weather_img.src ="./img/clear.png";
    break;
    case 'Clouds':weather_img.src ="./img/cloud.png";
    break;
    case 'Snow':weather_img.src ="./img/snow.png";
    break;
    case 'Mist':weather_img.src ="./img/mist.png";
    break;
   }
}

searchbtn.addEventListener('click', ()=>{
checkweather(inputbox.value);
});







