import React, { useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Route } from "react-router-dom";
import Sound from "./Sound";
import SoundList from "./SoundList";

const Progress = (props) => {
  const styles = {
    View: {
      height: "80vh",
      maxHeight: "80vh",
      width: "100%",
    },
    Panels: {
      height: "100%",
      maxHeight: "100%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
    },
    Paper: {
      height: "100%",
      width: "100%",
      // padding: "0 5%",
    },
  };

  return (
    <Grid container style={styles.View}>
      <Grid item sm={5} style={styles.Panels}>
        <Paper>
          <SoundList />
        </Paper>
      </Grid>

      <Grid item container sm={7} style={styles.Panels}>
        <Route exact path="/progress">
          <Typography variant="h3">Welcome</Typography>
          <Typography variant="subtitle1">
            Please select a sound from the list for more information on that
            sound. If you want to add a sound to your practice session, hit the
            plus sign. When you're ready to practice, head over to the practice
            view using the microphone icon.
          </Typography>
        </Route>
        <Route path="/progress/:id">
          <Paper style={styles.Paper}>
            <Sound />
          </Paper>
        </Route>
      </Grid>
    </Grid>
  );
};

export default Progress;
