/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import SoundCard from "../SoundCard/SoundCard";

const FocusView = props => {
  const { beats } = props;
  //TODO: create view has some very similar logic. figure out how to make it more dry
  const randomSound = beats[Math.floor(Math.random() * beats.length)];

  return (
    <div>
      <h1>Display some text</h1>
      <SoundCard
        sound={randomSound}
        match={props.match}
        history={props.history}
        location={props.location}
      />
    </div>
  );
};

export default FocusView;
