import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import fbConfig from "../../firebase";
import { AuthContext } from "./Auth";
const Login = ({ history }) => {
  const handleSubmit = useCallback(async event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      await fbConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  });

  const { currentUser } = useContext(AuthContext); //grabs current user from global this.state.

  //if the currentUser variable has a value, the person is logged in, redirect them to the home page
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email <input name="email" type="text" />
        </label>

        <label htmlFor="password">
          Password <input name="password" type="text" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
