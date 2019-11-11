/** @jsx jsx */
import { jsx } from "@emotion/core";
import SoundCard from "../SoundCard/SoundCard";

import { progressView, progressViewTitle } from "./progressStyles";

/* 
    //TODO: !! Add more data like "exit" and "origin" to data set to be able to render those notes here. Body part strings where the sound is created vs where it exists the body.
      //TODO: !! Render those notes here.
    //TODO: !!! Embed YouTube videos in expanded card view
    //TODO: !! make the info p tag here an overlay with the info that toggles on and off
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
        return (
          <SoundCard
            sound={sound}
            key={Math.random()}
            location={props.location}
            tutorials={sound.tutorials}
          />
        );
      })}
    </ul>
  );
};

export default ProgressView;
