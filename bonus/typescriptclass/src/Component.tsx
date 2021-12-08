import React, {Component} from 'react';

interface Todo {
  id: number,
  text: string
}

type Props = {
  todos: Todo[]
};

type State = {
  completed: Todo[]
};

class ComponentExample extends Component<Props, State> {
  state = {
    completed: []
  }

  render() {
    return <h1>Hello, World!</h1>
  }
}

export default ComponentExample;