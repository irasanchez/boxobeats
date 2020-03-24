import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Fab
} from "@material-ui/core";
import {
  GiMetronome,
  GiBullseye,
  GiMountaintop,
  GiPerspectiveDiceSixFacesRandom,
  GiGroundSprout
} from "react-icons/gi";

const Nav = () => {
  const [value, setValue] = useState(""); //idk what this is for but it's used in BottomNavigation

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Progress"
        value="progress"
        icon={<GiMountaintop />}
      />
      <BottomNavigationAction
        label="Focus"
        value="focus"
        icon={<GiBullseye />}
      />
      <Fab color="primary" aria-label="add">
        <GiMetronome />
      </Fab>
      <BottomNavigationAction
        label="Freestyle"
        value="freestyle"
        icon={<GiPerspectiveDiceSixFacesRandom />}
      />
      <BottomNavigationAction
        label="Create"
        value="create"
        icon={<GiGroundSprout />}
      />
    </BottomNavigation>
  );
};

export default Nav;
