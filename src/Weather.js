import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {

const [weather, setWeather] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){

setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
});
}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function findCity(event){
setCity(event.target.value);
}
function search(){
  const apiKey = "150e7cb5a93e7be83b4a7a6e8e4516c8";
  let city = "Paris"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
if(weather.ready){
  return (
    <div>
      <form className = "searchForm" onSubmit = {handleSubmit}>
        <input type = "search" placeholder = "type city name" id="searchBar" onChange={findCity}></input>
        <input type = "submit" id="submitSearch"></input>
      </form>
    <h1 className= "currentCity">{weather.name}</h1>  
    <div className="Description">
    <div className="row">
      <div className="col-md-6">
        <ul id="timeUpdate">
          <li>{weather.date}</li>
          <li>{weather.description}</li>
        </ul>
      </div>
      <div className="col-md-6">
        <ul id="currentConditions">
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind speed: {weather.wind} mph</li>
        </ul>
      </div>
    </div>
  </div>
    <div className="row">
      <div className="col-md-6" id="currentWeather">
        <img src= {weather.icon} alt = {weather.description} id="icon"/>
        <span id="currentTemp">{Math.round(weather.temperature)}</span>
        <span id="far"> F | </span>
        <span id="cel">C</span>
      </div>
      <div className="col-md-6">
        <p></p>
      </div>
    </div>
    </div>
  );
} else {
   search();
   return "Loading..."
  }
 
  }