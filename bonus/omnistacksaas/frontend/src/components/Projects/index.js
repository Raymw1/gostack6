import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProjectsActions from "store/ducks/projects";
import MembersActions from "store/ducks/members";

import Can from "components/Can";
import Modal from "components/Modal";
import Button from "styles/components/Button";
import { Container, Project } from "./styles";
import Members from "components/Members";

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    openProjectModal: PropTypes.func.isRequired,
    closeProjectModal: PropTypes.func.isRequired,
    openMembersModal: PropTypes.func.isRequired,
    createProjectRequest: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string,
        })
      ),
      projectModalOpen: PropTypes.bool.isRequired,
    }),
    members: PropTypes.shape({
      membersModalOpen: PropTypes.bool.isRequired,
    }),
  };

  static defaultProps = {
    activeTeam: null,
  };

  state = {
    newProject: "",
  };

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;
    if (activeTeam) {
      getProjectsRequest();
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateProject = (e) => {
    e.preventDefault();
    this.props.createProjectRequest(this.state.newProject);
  };

  render() {
    const {
      activeTeam,
      projects,
      members,
      openProjectModal,
      closeProjectModal,
      openMembersModal,
    } = this.props;

    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Can checkPermission="projects_create">
              <Button onClick={openProjectModal}>+ New</Button>
              <Button onClick={openMembersModal}>Members</Button>
            </Can>
          </div>
        </header>

        {projects.data.map((project) => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}

        {projects.projectModalOpen && (
          <Modal>
            <h1>Create project</h1>
            <form onSubmit={this.handleCreateProject}>
              <span>Name</span>
              <input
                type="text"
                name="newProject"
                onChange={this.handleInputChange}
              />
              <Button size="big" type="submit">
                Save
              </Button>
              <Button size="small" color="gray" onClick={closeProjectModal}>
                Cancel
              </Button>
            </form>
          </Modal>
        )}

        {members.membersModalOpen && <Members />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTeam: state.teams.active,
  projects: state.projects,
  members: state.members,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...ProjectsActions, ...MembersActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
