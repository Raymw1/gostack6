import {call, put} from '@redux-saga/core/effects';
import api from 'services/api';

import ProductsActions from 'store/ducks/products';

export function* loadProducts({id}) {
  try {
    const response = yield call(api.get, `/category_products/${id}`);
    yield put(ProductsActions.loadProductsSuccess(response.data));
  } catch (error) {
    yield put(ProductsActions.loadProductsFailure());
  }
}
