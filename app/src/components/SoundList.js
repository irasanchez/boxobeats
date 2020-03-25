import React, { useState, useEffect } from "react";
import Sound from "./Sound";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

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
    <Grid container spacing={24} style={{ maxHeight: "100%" }}>
      <List>
        {getRandomNSounds(props.beats, props.soundsNeeded).map(beat => {
          return (
            <ListItem button>
              <ListItemText
                style={{ textTransform: "uppercase" }}
                primary={beat.name}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default SoundList;

//test that the component renders with props
