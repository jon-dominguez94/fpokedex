import { combineReducers } from 'redux';
import entities from './entities_reducer';
// import ui from './ui_reducer';

const RootReducer = combineReducers({
  entities
});

export default RootReducer;