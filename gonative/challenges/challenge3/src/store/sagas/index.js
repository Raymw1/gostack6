import {all, takeLatest} from 'redux-saga/effects';

// import saga from './saga'
// import {Types as UserTypes} from '../ducks/user';

export default function* rootSaga() {
  return yield all([
    // takeLatest(UserTypes.USER_REQUEST, saga),
  ]);
}
