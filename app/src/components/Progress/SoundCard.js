/** @jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import { FaPlayCircle } from "react-icons/fa";
import {
  soundCard,
  progressBarTotal,
  progressBarCompleted,
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
      <section css={soundContentTitleContainer}>
        <div css={soundContentTitleText}>
          <h2>{sound.name}</h2>
        </div>
        <FaPlayCircle css={playIcon} />
      </section>
      <p css={soundContentText}>Sound description here</p>
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
