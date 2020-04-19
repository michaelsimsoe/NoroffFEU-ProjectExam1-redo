import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import formsReducer from './formsReducer';

export default combineReducers({
  events: eventsReducer,
  formData: formsReducer,
});
