import React from "react";
import './Landing.css'; // Reuse the same styling
import Row from '../components/Row';
import requests from '../requests';
import DocumentariesBanner from '../components/DocumentariesBanner';
import Nav from '../components/Nav';

function Documentaries({ userName }) {
  return (
    <div className="App">
      <Nav userName={userName} />
      <DocumentariesBanner />

      <Row title='POPULAR DOCUMENTARIES' fetchURL={requests.fetchPopularDocumentaries} isLargeRow />
      <Row title='TOP RATED DOCUMENTARIES' fetchURL={requests.fetchTopRatedDocumentaries} />
      <Row title='NATURE DOCUMENTARIES' fetchURL={requests.fetchNatureDocumentaries} />
      <Row title='CRIME DOCUMENTARIES' fetchURL={requests.fetchCrimeDocumentaries} />
      <Row title='HISTORICAL DOCUMENTARIES' fetchURL={requests.fetchHistoricalDocumentaries} />
      <Row title='PAKISTANI DOCUMENTARIES' fetchURL={requests.fetchPakistaniDocumentaries} />
      <Row title='RECENT DOCUMENTARIES' fetchURL={requests.fetchRecentDocumentaries} />
    </div>
  );
}

export default Documentaries;
