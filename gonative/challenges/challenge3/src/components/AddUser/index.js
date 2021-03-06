import React, {Component} from 'react';
import {Modal, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ModalActions} from '../../store/ducks/modal';
import {Creators as UserActions} from '../../store/ducks/user';

import {
  Container,
  ModalContainer,
  ModalTitle,
  Input,
  ButtonsContainer,
  Button,
  ButtonText,
} from './styles';

class AddUser extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      modalVisibility: PropTypes.bool.isRequired,
      latLng: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    }).isRequired,
    user: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    toggleModalSuccess: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    githubUser: '',
  };

  addUser = async () => {
    const {githubUser} = this.state;
    if (!githubUser.trim()) return;
    const {
      modal: {latLng},
      addUserRequest,
    } = this.props;
    await addUserRequest(githubUser, latLng);
    this.setState({githubUser: ''});
  };

  render() {
    const {githubUser} = this.state;
    const {
      modal: {modalVisibility},
      user: {loading},
      toggleModalSuccess,
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisibility}
        onRequestClose={() => toggleModalSuccess(false)}>
        <Container>
          <ModalContainer>
            <ModalTitle>Add new location</ModalTitle>
            <Input
              placeholder="Github User"
              autoCorrect={false}
              autoFocus={true}
              value={githubUser}
              onChangeText={text => this.setState({githubUser: text})}
              returnKeyType="send"
              onSubmitEditing={this.addUser}
            />
            <ButtonsContainer>
              <Button cancel onPress={() => toggleModalSuccess(false)}>
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button last onPress={this.addUser}>
                <ButtonText>
                  {loading ? (
                    <ActivityIndicator color="#FFF" size="small" />
                  ) : (
                    'Save'
                  )}
                </ButtonText>
              </Button>
            </ButtonsContainer>
          </ModalContainer>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...ModalActions, ...UserActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
