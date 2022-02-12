import {combineReducers} from 'redux';

import {reducer as auth} from './auth';

const reducers = combineReducers({
  auth,
});

export default reducers;
