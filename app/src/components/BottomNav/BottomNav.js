/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
//react router
import { NavLink } from "react-router-dom";

// icons
// sizes have to be put on the size prop. default is 1em. rem doesn't appear to work.
import {
  FaRegMap,
  FaRegLightbulb,
  FaHammer,
  FaRegEye,
  FaCircle
} from "react-icons/fa";
import { GiMetronome } from "react-icons/gi";
// styles
import {
  bottomNavContainer,
  bottomNav,
  iconContainer,
  metronomeIcon
} from "./bottomNavStyles";

const BottomNav = props => {
  const sideIconSize = "2em";
  return (
    <footer css={bottomNavContainer}>
      <nav css={bottomNav}>
        <NavLink to="/progress" css={iconContainer}>
          <FaRegMap size={sideIconSize} />
        </NavLink>
        <NavLink to="/improv" css={iconContainer}>
          <FaRegLightbulb size={sideIconSize} />
        </NavLink>

        <GiMetronome css={metronomeIcon} size="4em" />

        <NavLink to="/create" css={iconContainer}>
          <FaHammer size={sideIconSize} />
        </NavLink>

        <NavLink to="/focus" css={iconContainer}>
          <FaRegEye size={sideIconSize} />
        </NavLink>
      </nav>
    </footer>
  );
};

export default BottomNav;
