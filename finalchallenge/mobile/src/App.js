import React, {Component} from 'react';
import {View, Text} from 'react-native';

import createNavigator from './routes';

class App extends Component {
  render() {
    const Routes = createNavigator();
    return <Routes />;
  }
}

export default App;
