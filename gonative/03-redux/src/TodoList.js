import React from 'react';
import {View, Text, Button} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodosActions from './store/actions/todos';

const TodoList = ({todos, addTodo, markAsCompleted}) => (
  <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
    {todos.map(todo => (
      <Text
        key={todo.id}
        style={{textDecorationLine: todo.done ? 'line-through' : 'none'}}
        onPress={() => markAsCompleted(todo.id)}>
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Add Todo" />
  </View>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

const mapStateToProps = state => ({todos: state});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
