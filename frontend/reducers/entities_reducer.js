import { combineReducers } from 'redux';
import pokemon from './pokemon_reducer';

const EntitiesReducer = combineReducers({
  pokemon
});

export default EntitiesReducer;