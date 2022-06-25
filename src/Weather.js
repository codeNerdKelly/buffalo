import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
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
    );
  }