// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import axios from 'axios';
import Hero from './Hero';
import CardsContainer from './CardsContainer';
import Footer from './Footer';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Hero />
      <div className="App">
        <header className="App-header">
          {loading ? <Loading /> : <CardsContainer characters={characters} />}
          {!loading && (
            <div className="join mb-10">
              <button className="join-item btn" onClick={() => handlePageChange(currentPage - 1)}>«</button>
              <button className="join-item btn">Page {currentPage}</button>
              <button className="join-item btn" onClick={() => handlePageChange(currentPage + 1)}>»</button>
            </div>
          )}
        </header>
      </div>
      <Footer />
    </div>
  );
};

export default App;
