import React, { Component } from "react";

class TodoList extends Component {
  state = {
    newTodo: "",
    todos: [],
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    if (todos) this.setState({ todos: JSON.parse(todos) });
  }

  handleAddTodo = () => {
    const { newTodo } = this.state;
    if (newTodo.trim() === "") return;
    this.setState(
      { todos: [...this.state.todos, newTodo], newTodo: "" },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo) => (
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

export default TodoList;
