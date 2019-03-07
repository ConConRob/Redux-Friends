import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = props => {
  function handleSubmit(event) {
    event.preventDefault();
    props.login();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
