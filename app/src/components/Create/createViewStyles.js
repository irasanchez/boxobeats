/** @jsx jsx */
import { css } from "@emotion/core";
import { accentColorBlue, viewSize } from "../../assets/cssVariables.js";

export const create = css`
  ${viewSize}
`;
export const comboContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
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
