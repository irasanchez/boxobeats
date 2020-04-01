import React from "react";
import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { GiStairsGoal, GiMicrophone } from "react-icons/gi";

const Nav = ({ value, setValue }) => {
  const styles = {
    Footer: {
      height: "10vh",
      maxHeight: "10vh"
    }
  };
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={styles.Footer}
    >
      <NavLink to="/progress">
        <BottomNavigationAction icon={<GiStairsGoal />} />
      </NavLink>

      <NavLink to="/practice">
        <BottomNavigationAction icon={<GiMicrophone />} />
      </NavLink>
    </BottomNavigation>
  );
};

export default Nav;
