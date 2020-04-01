import React, { useState, useEffect } from "react";
import Sound from "./Sound";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import { TiPlus } from "react-icons/ti";
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
              <ListItem
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <Link
                  to={`/progress/${beat.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText
                    style={{
                      textTransform: "uppercase"
                    }}
                    primary={beat.name}
                  ></ListItemText>
                </Link>
                <ListItemIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => props.setCurrent(beat)}
                >
                  <TiPlus />
                </ListItemIcon>
              </ListItem>

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
