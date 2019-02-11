import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/api_util';
import * as actions from './actions/pokemon_actions';

window.fetchAllPokemon = APIUtil.fetchAllPokemon;
window.receiveAllPokemon = actions.receiveAllPokemon;

document.addEventListener("DOMContendLoaded", () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl)
});