import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return (
      <a href={this.props.link || "Link"} onClick={this.props.onClick}>
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
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
