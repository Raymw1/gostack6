import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Save",
    link: "#",
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string,
    link: PropTypes.string,
  };

  render() {
    return (
      <a href={this.props.link} onClick={this.props.onClick}>
        {this.props.children || "Save"}
      </a>
    );
  }
}

class App extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
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
