import {all, takeLatest} from 'redux-saga/effects';

import {CategoriesTypes} from 'store/ducks/categories';
import loadCategories from './categories';

import {ProductsTypes} from 'store/ducks/products';
import {loadProducts} from './products';

import {CartTypes} from 'store/ducks/cart';
import {addCart, setCart, removeCart} from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(CartTypes.ADD_CART_REQUEST, addCart),
    takeLatest(CartTypes.SET_PRODUCT_CART_REQUEST, setCart),
    takeLatest(CartTypes.REMOVE_CART_REQUEST, removeCart),
  ]);
}
