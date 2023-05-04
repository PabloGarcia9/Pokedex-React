import { useState, useCallback } from 'react';
import axios from 'axios';
import { Card } from './components/Card';
import './App.css'
import icon from './assets/icons8-search-50.png';



function App() {
  const [texto, setTexto] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = useCallback(async (tipoBusqueda, nombre) => {
    if(tipoBusqueda === 'random'){
      const randomNumber = Math.floor(Math.random() * (1000)+1);
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);
      return res.data;
    }else{
      try{
        if(nombre === null || nombre === undefined || nombre === ''){ 
          alert('Tiene que escribir algo, volver a intentar');
          return pokemon;
        }
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}/`);
        console.log(res.data)
        return res.data
      }catch{
        alert('No existe este pokemon, volver a intentar');
        return pokemon;
      }
    }
  }, []);
  
  const handleClickRandomPokemon = async () => {
    const randomPokemon = await fetchPokemon('random', null);
    setPokemon(randomPokemon);
  };

  const handleClickBusquedaPokemon = async () => {
    const pokemon = await fetchPokemon('busqueda', texto.toLowerCase());
    console.log(pokemon);
    setPokemon(pokemon);
  };

  return (
    <div className='page'>
      <div className='menu'>
        <input className='busqueda' value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Busqueda'></input>
        <button onClick={handleClickBusquedaPokemon} className='busqueda-btn'> <img src={icon}/> </button>
        <button onClick={handleClickRandomPokemon}>Random</button>
      </div>
      <div className='main-container'>
        {pokemon !== null ? <Card pokemon={pokemon}/> : null}
      </div>
    </div>
  )
}

export default App
