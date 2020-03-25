import React, { useState } from "react";
import YouTube from "@u-wave/react-youtube";

const Video = ({ youtubeID }) => {
  const [state, setState] = useState({
    suggestedQuality: "auto",
    volume: 1,
    paused: false
  });

  const handlePlay = () => {
    setState({ isPlaying: true });
  };

  const handlePause = () => {
    setState({ isPlaying: false });
  };

  const handleVolume = value => {
    setState({ volume: value });
  };

  const { volume, suggestedQuality, paused } = state;

  return (
    <YouTube
      video={youtubeID}
      width="90%"
      height={200}
      controls={true}
      suggestedQuality={suggestedQuality}
      volume={volume}
      paused={paused}
      onPause={handlePause}
      onPlaying={handlePlay}
    />
  );
};
export default Video;
