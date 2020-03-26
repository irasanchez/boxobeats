import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@material-ui/core";
import Video from "./Video";
import { useParams, useLocation } from "react-router-dom";

const Sound = props => {
  const [sound, setSound] = useState([]);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    let foundSound = props.beats.find(sound => id === sound.id);
    setSound(foundSound);
  }, [id]);

  return sound ? (
    <>
      <Typography primary={sound.name} variant="h2">
        {sound.name}
      </Typography>
      <Typography variant="subtitle2">
        {sound.creator
          ? `Popularized by ${sound.creator}`
          : `¯\\_(ツ)_/¯ No idea who 'invented' this`}
      </Typography>

      {pathname.includes("/progress") && sound.tutorials ? (
        <Video
          youtubeID={
            sound.tutorials[Math.floor(Math.random() * sound.tutorials.length)]
          }
        />
      ) : null}
      <Typography>
        {props.children}
        {/* {beat.tips.length ? (
                <p>
                  <span>💡</span>
                  {` Tip: ${
                    beat.tips[Math.floor(Math.random() * beat.tips.length)]
                  }`}
                </p>
              ) : null} */}
      </Typography>
    </>
  ) : null;
};

export default Sound;
