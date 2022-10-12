let formEl =document.querySelector(".search-input")

let apiKey = "c0e617defc41b849bff9793042dab8f2"


function weatherForecast(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
    .then(response => response.json()) //JS
    .then(res =>{
        console.log(res)
        var htmlString = `
        <div class="card" style="width: 18rem;">
  <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cityName}</h5>
    <p class="card-text">Temperature:${res.main.temp} <span>${res.weather[0].description}</span></p>
    <p class="card-text">Humidity:${res.main.humidity}</p>
    <p class="card-text">Wind Speed:${res.wind.speed}</p>

  </div>
</div>
        `
        document.getElementById("weather-information").innerHTML=htmlString
    })
   
}

function fiveDayForecast(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`)
    .then(response => response.json()) //JS
    .then(res =>{
        console.log(res)
        let data = res.list
        var htmlString=""
        for (let i=0; i < data.length; i = i+8){
       htmlString += `
        <div class="card m-3 p-3" style="width: 18rem;">
  <img src="https://openweathermap.org/img/wn/${data[i].weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cityName}</h5>
    <p class="card-text">Temperature:${data[i].main.temp} <span>${data[i].weather[0].description}</span></p>
    <p class="card-text">Humidity:${data[i].main.humidity}</p>
    <p class="card-text">Wind Speed:${data[i].wind.speed}</p>

  </div>
</div>
        `
    }
        document.getElementById("weather-forecast").innerHTML=htmlString
    })
   
}












formEl.addEventListener("submit",function(event){
    event.preventDefault()
   let cityName = document.getElementById("search-input").value
   console.log(cityName)
   weatherForecast(cityName) //Executing
   fiveDayForecast(cityName)
})