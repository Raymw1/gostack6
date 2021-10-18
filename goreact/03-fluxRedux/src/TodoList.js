import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo("Add Todo")}>Add Todo</button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
