import React from "react";
import { Card, CardHeader, CardContent, CardMedia } from "@material-ui/core";
import Video from "./Video";
import { useLocation } from "react-router-dom";

const Sound = props => {
  const { pathname } = useLocation();
  return (
    <Card>
      <CardHeader
        title={props.name}
        subheader={
          props.creator ? `Popularized by ${props.creator}` : `¯\\_(ツ)_/¯`
        }
      />
      {pathname === "/progress" && (
        <CardMedia>
          <Video
            youtubeID={
              props.tutorials[
                Math.floor(Math.random() * props.tutorials.length)
              ]
            }
          />
        </CardMedia>
      )}

      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default Sound;
