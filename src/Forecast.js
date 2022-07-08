import React from "react";
import "./Forecast.css";
import sunshine from "./sunshine.png";

export default function Forecast(props){

    return(
        <div className = "Forecast">
            
            <h1 defaultCity = "New York">New York</h1>
            <ul className = "timeDescription">
                <li>Last Updated:</li>
                <li>Description</li>
            </ul>
            <div className = "row">
                <div className = "col-2">
                    <img src = {sunshine} alt="description" id = "icon"></img>
                </div>
                <div className = "col-4" id = "currentTemp">

                </div>
                <div className = "col-6">
                    
                    </div>
            </div>
        </div>
    )
}