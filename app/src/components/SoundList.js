import React, { useState, useEffect } from "react";
import Sound from "./Sound";
import { Container } from "@material-ui/core";

const SoundList = props => {
  const getRandomNSounds = (list, amountNeeded) => {
    const randomSounds = [];
    while (amountNeeded > 0) {
      const randomIndex = Math.floor(Math.random() * list.length);
      randomSounds.push(list[randomIndex]);
      amountNeeded--;
    }
    return randomSounds;
  };

  return (
    <Container>
      {getRandomNSounds(props.beats, props.soundsNeeded).map(beat => {
        return (
          <Sound key={beat.name} {...beat}>
            {beat.tips.length ? (
              <p>
                <span>💡</span>
                {` Tip: ${
                  beat.tips[Math.floor(Math.random() * beat.tips.length)]
                }`}
              </p>
            ) : null}
          </Sound>
        );
      })}
    </Container>
  );
};

export default SoundList;

//test that the component renders with props
