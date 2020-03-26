import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@material-ui/core";
import Video from "./Video";
import { useParams, useLocation } from "react-router-dom";

const styles = {
  SoundCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 2%",
    width: "100%",
    minWidth: "100%"
  }
};

const Sound = props => {
  const [sound, setSound] = useState({
    name: "",
    tips: [],
    creator: "",
    tutorials: [],
    id: "",
    prerequisites: [],
    learned: false
  });
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    let foundSound = props.beats.find(sound => id === sound.id);
    setSound(foundSound);
  }, [id]);

  return sound ? (
    <div style={styles.SoundCard}>
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
        {sound.tips.length ? (
          <p>
            <span>💡</span>
            {` Tip: ${
              sound.tips[Math.floor(Math.random() * sound.tips.length)]
            }`}
          </p>
        ) : null}
      </Typography>
    </div>
  ) : null;
};

export default Sound;
