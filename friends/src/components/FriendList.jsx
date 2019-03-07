import React, { Component } from "react";
import styled from "styled-components";

import Friend from "./Friend";
const StyledFriendList = styled.ul``;

export default class FriendList extends Component {
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
