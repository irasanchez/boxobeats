/** @jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import { FaPlayCircle } from "react-icons/fa";
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
  tipsContainer,
  tipsTitle,
  tipsText
} from "./progressStyles";

const SoundCard = props => {
  const { sound } = props;

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
        <p css={soundContentText}>Sound description here</p>
      </section>

      {sound.tips ? (
        <div css={tipsContainer}>
          <h3 css={tipsTitle}>User Tips:</h3>
          <p css={tipsText}>{sound.tips[0].tip} </p>
        </div>
      ) : null}
    </li>
  );
};

export default SoundCard;
