//React
import React from "react";
//Components
import Sound from "./Sound";
//MUI
import { List } from "@material-ui/core";
//Redux
import { connect } from "react-redux";
import { getSounds, togglePractice } from "../../actions/actions";

const Sounds = (props) => {
  return (
    <List>
      {props.sounds.map((sound) => {
        return <Sound name={sound.name} />;
      })}
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
