import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const ItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POKEMON:
      return merge({}, state, action.pokeData.items);
    default:
      return state;
  }
};

export default ItemsReducer;