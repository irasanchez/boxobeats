/** @jsx jsx */
import React, { useState } from "react";

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
  soundContentTitle,
  soundContentText,
  tipContainer
} from "./progressStyles";

import { hideThisElement } from "../../assets/cssVariables";
import TipContainer from "./TipContainer";

const SoundCard = props => {
  const { sound } = props;

  const [shouldIOpenCard, toggleCard] = useState(hideThisElement);

  const cardToggler = event => {
    shouldIOpenCard === hideThisElement
      ? toggleCard(tipContainer)
      : toggleCard(hideThisElement);
  };

  return (
    <li css={soundCard}>
      <div css={progressBarTotal}>
        <div css={progressBarCompleted}></div>
      </div>
      <section css={soundContent}>
        <div css={soundContentTitleContainer}>
          <h2 css={soundContentTitleText}>{sound.name}</h2>
          <FaPlayCircle css={playIcon} />
        </div>
        <p css={soundContentText}>
          Nasal humming is just like regular humming, except the sound only
          comes out of your nose, not your mouth.
        </p>

        <MdKeyboardArrowDown
          size="2em"
          css={shouldIOpenCard === hideThisElement ? null : hideThisElement}
          onClick={cardToggler}
        />
        {sound.tips ? (
          <TipContainer sound={sound} shouldIOpenCard={shouldIOpenCard} />
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
