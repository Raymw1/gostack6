import React, { Component } from "react";

class TodoList extends Component {
  state = {
    newTodo: "",
    todos: [],
  };

  handleAddTodo = () => {
    const { newTodo } = this.state;
    if (newTodo.trim() === "") return;
    this.setState({ todos: [...this.state.todos, newTodo], newTodo: "" });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo) => (
            <li>{todo}</li>
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

export default TodoList;
