import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Input, Button, ButtonText, Error} from './styles';

import {Creators as LoginActions} from 'store/ducks/login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Login extends Component {
  state = {
    username: '',
    error: false,
  };

  handleSubmit = async () => {
    const {username} = this.state;
    this.props.loginRequest(username);
  };

  render() {
    const {username} = this.state;
    const {error, loading} = this.props;
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
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Login</ButtonText>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
