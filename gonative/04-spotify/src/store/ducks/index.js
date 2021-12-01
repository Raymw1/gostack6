import {combineReducers} from 'redux';

import {reducer as podcasts} from './podcasts';

const reducers = combineReducers({
  podcasts,
});

export default reducers;
