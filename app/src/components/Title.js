import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
const Title = props => {
  const [title, setTitle] = useState("");

  const determineTitle = () => {
    if (props.location.pathname === "/progress") {
      setTitle("Progress");
    }
    if (props.location.pathname === "/improv") {
      setTitle("Improv");
    } else if (props.location.pathname === "/create") {
      setTitle("Create");
    } else if (props.location.pathname === "/focus") {
      setTitle("Focus");
    }
  };

  useEffect(determineTitle, [props.location.pathname]); //only run the determineTitle fuction if props.location.pathname changes

  return <h1>{title}</h1>;
};

export default withRouter(Title);
