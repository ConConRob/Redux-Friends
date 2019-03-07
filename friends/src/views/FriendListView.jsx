import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import {
  getFriendsAsyc,
  addFriendAsync,
  editFriendAsync,
  login
} from "../actionCreators/actionCreators";

import FriendList from "../components/FriendList";
import FriendForm from "../components/FriendForm";
import LoginForm from "../components/LoginForm";

const StyledContainer = styled.div``;
export class FriendListView extends React.Component {
  state = {
    editID: 1
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
  updateComponent = () => {
    this.forceUpdate();
  };
  render() {
    console.log(this.props);
    const isLoggedIn = !!localStorage.getItem("userToken");
    if (!isLoggedIn) {
      return <LoginForm login={this.login} />;
    }
    return (
      <StyledContainer>
        <button onClick={this.logout}>Logout</button>

        {!!this.state.editID ? (
          <FriendForm title="Edit" submitFunction={this.editFriend} />
        ) : (
          <FriendForm title="Add" submitFunction={this.props.addFriendAsync} />
        )}
        <FriendList
          friends={this.props.friendReducer.friends}
          getFriendsAsyc={this.props.getFriendsAsyc}
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
  { getFriendsAsyc, addFriendAsync, login, editFriendAsync }
)(FriendListView);
