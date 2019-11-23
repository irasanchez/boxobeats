/** @jsx jsx */
import { css } from "@emotion/core";

import {
  mainBg,
  secondaryBg,
  textColor,
  accentColorBlue,
  accentColorGreen,
  center,
  boxShadow,
  hideThisElement
} from "../../assets/cssVariables.js";

/* content section below progress bar */
export const soundContent = css`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const soundContentTitleContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;
`;

export const soundContentTitleText = css`
  margin: 0 0 10px 0;
  /* allows dividing line to extend beyond title's actual text*/
  width: 60%;
  /* wrap sound title if too long */
  display: flex;
  flex-wrap: wrap;
  border-bottom: 3px solid black;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const playIcon = css`
  color: ${accentColorBlue};
  border-radius: 50%;
  ${boxShadow}
`;

export const soundContentText = css`
  width: 100%;
  flex-grow: 0;
  margin-bottom: 20px;
  display: flex;
`;

export const tipContainer = css`
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  height: 100px;

  padding: 10px 2.5%;
  border-radius: 5px;
  margin: 20px 0;

  filter: opacity(75%);
  color: ${accentColorBlue};
  background-color: ${mainBg};

  ${boxShadow};

  /* Tip title */
  div h3 {
    font-size: 1.4rem;
  }

  /* Tip content */
  div p {
    font-size: 1.2rem;
    padding-top: 5px;
  }
  /* user who made the tip */
  .imageContainer {
    margin-right: 2%;
    align-self: flex-end;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: ${accentColorGreen};
    }
  }
`;

export const expansion = css`
  display: flex;
  flex-direction: column;
  ${center}
`;

//CONDITIONAL STUFF
/* FIXME: need to make this more dry, rewrote manually to fix bugs*/
export const improvAndCreateStyleChanges = css`
  ${center}
  border-radius: 50%;
  height: 175px;
  width: 175px;
  flex-direction: row;
  padding: 0;
  margin: 2%;
  text-align: center;

  .progressBar,
  p {
    ${hideThisElement}
  }
  .soundContent {
    max-height: 100%;
    height: 100%;
    justify-content: space-evenly;
  }
  /* soundContentTitleContainer 👇🏽 */
  .soundContent div {
    height: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    align-self: stretch;
  }
  h2 {
    border: none;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 98%;
    overflow-y: hidden;
    justify-content: center;
  }
`;

export const createStyleChanges = css`
  ${center}
  border-radius: 50%;
  height: 175px;
  width: 175px;
  flex-direction: row;
  padding: 0;
  margin: 2%;
  text-align: center;

  .progressBar,
  p {
    ${hideThisElement}
  }
  .soundContent {
    max-height: 100%;
    height: 100%;
    justify-content: space-evenly;
  }
  .soundContent div {
    height: 80%;
    flex-direction: column;
    ${center}
    justify-content: space-evenly;
    align-self: stretch;
  }
  h2 {
    border: none;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 98%;
    overflow-y: hidden;
    justify-content: center;
  }
`;

export const focusViewStyleChanges = css`
  ${center}
  border-radius: 50%;
  height: 300px;
  width: 300px;
  flex-direction: row;
  padding: 0;
  margin: 2%;
  text-align: center;

  .progressBar {
    display: none;
  }
  .soundContent {
    max-height: 100%;
    height: 100%;
    justify-content: space-evenly;
  }
  .soundContent div {
    height: 80%;
    flex-direction: column;
    ${center}
    justify-content: space-evenly;
    align-self: stretch;
  }
  h2 {
    border: none;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 98%;
    overflow-y: hidden;
    justify-content: center;
  }
  p {
    display: none;
  }
`;
