import React from "react";
import { Bar } from "./styles";

import { connect } from "react-redux";

import deleteSvg from "../../assets/delete.svg";
import arrowSvg from "../../assets/arrow.svg";
import { bindActionCreators } from "redux";

import { Creators as UserActions } from "../../store/ducks/users";

const UsersBar = ({ users, removeUserRequest }) => (
  <Bar visible={users.data.length > 0}>
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
              <img
                src={deleteSvg}
                onClick={() => removeUserRequest(user.id)}
                alt="Delete"
              />
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersBar);
