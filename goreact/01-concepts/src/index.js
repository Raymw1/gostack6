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
  handleClcik = () => {
    alert("Click");
  };

  render() {
    return (
      <Fragment>
        <h1>Hello, World!</h1>
        <Button link="#" onClick={this.handleClcik}>
          Test
        </Button>
        <br />
        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
