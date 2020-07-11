import React from "react";
import Metronome from "../components/Metronome";
import PracticeList from "../components/PracticeList";
import { Grid, Fab } from "@material-ui/core";
import Welcome from "../components/Welcome";
import NavigateBeforeSharpIcon from "@material-ui/icons/NavigateBeforeSharp";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  grid: {
    height: "100%",
    width: "80%",
    margin: "0 auto",
    padding: theme.spacing(6),
    flexWrap: "nowrap",
  },
}));
const PracticeView = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      className={classes.grid}
    >
      {props.practiceSet.length ? <PracticeList /> : <Welcome />}
      <Metronome />
      <Link to="/sounds">
        <Fab
          color="secondary"
          aria-label="practice"
          size="large"
          className={classes.fab}
        >
          <NavigateBeforeSharpIcon />
        </Fab>
      </Link>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    practiceSet: state.practiceSet,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(PracticeView);
