import React from "react";
import styled from "styled-components";

const StyledFriend = styled.li`
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  margin-top: 10px;
  span {
    width: 200px;
  }
  .age {
    width: 100px;
  }
  .edit-button {
    margin-right: 10px;
  }
`;

export default function Friend(props) {
  const { friend, editFriend, deleteFriend } = props;
  return (
    <StyledFriend>
      <span className="name">{friend.name}</span>{" "}
      <span className="email">{friend.email}</span>
      <span className="age">{friend.age} years old</span>
      <div>
        <button className="edit-button" onClick={() => editFriend(friend.id)}>
          edit
        </button>
        <button onClick={() => deleteFriend(friend.id)}>delete</button>
      </div>
    </StyledFriend>
  );
}
