import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import Todo from './components/Todo';

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
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [{rotateZ: '20deg'}],
  },
});
