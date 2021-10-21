import { call, put, select } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import api from "../../services/api";

import { Creators as UserActions } from "../ducks/users";

export function* addUser(action) {
  try {
    const { userInput, latitude, longitude } = action.payload.user;
    const { data } = yield call(api.get, `/users/${userInput}`);
    const isDuplicated = yield select((state) =>
      state.users.data.find((user) => user.id === data.id)
    );
    if (isDuplicated) {
      yield put(UserActions.addUserFailed("User already added!"));
      toast.error("User already added!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const userData = {
        id: data.id,
        avatar_url: data.avatar_url,
        name: data.name,
        username: data.login,
        latitude,
        longitude,
      };
      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (error) {
    console.tron.log(error);
    yield put(UserActions.addUserFailed("User not found!"));
    toast.error("User not found!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}
