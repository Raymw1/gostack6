import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MembersActions from 'store/ducks/members';

import {Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import Modal from 'components/Modal';

export class InviteMembers extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    inviteMemberRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
  };

  handleSubmit = () => {
    const {inviteMemberRequest, onRequestClose} = this.props;
    inviteMemberRequest(this.state.email);
    onRequestClose();
    this.setState({email: ''});
  };

  render() {
    const {visible, onRequestClose} = this.props;
    const {email} = this.state;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={this.handleSubmit}
          value={email}
          onChangeText={text => this.setState({email: text})}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>INVITE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersActions, dispatch);

export default connect(null, mapDispatchToProps)(InviteMembers);
