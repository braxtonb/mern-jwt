import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './Authentication/authentication.reducer';

const rootReducer = combineReducers({
  form,
  auth,
});

export default rootReducer;
