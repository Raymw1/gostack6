const INITIAL_STATE = [
  { id: 1, text: "Make Coffee" },
  { id: 2, text: "Do Exercise" },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
