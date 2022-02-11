import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator({SignIn, SignUp}, {initialRouteName: 'SignIn'}),
  );
}
