import React from "react";
import style from "./progress.module.css";

const SoundCard = props => {
  const { sound } = props;
  const {
    soundCard,
    progressBarTotal,
    progressBarCompleted,
    soundContent,
    tipsContainer,
    tipTitle,
    tipText
  } = style;

  return (
    <li className={soundCard}>
      <div className={progressBarTotal}>
        <div className={progressBarCompleted}></div>
      </div>
      <section className={soundContent}>
        <h2>{sound.name}</h2>
        <p>
          Tutorial: <a href={sound.tutorials[0]}>Watch on YouTube</a>
        </p>
        {sound.tips ? (
          <div className={tipsContainer}>
            <h3 id={tipTitle}>User Tips:</h3>
            <p id={tipText}>{sound.tips[0].tip} </p>
          </div>
        ) : null}
      </section>
    </li>
  );
};

export default SoundCard;
