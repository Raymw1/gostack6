import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Creators as ErrorActions } from "../../store/ducks/error";
import { bindActionCreators } from "redux";

import { Container } from "./styles";

const ErrorBox = ({ error: { message, visible }, hideError }) =>
  visible && (
    <Container>
      <p>{message}</p>
      <button onClick={hideError}>
        <div>+</div>
      </button>
    </Container>
  );

ErrorBox.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  }).isRequired,
  hideError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
