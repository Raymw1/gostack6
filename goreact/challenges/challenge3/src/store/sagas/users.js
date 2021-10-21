import { call, put, select } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import api from "../../services/api";

import { Creators as UserActions } from "../ducks/users";

export function* addUser(action) {
  try {
    const { userInput, latitude, longitude } = action.payload.user;
    const { data } = yield call(api.get, `/users/${userInput}`);
    // DUPLICATED CHECK
    const userData = {
      id: data.id,
      avatar_url: data.avatar_url,
      name: data.name,
      username: data.login,
      latitude,
      longitude,
    };
    console.tron.log(userData);
    yield put(UserActions.addUserSuccess(userData));
  } catch (error) {
    console.tron.log(error);
    toast.error("User not found!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(UserActions.addUserFailed("User not found!"));
  }
}
