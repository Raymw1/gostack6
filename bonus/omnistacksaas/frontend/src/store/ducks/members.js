import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  openMembersModal: null,
  closeMembersModal: null,
  getMembersRequest: null,
  getMembersSuccess: ["data"],
});

export const MembersTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({ data: [], membersModalOpen: false });

export const changeModal = {
  open: (state) => state.merge({ membersModalOpen: true }),
  close: (state) => state.merge({ membersModalOpen: false }),
};

export const getMembersSuccess = (state, { data }) => state.merge({ data });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_MEMBERS_MODAL]: changeModal.open,
  [Types.CLOSE_MEMBERS_MODAL]: changeModal.close,
  [Types.GET_MEMBERS_SUCCESS]: getMembersSuccess,
});
