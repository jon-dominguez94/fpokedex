import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonIndexItem = props => (
  <li className="index-item">{props.poke.id}
    <NavLink to={`/pokemon/${props.poke.id}`}>
      <img src={props.poke.image_url} alt="" />
    </NavLink>
    <NavLink to={`/pokemon/${props.poke.id}`}>
      <span>{props.poke.name}</span>
    </NavLink>
  </li>
);

export default PokemonIndexItem;