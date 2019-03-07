import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Friend from "./Friend";
import { connect } from "react-redux";
const StyledFriendList = styled.ul``;

export default class FriendList extends Component {
  componentDidMount() {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios.defaults.headers.common["Authorization"] = userToken;
      this.props.getFriendsAsyc();
    }
  }
  render() {
    return (
      <StyledFriendList>
        {this.props.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </StyledFriendList>
    );
  }
}
