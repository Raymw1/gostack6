import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// // import {connect} from 'react-redux';
// // import {bindActionCreators} from 'redux';
// // import UserActions from 'store/ducks/user';

import {View, Text} from 'react-native';
// import styles from './styles';

export default class SignIn extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <View>
        <Text>SignIn</Text>
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   //user: state.user
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(UserActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
