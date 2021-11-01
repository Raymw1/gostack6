import {call, put, select} from '@redux-saga/core/effects';
import api from 'services/api';

import * as RepositoriesActions from 'store/actions/repositories';

export default function* loadRepositories() {
  try {
    const {username} = yield select(state => state.login);
    const {data} = yield call(api.get, `/users/${username}/repos`);
    yield put(RepositoriesActions.loadRepositoriesSuccess(data));
  } catch (error) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}
