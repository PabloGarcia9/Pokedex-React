export const Card = ({ pokemon }) => {
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
            <img src={pokemon.sprites.front_default} />
        </div>
        <div className="descripcion">
          <div className="info">
            <p>Tipo</p>
            {renderedTypes}
          </div>
          <div className="info">
            <p>Grupo</p>
            {pokemon.version_group.name}
          </div>
        </div>
      </div>
    </div>
  )
}
