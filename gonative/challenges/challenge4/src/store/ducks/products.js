import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  loadProductsRequest: ['id'],
  loadProductsSuccess: ['data'],
  loadProductsFailure: null,
});

export const ProductsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, {data}) => state.merge({data}),
});
