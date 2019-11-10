/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import SoundCard from "./SoundCard";

import { progressView, progressViewTitle } from "./progressStyles";

/* 
    //TODO: Look up how to make the progress percentage dynamic, so that I can make each one specific to each sound 
    //TODO: Add more data like "exit" and "origin" to data set to be able to render those notes here.
    //TODO: Render those notes here.
    //TODO: Watch on YouTube links open in new window
    //TODO: Make tips random rather than hard coded
    //TODO:make the info p tag here an overlay with the info that toggles on and off
*/

const ProgressView = props => {
  const { beats } = props;

  return (
    <ul css={progressView}>
      <h1 css={progressViewTitle}>PROGRESS</h1>
      <p>
        Here is a list of all of the sounds you could master, how familiar you
        are with them, and additional information about each sound.
      </p>
      {beats.map(sound => {
        return <SoundCard sound={sound} />;
      })}
    </ul>
  );
};

export default ProgressView;
