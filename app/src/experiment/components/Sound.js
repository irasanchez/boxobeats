import React, { useState } from "react";
import {
  Typography,
  ListItem,
  Collapse,
  Button,
  ListItemText,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";
import Video from "../../components/Video";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSounds, togglePractice } from "../../actions/actions";

const useStyles = makeStyles((theme) => ({
  button: {
    // marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  collapse: {
    marginLeft: theme.spacing(2),
  },
}));

const Sound = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return props.sound ? (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText>
          <Typography variant="h4">{props.sound.name}</Typography>
        </ListItemText>
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>

      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        className={classes.collapse}
      >
        {props.practiceSet.includes(props.sound) ? (
          <Button
            className={classes.button}
            color="secondary"
            variant="outlined"
            startIcon={<RemoveIcon />}
            onClick={() => props.togglePractice(props.sound)}
          >
            Remove from practice
          </Button>
        ) : (
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => props.togglePractice(props.sound)}
          >
            Add to practice
          </Button>
        )}
        <Video />
      </Collapse>
    </>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    practiceSet: state.practiceSet,
    error: state.error,
  };
};

export default connect(mapStateToProps, { togglePractice })(Sound);
