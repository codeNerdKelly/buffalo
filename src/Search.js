import React from "react";
import "./Search.css";

export default function Search (){

    return (
        <div>
        <form className= "Search">
            <input type = "search" placeholder = "search for city"></input>
            <input type = "submit" value = "Submit"></input>
        </form>
        </div>
    )
}