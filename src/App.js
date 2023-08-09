import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import axios from 'axios';
import Hero from './Hero';
import CardsContainer from './CardsContainer';
import Footer from './Footer';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Hero />
      <div className="App">
        <header className="App-header">
          {loading && <Loading />}
          {!loading && <CardsContainer characters={data} />} {CardsContainer}
        </header>
      </div>
      <Footer />
    </div>
  );
};

export default App;
