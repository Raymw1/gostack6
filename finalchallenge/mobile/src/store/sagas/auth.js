import {call, put, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from 'services/api';
import NavigationService from 'services/navigation';
import {ToastActionsCreators} from 'react-native-redux-toast';

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
    const {
      data: {token},
    } = yield call(api.post, '/sessions', {email, password});
    // yield call([AsyncStorage, 'setItem'], '@Pizza:token', token);
    yield put(AuthActions.signInSuccess(token));
    NavigationService.navigate('Main');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Invalid credentials'));
  }
}

export function* signUp({name, email, password}) {
  try {
    const {
      data: {token},
    } = yield call(api.post, '/users', {name, email, password});
    // yield call([AsyncStorage, 'setItem'], '@Pizza:token', token);
    yield put(AuthActions.signInSuccess(token));
    NavigationService.navigate('Main');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Invalid credentials'));
  }
}
