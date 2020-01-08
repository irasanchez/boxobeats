import React from "react";
import Title from "./Title";
import firebase from "../firebase";

const Header = props => {
  return (
    <header>
      <Title />
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </header>
  );
};

export default Header;
