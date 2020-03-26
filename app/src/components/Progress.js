import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Route } from "react-router-dom";
import Sound from "./Sound";
import SoundList from "./SoundList";
const Progress = props => {
  const styles = {
    View: {
      height: "80vh",
      maxHeight: "80vh",
      width: "100%"
    },
    LeftPanel: {
      height: "100%",
      maxHeight: "100%",
      overflowY: "auto"
    }
  };

  return (
    <Grid container style={styles.View}>
      <Grid item sm style={styles.LeftPanel}>
        <Paper>
          <SoundList beats={props.beats} soundsNeeded={props.beats.length} />
        </Paper>
      </Grid>
      <Grid item sm>
        <Route exact path="/progress">
          <Typography variant="h3">Welcome</Typography>
          <Typography variant="subtitle1">
            Please select a sound from the list for more detail
          </Typography>
        </Route>
        <Route path="/progress/:id">
          <Paper style={styles.Paper}>
            <Sound beats={props.beats}>{props.beats[1].name}</Sound>
          </Paper>
        </Route>
      </Grid>
    </Grid>
  );
};

export default Progress;
