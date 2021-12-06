import {all, takeLatest} from 'redux-saga/effects';

import {CategoriesTypes} from 'store/ducks/categories';
import loadCategories from './categories';

import {ProductsTypes} from 'store/ducks/products';
import {loadProducts} from './products';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
  ]);
}
