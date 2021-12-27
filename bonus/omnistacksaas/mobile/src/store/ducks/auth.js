import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signUpRequest: ['name', 'email', 'password'],
  signOut: null,
  getPermissionsRequest: null,
  getPermissionsSuccess: ['roles', 'permissions'],
  initCheckSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
  roles: [],
  permissions: [],
});

export const successReducer = (state, {token}) =>
  state.merge({signedIn: true, token});

export const logout = state => state.merge({signedIn: false, token: null});

export const permissionsSuccess = (state, {roles, permissions}) =>
  state.merge({roles, permissions});

export const checkSuccess = state => state.merge({authChecked: true});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: successReducer,
  [Types.SIGN_OUT]: logout,
  [Types.GET_PERMISSIONS_SUCCESS]: permissionsSuccess,
  [Types.INIT_CHECK_SUCCESS]: checkSuccess,
});
