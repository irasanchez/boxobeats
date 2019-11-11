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

export const soundCard = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${secondaryBg};
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 25px;
  box-shadow: 0 1.5px 7px ${textColor};
`;

export const progressBarTotal = css`
  width: 90%;
  height: 8px;
  background-color: ${textColor};
  margin: 5px 0 20px 0;
  padding: 0;
  /* x, y, blur/spread, color */
  border-radius: 3px;
  ${boxShadow}
`;

export const progressBarCompleted = css`
  background-color: ${accentColorGreen};
  height: 8px;
  border-radius: 3px 0px 0px 3px;
  padding: 0;
  margin: 0;
`;

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
  /*TODO: update the color for this border to the reddish color */
  border-bottom: 3px solid black;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const playIcon = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const soundContentText = css`
  width: 100%;
  flex-grow: 0;
  margin-bottom: 20px;
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

//TODO: remove these
export const tipsTitle = css``;
export const tipsText = css``;

//CONDITIONAL STUFF
export const improvAndCreateStyleChanges = `
  ${center}
  border-radius: 50%;
  height: 175px;
  width: 175px;
  flex-direction: row;
  padding: 0;
  margin: 2%;
  text-align: center;

  .progressBar {
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
  p {
    ${hideThisElement}
  }
`;
/* the variables are not working for some reason below. Need to manually put in value. */
export const focusViewStyleChanges = `${center}
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
