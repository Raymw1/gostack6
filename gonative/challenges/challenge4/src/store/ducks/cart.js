import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  addCartRequest: ['product'],
  addCartSuccess: ['cart'],
  addCartFailure: null,
  setProductCartRequest: ['id', 'quantity'],
  removeCartRequest: ['id'],
});

export const CartTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  subtotal: 0,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CART_SUCCESS]: (state, {cart}) => state.merge({...cart}),
});
