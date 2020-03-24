import React, { useState } from "react";
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
      <GiMountaintop />
      <GiBullseye />
      <Fab>
        <GiMetronome />
      </Fab>
      <GiPerspectiveDiceSixFacesRandom />
      <GiGroundSprout />
    </AppBar>
  );
};

export default Nav;
