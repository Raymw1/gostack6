import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  getProjectsRequest: null,
  getProjectsSuccess: ["data"],
  openProjectModal: null,
  closeProjectModal: null,
  createProjectRequest: ["title"],
  createProjectSuccess: ["project"],
});

export const ProjectsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  projectModalOpen: false,
});

export const projectsSuccess = (state, { data }) => state.merge({ data });

export const changeModal = {
  open: (state) => state.merge({ projectModalOpen: true }),
  close: (state) => state.merge({ projectModalOpen: false }),
};

export const createProjectSuccess = (state, { project }) =>
  state.merge({ data: [...state.data, project] });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: projectsSuccess,
  [Types.OPEN_PROJECT_MODAL]: changeModal.open,
  [Types.CLOSE_PROJECT_MODAL]: changeModal.close,
  [Types.CREATE_PROJECT_SUCCESS]: createProjectSuccess,
});
