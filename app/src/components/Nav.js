import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Fab } from "@material-ui/core";
import {
  GiMetronome,
  GiBullseye,
  GiMountaintop,
  GiPerspectiveDiceSixFacesRandom,
  GiGroundSprout
} from "react-icons/gi";

const Nav = props => {
  return (
    <AppBar style={{ display: "flex", flexDirection: "row" }} position="sticky">
      <NavLink to="/progress">
        <GiMountaintop />
      </NavLink>
      <NavLink to="focus">
        <GiBullseye />
      </NavLink>
      <Fab>
        <GiMetronome />
      </Fab>
      <NavLink to="freestyle">
        <GiPerspectiveDiceSixFacesRandom />
      </NavLink>
      <NavLink to="create">
        <GiGroundSprout />
      </NavLink>
    </AppBar>
  );
};

export default Nav;
