/** @jsx jsx */
import { css } from "@emotion/core";
import { center, viewSize } from "../../assets/cssVariables";

export const focusView = css`
  ${viewSize}
  height: 60vh;
  display: flex;
  flex-direction: column;
  ${center}
  justify-content:space-around;
`;
