/** @jsx jsx */
import { useState } from "react";

import { css, jsx } from "@emotion/core";
import { FaPlayCircle } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
  soundCard,
  progressBarTotal,
  progressBarCompleted,
  soundContent,
  soundContentTitleContainer,
  soundContentTitleText,
  playIcon,
  soundContentText,
  tipContainer
} from "./soundCardStyles";

import { hideThisElement, center } from "../../assets/cssVariables";
import TipContainer from "./TipContainer";

const SoundCard = props => {
  const { sound } = props;

  //Expand Card
  const [shouldIOpenCard, toggleCard] = useState(hideThisElement);
  const cardToggler = event => {
    shouldIOpenCard === hideThisElement
      ? toggleCard(tipContainer)
      : toggleCard(hideThisElement);
  };

  //Progress Bar Update
  //TODO:Update me with real data. set to random for now.
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

  // use props.location.pathname
  //TODO: Hide elements that are not needed when on certain router paths
  //TODO: move this code out when it looks right
  const { pathname } = props.location;
  const hideInImprovView =
    pathname === "/improv"
      ? css`
          /* hide the elements not needed in improvView */
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
        `
      : null;
  //TODO: make .moreInfo icon button link to expanded card in progressView

  const hideInProgressView =
    pathname === "/progress"
      ? css`
          /* hide the elements not needed in progressView */
        `
      : null;

  return (
    <li id="soundCard" css={[soundCard, hideInImprovView, hideInProgressView]}>
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
