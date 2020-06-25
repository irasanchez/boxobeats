import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { red, brown, blue } from "../../assets/colors";
const useStyles = makeStyles((theme) => ({
  grid: {
    width: "80%",
  },
  title: {
    backgroundColor: red.main,
    color: theme.palette.getContrastText(red.main),
  },
  metronome: {
    backgroundColor: brown.main,
    color: theme.palette.getContrastText(brown.main),
  },
  collection: {
    backgroundColor: blue.main,
    color: theme.palette.getContrastText(blue.main),
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
        Welcome to <span className={classes.title}>boxobeats</span>!
      </Typography>
      <Typography variant="h5">
        Below, you'll find a{" "}
        <span className={classes.metronome}>metronome</span> if you want to
        freestyle.
      </Typography>
      <Typography variant="h5">
        Or, you can check out the{" "}
        <Link to="/sounds">
          <span className={classes.collection}>sound collection</span>
        </Link>{" "}
        to pick a few things to focus on for this practice session.
      </Typography>
    </Grid>
  );
};

export default Welcome;
