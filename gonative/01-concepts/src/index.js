import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({todos: [{id: 0, text: 'Component Mounted!'}]});
    }, 3000);
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
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={`${todo.id}:${todo.text}`} />
        ))}
        <Button title="Add Todo" onPress={this.addTodo} />
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
