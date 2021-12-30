import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TeamsActions from 'store/ducks/teams';

import {Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import Modal from 'components/Modal';

export class NewTeam extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    createTeamRequest: PropTypes.func.isRequired,
  };

  state = {
    newTeam: '',
  };

  handleSubmit = () => {
    const {createTeamRequest, onRequestClose} = this.props;
    createTeamRequest(this.state.newTeam);
    onRequestClose();
  };

  render() {
    const {visible, onRequestClose} = this.props;
    const {newTeam} = this.state;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.input}
          autoFocus
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={this.handleSubmit}
          value={newTeam}
          onChangeText={text => this.setState({newTeam: text})}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>CREATE TEAM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

// const mapStateToProps = state => ({
//   teams: state.teams,
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(null, mapDispatchToProps)(NewTeam);
