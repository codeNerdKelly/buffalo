import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(" ");
  

  function alertSearch(event) {
    event.preventDefault();
  
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form className="citySearch" onSubmit={alertSearch}>
        <input
          type="search"
          id="searchBar"
          placeholder="Type city here..."
          onChange={updateCity}
        />
        <input type="submit" id="submitSearch" value="Search" />
      </form>
    </div>
  );
}
