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

const StyledContainer = styled.div``;
export class FriendListView extends React.Component {
  componentDidMount() {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios.defaults.headers.common["Authorization"] = userToken;
      this.props.getFriendsAsyc();
    }
  }

  render() {
    const isLoggedIn = !!localStorage.getItem("userToken");
    return (
      <StyledContainer>
        {isLoggedIn ? (
          <>
            <FriendForm submitFunction={this.props.addFriendAsync} />
            <FriendList friends={this.props.friendReducer.friends} />
          </>
        ) : (
          <>
            <button
              onClick={() => {
                const updateComponent = () => {
                  this.forceUpdate();
                };
                this.props.login("Lambda School", "i<3Lambd4", updateComponent);
              }}
            >
              LOGIN
            </button>
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
