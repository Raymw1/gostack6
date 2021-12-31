import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MembersActions from 'store/ducks/members';

import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InviteMember from 'components/InviteMember';

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
  };

  componentDidMount() {
    this.props.getMembersRequest();
  }

  toggleModalOpen = modal => {
    this.setState({[`is${modal}ModalOpen`]: true});
  };

  toggleModalClosed = modal => {
    this.setState({[`is${modal}ModalOpen`]: false});
  };

  render() {
    const {members} = this.props;
    const {isInviteModalOpen} = this.state;
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
              <TouchableOpacity
                hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}
                onPress={() => {}}>
                <Icon name="settings" size={20} color="#b0b0b0" />
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.toggleModalOpen('Invite')}>
              <Text style={styles.buttonText}>Invite</Text>
            </TouchableOpacity>
          )}
        />
        <InviteMember
          visible={isInviteModalOpen}
          onRequestClose={() => this.toggleModalClosed('Invite')}
        />
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
