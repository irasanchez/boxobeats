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
  icon1,
  icon2,
  icon3,
  icon4,
  metronomeContainer,
  metronomeIcon
} from "./bottomNavStyles";

const BottomNav = props => {
  const sideIconSize = "3em";
  return (
    <footer css={bottomNavContainer}>
      <nav css={bottomNav}>
        <div css={iconContainer}>
          <FaRegMap size={sideIconSize} css={icon1} />
        </div>
        <div css={iconContainer}>
          <FaRegLightbulb size={sideIconSize} css={icon2} />
        </div>

        <div css={metronomeContainer}>
          <GiMetronome css={metronomeIcon} size="4.5em" />
        </div>

        <div css={iconContainer}>
          <FaHammer size={sideIconSize} css={icon3} />
        </div>

        <div css={iconContainer}>
          <FaRegEye size={sideIconSize} css={icon4} />
        </div>
      </nav>
    </footer>
  );
};

export default BottomNav;
