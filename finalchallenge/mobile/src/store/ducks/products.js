import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  productsRequest: null,
  productsSuccess: ['products'],
  typesRequest: ['id'],
  typesSuccess: ['product'],
  sizesRequest: ['id'],
  sizesSuccess: ['type'],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  productId: null,
  products: [],
  typeId: null,
  types: [],
  sizes: [],
});

const productsReducer = (state, {products}) => state.merge({products});

const typesReducer = (state, {product}) =>
  state.merge({productId: product.id, types: product.types});

const sizesReducer = (state, {type}) =>
  state.merge({typeId: type.id, sizes: type.sizes});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCTS_SUCCESS]: productsReducer,
  [Types.TYPES_SUCCESS]: typesReducer,
  [Types.SIZES_SUCCESS]: sizesReducer,
});
