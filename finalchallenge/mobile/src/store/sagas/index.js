import {takeLatest, all} from 'redux-saga/effects';

// import {Types} from "store/ducks/reducer";
// import {sagaFunction} from "./saga"

export default function* rootSaga() {
  return yield all([
    // takeLatest(Types.TYPE, sagaFunction)
  ]);
}
