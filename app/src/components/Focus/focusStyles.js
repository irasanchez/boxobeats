/** @jsx jsx */
import { css } from "@emotion/core";
import { center, viewSize } from "../../assets/cssVariables";

export const focusView = css`
  ${viewSize}
  display: flex;
  flex-direction: column;
  ${center}
`;
