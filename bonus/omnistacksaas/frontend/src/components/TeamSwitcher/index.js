import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TeamsActions from "store/ducks/teams";

import { Container, TeamList, Team } from "./styles";

class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
    selectTeam: PropTypes.func.isRequired,
    teams: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getTeamsRequest();
  }

  render() {
    return (
      <Container>
        <TeamList>
          {this.props.teams.data.map((team) => (
            <Team key={team.id} onClick={() => this.props.selectTeam(team)}>
              <img
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=${team.name}`}
                alt={team.name}
              />
            </Team>
          ))}
        </TeamList>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ teams: state.teams });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamSwitcher);
