import React from "react";
import { Bar } from "./styles";

import { connect } from "react-redux";

import deleteSvg from "../../assets/delete.svg";
import arrowSvg from "../../assets/arrow.svg";

const UsersBar = ({ users }) => (
  <Bar>
    <ul>
      {users.data.map((user) => (
        <li key={user.id}>
          <div className="user">
            <img src={user.avatar_url} alt={user.name} />
            <div className="info">
              <strong>{user.name}</strong>
              <small>{user.username}</small>
            </div>
          </div>
          <div className="actions">
            <button>
              <img src={deleteSvg} alt="Delete" />
            </button>
            <button>
              <img src={arrowSvg} alt="Spot" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </Bar>
);

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(UsersBar);
