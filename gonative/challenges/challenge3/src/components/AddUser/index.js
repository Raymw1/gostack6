import React, {Component} from 'react';
import {Modal, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ModalActions} from '../../store/ducks/modal';

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
  state = {
    githubUser: '',
  };

  addUser = async () => {
    const {githubUser} = this.state;
    const {addUserRequest} = this.props;
    if (githubUser) {
      await addUserRequest(githubUser);
    }
  };

  render() {
    const {githubUser} = this.state;
    const {modalVisibility, loading, toggleModalSuccess} = this.props;
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
  modalVisibility: state.modal.modalVisibility,
  // loading: state.users.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
