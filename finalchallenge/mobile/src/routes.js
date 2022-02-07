import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from 'pages/SignIn';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator({SignIn}, {initialRouteName: 'SignIn'}),
  );
}
