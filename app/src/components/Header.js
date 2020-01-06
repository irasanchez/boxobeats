import React from "react";
import Title from "./Title";
import fbConfig from "../firebase";

const Header = props => {
  return (
    <header>
      <Title />
      <button onClick={() => fbConfig.auth().signOut()}>Logout</button>
    </header>
  );
};

export default Header;
