import React from "react";
import { Bar } from "./styles";

import { connect } from "react-redux";

import deleteSvg from "../../assets/delete.svg";
import arrowSvg from "../../assets/arrow.svg";
import { bindActionCreators } from "redux";

import { Creators as UserActions } from "../../store/ducks/users";

import PropTypes from "prop-types";

const UsersBar = ({ handleLocation, users, removeUserRequest }) => (
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
            <button onClick={() => removeUserRequest(user.id)}>
              <img src={deleteSvg} alt="Delete" />
            </button>
            <button
              onClick={() => handleLocation(user.latitude, user.longitude)}
            >
              <img src={arrowSvg} alt="Spot" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </Bar>
);

UsersBar.propTypes = {
  handleLocation: PropTypes.func.isRequired,
  removeUserRequest: PropTypes.func.isRequired,
  users: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar_url: PropTypes.string.isRequired,
        name: PropTypes.string,
        username: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersBar);
