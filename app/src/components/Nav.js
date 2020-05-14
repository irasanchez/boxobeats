import React from "react";
import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { GiStairsGoal, GiMicrophone } from "react-icons/gi";

const Nav = ({ value, setValue }) => {
  const styles = {
    Footer: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "10vh",
      maxHeight: "10vh",
      backgroundColor: "#3F51B5",
    },
    NavLinks: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "40%",
    },
    Icons: {
      color: "white",
      width: "3.6rem",
      height: "3.6rem",
      padding: "5%",
    },
  };
  const { NavLinks, Icons, Footer } = styles;

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={Footer}
    >
      <NavLink style={NavLinks} to="/sounds">
        <BottomNavigationAction icon={<GiStairsGoal style={Icons} />} />
      </NavLink>

      <NavLink style={NavLinks} to="/practice">
        <BottomNavigationAction icon={<GiMicrophone style={Icons} />} />
      </NavLink>
    </BottomNavigation>
  );
};

export default Nav;
