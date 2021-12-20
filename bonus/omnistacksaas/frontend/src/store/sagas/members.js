import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import api from "services/api";

import MembersActions from "store/ducks/members";

export function* getMembers() {
  const response = yield call(api.get, "/members");
  yield put(MembersActions.getMembersSuccess(response.data));
}

export function* updateMember({ id, roles }) {
  try {
    yield call(api.put, `/members/${id}`, {
      roles: roles.map((role) => role.id),
    });
    yield put(
      toastrActions.add({
        type: "success",
        title: "Member updated",
        message: "The member was updated with success!",
      })
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Error on operation",
        message: "Something went wrong, try again!",
      })
    );
  }
}

export function* inviteMember({ email }) {
  try {
    yield call(api.post, `/invites`, { invites: [email] });
    yield put(
      toastrActions.add({
        type: "success",
        title: "Invite sent",
        message: "We've sent an invite to the user to join the team!",
      })
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Error on operation",
        message: "Something went wrong, try again!",
      })
    );
  }
}
