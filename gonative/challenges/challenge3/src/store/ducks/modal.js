// ================ ACTION TYPES ================
export const Types = {
  TOGGLE_SUCCESS: 'TOGGLE_SUCCESS',
};

// ================ REDUCERS ================
const INITIAL_STATE = {
  modalVisibility: false,
  latLng: {
    lat: 0,
    lng: 0,
  },
};

export default function example(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_SUCCESS:
      return {
        ...state,
        modalVisibility: action.payload.modalVisibility,
        latLng: action.payload.latLng,
      };
    default:
      return state;
  }
}

// ================ ACTIONS ================
export const Creators = {
  toggleModalSuccess: (modalVisibility, latLng) => ({
    type: Types.TOGGLE_SUCCESS,
    payload: {modalVisibility, latLng},
  }),
};
