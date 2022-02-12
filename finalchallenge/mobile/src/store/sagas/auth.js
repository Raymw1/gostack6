import {call, put, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from 'services/api';
import NavigationService from 'services/navigation';

import AuthActions from 'store/ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@Pizza:token');
  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }
  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({email, password}) {
  try {
    console.log(email, password);
    const {
      data: {token},
    } = yield call(api.post, '/sessions', {email, password});
    // yield call([AsyncStorage, 'setItem'], '@Pizza:token', token);
    console.log('signIn saga');
    yield put(AuthActions.signInSuccess(token));
    NavigationService.navigate('Main');
  } catch (error) {
    console.log('signIn saga error');
    yield put(AuthActions.signInFailure());
  }
}
