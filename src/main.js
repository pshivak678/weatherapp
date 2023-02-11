function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=0.1276&appid=e659030eda04c815188a93fe39e13997&units=metric')
    .then(res =>{
        return res.json();
    })
    .then(res => {
        console.log(res);
        console.log(res.main);
        // document.getElementById('feelslike').innerText=res.main.feels_like;
        return {
            current : weatherData(res)
        }
    })
    .catch(error => {
        console.log(error)
    })
}

getWeather();

function weatherData(res){
 const {feels_like : temp ,temp_min : feelsLike , pressure : pressure , humidity : humidity} = res.main;
 const {speed : windspeed} = res.wind;
 document.getElementById('feelslike').innerText=feelsLike;
 document.getElementById('pressure').innerText= pressure;
 document.getElementById('humidity').innerText= humidity;
 document.getElementById('current-temp').innerHTML = temp;
 document.getElementById('windspeed').innerText = windspeed;
}

