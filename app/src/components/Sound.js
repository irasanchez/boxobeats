import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Video from "./Video";
import { TiPlus } from "react-icons/ti";
import { useParams, useLocation } from "react-router-dom";

const styles = {
  SoundCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "0 5%",
    width: "100%",
    height: "100%"
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
      <header>
        <Typography
          primary={sound.name}
          variant="h2"
          style={{ textTransform: "capitalize" }}
        >
          {sound.name}
        </Typography>
        <TiPlus />
      </header>
      <section>
        <Typography variant="h3">Creator:</Typography>
        <Typography variant="subtitle2">
          {sound.creator
            ? `Popularized by ${sound.creator}`
            : `¯\\_(ツ)_/¯ No idea who 'invented' this`}
        </Typography>
      </section>
      {pathname.includes("/progress") && sound.tutorials ? (
        <section>
          <Typography variant="h3">Tutorial:</Typography>
          <Video
            youtubeID={
              sound.tutorials[
                Math.floor(Math.random() * sound.tutorials.length)
              ]
            }
          />
        </section>
      ) : null}

      <Typography>
        {sound.tips.length ? (
          <section>
            <Typography variant="h3">Tips:</Typography>

            <Typography>
              <span>💡</span>
              {` Tip: ${
                sound.tips[Math.floor(Math.random() * sound.tips.length)]
              }`}
            </Typography>
          </section>
        ) : null}
      </Typography>
    </div>
  ) : null;
};

export default Sound;
