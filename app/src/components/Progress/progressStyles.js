/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { mainBg } from "../../assets/cssVariables.js";

export const progressView = css`
  width: 90%;
  margin: 0 auto;
  background: mainBg;
`;

export const progressViewTitle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const soundCard = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: grey;
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 25px;
`;

export const progressBarTotal = css`
  width: 90%;
  height: 8px;
  background-color: white;
  margin: 5px 0 20px 0;
  padding: 0;
  /* x, y, blur/spread, color */
  box-shadow: 5px 5px 5px black;
  border-radius: 3px;
`;

export const progressBarCompleted = css`
  background-color: green;
  height: 8px;
  width: 30%;
  box-shadow: none;
  border-radius: 3px 0px 0px 3px;
`;

/* content section below progress bar */
export const soundContent = css`
  /* border: 2px dashed red; */
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  margin-top: 15px;
`;

export const soundContentTitleContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;
`;

export const soundContentTitleText = css`
  border: 2px dashed green;
  margin: 0 0 10px 0;

  /* allows dividing line to extend beyond title */
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
`;

export const tipsContainer = css`
  width: 100%;
  margin-top: 20px;
  padding: 10px 2.5%;
  filter: opacity(25%);
  background-color: black;
  border-radius: 5px;
`;

export const tipsTitle = css`
  font-size: 1.2rem;
  color: white;
`;

export const tipsText = css`
  font-size: 1rem;
  color: white;
`;
