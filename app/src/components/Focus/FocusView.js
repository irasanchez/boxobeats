/** @jsx jsx */

import React from "react";

import { jsx, css } from "@emotion/core";
import SoundCard from "../SoundCard/SoundCard";
import { focusViewStyleChanges } from "../SoundCard/soundCardStyles";
import { info } from "../../assets/cssVariables";

const FocusView = props => {
  const { beats } = props;
  const { pathname } = props.location;
  //TODO: !! create view has some very similar logic. figure out how to make it more dry
  const randomSound = beats[Math.floor(Math.random() * beats.length)];

  const currentStyle =
    pathname === "/focus"
      ? css`
          ${focusViewStyleChanges}
        `
      : null;

  return (
    <div>
      <h1>Focus</h1>
      <p css={info}>
        Here, we will focus on honing the nuanced ways we can create the sound
        shown below.
        <br />
        <br />
        One way to practice is by slowly increasing the speed and seeing how
        fast you can go while making the sound cleanly (e.g. as articulate as
        you can when going slowly).
      </p>
      <SoundCard
        sound={randomSound}
        history={props.history}
        location={props.location}
        css={currentStyle}
      />
    </div>
  );
};

export default FocusView;
