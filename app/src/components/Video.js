import React, { useState } from "react";
import YouTube from "@u-wave/react-youtube";
import PropTypes from "prop-types";

const Video = ({ tutorial = "" }) => {
  const [state, setState] = useState({
    suggestedQuality: "auto",
    volume: 100,
    paused: false,
  });

  const handlePlay = () => {
    setState({ ...state, isPlaying: true });
  };

  const handlePause = () => {
    setState({ ...state, isPlaying: false });
  };

  const handleVolume = (value) => {
    setState({ ...state, volume: value });
  };

  const { volume, suggestedQuality, paused } = state;

  return (
    <YouTube
      video={tutorial}
      width="95%"
      height={300}
      controls={true}
      suggestedQuality={suggestedQuality}
      volume={volume}
      paused={paused}
      onPause={handlePause}
      onPlaying={handlePlay}
      modestBranding={true}
    />
  );
};

Video.propTypes = {
  tutorial: PropTypes.string.isRequired,
};

export default Video;
