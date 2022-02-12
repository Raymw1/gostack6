import {takeLatest, all} from 'redux-saga/effects';

import {init, signIn} from './auth';
import {AuthTypes} from 'store/ducks/auth';

export default function* rootSaga() {
  return yield all([init(), takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
}
