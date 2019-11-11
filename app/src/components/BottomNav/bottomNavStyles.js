/** @jsx jsx */
import { css } from "@emotion/core";
import {
  mainBg,
  secondaryBg,
  highlight,
  center,
  accentColorBlue,
  textColor,
  accentColorGreen
} from "../../assets/cssVariables";

export const bottomNavContainer = css`
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: ${accentColorBlue};
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
  color: ${mainBg};
  ${center}
  height: 4em;
  width: 4em;
  border-radius: 50%;
`;

export const metronomeIcon = css`
  /* TODO: ! change the color and box-shadow color based on whether or not metronome is playing or paused */
  color: ${accentColorGreen};
  background: ${mainBg};
  border-radius: 50%;
  padding: 2em;
  margin-bottom: 1rem;
  box-shadow: 0 -1px 20px ${accentColorGreen};
`;
