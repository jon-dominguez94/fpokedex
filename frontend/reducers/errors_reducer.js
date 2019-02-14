import { combineReducers } from 'redux';
import pokemon from './pokemon_errors_reducer';

const ErrorsReducer = combineReducers({
  pokemon
});

export default ErrorsReducer;