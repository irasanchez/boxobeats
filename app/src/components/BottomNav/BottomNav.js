/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import {
  FaRegMap,
  FaRegLightbulb,
  FaHammer,
  FaRegEye,
  FaCircle
} from "react-icons/fa";
import {
  bottomNavContainer,
  bottomNav,
  icon1,
  icon2,
  icon3,
  icon4,
  icons,
  metronomeContainer
} from "./bottomNavStyles";

const BottomNav = props => {
  return (
    <footer css={bottomNavContainer}>
      <nav css={bottomNav}>
        <FaRegMap css={[icons, icon1]} />
        <FaRegLightbulb css={[icons, icon2]} />
        <div css={metronomeContainer}>
          <FaCircle
            css={css`
              border: 1px solid red;
              width: 100%;
              height: 100%;
            `}
          />
        </div>
        <FaHammer css={[icons, icon3]} />
        <FaRegEye css={[icons, icon4]} />
      </nav>
    </footer>
  );
};

export default BottomNav;
