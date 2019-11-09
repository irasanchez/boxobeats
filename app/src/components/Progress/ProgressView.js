import React from "react";
import style from "./progress.module.css";

/* //TODO:
    - Look up how to make the progress percentage dynamic, so that I can make each one specific to each sound 
    - Separate out the li's into their own components. 
    - Add more data like "exit" and "origin" to data set to be able to render those notes here.
    - Render those notes here.
    - Watch on YouTube links open in new window
    - Make tips random rather than hard coded
*/

const ProgressView = props => {
  const { beats } = props;
  const {
    progressView,
    soundCard,
    progressBarTotal,
    progressBarCompleted,
    soundContent,
    tipsContainer
  } = style;
  return (
    <ul className={progressView}>
      {beats.map(sound => {
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
                  <h3>User Tips:</h3>
                  <p className="tip">{sound.tips[0].tip} </p>
                </div>
              ) : null}
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default ProgressView;
