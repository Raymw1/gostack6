import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  cartRequest: ['productIds'],
});

export const ProductsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  productIds: null,
  productsData: [],
});

const cartReducer = (state, {productsIds, productsData}) =>
  state.merge({productIds, productsData});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_REQUEST]: cartReducer,
});
