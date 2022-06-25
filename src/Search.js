import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [displayMessage, setMessage] = useState("");

  function alertSearch(event) {
    event.preventDefault();
    setMessage(`It is 19˚C in ${city}`);
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
      <h2>{displayMessage}</h2>
    </div>
  );
}
