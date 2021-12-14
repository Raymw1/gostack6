import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import api from "services/api";

import AuthActions from "store/ducks/auth";

export function* signIn({ email, password }) {
  try {
    const {
      data: { token },
    } = yield call(api.post, "/sessions", { email, password });
    localStorage.setItem("@Omni:token", token);
    yield put(AuthActions.signInSuccess(token));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Signin failure",
        message: "Verify your email/password!",
      })
    );
  }
}
