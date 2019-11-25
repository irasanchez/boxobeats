/** @jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import {
  accentColorGreen,
  accentColorBlue,
  textColor,
  boxShadow
} from "../../assets/cssVariables";

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
    <div
      className="progressBar"
      css={css`
        width: 90%;
        height: 8px;
        background-color: ${textColor};
        margin: 5px 0 20px 0;
        padding: 0;
        border-radius: 3px;
        ${boxShadow}
      `}
    >
      <div
        css={[
          css`
            background-color: ${accentColorGreen};
            height: 8px;
            border-radius: 3px 0px 0px 3px;
            padding: 0;
            margin: 0;
          `,
          width
        ]}
      ></div>
    </div>
  );
};

export default ProgressBar;
