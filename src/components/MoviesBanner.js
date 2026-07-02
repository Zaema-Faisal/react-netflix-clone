import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css"; // Reuse same styling

function MoviesBanner() {
  const [movie, setMovie] = useState(null); // should be null or object, not []

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchPopular); // movies only
        const results = request.data.results || [];
        const filtered = results.filter(item => item.title); // ✅ filter for movies
        const randomMovie = filtered[Math.floor(Math.random() * filtered.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Failed to fetch Movies banner:", error);
      }
    }
    fetchData();
  }, []);

  if (!movie) return null; // Optional: render nothing if movie hasn't loaded yet

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.original_title}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default MoviesBanner;

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
