import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div>
      <div className="Description">
      <div className="row">
        <div className="col-md-6">
          <ul id="timeUpdate">
            <li>Last updated: Tuesday 1:56 PM</li>
            <li>Partly Cloudy</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul id="currentConditions">
            <li>Humidity: 60%</li>
            <li>Wind speed: 5 mph</li>
          </ul>
        </div>
      </div>
    </div>
      <div className="row">
        <div className="col-md-6" id="currentWeather">
          <i class="fa-thin fa-sun-bright" id="icon"></i>
          <span id="currentTemp">75°</span>
          <span id="far"> F | </span>
          <span id="cel">C</span>
        </div>
        <div className="col-md-6">
          <p></p>
        </div>
      </div>
      </div>
    );
  }