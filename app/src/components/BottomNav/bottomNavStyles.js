/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  mainBg,
  accentColor,
  highlight,
  center
} from "../../assets/cssVariables";

export const bottomNavContainer = css`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: ${accentColor};
`;

export const bottomNav = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const iconContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19%;
`;

export const icon1 = css`
  color: goldenrod;
`;

export const icon2 = css`
  color: limegreen;
`;

export const metronomeIcon = css`
  color: ${highlight};
  background: ${mainBg};
  border-radius: 50%;
  padding: 2.5em;
`;

export const icon3 = css`
  color: dodgerblue;
`;
export const icon4 = css`
  color: orangered;
`;
