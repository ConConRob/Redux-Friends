import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  getFriendsAsyc,
  addFriendAsync,
  login
} from "../actionCreators/actionCreators";

import FriendList from "../components/FriendList";
import FriendForm from "../components/FriendForm";

const StyledContainer = styled.div``;
export class FriendListView extends React.Component {
  componentDidMount() {
    this.props.getFriendsAsyc();
  }

  render() {
    return (
      <StyledContainer>
        <FriendForm submitFunction={this.props.addFriendAsync} />
        <FriendList friends={this.props.friendReducer.friends} />
        <button onClick={() => this.props.login("Lambda School", "i<3Lambd4")}>
          LOGIN
        </button>
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
