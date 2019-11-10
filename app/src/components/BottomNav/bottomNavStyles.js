/** @jsx jsx */
import { css } from "@emotion/core";
import {
  mainBg,
  secondaryBg,
  highlight,
  center
} from "../../assets/cssVariables";

export const bottomNavContainer = css`
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: ${mainBg};
  -webkit-box-shadow: 0px -1px 5px 0px ${mainBg};
  -moz-box-shadow: 0px -1px 5px 0px ${mainBg};
  box-shadow: 0px -1px 5px 0px ${mainBg};
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
  color: ${highlight};
  ${center}
  height: 4em;
  width: 4em;
  border-radius: 50%;
`;

export const metronomeIcon = css`
  color: ${highlight};
  background: ${mainBg};
  border-radius: 50%;
  padding: 2em;
  margin-bottom: 1rem;
  -webkit-box-shadow: 0px -1px 5px 0px ${mainBg};
  -moz-box-shadow: 0px -1px 5px 0px ${mainBg};
  box-shadow: 0px -1px 5px 0px ${mainBg};
  border: none;
`;
