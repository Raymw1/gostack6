import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from 'pages/Main';
import Podcast from 'pages/Podcast';

const Routes = createAppContainer(
  createStackNavigator(
    {Main, Podcast},
    {defaultNavigationOptions: {headerShown: false}},
  ),
);

export default Routes;
