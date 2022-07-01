import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(" ");
  const [result, updateResult] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    updateResult(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "150e7cb5a93e7be83b4a7a6e8e4516c8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function newCity(event) {
    updateCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city.." onChange={newCity} />
        <button type="Submit">Search</button>
      </form>
    </div>
  );
  return (
    <div className="Search">
      <form className="citySearch" onSubmit={handleSubmit}>
        <input
          type="search"
          id="searchBar"
          placeholder="Type city here..."
          onChange={updateCity}
        />
        <input type="submit" id="submitSearch" value="Search" />
      </form>
      <h1 className="City">{city}</h1>
    </div>
  );
}
