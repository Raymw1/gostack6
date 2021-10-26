import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, {Component} from 'react';
import {View, StyleSheet, Button, Text, Platform} from 'react-native';

import Todo from '~/components/Todo';

console.tron.log('Ok');

export default class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.setState({todos: [{id: 0, text: 'Component Mounted!'}]});
  }

  // static getDerivedStateFromProps(nextProps, prevState) { // Use props to change State
  //   return {todos: nextProps.todos};
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // Prevent render
    return nextState.todos.length < 10;
  }

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  addTodo = () => {
    const {todos} = this.state;
    this.setState({
      todos: [
        ...todos,
        {id: todos[todos.length - 1]?.id + 1 || 0, text: 'Add'},
      ],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo title="Make coffee" />
        <Todo title="Study GoNative" />
        <Text style={styles.text}>
          Pletform: {Platform.OS === 'ios' ? 'IOS' : 'Android'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [{rotateZ: '20deg'}],
  },
  text: {
    ...Platform.select({
      ios: {
        color: '#F00',
      },
      android: {
        color: '#FF0',
      },
    }),
  },
});
