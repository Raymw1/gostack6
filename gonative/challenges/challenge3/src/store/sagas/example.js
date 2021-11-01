import {put, call, select} from 'redux-saga/effects';

import {Creators as ExampleCreators} from 'store/ducks/example';

export default function* example() {
  try {
    yield put(ExampleCreators.exampleSuccess());
  } catch (err) {
    yield put(ExampleCreators.exampleFailure());
  }
}
