import {combineReducers} from 'redux';

import login from './login';
import repositories from './respositories';

export default combineReducers({
  login,
  repositories,
});
