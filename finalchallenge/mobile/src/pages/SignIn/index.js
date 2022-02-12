import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthActions from 'store/ducks/auth';

import {Input, Button, ButtonText, TextLink} from 'styles/components';
import Sign from 'components/Sign';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  hadleSubmit = () => {
    const {email, password} = this.state;
    this.props.signInRequest(email, password);
  };

  render() {
    const {email, password} = this.state;
    return (
      <Sign>
        <Input
          placeholder="Your email"
          value={email}
          onChangeText={email => this.setState({email})}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <Input
          placeholder="Your password"
          value={password}
          onChangeText={password => this.setState({password})}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={this.hadleSubmit}
          ref={input => (this.passwordInput = input)}
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Sign In</ButtonText>
        </Button>
        <TextLink onPress={() => this.props.navigation.navigate('SignUp')}>
          Create free account
        </TextLink>
      </Sign>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth,
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
