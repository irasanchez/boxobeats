/** @jsx jsx */
import { useState } from "react";

import { css, jsx } from "@emotion/core";
import { FaPlayCircle } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import YouTube from "react-youtube";

import {
  soundCard,
  progressBarTotal,
  progressBarCompleted,
  soundContent,
  soundContentTitleContainer,
  soundContentTitleText,
  playIcon,
  soundContentText,
  tipContainer,
  improvAndCreateStyleChanges,
  focusViewStyleChanges,
  expansion
} from "./soundCardStyles";

import { hideThisElement } from "../../assets/cssVariables";
import TipContainer from "./TipContainer";

//FIXME: Expanded card style does not work for mobile, works for tablet and desktop though

const SoundCard = props => {
  const { sound, tutorials } = props;

  //Expand Card
  const [showExpansion, showExpansionUpdate] = useState(false);

  const cardToggler = () => {
    showExpansionUpdate(!showExpansion);
  };

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

  //If there is a tutorial, show when card is expanded. If not, show nothing.
  const tut = tutorials ? tutorials[0] : null;

  return (
    <li
      id="soundCard"
      css={css`
        ${soundCard}
      `}
      {...props}
    >
      <div className="progressBar" css={progressBarTotal}>
        <div css={[progressBarCompleted, width]}></div>
      </div>
      <section className="soundContent" css={soundContent}>
        <div css={soundContentTitleContainer}>
          <h2 css={soundContentTitleText}>{sound.name}</h2>
          <FaPlayCircle css={playIcon} onClick={() => {}} />
        </div>

        <p css={soundContentText}>
          {/* TODO: Make this data dynamic */}
          Nasal humming is just like regular humming, except the sound only
          comes out of your nose, not your mouth.
        </p>

        {/* Expand the card */}
        <MdKeyboardArrowDown
          size="2em"
          onClick={cardToggler}
          className="moreInfo"
        />

        {showExpansion && (
          <section className="expanded-section" css={expansion}>
            {/* render YouTube when card is expanded */}
            <YouTube videoId={tut} />

            {/* If there are tips, show TipContainer */}
            {sound.tips ? (
              <TipContainer sound={sound} tips={sound.tips} />
            ) : null}

            {/* Close the expanded section */}
            <MdKeyboardArrowUp
              size="2em"
              onClick={cardToggler}
              className="icon"
            />
          </section>
        )}
      </section>
    </li>
  );
};

export default SoundCard;
