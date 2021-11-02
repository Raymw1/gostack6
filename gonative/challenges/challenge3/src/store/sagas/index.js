import {all, takeLatest} from 'redux-saga/effects';

import user from './user';

import {Types as UserTypes} from '../ducks/user';

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.ADD_USER_REQUEST, user)]);
}
