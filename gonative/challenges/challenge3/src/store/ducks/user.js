// ================ ACTION TYPES ================
export const Types = {
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
};

// ================ REDUCERS ================
const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

export default function example(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return {...state, error: false, loading: true};
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload.user],
      };
    case Types.ADD_USER_FAILURE:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
}

// ================ ACTIONS ================
export const Creators = {
  addUserRequest: (username, latLng) => ({
    type: Types.ADD_USER_REQUEST,
    payload: {username, latLng},
  }),
  addUserSuccess: user => ({
    type: Types.ADD_USER_SUCCESS,
    payload: {user},
  }),
  addUserFailure: () => ({
    type: Types.ADD_USER_FAILURE,
  }),
};
