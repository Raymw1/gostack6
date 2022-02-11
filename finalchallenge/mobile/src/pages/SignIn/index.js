import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// // import {connect} from 'react-redux';
// // import {bindActionCreators} from 'redux';
// // import UserActions from 'store/ducks/user';

import {
  Container,
  Background,
  Image,
  Form,
  Input,
  Button,
  ButtonText,
  Styles,
  TextLink,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class SignIn extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <Container>
        <Background>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.9)']}
            style={Styles.gradient}>
            <Image />
            <Form>
              <Input placeholder="Your email"></Input>
              <Input placeholder="Your password"></Input>
              <Button>
                <ButtonText>Sign In</ButtonText>
              </Button>
              <TextLink>Create free account</TextLink>
            </Form>
          </LinearGradient>
        </Background>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   //user: state.user
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(UserActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
