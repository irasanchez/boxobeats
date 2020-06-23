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
import { fade, makeStyles } from "@material-ui/core/styles";
import Video from "../../components/Video";

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

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText>
          <Typography variant="h4">{props.name}</Typography>
        </ListItemText>
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>

      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        className={classes.collapse}
      >
        <Button
          className={classes.button}
          color="secondary"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add to practice
        </Button>
        <Video />
      </Collapse>
    </>
  );
};

export default Sound;
