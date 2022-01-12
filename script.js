let weatherRequestUrl = 'http://api.openweathermap.org/data/2.5/weather';
const APIKEY = "93e98dce2fd02f35575b27981d3da096"

//Global? Nope. Not today.
// var cityInfo = document.getElementById(('city'))
// var tempInfo = document.getElementById(('temp'))
// var windInfo = document.getElementById(('wind'))
// var humInfo = document.getElementById(('humidity'))
// var uvInfo = document.getElementById(('uv'))

function citySearch() {
    var searchInput = document.getElementById('citySearch'.trim())
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+'&appid=93e98dce2fd02f35575b27981d3da096')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    weatherStats(data);
  });
}

function weatherStats(response) {
    console.log(response)

    var cityInfo = document.getElementById(('city'))
    var tempInfo = document.getElementById(('temp'))
    var windInfo = document.getElementById(('wind'))
    var humInfo = document.getElementById(('humidity'))
    var uvInfo = document.getElementById(('uv'))

    var todayDate = new Date()
    var month = todayDate.getMonth() + 1
    var day = todayDate.getDate();
    var year = todayDate.getFullYear();

    cityInfo.innerText = response.name + " " + month + "/" + day + "/" + year
    tempInfo.innerHTML = "Temperature: " + Math.floor(((response.main.temp-273.15)*1.8)+32) + "&#8457;"
    windInfo.innerText = "Wind Speed: " + response.wind.speed
    humInfo.innerText = "Humidity: " + response.main.humidity
    uvInfo.innerText = "UV: " + response
}