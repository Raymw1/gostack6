import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import api from "services/api";

import TeamsActions from "store/ducks/teams";

export function* getTeams() {
  const response = yield call(api.get, "/teams");
  yield put(TeamsActions.getTeamsSuccess(response.data));
}

export function* createTeam({ name }) {
  try {
    const response = yield call(api.post, "/teams", { name });
    yield put(TeamsActions.createTeamSuccess(response.data));
    yield put(TeamsActions.closeTeamModal());
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Error in operation",
        message: "Something went wrong, try again!",
      })
    );
  }
}
