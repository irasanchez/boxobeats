/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
// sizes have to be put on the size prop. default is 1em. rem doesn't appear to work.
import {
  FaRegMap,
  FaRegLightbulb,
  FaHammer,
  FaRegEye,
  FaCircle
} from "react-icons/fa";
import { GiMetronome } from "react-icons/gi";
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
        <div css={iconContainer}>
          <FaRegMap size={sideIconSize} />
        </div>
        <div css={iconContainer}>
          <FaRegLightbulb size={sideIconSize} />
        </div>

        <GiMetronome css={metronomeIcon} size="4em" />

        <div css={iconContainer}>
          <FaHammer size={sideIconSize} />
        </div>

        <div css={iconContainer}>
          <FaRegEye size={sideIconSize} />
        </div>
      </nav>
    </footer>
  );
};

export default BottomNav;
