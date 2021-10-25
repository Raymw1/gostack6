import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo title="Study GoStack" />
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
