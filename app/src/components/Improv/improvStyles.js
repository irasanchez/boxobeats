/** @jsx jsx */
import { css } from "@emotion/core";
import { viewSize, center } from "../../assets/cssVariables.js";

export const improvView = css`
  ${viewSize}
  height:100vh;
  margin: 0 auto;
  ul {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    flex-wrap: wrap;
    ${center};
    margin-bottom: 100px;
  }
`;
