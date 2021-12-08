import {call, put, select} from '@redux-saga/core/effects';

import CartActions from 'store/ducks/cart';

export function* addCart({product}) {
  const {data} = yield select(state => state.cart);
  let indexProduct;
  const productExistsInCart = data.find((currentProduct, index) => {
    if (currentProduct.id === product.id) {
      indexProduct = index;
      return true;
    }
  });
  let newData;
  if (productExistsInCart) {
    newData = [...data];
    const oldProduct = {...newData[indexProduct]};
    oldProduct.quantity = oldProduct.quantity + 1;
    newData[indexProduct] = oldProduct;
  } else {
    newData = [...data, {...product, quantity: 1}];
  }
  const subtotal = calculateSubTotal(newData);
  const cart = {data: newData, subtotal};
  yield put(CartActions.addCartSuccess(cart));
}

export function* setCart({id, quantity}) {
  const {data} = yield select(state => state.cart);
  const indexProduct = data.findIndex(product => product.id === id);
  let newData = [...data];
  const oldProduct = {...newData[indexProduct]};
  oldProduct.quantity = quantity;
  newData[indexProduct] = oldProduct;
  const subtotal = calculateSubTotal(newData);
  const cart = {data: newData, subtotal};
  yield put(CartActions.addCartSuccess(cart));
}

function calculateSubTotal(data) {
  let subtotal = 0;
  data.forEach(product => {
    subtotal += product.price * product.quantity;
  });
  console.tron.log(subtotal);
  return subtotal;
}
