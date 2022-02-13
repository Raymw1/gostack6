import {combineReducers} from 'redux';

import {toastReducer as toast} from 'react-native-redux-toast';
import {reducer as auth} from './auth';
import {reducer as products} from './products';

const reducers = combineReducers({
  auth,
  products,
  toast,
});

export default reducers;
