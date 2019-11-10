/** @jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/core";
import { FaPlayCircle } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
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

import userData from "../../assets/userData.json";

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
        <aside name="tipsContainer" css={tipsContainer}>
          <div>
            <h3 css={tipsTitle}>User Tips:</h3>
            <p css={tipsText}>{sound.tips[0].tip} </p>
          </div>
          <div>
            <img src={userData.userData[0].avatar} />
            <p>{userData.userData[0].username}</p>
          </div>
        </aside>
      ) : null}
      <MdExpandMore size="2em" />
    </li>
  );
};

export default SoundCard;
