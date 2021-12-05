import {all, takeLatest} from 'redux-saga/effects';

import {CategoriesTypes} from 'store/ducks/categories';
import loadCategories from './categories';

export default function* rootSaga() {
  return yield all([takeLatest(CategoriesTypes.LOAD_REQUEST, loadCategories)]);
}
