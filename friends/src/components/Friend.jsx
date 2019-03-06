import React from "react";
import styled from "styled-components";

const StyledFriend = styled.li``;

export default function Friend(props) {
  const { friend } = props;
  return (
    <StyledFriend>
      {" "}
      {friend.name} &nbsp; {friend.email}{" "}
    </StyledFriend>
  );
}
