import {call, put, select} from 'redux-saga/effects';
import api from 'services/api';
import NavigationService from 'services/navigation';
import {ToastActionsCreators} from 'react-native-redux-toast';

import ProductsActions from 'store/ducks/products';

export function* productsRequest() {
  try {
    const {
      data: {products},
    } = yield call(api.get, '/products');
    yield put(ProductsActions.productsSuccess(products));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Something went wrong!'));
  }
}

export function* typesRequest({id}) {
  try {
    const {
      data: {types},
    } = yield call(api.get, `/products/${id}/types`);
    yield put(ProductsActions.typesSuccess(id, types));
    NavigationService.navigate('Types');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Something went wrong!'));
  }
}
