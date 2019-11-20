/** @jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";

import {
  soundCard,
  progressBarTotal,
  progressBarCompleted,
  soundContent,
  soundContentTitleContainer,
  soundContentTitleText,
  playIcon,
  soundContentText,
  expansion
} from "./soundCardStyles";

import TipContainer from "./TipContainer";
import ExpandedSection from "./ExpandedSection";
import SoundCardContent from "./SoundCardContent";

//FIXME: Expanded card style does not work for mobile, works for tablet and desktop though

const SoundCard = props => {
  const { sound } = props;
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

  //TODO: !!! make .moreInfo icon button link expanded card as an overlay Note: you can re-render the soundCard component with different settings in the css prop

  return (
    <li
      id="soundCard"
      css={css`
        ${soundCard}
      `}
      {...props}
    >
      {/* TODO: Make Progress Bar its own component */}
      <div className="progressBar" css={progressBarTotal}>
        <div css={[progressBarCompleted, width]}></div>
      </div>

      <SoundCardContent sound={sound} />
    </li>
  );
};

export default SoundCard;
