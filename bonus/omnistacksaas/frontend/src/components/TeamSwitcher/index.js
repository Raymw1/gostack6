import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TeamsActions from "store/ducks/teams";

import Modal from "components/Modal";
import Button from "styles/components/Button";
import { Container, TeamList, Team, NewTeam } from "./styles";

class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
    createTeamRequest: PropTypes.func.isRequired,
    selectTeam: PropTypes.func.isRequired,
    openTeamModal: PropTypes.func.isRequired,
    closeTeamModal: PropTypes.func.isRequired,
    teams: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
      teamModalOpen: PropTypes.boolean,
    }).isRequired,
  };

  state = {
    newTeam: "",
  };

  componentDidMount() {
    this.props.getTeamsRequest();
  }

  handleInputChange = (e) => {
    if (!e.target.value) return;
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateTeam = (e) => {
    e.preventDefault();
    this.props.createTeamRequest(this.state.newTeam);
  };

  render() {
    const { teams, openTeamModal, closeTeamModal, selectTeam } = this.props;
    const { newTeam } = this.state;
    return (
      <Container>
        <TeamList>
          {teams.data.map((team) => (
            <Team key={team.id} onClick={() => selectTeam(team)}>
              <img
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=${team.name}`}
                alt={team.name}
              />
            </Team>
          ))}
          <NewTeam onClick={openTeamModal}>New</NewTeam>
          {teams.teamModalOpen && (
            <Modal>
              <h1>Create team</h1>
              <form onSubmit={this.handleCreateTeam}>
                <span>Name</span>
                <input
                  type="text"
                  name="newTeam"
                  value={newTeam}
                  onChange={this.handleInputChange}
                />
                <Button size="big" type="submit">
                  Save
                </Button>
                <Button
                  onClick={closeTeamModal}
                  size="small"
                  color="gray"
                  type="submit"
                >
                  Cancel
                </Button>
              </form>
            </Modal>
          )}
        </TeamList>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ teams: state.teams });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamSwitcher);
