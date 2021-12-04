import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Main from 'pages/Main';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main: createStackNavigator({
        Main,
      }),
      Main,
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#a8a8b3',
        inactiveTintColor: 'rgba(255, 255, 255, 0.3)',
        style: {
          backgroundColor: '#fff',
        },
      },
    },
  ),
);

export default Routes;
