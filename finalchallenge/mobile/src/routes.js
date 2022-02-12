import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Main from 'pages/Main';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {SignIn, SignUp, Main},
      {initialRouteName: isLoggedIn ? 'Main' : 'SignIn'},
    ),
  );
}
