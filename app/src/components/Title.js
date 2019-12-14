import { useState, useEffect } from "react";
import { Router } from "react-router-dom";

export default Title = props => {
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
    } else {
      setTitle(null);
    }
  };

  useEffect(determineTitle, []);

  return <h1>{title}</h1>;
};
