import {call, put} from 'redux-saga/effects';
import {ToastActionsCreators} from 'react-native-redux-toast';
import api from 'services/api';

import MembersActions from 'store/ducks/members';

export function* getMembers() {
  const response = yield call(api.get, '/members');
  yield put(MembersActions.getMembersSuccess(response.data));
}

export function* updateMember({id, roles}) {
  try {
    yield call(api.put, `/members/${id}`, {
      roles: roles.map(role => role.id),
    });
    yield put(ToastActionsCreators.displayInfo('Member Updated'));
  } catch (err) {
    yield put(ToastActionsCreators.displayInfo('Error on Update'));
  }
}

export function* inviteMember({email}) {
  try {
    yield call(api.post, `/invites`, {invites: [email]});
    yield put(ToastActionsCreators.displayInfo('Email Invited'));
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Error on invitation'));
  }
}
