import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// // import {connect} from 'react-redux';
// // import {bindActionCreators} from 'redux';
// // import UserActions from 'store/ducks/user';

import {Input, Button, ButtonText, TextLink} from 'styles/components';
import Sign from 'components/Sign';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const {email, password} = this.state;
    return (
      <Sign>
        <Input
          name="email"
          value={email}
          onChangeText={email => this.setState({email})}
          placeholder="Your email"></Input>
        <Input
          name="password"
          value={password}
          onChangeText={password => this.setState({password})}
          placeholder="Your password"></Input>
        <Button>
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
//   //user: state.user
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(UserActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
