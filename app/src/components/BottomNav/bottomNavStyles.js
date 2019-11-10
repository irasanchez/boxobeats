/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const bottomNavContainer = css`
  border: 2px solid red;
  width: 100%;
  height: 50px;
  background-color: grey;
  filter: opacity(70%);
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

export const icons = css`
  background-color: black;
  border-radius: 50%;
`;

export const icon1 = css`
  color: goldenrod;
`;

export const icon2 = css`
  color: limegreen;
`;

export const metronomeContainer = css`
  color: black;
  border: 1px dashed yellow;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const icon3 = css`
  color: dodgerblue;
`;
export const icon4 = css`
  color: orangered;
`;
