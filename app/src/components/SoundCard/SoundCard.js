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
  focusViewStyleChanges
} from "./soundCardStyles";

import { hideThisElement } from "../../assets/cssVariables";
import TipContainer from "./TipContainer";

const SoundCard = props => {
  const { sound, currentStyle, tutorials } = props;

  //Expand Card
  const [shouldIOpenCard, toggleCard] = useState(hideThisElement);
  const cardToggler = event => {
    shouldIOpenCard === hideThisElement
      ? toggleCard(tipContainer)
      : toggleCard(hideThisElement);
  };

  //Progress Bar Update
  //TODO: !! Update me with real data. set to random for now.
  const [progressStatus] = useState(Math.floor(Math.random() * 100 + 1));

  const width =
    progressStatus === 100
      ? css`
          width: ${progressStatus}%;
          border-radius: 3px;
        `
      : css`
          width: ${progressStatus}%;
        `;

  const { pathname } = props.location;

  //TODO: !!! make .moreInfo icon button link expanded card as an overlay Note: you can re-render the soundCard component with different settings in the css pro
  const tut = tutorials[0] ? tutorials[0] : null;

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
          Nasal humming is just like regular humming, except the sound only
          comes out of your nose, not your mouth.
        </p>

        <MdKeyboardArrowDown
          size="2em"
          css={shouldIOpenCard === hideThisElement ? null : hideThisElement}
          onClick={cardToggler}
          className="moreInfo"
        />

        {/* render YouTube when card is expanded */}
        {shouldIOpenCard === hideThisElement ? null : <YouTube videoId={tut} />}

        {sound.tips ? (
          <TipContainer
            sound={sound}
            shouldIOpenCard={shouldIOpenCard}
            tips={sound.tips}
          />
        ) : null}
        <MdKeyboardArrowUp
          size="2em"
          onClick={cardToggler}
          css={shouldIOpenCard === hideThisElement ? hideThisElement : null}
        />
      </section>
    </li>
  );
};

export default SoundCard;
