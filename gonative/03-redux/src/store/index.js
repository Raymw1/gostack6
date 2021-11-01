import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './ducks';
import rootSaga from './sagas';

const middlewares = [];
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : applyMiddleware(...[]);

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
