import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_POKEMON:
      return merge({}, state, {[action.pokeData.pokemon.id]: action.pokeData.pokemon})
    default:
      return state;
  }
};

export default PokemonReducer;