import React from "react";
import { useState, useEffect } from "react";

const Title = props => {
  const [title, setTitle] = useState("");

  const determineTitle = () => {
    console.log("determining title");
    if (props.location.pathname === "/progress") {
      console.log("setTitle");
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

export default Title;
