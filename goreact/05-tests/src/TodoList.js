import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "../src/store/ducks/todos";

class TodoList extends Component {
  state = {
    newTodo: "",
  };

  handleAddTodo = () => {
    const { newTodo } = this.state;
    if (newTodo.trim() === "") return;
    this.props.addTodo(this.state.newTodo);
    // this.setState(
    //   { todos: [...this.state.todos, newTodo], newTodo: "" },
    //   () => {
    //     localStorage.setItem("todos", JSON.stringify(this.state.todos));
    //   }
    // );
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          name="todo"
          value={this.state.newTodo}
          onChange={(e) => this.setState({ newTodo: e.target.value })}
        />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state.todos.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
