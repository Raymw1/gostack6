import {combineReducers} from 'redux';

import {reducer as categories} from './categories';

const reducers = combineReducers({
  categories,
});

export default reducers;
