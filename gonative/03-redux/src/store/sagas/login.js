import {call, put} from '@redux-saga/core/effects';

import api from 'services/api';

import * as LoginActions from 'store/actions/login';

export default function* login(action) {
  try {
    const {username} = action.payload;
    yield call(api.get, `/users/${username}`);
    yield put(LoginActions.loginSuccess(username));
  } catch (error) {
    yield put(LoginActions.loginFailure());
  }
}
