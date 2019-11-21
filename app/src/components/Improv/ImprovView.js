/** @jsx jsx */

import { jsx, css } from "@emotion/core";

import { improvView } from "./improvStyles";

import SoundCard from "../SoundCard/SoundCard";

import { createStyleChanges } from "../SoundCard/soundCardStyles";
import { info } from "../../assets/cssVariables";

const ImprovView = props => {
  const { beats } = props;
  const { pathname } = props.location;
  const fiveRandomSounds = beats.sort(() => 0.5 - Math.random()).slice(0, 5);

  const currentStyle =
    pathname === "/improv"
      ? css`
          ${createStyleChanges}
        `
      : null;

  return (
    <div css={improvView}>
      <h1>IMPROV</h1>
      <p css={info}>
        Use these random sounds in your freestyle. If you're comfortable or
        bored, it's time for new sounds.
      </p>
      <ul>
        {fiveRandomSounds.map(sound => (
          <SoundCard
            sound={sound}
            key={Math.random()}
            history={props.history}
            pathname={props.location.pathname}
            css={currentStyle}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImprovView;
