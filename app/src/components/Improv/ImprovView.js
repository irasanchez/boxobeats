/** @jsx jsx */

import { jsx } from "@emotion/core";

import { improvView } from "./improvStyles";
import SoundCard from "../SoundCard/SoundCard";

const ImprovView = props => {
  const { beats } = props;
  const fiveRandomSounds = beats.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div css={improvView}>
      <p>
        Use these random sounds in your freestyle. If you're comfortable or
        bored, it's time for new sounds.
      </p>
      <ul>
        {fiveRandomSounds.map(sound => (
          <SoundCard
            sound={sound}
            key={Math.random()}
            match={props.match}
            history={props.history}
            location={props.location}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImprovView;
