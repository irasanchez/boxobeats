/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const bottomNavContainer = css`
  border: 2px solid red;
  width: 100%;
  height: 60px;
  background-color: purple;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
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

export const metronomeContainer = css`
  display: flex;
  justify-content: space-evenly;
  width: 24%;
`;

export const metronomeIcon = css`
  color: white;
  background: black;
  border-radius: 50%;
  padding: 1em;
`;

export const icon3 = css`
  color: dodgerblue;
`;
export const icon4 = css`
  color: orangered;
`;
