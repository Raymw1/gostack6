import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistTypes } from "../ducks/playlists";
import { getPlaylists } from "./playlists";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistTypes.GET_REQUEST, getPlaylists)]);
}
