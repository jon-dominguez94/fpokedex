import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as APIUtil from './util/api_util';
import * as actions from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

window.requestAllPokemon = actions.fetchAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});