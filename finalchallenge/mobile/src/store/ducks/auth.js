import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signUpRequest: ['name', 'email', 'password'],
  signUpSuccess: ['token'],
  signOut: null,
  initCheckSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
});

const successReducer = (state, {token}) => state.merge({signedIn: true, token});

const successLogoutReducer = state =>
  state.merge({signedIn: false, token: null});

const checkSuccessReducer = state => state.merge({authChecked: true});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: successReducer,
  [Types.SIGN_UP_SUCCESS]: successReducer,
  [Types.SIGN_OUT]: successLogoutReducer,
  [Types.INIT_CHECK_SUCCESS]: checkSuccessReducer,
});
