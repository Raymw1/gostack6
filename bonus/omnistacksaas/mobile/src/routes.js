import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from 'pages/Main';
import SingIn from 'pages/SignIn';

export default createAppContainer(createSwitchNavigator({SingIn, Main}));
