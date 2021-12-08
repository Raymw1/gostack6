import {combineReducers} from 'redux';

import {reducer as categories} from './categories';
import {reducer as products} from './products';
import {reducer as cart} from './cart';

const reducers = combineReducers({
  categories,
  products,
  cart,
});

export default reducers;
