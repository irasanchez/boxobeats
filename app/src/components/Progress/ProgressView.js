import React from "react";
import style from "./progress.module.css";
/* //TODO:
    - Look up how to make the progress percentage dynamic, so that I can make each one specific to each sound 
    - Separate out the li's into their own components. 
    - Add more data like "exit" and "origin" to data set to be able to render those notes here.
    - Render those notes here.
    - Watch on YouTube links open in new window
*/

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
