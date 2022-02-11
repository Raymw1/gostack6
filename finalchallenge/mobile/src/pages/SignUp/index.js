import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// // import {connect} from 'react-redux';
// // import {bindActionCreators} from 'redux';
// // import UserActions from 'store/ducks/user';

import {Input, Button, ButtonText, TextLink} from 'styles/components';
import Sign from 'components/Sign';

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    const {name, email, password} = this.state;
    return (
      <Sign>
        <Input
          name="name"
          value={name}
          onChangeText={name => this.setState({name})}
          placeholder="Your full name"
        />
        <Input
          name="email"
          value={email}
          onChangeText={email => this.setState({email})}
          placeholder="Your email"
        />
        <Input
          name="password"
          value={password}
          onChangeText={password => this.setState({password})}
          placeholder="Your password"
        />
        <Button>
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

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(UserActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
