import {call, put} from '@redux-saga/core/effects';
import api from 'services/api';
import CategoriesActions from 'store/ducks/categories';

export default function* loadCategories() {
  try {
    const response = yield call(api.get, '/categories');
    yield put(CategoriesActions.loadSuccess(response.data));
  } catch (error) {
    yield put(CategoriesActions.loadFailure());
  }
}
