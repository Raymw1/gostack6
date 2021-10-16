import React, { Component } from "react";
import PropTypes from "prop-types";

const Button = (props) => (
  <a href={props.link} onClick={props.onClick}>
    {props.children || "Save"}
  </a>
);

Button.defaultProps = {
  children: "Save",
  link: "#",
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
