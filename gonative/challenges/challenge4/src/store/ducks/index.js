import {combineReducers} from 'redux';

import {reducer as categories} from './categories';
import {reducer as products} from './products';

const reducers = combineReducers({
  categories,
  products,
});

export default reducers;
