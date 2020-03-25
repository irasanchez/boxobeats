import React, { useState } from "react";
import YouTube from "@u-wave/react-youtube";

const Video = props => {
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

  const { isPlaying, volume } = state;

  return (
    <YouTube
      video={props.youtubeID}
      width="50%"
      height={400}
      controls={true}
      suggestedQuality={state.suggestedQuality}
      volume={state.volume}
      paused={state.paused}
      onPause={handlePause}
      onPlaying={handlePlay}
    />
  );
};
export default Video;
