// Types
export const Types = {
  ADD: "todos/ADD",
};

const INITIAL_STATE = {
  data: [],
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return { ...state, data: [...state.data, action.payload.todo] };
    default:
      return state;
  }
}

export const Creators = {
  addTodo: (todo) => ({ type: Types.ADD, payload: { todo } }),
};
