import React from "react";
import { useState, useEffect } from "react";

//this component uses the current path to display some basic tutorial information at the top of the app
const Info = props => {
  const [info, setInfo] = useState([]);

  const determineInfo = () => {
    if (props.location.pathname === "/progress") {
      setInfo([
        "This is the Progress view",
        "Here, you can review all of the sounds in the collection and get more information about each sound."
      ]);
    } else if (props.location.pathname === "/improv") {
      setInfo([
        "This is the Improv view",
        "This view invites you to play with the 5 random sounds listed below. They may not be your go-to sounds, but thats the point.",
        "Challenge yourself to freestyle while including all of these sounds.",
        "Need a metronome? No problem"
      ]);
    } else if (props.location.pathname === "/create") {
      setInfo([
        "This is the Create View",
        "Here, we try to combine 2 or more sounds by attempting to make them at the same time.",
        "Many of the sounds in the collection are actually combinations of sounds",
        "Part of learning to combine sounds is being patient while your muscles figure everything out.",
        "Don't expect it to come right away, but practice focusing on making it happen anyway.",
        "Your brain/muscles will work in your favor over the longterm, and you'll get it eventually."
      ]);
    } else if (props.location.pathname === "/focus") {
      setInfo([
        "This is the Focus View",
        "How well do you know this sound?",
        "What if you try making it from different locations within your mouth, chest, belly, neck, etc.?",
        "How fast or how controlled can you perform this sound?",
        "Explore questions like these and get intimate with the sound shown here."
      ]);
    }
  };

  useEffect(determineInfo, [props.location.pathname]);

  return (
    <section>
      {info.map(p => (
        <p>{p}</p>
      ))}
    </section>
  );
};

export default Info;
