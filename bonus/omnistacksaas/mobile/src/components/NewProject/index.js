import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProjectsActions from 'store/ducks/projects';

import {Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import Modal from 'components/Modal';

export class NewProject extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    createProjectRequest: PropTypes.func.isRequired,
  };

  state = {
    newProject: '',
  };

  handleSubmit = () => {
    const {createProjectRequest, onRequestClose} = this.props;
    createProjectRequest(this.state.newProject);
    onRequestClose();
  };

  render() {
    const {visible, onRequestClose} = this.props;
    const {newProject} = this.state;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
        <Text style={styles.label}>TITLE</Text>
        <TextInput
          style={styles.input}
          autoFocus
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={this.handleSubmit}
          value={newProject}
          onChangeText={text => this.setState({newProject: text})}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>CREATE PROJECT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProjectsActions, dispatch);

export default connect(null, mapDispatchToProps)(NewProject);
