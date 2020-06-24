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
        return <Sound sound={sound} key={sound.id} />;
      })}
      <Link to="/">
        <Fab
          color="secondary"
          aria-label="home-metronome-practice"
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
  };
};

export default connect(mapStateToProps, {})(Sounds);
