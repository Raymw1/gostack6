import {createStore} from 'redux';

const INITIAL_STATE = ['Make coffee', 'Do exercise'];

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload.todo];
    case 'REMOVE_TODO':
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
