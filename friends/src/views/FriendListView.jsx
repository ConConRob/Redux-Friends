import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import {
  getFriendsAsyc,
  addFriendAsync,
  login
} from "../actionCreators/actionCreators";

import FriendList from "../components/FriendList";
import FriendForm from "../components/FriendForm";
import LoginForm from "../components/LoginForm";

const StyledContainer = styled.div``;
export class FriendListView extends React.Component {
  componentDidMount() {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios.defaults.headers.common["Authorization"] = userToken;
      this.props.getFriendsAsyc();
    }
  }
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
  updateComponent = () => {
    this.forceUpdate();
  };
  render() {
    const isLoggedIn = !!localStorage.getItem("userToken");
    return (
      <StyledContainer>
        {isLoggedIn ? (
          <>
            <button onClick={this.logout}>Logout</button>
            <FriendForm submitFunction={this.props.addFriendAsync} />
            <FriendList
              friends={this.props.friendReducer.friends}
              getFriendsAsyc={this.props.getFriendsAsyc}
            />
          </>
        ) : (
          <>
            <LoginForm login={this.login} />
          </>
        )}
      </StyledContainer>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { getFriendsAsyc, addFriendAsync, login }
)(FriendListView);
