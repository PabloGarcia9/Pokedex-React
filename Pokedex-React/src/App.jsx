import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const fetchPokemon = async () => {
  const randomNumber = Math.floor(Math.random() * (1000)+1);
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${randomNumber}/`);
  return res.data;
};

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  const handleClickAddPokemon = async () => {
    const randomPokemon = await fetchPokemon();
    const updatedPokemon = [...pokemon, randomPokemon];
    setPokemon(updatedPokemon);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('Request')
      const randomNumber = Math.floor(Math.random() * (1000)+1);
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${randomNumber}/`);
      setPokemon([res.data]);
    };
    fetchData();
  }, []);
  
  const renderedPokemon = pokemon.map(data => {
    return (
      <div className='card' key={data.name + data.id}>
        <div className='header'>
          <p>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
          <p>No. {data.id}</p>
        </div>
        <div className='img-container'>
          <img src={data.sprites.front_default} />
        </div>
      </div>
    );
  });

  return (
    <div className='page'>
      <div className='menu'>
        <button onClick={handleClickAddPokemon}>Agregar</button>
      </div>
      <div className='main-container'>
        {renderedPokemon}
      </div>
    </div>
  )
}

export default App
