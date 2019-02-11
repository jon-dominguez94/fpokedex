import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = props => (
  <li>
    <Link to={`/pokemon/${props.poke.id}`}>
      <img src={props.poke.image_url} alt="" />
      <span>{props.poke.name}</span>
    </Link>
  </li>
);

export default PokemonIndexItem;