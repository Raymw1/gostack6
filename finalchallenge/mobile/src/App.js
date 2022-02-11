import React, {Component} from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Require cycle']);

import createNavigator from './routes';

class App extends Component {
  render() {
    const Routes = createNavigator();
    return <Routes />;
  }
}

export default App;
