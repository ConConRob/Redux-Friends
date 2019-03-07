import React from "react";
import styled from "styled-components";

const StyledFriendForm = styled.form``;
export default class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      number: "",
      email: "",
      id: null
    };
  }
  componentDidMount() {
    const friend = this.props.friend;
    if (friend) {
      this.setState({
        text: friend.name,
        number: friend.age,
        email: friend.email
      });
    }
  }
  componentDidUpdate() {
    const friend = this.props.friend;
    if (friend) {
      console.log(friend.name);
      if (friend.id !== this.state.id) {
        this.setState({
          text: friend.name,
          number: friend.age,
          email: friend.email,
          id: friend.id
        });
      }
    }
  }
  handleInputChange = event => {
    this.setState({ [event.target.type]: event.target.value });
  };
  submit = event => {
    event.preventDefault();
    const person = {
      name: this.state.text,
      age: this.state.number,
      email: this.state.email
    };
    this.props.submitFunction(person);
    this.setState({ text: "", number: "", email: "" });
  };
  render() {
    return (
      <StyledFriendForm onSubmit={this.submit}>
        <h3>{`${this.props.title} a Friend`}</h3>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.text}
          placeholder="Name"
        />
        <input
          type="number"
          onChange={this.handleInputChange}
          value={this.state.number}
          placeholder="Age"
        />
        <input
          type="email"
          onChange={this.handleInputChange}
          value={this.state.email}
          placeholder="email"
        />
        <button type="submit">{this.props.title}</button>
      </StyledFriendForm>
    );
  }
}
