import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function TVBanner() {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals); // Only TV shows
      const results = request.data.results.filter(item => item.name); // Ensure it's a TV show
      setTvShow(results[Math.floor(Math.random() * results.length)]);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${tvShow?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {tvShow?.name || tvShow?.title || tvShow?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(tvShow?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default TVBanner;
