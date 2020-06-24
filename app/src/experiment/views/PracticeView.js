import React from "react";
import Metronome from "../../components/Metronome";
import PracticeList from "../components/PracticeList";
import { Grid, Fab } from "@material-ui/core";
import Welcome from "../components/Welcome";
import NavigateBeforeSharpIcon from "@material-ui/icons/NavigateBeforeSharp";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  grid: {
    height: "100%",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));
const PracticeView = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      className={classes.grid}
    >
      <PracticeList />
      <Welcome />
      <Metronome />
      <Fab
        color="secondary"
        aria-label="practice"
        size="large"
        className={classes.fab}
      >
        <NavigateBeforeSharpIcon />
      </Fab>
    </Grid>
  );
};

export default PracticeView;
