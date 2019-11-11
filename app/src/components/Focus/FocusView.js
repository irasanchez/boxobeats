/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import SoundCard from "../SoundCard/SoundCard";
import { focusViewStyleChanges } from "../SoundCard/soundCardStyles";

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
      <h1>Display some text</h1>
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
