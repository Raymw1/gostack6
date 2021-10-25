import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [],
  };

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
