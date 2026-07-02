import React from "react";
import Row from '../components/Row';
import requests from '../requests'; 
import Nav from '../components/Nav';
import './Movies.css'

function Movies({ userName }) {
  return (
    <div className="App">
      <Nav userName={userName} />
      <Row title="Top 10 Movies in Pakistan Today" fetchURL={requests.fetchTop10Movies} isLargeRow />
      <Row title="Hindi-Language Movies" fetchURL={requests.fetchHindiMovies} />
      <Row title="Thriller Movies" fetchURL={requests.fetchThrillers} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Sci-Fi Movies" fetchURL={requests.fetchSciFiMovies} />
    </div>
  );
}

export default Movies;
