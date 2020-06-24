import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    maxWidth: "98vw",
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      className={classes.grid}
    >
      <Typography variant="h1">
        Welcome to <span>boxobeats</span>!
      </Typography>
      <Typography variant="h5">
        Below, you'll find a metronome if you want to freestyle.
      </Typography>
      <Typography variant="h5">
        Or, you can check out the sound collection to pick a few things to focus
        on for this practice session.
      </Typography>
    </Grid>
  );
};

export default Welcome;
