import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "store/ducks/auth";

function checkAuth({ roles, permissions }, checkRole, checkPermission) {
  if (checkRole && !roles.includes(checkRole)) {
    return false;
  }

  if (checkPermission && !permissions.includes(checkPermission)) {
    return false;
  }

  return true;
}

const Can = ({
  children,
  auth,
  checkRole,
  checkPermission,
  getPermissionsRequest,
}) => {
  useEffect(() => {
    getPermissionsRequest();
  }, []);

  return typeof children === "function"
    ? children(checkAuth(auth, checkRole, checkPermission))
    : checkAuth(auth, checkRole, checkPermission) && children;
};

Can.propTypes = {
  getPermissionsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Can);
