import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TeamsActions from 'store/ducks/teams';

import {View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import NewTeam from 'components/NewTeam';

export class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
    teams: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    this.props.getTeamsRequest();
  }

  toggleModalOpen = () => {
    this.setState({isModalOpen: true});
  };

  toggleModalClosed = () => {
    this.setState({isModalOpen: false});
  };

  render() {
    const {teams, selectTeam} = this.props;
    const {isModalOpen} = this.state;
    return (
      <View style={styles.container}>
        {teams.data.map(team => (
          <TouchableOpacity
            key={team.id}
            style={styles.teamContainer}
            onPress={() => selectTeam(team)}>
            <Image
              style={styles.teamAvatar}
              source={{
                uri: `https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`,
              }}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.newTeam} onPress={this.toggleModalOpen}>
          <Icon name="add" size={24} color="#999" />
        </TouchableOpacity>
        <NewTeam
          visible={isModalOpen}
          onRequestClose={this.toggleModalClosed}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamSwitcher);
