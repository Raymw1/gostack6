import {put, call, select} from 'redux-saga/effects';
import api from 'services/api';

import {Creators as UserActions} from 'store/ducks/user';
import {Creators as ModalActions} from 'store/ducks/modal';

export default function* addUser(action) {
  try {
    const {username, latLng} = action.payload;
    const userExists = yield select(state =>
      state.user.data.find(user => user.login === username),
    );
    if (userExists) {
      yield put(UserActions.addUserFailure('User already exists!'));
    } else {
      const response = yield call(api.get, `users/${username}`);
      const data = {
        id: response.data.id,
        avatar: response.data.avatar_url,
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        latLng,
      };
      yield put(UserActions.addUserSuccess(data));
    }
  } catch (err) {
    yield put(UserActions.addUserFailure('User not found!'));
  } finally {
    yield put(ModalActions.toggleModalSuccess(false));
  }
}
