import { useState } from "react";

export const Card = ({ pokemon }) => {
  const [index, setIndex] = useState(true);

  const renderedTypes = pokemon.types.map(dato => {
    return <p key={dato.type.name}>{dato.type.name}</p>
  });


  return (
    <div className='card' key={pokemon.name + pokemon.id}>
      <div className='header'>
        <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        <p>No. {pokemon.id}</p>
      </div>
      <div className="body">
        <div className='img-container'>
            <img src={index ? pokemon.sprites.front_default : pokemon.sprites.back_default} />
        </div>
        <div className="descripcion">
          <div className="info">
            <p>Type</p>
            {renderedTypes}
          </div>
          <div className="info">
            <p>Height</p>
            <p>{pokemon.height} "</p>
          </div>
          <div className="info">
            <p>Weight</p>
            <p>{pokemon.weight} lbs</p>
          </div>
          {/* <div className="info">
            <p>Group</p>
            {pokemon.version_group.name}
          </div> */}
        </div>
      </div>
      <div className="right" onClick={() => setIndex(!index)}>&#8594;</div>
    </div>
  )
}


{/* 

*/}