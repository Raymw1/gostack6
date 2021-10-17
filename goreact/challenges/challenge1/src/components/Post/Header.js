import React from "react";

const Header = (props) => (
  <div className="header">
    <img src={props.info.avatar} alt={props.info.name} />
    <div className="user-info">
      <strong>{props.info.name}</strong>
      <small>{props.info.createdAt}</small>
    </div>
  </div>
);

export default Header;
