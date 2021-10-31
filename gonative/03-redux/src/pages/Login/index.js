import React, {Component} from 'react';
import api from 'services/api';

import {Container, Input, Button, ButtonText, Error} from './styles';

import * as LoginActions from 'store/actions/login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Login extends Component {
  state = {
    username: '',
    error: false,
  };

  handleSubmit = async () => {
    const {username} = this.state;
    const {loginSuccess, loginFailure, navigation} = this.props;
    try {
      await api.get(`/users/${username}`);
      loginSuccess(username);
      navigation.navigate('Repositories');
    } catch (error) {
      loginFailure();
    }
  };

  render() {
    const {username} = this.state;
    const {error} = this.props;
    return (
      <Container>
        {error && <Error>User not found!</Error>}
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Input your User"
          value={username}
          onChangeText={text => this.setState({username: text})}
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
