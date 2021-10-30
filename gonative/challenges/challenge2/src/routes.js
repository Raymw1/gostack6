import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Repositories from './pages/Repositories';
import Issues from './pages/Issues';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues,
    },
    {
      initialRouteName: 'Repositories',
    },
  ),
);

export default Routes;
