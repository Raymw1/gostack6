import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MembersActions from "store/ducks/members";

import Modal from "components/Modal";
import Button from "styles/components/Button";
import { MembersList } from "./styles";

class Members extends Component {
  static propTypes = {
    closeMembersModal: PropTypes.func.isRequired,
  };

  render() {
    const { closeMembersModal } = this.props;
    return (
      <Modal size="big">
        <h1>Members</h1>
        <form>
          <MembersList>
            <li>
              <strong>Rayan Wilbert</strong>
            </li>
          </MembersList>
          <Button onClick={closeMembersModal} filled={false} color="gray">
            Cancel
          </Button>
        </form>
      </Modal>
    );
  }
}

// const mapStateToProps = (state) => ({
//   members: state.members,
// });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MembersActions, dispatch);

export default connect(null, mapDispatchToProps)(Members);
