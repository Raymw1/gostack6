import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Repositories from './pages/Repositories';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories,
    },
    {
      initialRouteName: 'Repositories',
    },
  ),
);

export default Routes;
