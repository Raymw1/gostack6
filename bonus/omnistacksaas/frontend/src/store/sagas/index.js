import { all, takeLatest, fork } from "redux-saga/effects";

import { signIn, signUp, signOut, getPermissions } from "./auth";
import { AuthTypes } from "store/ducks/auth";

import { getTeams, createTeam } from "./teams";
import { TeamsTypes } from "store/ducks/teams";

import { getProjects, createProject } from "./projects";
import { ProjectsTypes } from "store/ducks/projects";

import { getMembers, updateMember, inviteMember } from "./members";
import { MembersTypes } from "store/ducks/members";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.GET_PERMISSIONS_REQUEST, getPermissions),
    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
    takeLatest(TeamsTypes.SELECT_TEAM, getProjects),
    takeLatest(TeamsTypes.SELECT_TEAM, getPermissions),
    takeLatest(ProjectsTypes.GET_PROJECTS_REQUEST, getProjects),
    takeLatest(ProjectsTypes.CREATE_PROJECT_REQUEST, createProject),
    takeLatest(MembersTypes.GET_MEMBERS_REQUEST, getMembers),
    takeLatest(MembersTypes.UPDATE_MEMBER_REQUEST, updateMember),
    takeLatest(MembersTypes.INVITE_MEMBER_REQUEST, inviteMember),
  ]);
}
