/** @jsx jsx */
// TODO: Separate out soundCard styling to keep things clean
import { css } from "@emotion/core";
import {
  mainBg,
  secondaryBg,
  textColor,
  accentColorBlue,
  accentColorGreen,
  center,
  viewSize,
  boxShadow
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
  ${boxShadow};
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
  width: 30%;
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
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const playIcon = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const soundContentText = css`
  /* border: 2px dashed yellow; */
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

  /* Tip content */
  div p {
    padding-top: 5px;
  }
  /* user who made the tip */
  .imageContainer {
    align-self: flex-end;
    margin-right: 2%;

    color: ${mainBg};
    display: flex;
    flex-direction: column;
    ${center}
    text-align: center;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: ${accentColorGreen};
    }
  }
`;

export const tipsTitle = css`
  font-size: 1.2rem;
`;

export const tipsText = css`
  font-size: 1rem;
`;
