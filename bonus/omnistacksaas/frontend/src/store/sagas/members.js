import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import api from "services/api";

import MembersActions from "store/ducks/members";

export function* getMembers() {
  const response = yield call(api.get, "/members");
  yield put(MembersActions.getMembersSuccess(response.data));
}
