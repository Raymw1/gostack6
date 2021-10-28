import './config/ReactotronConfig';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogBox} from 'react-native';

import createNavigator from './routes';

LogBox.ignoreLogs([
  'If you want to use Reanimated 2',
  "EventEmitter.removeListener('change', ...)",
]);

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    this.setState({userChecked: true, userLogged: !!username});
  }

  render() {
    const {userChecked, userLogged} = this.state;
    if (!userChecked) return null;
    const Routes = createNavigator(userLogged);
    return <Routes />;
  }
}
