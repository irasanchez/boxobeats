import React from "react";
import Title from "./Title";

const Header = props => {
  return (
    <header>
      <Title {...props} />
    </header>
  );
};

export default Header;
