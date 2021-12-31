import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MembersActions from 'store/ducks/members';

import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InviteMember from 'components/InviteMember';
import RoleUpdater from 'components/RoleUpdater';
import Can from 'components/Can';

export class Members extends Component {
  static propTypes = {
    getMembersRequest: PropTypes.func.isRequired,
    members: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          user: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }),
        }),
      ),
    }),
  };

  state = {
    isInviteModalOpen: false,
    isRoleModalOpen: false,
    memberEdit: null,
  };

  componentDidMount() {
    this.props.getMembersRequest();
  }

  toggleInviteModalOpen = () => {
    this.setState({isInviteModalOpen: true});
  };

  toggleInviteModalClosed = () => {
    this.setState({isInviteModalOpen: false});
  };

  toggleRoleModalOpen = member => {
    this.setState({isRoleModalOpen: true, memberEdit: member});
  };

  toggleRoleModalClosed = () => {
    this.setState({isRoleModalOpen: false, memberEdit: null});
  };

  render() {
    const {members} = this.props;
    const {isInviteModalOpen, isRoleModalOpen, memberEdit} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Members</Text>
        <FlatList
          style={styles.memberList}
          data={members.data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <View style={styles.memberContainer}>
              <Text style={styles.memberName}>{item.user.name}</Text>
              <Can checkRole="administrator">
                <TouchableOpacity
                  hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}
                  onPress={() => this.toggleRoleModalOpen(item)}>
                  <Icon name="settings" size={20} color="#b0b0b0" />
                </TouchableOpacity>
              </Can>
            </View>
          )}
          ListFooterComponent={() => (
            <Can checkPermission="invites_create">
              <TouchableOpacity
                style={styles.button}
                onPress={this.toggleInviteModalOpen}>
                <Text style={styles.buttonText}>Invite</Text>
              </TouchableOpacity>
            </Can>
          )}
        />

        {memberEdit && (
          <RoleUpdater
            visible={isRoleModalOpen}
            onRequestClose={this.toggleRoleModalClosed}
            member={memberEdit}
          />
        )}
        <Can checkPermission="invites_create">
          <InviteMember
            visible={isInviteModalOpen}
            onRequestClose={this.toggleInviteModalClosed}
          />
        </Can>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Members);
