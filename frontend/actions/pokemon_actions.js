import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receivePokemon = pokeData => ({
  type: RECEIVE_POKEMON,
  pokeData
});

export const fetchPokemon = id => dispatch => {
  return APIUtil.fetchPokemon(id)
  .then(pokeData => dispatch(receivePokemon(pokeData)));
};

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchAllPokemon = () => dispatch => {
  return APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};