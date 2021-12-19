import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import Button from "styles/components/Button";
import { Container, Project } from "./styles";

class Projects extends Component {
  static propTypes = {
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { activeTeam } = this.props;
    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={() => {}}>+ New</Button>
            <Button onClick={() => {}}>Members</Button>
          </div>
        </header>
        <Project>
          <p>React Native Application</p>
        </Project>
        <Project>
          <p>React Native Application</p>
        </Project>
        <Project>
          <p>React Native Application</p>
        </Project>
        <Project>
          <p>React Native Application</p>
        </Project>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTeam: state.teams.active,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
