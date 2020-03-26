import React, { useState, useEffect } from "react";
import Sound from "./Sound";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";

const SoundList = props => {
  //save this for the other views
  //const getRandomNSounds = (list, amountNeeded) => {
  //   if (amountNeeded === list.length) {
  //     return list;
  //   } else {
  //     const randomSounds = [];
  //     while (amountNeeded > 0) {
  //       const randomIndex = Math.floor(Math.random() * list.length);
  //       randomSounds.push(list[randomIndex]);
  //       amountNeeded--;
  //     }
  //     return randomSounds;
  //   }
  // };

  return (
    <Grid container spacing={24} style={{ width: "100%" }}>
      <List style={{ width: "100%" }}>
        {props.beats.map(beat => {
          return (
            <>
              <Link
                to={`/progress/${beat.id}`}
                style={{ textDecoration: "none" }}
              >
                <ListItem button style={{ width: "100%" }}>
                  <ListItemText
                    style={{
                      textTransform: "uppercase"
                    }}
                    primary={beat.name}
                  ></ListItemText>
                </ListItem>
              </Link>

              {//if this is not the last one in the list, show a divider after
              props.beats[props.beats.length - 1] !== beat ? <Divider /> : null}
            </>
          );
        })}
      </List>
    </Grid>
  );
};

export default SoundList;

//test that the component renders with props
