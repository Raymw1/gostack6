import { all, takeLatest } from "redux-saga/effects";

import { signIn, signOut } from "./auth";
import { AuthTypes } from "store/ducks/auth";

import { getTeams, createTeam } from "./teams";
import { TeamsTypes } from "store/ducks/teams";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
  ]);
}
