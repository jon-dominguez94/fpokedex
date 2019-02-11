import React from 'react';

const PokemonIndexItem = props => (
  <li>
    <img src={props.poke.image_url} alt="" />
    <span>{props.poke.name}</span>
  </li>
);

export default PokemonIndexItem;