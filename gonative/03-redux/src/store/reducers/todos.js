const INITIAL_STATE = [
  {id: 1, text: 'Make coffee', done: false},
  {id: 2, text: 'Do exercise', done: false},
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {id: state[state.length - 1]?.id + 1 || 1, text: action.payload.text},
      ];
    case 'MARK_AS_COMPLETED':
      return state.map(todo =>
        todo.id === action.payload.id ? {...todo, done: !todo.done} : todo,
      );
    case 'REMOVE_TODO':
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
}
