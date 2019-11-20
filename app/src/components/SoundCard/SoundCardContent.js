/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import ExpandedSection from "./ExpandedSection";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import {
  soundContent,
  soundContentTitleContainer,
  soundContentTitleText,
  playIcon,
  soundContentText
} from "./soundCardStyles";

const SoundCardContent = ({ sound }) => {
  //Expand Content
  const [showExpansion, showExpansionUpdate] = useState(false);
  const cardToggler = () => {
    showExpansionUpdate(!showExpansion);
  };

  return (
    <section className="soundContent" css={soundContent}>
      <div css={soundContentTitleContainer}>
        <h2 css={soundContentTitleText}>{sound.name}</h2>
        <FaPlayCircle css={playIcon} onClick={() => {}} />
      </div>

      <p css={soundContentText}>
        {/* TODO: Make this data dynamic */}
        Nasal humming is just like regular humming, except the sound only comes
        out of your nose, not your mouth.
      </p>

      {/* Expand the card */}
      <MdKeyboardArrowDown
        size="2em"
        onClick={cardToggler}
        className="moreInfo"
      />

      {showExpansion && (
        <ExpandedSection
          cardToggler={cardToggler}
          sound={sound}
          tutorials={sound.tutorials}
        />
      )}
    </section>
  );
};

export default SoundCardContent;
