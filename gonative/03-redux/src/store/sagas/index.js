import {all, takeLatest} from 'redux-saga/effects';

import login from './login';

export default function* rootSaga() {
  return yield all([takeLatest('LOGIN_REQUEST', login)]);
}
