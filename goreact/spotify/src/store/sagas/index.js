import { all, takeLatest } from "redux-saga/effects";

// import { Types as PlaylistTypes } from "../ducks/playlist";
// import { addPlaylist } from "./playlist";

export default function* rootSaga() {
  yield all([
    // takeLatest(PlaylistTypes.ADD_REQUEST, addPlaylist)
  ]);
}
