/** @jsx jsx */
import { jsx } from "@emotion/core";
import SoundCard from "../SoundCard/SoundCard";

import { progressView, progressViewTitle } from "./progressStyles";

import { info } from "../../assets/cssVariables";

/* 
    //TODO: !! Add more data like "exit" and "origin" to data set to be able to render those notes here. Body part strings where the sound is created vs where it exists the body.
      //TODO: !! Render those notes here.
    //TODO: !! make the info p tag here an overlay with the info that toggles on and off
*/

const ProgressView = props => {
  const { beats } = props;

  return (
    <ul css={progressView}>
      <h1 css={progressViewTitle}>PROGRESS</h1>
      <p css={info}>
        Here is a list of all of the sounds you could master, how familiar you
        are with them, and additional information about each sound. I am working
        on better ways to filter, sort, search, and add sounds.
      </p>
      {beats.map(sound => {
        return (
          <SoundCard
            sound={sound}
            key={Math.random()}
            pathname={props.location.pathname}
            tutorials={sound.tutorials}
          />
        );
      })}
    </ul>
  );
};

export default ProgressView;
