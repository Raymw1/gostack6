import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProjectsActions from "store/ducks/projects";

import Modal from "components/Modal";
import Button from "styles/components/Button";
import { Container, Project } from "./styles";

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    openProjectModal: PropTypes.func.isRequired,
    closeProjectModal: PropTypes.func.isRequired,
    createProjectRequest: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string,
        })
      ),
      projectModalOpen: PropTypes.bool.isRequired,
    }),
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
    const { activeTeam, projects, openProjectModal, closeProjectModal } =
      this.props;
    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={openProjectModal}>+ New</Button>
            <Button onClick={() => {}}>Members</Button>
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
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTeam: state.teams.active,
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ProjectsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
