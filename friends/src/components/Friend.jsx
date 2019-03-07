import React from "react";
import styled from "styled-components";

const StyledFriend = styled.li``;

export default function Friend(props) {
  const { friend, editFriend, deleteFriend } = props;
  return (
    <StyledFriend>
      {friend.name} &nbsp; {friend.email} &nbsp; {friend.age} &nbsp;{" "}
      <button onClick={() => editFriend(friend.id)}>edit</button>
      <button onClick={() => deleteFriend(friend.id)}>delete</button>
    </StyledFriend>
  );
}
