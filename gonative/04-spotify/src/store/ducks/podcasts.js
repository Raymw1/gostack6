import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});
// Types: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }
// Creators: {
//   loadRequest: () => ({type: 'LOAD_REQUEST'}),
//   loadSuccess: data => ({type: 'LOAD_SUCCESS', data}),
//   loadFailure: () => ({type: 'LOAD_FAILURE'}),
// };

export const PodcastTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, {data}) => state.merge({data}),
});
