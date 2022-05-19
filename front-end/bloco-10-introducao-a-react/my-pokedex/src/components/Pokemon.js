import React from "react";
import pokemons from '../data';

class Pokemon extends React.Component {
  render () {
    const { pokemon } = this.props;
    const { name, type, image, moreInfo, averageWeight:{ measurementUnit, value } } = pokemons
    .find((pokemon1) => pokemon1.name === pokemon);
    return (
      <a href={moreInfo}>
        <div className="data-pokemon">
          <img src={image} alt="pokemon" />
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {`${value} ${measurementUnit}`}</p>
        </div>
      </a>
    );
  };
}

export default Pokemon;