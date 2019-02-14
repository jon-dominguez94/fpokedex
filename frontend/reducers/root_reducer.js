import { combineReducers } from 'redux';
import entities from './entities_reducer';
import errors from './errors_reducer';
// import ui from './ui_reducer';

const RootReducer = combineReducers({
  entities,
  errors
});

export default RootReducer;