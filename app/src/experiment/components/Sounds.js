//React
import React from "react";
//Components
import Sound from "./Sound";
//MUI
import { List, Fab } from "@material-ui/core";
import NavigateNextSharpIcon from "@material-ui/icons/NavigateNextSharp";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//Redux
import { connect } from "react-redux";
import { getSounds, togglePractice } from "../../actions/actions";
//React Router
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Sounds = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <List>
      {props.sounds.map((sound) => {
        return <Sound name={sound.name} />;
      })}
      <Link>
        <Fab
          color="secondary"
          aria-label="practice"
          size="large"
          className={classes.fab}
        >
          <NavigateNextSharpIcon />
        </Fab>
      </Link>
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    sounds: state.filtered,
    error: state.error,
    practiceSet: state.practiceSet,
  };
};

export default connect(mapStateToProps, { getSounds, togglePractice })(Sounds);
