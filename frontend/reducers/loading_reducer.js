import { LOADING_POKEMON, RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type){
    case LOADING_POKEMON:
      return true;
    case RECEIVE_ALL_POKEMON:
        return false;
    case RECEIVE_POKEMON:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;