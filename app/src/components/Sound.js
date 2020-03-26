import React, { useState, useEffect } from "react";
import {
  Typography,
  CardHeader,
  CardContent,
  CardMedia
} from "@material-ui/core";
import Video from "./Video";
import { useParams } from "react-router-dom";
import { processdata } from "../assets/processdata";

const Sound = props => {
  const [sound, setSound] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let foundSound = props.beats.find(sound => id === sound.id);
    setSound(foundSound);
  }, []);
  console.log(processdata());

  return (
    true && (
      <div>
        <Typography primary={sound.name} variant="h2">
          {sound.name}
        </Typography>
        <Typography variant="subtitle2">
          {sound.creator ? `Popularized by ${sound.creator}` : `¯\\_(ツ)_/¯`}
        </Typography>

        {/* {pathname === "/progress" && (
        <CardMedia>
          <Video
            youtubeID={
              props.tutorials[
                Math.floor(Math.random() * props.tutorials.length)
              ]
            }
          />
        </CardMedia>
      )} */}
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
      </div>
    )
  );
};

export default Sound;
