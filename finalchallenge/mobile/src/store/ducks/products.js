import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  productsRequest: null,
  productsSuccess: ['products'],
  typesRequest: ['id'],
  typesSuccess: ['productId', 'types'],
  sizesRequest: ['id'],
  sizesSuccess: ['type'],
});

export const ProductsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  productId: null,
  productsData: [],
  typeId: null,
  typesData: [],
  sizesData: [],
});

const productsReducer = (state, {products}) =>
  state.merge({productsData: products});

const typesReducer = (state, {productId, types}) =>
  state.merge({productId, typesData: types});

const sizesReducer = (state, {type}) =>
  state.merge({typeId: type.id, sizesData: type.sizes});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCTS_SUCCESS]: productsReducer,
  [Types.TYPES_SUCCESS]: typesReducer,
  [Types.SIZES_SUCCESS]: sizesReducer,
});
