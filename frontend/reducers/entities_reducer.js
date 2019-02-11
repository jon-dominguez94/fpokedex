import { combineReducers } from 'redux';
import pokemon from './pokemon_reducer';
import items from './items_reducer';

const EntitiesReducer = combineReducers({
  pokemon,
  items
});

export default EntitiesReducer;