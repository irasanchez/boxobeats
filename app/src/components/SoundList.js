import React from "react";
import Sound from "./Sound";
import { Container } from "@material-ui/core";

const SoundList = props => {
  return (
    <Container>
      {props.beats.map(beat => {
        return (
          <Sound key={beat.name}>
            <p>{beat.name}</p>
          </Sound>
        );
      })}
    </Container>
  );
};

export default SoundList;

//test that the component renders with props
