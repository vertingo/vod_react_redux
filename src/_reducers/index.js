import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { movies } from './movies';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  movies
});

export default rootReducer;