import { all, takeLatest } from "redux-saga/effects";
// TakeEvery

import { Types as FavoriteTypes } from "../ducks/favorites";
import { addFavorite } from "./favorites";

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
