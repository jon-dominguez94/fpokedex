import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON ,RECEIVE_POKEMON_ERRORS } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const _nullError = [];

const PokemonErrorsReducer = (state = _nullError, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POKEMON_ERRORS:
      return action.errors;
    case RECEIVE_ALL_POKEMON:
      return _nullError;
    case RECEIVE_POKEMON:
      return _nullError;
    default:
      return state;
  }
};

export default PokemonErrorsReducer;