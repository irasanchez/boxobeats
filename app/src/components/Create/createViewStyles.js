/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  secondaryBg,
  highlight,
  textColor,
  accentColorBlue,
  accentColorGreen,
  center,
  viewSize
} from "../../assets/cssVariables.js";

export const create = css`
  ${viewSize}
`;
export const comboContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const soundOption = css`
  height: 100px;
  width: 100px;
  background-color: black;
  color: ${accentColorBlue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
