import React from "react";
import style from "./progress.module.css";
/* //TODO:
    Look up how to make the progress percentage dynamic, so that I can make each one specific to each sound */

const ProgressView = props => {
  const { beats } = props;
  return (
    <ul className="progress-view" style={style}>
      {beats.map(sound => {
        return (
          <li>
            <div className="progress-bar">
              <div className="completed-progress"></div>
            </div>
            <section>
              <h2>{sound.name}</h2>
              <p>
                Tutorial: <a href={sound.tutorials[0]}>Watch on YouTube</a>
              </p>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default ProgressView;
