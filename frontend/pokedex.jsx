import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/api_util';

window.fetchAllPokemon = APIUtil.fetchAllPokemon;

document.addEventListener("DOMContendLoaded", () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl)
});