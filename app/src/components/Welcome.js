import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { red, brown, blue } from "../assets/colors";

// styling here, actual component below
const useStyles = makeStyles((theme) => ({
  grid: {
    // width: "100%",
    height: "70%",
  },
  titleHighlight: {
    backgroundColor: red.main,
    color: theme.palette.getContrastText(red.main),
    padding: theme.spacing(0, 0.5, 0, 0.5),
  },
  tutorial: {
    width: "100%",
  },
  metronomeHighlight: {
    backgroundColor: brown.main,
    color: theme.palette.getContrastText(brown.main),
    padding: theme.spacing(0, 0.5, 0, 0.5),
  },
  arrowIcon: {
    color: brown.main, // search icon styling located in props below
  },
  collectionHighlight: {
    backgroundColor: blue.main,
    color: theme.palette.getContrastText(blue.main),
    padding: theme.spacing(0, 0.5, 0, 0.5),
    cursor: "pointer",
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="flex-start"
      justify="space-evenly"
      className={classes.grid}
      xs={8}
    >
      <Typography variant="h1">
        Welcome to <span className={classes.titleHighlight}>boxobeats</span>!
      </Typography>
      <Typography variant="h5" className={classes.tutorial}>
        <ArrowDownwardIcon className={classes.arrowIcon} /> Below, you'll find a{" "}
        <span className={classes.metronomeHighlight}>metronome</span> if you
        want to freestyle right away.
      </Typography>
      <Typography variant="h5" className={classes.tutorial}>
        <SearchIcon color="secondary" /> Or, you can check out the{" "}
        <Link to="/sounds">
          <span className={classes.collectionHighlight}>sound collection</span>
        </Link>{" "}
        to pick sounds to focus on for now or to learn new sounds with
        tutorials.
      </Typography>
    </Grid>
  );
};

export default Welcome;
