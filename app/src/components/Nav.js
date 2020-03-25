import React from "react";
import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  GiBullseye,
  GiMountaintop,
  GiPerspectiveDiceSixFacesRandom,
  GiGroundSprout
} from "react-icons/gi";

const Nav = ({ value, setValue }) => {
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <NavLink to="/progress">
        <BottomNavigationAction icon={<GiMountaintop />} />
      </NavLink>

      <NavLink to="/focus">
        <BottomNavigationAction icon={<GiBullseye />} />
      </NavLink>

      <NavLink to="/freestyle">
        <BottomNavigationAction icon={<GiPerspectiveDiceSixFacesRandom />} />
      </NavLink>

      <NavLink to="/create">
        <BottomNavigationAction icon={<GiGroundSprout />} />
      </NavLink>
    </BottomNavigation>
  );
};

export default Nav;
