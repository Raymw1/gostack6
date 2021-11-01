// ================ ACTION TYPES ================
export const Types = {
  EXAMPLE_REQUEST: 'EXAMPLE_REQUEST',
  EXAMPLE_SUCCESS: 'EXAMPLE_SUCCESS',
  EXAMPLE_FAILURE: 'EXAMPLE_FAILURE',
};

// ================ REDUCERS ================
const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

export default function example(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.EXAMPLE_REQUEST:
      return {...state, loading: true};
    case Types.EXAMPLE_SUCCESS:
      return {...state, loading: false, data: action.payload.data};
    case Types.EXAMPLE_FAILURE:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
}

// ================ ACTIONS ================
export const Creators = {
  exampleRequest: () => ({
    type: Types.EXAMPLE_REQUEST,
  }),
  exampleSuccess: data => ({
    type: Types.EXAMPLE_SUCCESS,
    payload: {data},
  }),
  exampleFailure: () => ({
    type: Types.EXAMPLE_FAILURE,
  }),
};
