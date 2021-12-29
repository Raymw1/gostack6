import {call, put, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from 'services/api';
import NavigationService from 'services/navigation';

import AuthActions from 'store/ducks/auth';
import TeamsActions from 'store/ducks/teams';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@Omni:token');
  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }
  const team = yield call([AsyncStorage, 'getItem'], '@Omni:team');
  if (team) {
    yield put(TeamsActions.selectTeam(JSON.parse(team)));
  }
  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({email, password}) {
  try {
    const {
      data: {token},
    } = yield call(api.post, '/sessions', {email, password});
    yield call([AsyncStorage, 'setItem'], '@Omni:token', token);
    yield put(AuthActions.signInSuccess(token));
    NavigationService.navigate('Main');
  } catch (err) {
    console.error(err);
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
  // yield put(push('/signin'));
}

export function* getPermissions() {
  const team = yield select(state => state.teams.active);
  const signedIn = yield select(state => state.auth.signedIn);
  if (!team || !signedIn) return;
  const response = yield call(api.get, '/permissions');
  const {roles, permissions} = response.data;
  yield put(AuthActions.getPermissionsSuccess(roles, permissions));
}
