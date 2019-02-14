import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";
export const LOADING_ALL_POKEMON = "LOADING_ALL_POKEMON";
export const LOADING_POKEMON = "LOADING_POKEMON";

export const setLoading = () => ({
  type: LOADING_POKEMON
});

export const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});

export const receivePokemon = pokeData => ({
  type: RECEIVE_POKEMON,
  pokeData
});

export const fetchPokemon = id => dispatch => {
  dispatch(setLoading());
  setTimeout(() => {
   return APIUtil.fetchPokemon(id)
  .then(pokeData => dispatch(receivePokemon(pokeData)))
  }, 1000);

};

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchAllPokemon = () => dispatch => {
  dispatch(setLoading());
  return APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const createPokemon = data => dispatch => {
  return APIUtil.createPokemon(data)
  .then(pokemon => dispatch(receivePokemon(pokemon)))
  .fail(errors => dispatch(receivePokemonErrors(errors.responseJSON)));
};