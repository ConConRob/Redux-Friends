import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import {
  getFriendsAsyc,
  addFriendAsync,
  editFriendAsync,
  deleteFriendAsync,
  login
} from "../actionCreators/actionCreators";

import FriendList from "../components/FriendList";
import FriendForm from "../components/FriendForm";
import LoginForm from "../components/LoginForm";

const StyledContainer = styled.div`
  .logout-button {
    float: right;
  }
  form {
    width: 100%;
  }
`;
export class FriendListView extends React.Component {
  state = {
    editID: null,
    editFriend: null
  };
  login = () => {
    this.props.login(
      this.props.form.login.values.username,
      this.props.form.login.values.password,
      this.updateComponent
    );
  };
  logout = () => {
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("userToken");
    this.updateComponent();
  };
  editFriend = person => {
    this.props.editFriendAsync(this.state.editID, person);
    this.setState({ editID: null });
  };
  setEditFriend = id => {
    this.setState({ editID: id });
    const friendIndex = this.props.friendReducer.friends.findIndex(
      f => f.id == id
    );
    const friend = this.props.friendReducer.friends[friendIndex];
    this.setState({ editFriend: friend });
  };
  updateComponent = () => {
    this.forceUpdate();
  };
  render() {
    const isLoggedIn = !!localStorage.getItem("userToken");
    if (!isLoggedIn) {
      return <LoginForm login={this.login} />;
    }
    return (
      <StyledContainer>
        <button className="logout-button" onClick={this.logout}>
          Logout
        </button>

        {!!this.state.editID ? (
          <FriendForm
            title="Edit"
            friend={this.state.editFriend}
            submitFunction={this.editFriend}
          />
        ) : (
          <FriendForm title="Add" submitFunction={this.props.addFriendAsync} />
        )}
        <FriendList
          editFriend={this.setEditFriend}
          friends={this.props.friendReducer.friends}
          getFriendsAsyc={this.props.getFriendsAsyc}
          deleteFriend={this.props.deleteFriendAsync}
        />
      </StyledContainer>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { getFriendsAsyc, addFriendAsync, login, editFriendAsync, deleteFriendAsync }
)(FriendListView);
