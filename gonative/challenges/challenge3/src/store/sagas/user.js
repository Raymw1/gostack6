import {put, call, select} from 'redux-saga/effects';
import api from 'services/api';
import Toast from 'react-native-root-toast';

import {Creators as UserActions} from 'store/ducks/user';
import {Creators as ModalActions} from 'store/ducks/modal';

export default function* addUser(action) {
  try {
    const {username, latLng} = action.payload;
    const userExists = yield select(state =>
      state.user.data.find(user => user.login === username),
    );
    if (userExists) {
      yield put(UserActions.addUserFailure());
      Toast.show('User already exists!', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        backgroundColor: '#EE7777',
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
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
      Toast.show('User added!', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        backgroundColor: '#85C47C',
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  } catch (err) {
    yield put(UserActions.addUserFailure());
    Toast.show('User not Found!', {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      backgroundColor: '#EE7777',
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  } finally {
    yield put(ModalActions.toggleModalSuccess(false));
  }
}
