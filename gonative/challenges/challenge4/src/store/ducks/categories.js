import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

export const CategoriesTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  activeCategory: 1,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, {data}) => state.merge({data}),
});
