import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import api from "services/api";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MembersActions from "store/ducks/members";

import Modal from "components/Modal";
import Button from "styles/components/Button";
import { MembersList, Invite } from "./styles";

class Members extends Component {
  static propTypes = {
    closeMembersModal: PropTypes.func.isRequired,
    getMembersRequest: PropTypes.func.isRequired,
    updateMemberRequest: PropTypes.func.isRequired,
    inviteMemberRequest: PropTypes.func.isRequired,
    members: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          user: PropTypes.shape({
            name: PropTypes.string,
          }),
          roles: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number,
              name: PropTypes.string,
            })
          ),
        })
      ),
    }),
  };

  state = {
    roles: [],
    invite: "",
  };

  componentDidMount() {
    this.props.getMembersRequest();
    this.getRoles();
  }

  getRoles = async () => {
    const { data: roles } = await api.get("/roles");
    this.setState({ roles });
  };

  handleRolesChange = (id, roles) => {
    this.props.updateMemberRequest(id, roles);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleInvite = (e) => {
    e.preventDefault();
    this.props.inviteMemberRequest(this.state.invite);
  };

  render() {
    const { closeMembersModal, members } = this.props;
    const { roles, invite } = this.state;
    return (
      <Modal size="big">
        <h1>Members</h1>
        <Invite onSubmit={this.handleInvite}>
          <input
            type="text"
            name="invite"
            placeholder="Invite to the team"
            value={invite}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Submit</Button>
        </Invite>
        <form>
          <MembersList>
            {members.data.map((member) => (
              <li key={member.id}>
                <strong>{member.user.name}</strong>
                <Select
                  isMulti
                  options={roles}
                  value={member.roles}
                  getOptionLabel={(role) => role.name}
                  getOptionValue={(role) => role.id}
                  onChange={(value) => this.handleRolesChange(member.id, value)}
                />
              </li>
            ))}
          </MembersList>
          <Button onClick={closeMembersModal} filled={false} color="gray">
            Close
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
