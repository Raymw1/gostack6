import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";

class App extends Component {
  state = { counter: 0 };

  componentDidMount() {
    // Initialize
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Check if it should render
    return nextState.counter <= 10;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.counter);
  }

  componentWillUnmount() {
    // Unexistence
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(`Callback: ${this.state.counter}`);
    // });
    // this.setState((state) => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      <Fragment>
        <h1>Hello, World!</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Add</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
