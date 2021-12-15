import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["token"],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem("@Omni:token"),
  token: localStorage.getItem("@Omni:token") || null,
});

const successReducer = (state, { token }) =>
  state.merge({ signedIn: true, token });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: successReducer,
});
