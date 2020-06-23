import React, { useState } from "react";
import {
  Typography,
  ListItem,
  ListItemText,
  Collapse,
  Button,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import Video from "../../components/Video";
const Sound = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.name} />
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Button color="secondary" variant="contained" startIcon={<AddIcon />}>
          Add to practice
        </Button>
        <Video />
      </Collapse>
    </>
  );
};

export default Sound;
