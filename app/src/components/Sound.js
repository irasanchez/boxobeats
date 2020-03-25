import React from "react";
import {
  Typography,
  CardHeader,
  CardContent,
  CardMedia
} from "@material-ui/core";
import Video from "./Video";
import { useLocation } from "react-router-dom";

const Sound = props => {
  const { pathname } = useLocation();
  return (
    <>
      <Typography primary={props.name} variant="subtitle1" />
      <Typography variant="subtitle2">
        {props.creator ? `Popularized by ${props.creator}` : `¯\\_(ツ)_/¯`}
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
      <CardContent>
        {props.children}
        {/* {beat.tips.length ? (
                <p>
                  <span>💡</span>
                  {` Tip: ${
                    beat.tips[Math.floor(Math.random() * beat.tips.length)]
                  }`}
                </p>
              ) : null} */}
      </CardContent>
    </>
  );
};

export default Sound;
