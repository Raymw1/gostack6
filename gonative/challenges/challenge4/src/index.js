import './config/ReactotronConfig';
import {LogBox} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
LogBox.ignoreLogs([
  'EventEmmiter.removeListener',
  'If you want to use Reanimated 2',
  'paddingTop',
]);

import store from 'store';
import Routes from 'routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
