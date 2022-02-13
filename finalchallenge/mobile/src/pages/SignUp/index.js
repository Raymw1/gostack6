import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthActions from 'store/ducks/auth';

import {Input, Button, ButtonText, TextLink} from 'styles/components';
import Sign from 'components/Sign';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const {name, email, password} = this.state;
    this.props.signUpRequest(name, email, password);
  };

  render() {
    const {name, email, password} = this.state;
    return (
      <Sign>
        <Input
          placeholder="Your full name"
          value={name}
          onChangeText={name => this.setState({name})}
          underlineColorAndroid="transparent"
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => this.emailInput.focus()}
        />
        <Input
          placeholder="Your email"
          value={email}
          onChangeText={email => this.setState({email})}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          ref={input => (this.emailInput = input)}
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
          onSubmitEditing={this.handleSubmit}
          ref={input => (this.passwordInput = input)}
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
        <TextLink onPress={() => this.props.navigation.navigate('SignIn')}>
          I already have an account
        </TextLink>
      </Sign>
    );
  }
}

// const mapStateToProps = state => ({
//   //user: state.user
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
