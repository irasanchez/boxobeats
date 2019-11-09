import React from "react";
import SoundCard from "./SoundCard";
import BottomNav from "../BottomNav/BottomNav";
import style from "./progress.module.css";

/* 
    //TODO: Look up how to make the progress percentage dynamic, so that I can make each one specific to each sound 
    //TODO: Separate out the li's into their own components. 
    //TODO: Add more data like "exit" and "origin" to data set to be able to render those notes here.
    //TODO: Render those notes here.
    //TODO: Watch on YouTube links open in new window
    //TODO: Make tips random rather than hard coded
*/

const ProgressView = props => {
  const { beats } = props;
  const { progressView } = style;
  return (
    <>
      <ul className={progressView}>
        <h1>PROGRESS</h1>
        {beats.map(sound => {
          return <SoundCard sound={sound} />;
        })}
      </ul>
      <BottomNav />
    </>
  );
};

export default ProgressView;
