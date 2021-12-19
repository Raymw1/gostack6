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
    getMembersRequest: PropTypes.func.isRequired,
    members: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          user: PropTypes.shape({
            name: PropTypes.string,
          }),
        })
      ),
    }),
  };

  componentDidMount() {
    this.props.getMembersRequest();
  }

  render() {
    const { closeMembersModal, members } = this.props;
    return (
      <Modal size="big">
        <h1>Members</h1>
        <form>
          <MembersList>
            {members.data.map((member) => (
              <li key={member.id}>
                <strong>{member.user.name}</strong>
              </li>
            ))}
          </MembersList>
          <Button onClick={closeMembersModal} filled={false} color="gray">
            Cancel
          </Button>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MembersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Members);
