// ============ TYPES ============
export const Types = {
  ADD_REQUEST: "users/ADD_REQUEST",
  ADD_SUCCESS: "users/ADD_SUCCESS",
  ADD_FAILURE: "users/ADD_FAILURE",
};

const INITIAL_STATE = {
  data: [],
  error: null,
};

// ============ REDUCERS ============
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return state;
    case Types.ADD_SUCCESS:
      return { ...state, data: [...state.data, action.payload.user] };
    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}

// ============ ACTIONS ============
export const Creators = {
  addUserRequest: (user) => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }),
  addUserSuccess: (user) => ({
    type: Types.ADD_SUCCESS,
    payload: { user },
  }),
  addUserFailed: (error) => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
