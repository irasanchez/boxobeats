import React, { useState, useEffect } from "react";
import Sound from "./Sound";
import { Grid } from "@material-ui/core";

const SoundList = props => {
  const getRandomNSounds = (list, amountNeeded) => {
    if (amountNeeded === list.length) {
      return list;
    } else {
      const randomSounds = [];
      while (amountNeeded > 0) {
        const randomIndex = Math.floor(Math.random() * list.length);
        randomSounds.push(list[randomIndex]);
        amountNeeded--;
      }
      return randomSounds;
    }
  };

  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
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
    </Grid>
  );
};

export default SoundList;

//test that the component renders with props
