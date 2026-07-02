import React from "react";
import './Landing.css'; // reuse same styling
import Row from '../components/Row';
import requests from '../requests'; 
import TVBanner from '../components/TVBanner';
import Nav from '../components/Nav';

function TVShows({ userName }) {
  return (
    <div className="App">
      <Nav userName={userName} />
      <TVBanner />
      <Row title='Only on Netflix' fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Award-Winning TV Shows' fetchURL={requests.fetchAwardWinningTV} />
      <Row title='Critically Acclaimed TV Shows' fetchURL={requests.fetchTopRatedTV} />
      <Row title='US TV Dramas' fetchURL={requests.fetchUSTV} />
      <Row title='International TV Dramas' fetchURL={requests.fetchInternationalTV} />
      <Row title='K-Dramas' fetchURL={requests.fetchKDrama} />
      <Row title='Award-Winning Suspenseful TV Shows' fetchURL={requests.fetchSuspenseTV} />
    </div>
  );
}

export default TVShows;
