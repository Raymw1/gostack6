import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Repositories from './pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Repositories,
    },
    {
      initialRouteName: 'Repositories',
    },
  ),
);

export default Routes;
