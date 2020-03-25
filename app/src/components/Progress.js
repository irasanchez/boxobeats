import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Route } from "react-router-dom";
import Sound from "./Sound";
import SoundList from "./SoundList";
const Progress = props => {
  const styles = {
    Paper: {
      height: "100%",
      maxHeight: "75vh",
      overflowY: "auto"
    }
  };
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <SoundList beats={props.beats} soundsNeeded={props.beats.length} />
        </Paper>
      </Grid>
      <Grid item sm>
        <Route path="/progress/:id">
          <Paper style={styles.Paper}>
            <Typography variant="h3">Welcome</Typography>
            <Typography variant="subtitle1">
              Please select a sound from the list for more detail
            </Typography>
            <Sound>{props.beats[1].name}</Sound>
          </Paper>
        </Route>
      </Grid>
    </Grid>
  );
};

export default Progress;
