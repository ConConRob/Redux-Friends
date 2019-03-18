import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: stretch;
    margin: 30px 0;
    align-items: baseline;
    label {
      width: 100px;
    }
    input {
      width: 100%;
      padding: 6px;
    }
  }
  button {
    margin: 30px 0;
    padding: 6px;
  }
`;
const LoginForm = props => {
  function handleSubmit(event) {
    event.preventDefault();
    props.login();
  }
  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Login</button>
    </StyledLoginForm>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
