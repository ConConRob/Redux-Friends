import React from "react";
import styled from "styled-components";

const StyledFriend = styled.li`
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  span {
    width: 100px;
  }
  .email {
    width: 200px;
  }
`;

export default function Friend(props) {
  const { friend, editFriend, deleteFriend } = props;
  return (
    <StyledFriend>
      <span className="name">{friend.name}</span>{" "}
      <span className="email">{friend.email}</span>
      <span>{friend.age} years old</span>
      <button onClick={() => editFriend(friend.id)}>edit</button>
      <button onClick={() => deleteFriend(friend.id)}>delete</button>
    </StyledFriend>
  );
}
