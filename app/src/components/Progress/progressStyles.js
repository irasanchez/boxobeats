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

// export const info = css`
//   background-color: ${highlight};
//   opacity: 0.6;
//   color: ${mainBg};
//   border-radius: 5px;
//   padding: 1em 5%;
// `;
