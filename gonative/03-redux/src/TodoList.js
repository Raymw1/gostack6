import React from 'react';
import {View, Text, Button} from 'react-native';

import {connect} from 'react-redux';

const TodoList = ({todos, dispatch}) => (
  <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
    {todos.map(todo => (
      <Text
        key={todo.id}
        style={{textDecorationLine: todo.done ? 'line-through' : 'none'}}>
        {todo.text}
      </Text>
    ))}
    <Button
      onPress={() =>
        dispatch({
          type: 'ADD_TODO',
          payload: {todo: 'New Todo'},
        })
      }
      title="Add Todo"
    />
  </View>
);

const mapStateToProps = state => ({todos: state});

export default connect(mapStateToProps)(TodoList);
