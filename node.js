const apikey = 'dc852df340c9787414159a71ab3676df';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchbox=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city) {
  const response = await fetch(apiurl + city+`&appid=${apikey}`);

  if(response.status==404) {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }

  else {
    
  let data = await response.json();

// Corrected syntax to access properties of the data object
const cityName = data.name;
const temperature = data.main.temp;
const humidity = data.main.humidity;
const windSpeed = data.wind.speed;



// Updated the syntax to set innerHTML for each element
document.querySelector(".city").innerHTML = cityName;
document.querySelector(".temp").innerHTML = Math.round(temperature) + "°C";
document.querySelector(".humidity").innerHTML = humidity + "%";
document.querySelector(".wind").innerHTML = windSpeed + "km/h";
if(data.weather[0].main=="Clouds") {

  weatherIcon.src="images/clouds.png"

}
 else if(data.weather[0].main=="Rain") {
  weatherIcon.src="images/rain.png"
 }
 else if (data.weather[0].main=="Drizzle") {
  weatherIcon.src="images/drizzle.png"
 }
 else if(data.weather[0].main=="Clear") {
  weatherIcon.src="images/clear.png"

 }
 else if(data.weather[0].main=="Mist") {
  weatherIcon.src="images/mist.png"
 }

 else if(data.weather[0].main=="Snow") {
  weatherIcon.src="images/snow.png"

 }
 document.querySelector(".weather").style.display="block"
 document.querySelector(".error").style.display="none";



  }
}


 searchbutton.addEventListener("click",()=>{
   checkWeather(searchbox.value);
 }) 
//checkWeather();

