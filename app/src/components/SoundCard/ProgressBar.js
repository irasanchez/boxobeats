/** @jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import { progressBarTotal, progressBarCompleted } from "./soundCardStyles";

const ProgressBar = ({ sound }) => {
  //Progress Bar Completed Percentage
  //TODO: !! Update me with real data. Set to random for now.
  const [progressStatus] = useState(Math.floor(Math.random() * 100 + 1));
  //Progress Bar Completed Width
  const width =
    progressStatus === 100
      ? css`
          width: ${progressStatus}%;
          border-radius: 3px;
        `
      : css`
          width: ${progressStatus}%;
        `;

  return (
    <div className="progressBar" css={progressBarTotal}>
      <div css={[progressBarCompleted, width]}></div>
    </div>
  );
};

export default ProgressBar;
