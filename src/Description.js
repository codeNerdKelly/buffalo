import React from "react";
import "./Description.css";

export default function Description() {
  return (
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
  );
}
