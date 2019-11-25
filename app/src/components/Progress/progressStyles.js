/** @jsx jsx */
import { css } from "@emotion/core";
import {
  center,
  viewSize,
  highlight,
  mainBg
} from "../../assets/cssVariables.js";

export const progressView = css`
  ${viewSize}
  margin-bottom: 50px;
`;
export const progressViewTitle = css`
  display: flex;
  ${center}
  margin-bottom: 50px;
`;
