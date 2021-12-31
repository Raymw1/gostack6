import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MembersActions from 'store/ducks/members';

import {View, Text, TouchableOpacity, Switch} from 'react-native';
import styles from './styles';
import Modal from 'components/Modal';

export class RoleUpdater extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    updateMemberRequest: PropTypes.func.isRequired,
    member: PropTypes.shape({
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      ),
    }),
  };

  state = {
    roles: [],
  };

  componentDidMount() {
    this.getRoles();
  }

  getRoles = async () => {
    const {data: roles} = await api.get('roles');
    this.setState({roles});
  };

  handleRoleChange = (value, role) => {
    const {updateMemberRequest, onRequestClose, member} = this.props;
    const roles = value
      ? [...member.roles, role]
      : member.roles.filter(memberRole => memberRole.id !== role.id);
    updateMemberRequest(member.id, roles);
    onRequestClose();
  };

  render() {
    const {visible, onRequestClose, member} = this.props;
    const {roles} = this.state;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
        <View>
          {roles.map(role => (
            <View key={role.id} style={styles.roleContainer}>
              <Text style={styles.roleText}>{role.name}</Text>
              <Switch
                value={
                  !!member.roles.find(memberRole => role.id === memberRole.id)
                }
                onValueChange={value => this.handleRoleChange(value, role)}
              />
            </View>
          ))}
          <TouchableOpacity onPress={onRequestClose} style={styles.cancel}>
            <Text style={styles.cancelText}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersActions, dispatch);

export default connect(null, mapDispatchToProps)(RoleUpdater);
