import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
  loadCategoriesFailure: null,
});

export const CategoriesTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  activeCategory: 1,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, {data}) => state.merge({data}),
});
