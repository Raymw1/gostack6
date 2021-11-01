import {all, takeLatest} from 'redux-saga/effects';

import login from './login';
import loadRepositories from './loadRepositories';

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('LOAD_REPOSITORIES_REQUEST', loadRepositories),
  ]);
}
