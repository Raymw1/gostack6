import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ['data'],
  selectTeam: ['team'],
  openTeamModal: null,
  closeTeamModal: null,
  createTeamRequest: ['name'],
  createTeamSuccess: ['team'],
});

export const TeamsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  teamModalOpen: false,
  active: null,
  // active: JSON.parse(localStorage.getItem("@Omni:team")) || null,
});

export const getSuccess = (state, {data}) => state.merge({data});

export const selectTeamSuccess = (state, {team}) => {
  return state.merge({active: team});
};

export const changeModal = {
  open: state => state.merge({teamModalOpen: true}),
  close: state => state.merge({teamModalOpen: false}),
};

export const createSuccess = (state, {team}) =>
  state.merge({data: [...state.data, team]});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
  [Types.SELECT_TEAM]: selectTeamSuccess,
  [Types.OPEN_TEAM_MODAL]: changeModal.open,
  [Types.CLOSE_TEAM_MODAL]: changeModal.close,
  [Types.CREATE_TEAM_SUCCESS]: createSuccess,
});
