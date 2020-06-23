import React, { useState } from "react";
import {
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Video from "../../components/Video";
const Sound = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={`Sound Title`} />
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Button color="primary" variant="contained">
          Add to practice
        </Button>
        <Video />
      </Collapse>
    </>
  );
};

export default Sound;
