import {createStore} from 'redux';

function reducer() {
  return ['Make coffee', 'Do exercise'];
}

const store = createStore(reducer);

export default store;
