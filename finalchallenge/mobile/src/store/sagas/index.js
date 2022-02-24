import {takeLatest, all} from 'redux-saga/effects';

import {init, signIn, signUp} from './auth';
import {AuthTypes} from 'store/ducks/auth';

import {productsRequest, typesRequest, sizesRequest} from './products';
import {ProductsTypes} from 'store/ducks/products';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(ProductsTypes.PRODUCTS_REQUEST, productsRequest),
    takeLatest(ProductsTypes.TYPES_REQUEST, typesRequest),
    takeLatest(ProductsTypes.SIZES_REQUEST, sizesRequest),
  ]);
}
