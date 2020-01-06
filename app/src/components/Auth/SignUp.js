import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import fbConfig from "../../firebase";

const SignUp = ({ history }) => {
  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      //grab email and password from the target
      const { email, password } = event.target.elements; //target form and the label and input elements inside of it

      try {
        await fbConfig
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email <input name="email" type="text" />
        </label>

        <label htmlFor="password">
          Password <input name="password" type="text" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp); //attaches history to props
