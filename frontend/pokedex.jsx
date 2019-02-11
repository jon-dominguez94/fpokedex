import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import * as APIUtil from './util/api_util';
import * as actions from './actions/pokemon_actions';

window.fetchAllPokemon = actions.fetchAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl)
});