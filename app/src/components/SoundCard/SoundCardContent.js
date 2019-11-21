/** @jsx jsx */
import { useState, useEffect } from "react";
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

const SoundCardContent = ({ sound, pathname }) => {
  //Expand Content
  const [showExpansion, showExpansionUpdate] = useState(false);
  const cardToggler = () => {
    showExpansionUpdate(!showExpansion);
  };

  // set icon size according to current view
  const [playIconSizeState, updatePlayIconSizeState] = useState("");
  const determinePlayIconSize = () => {
    console.log(pathname);
    if (pathname === "/progress") {
      updatePlayIconSizeState("2em");
    }

    if (pathname === "/improv" || pathname === "/create") {
      updatePlayIconSizeState("2em");
    }

    if (pathname === "/focus") {
      updatePlayIconSizeState("3em");
    }
  };
  //update play icon size when url changes
  useEffect(determinePlayIconSize, [pathname]);

  return (
    <section className="soundContent" css={soundContent}>
      <div css={soundContentTitleContainer}>
        <h2 css={soundContentTitleText}>{sound.name}</h2>
        <FaPlayCircle
          css={playIcon}
          size={playIconSizeState}
          onClick={() => {
            /*TODO: Make this onClick play a sound file */
          }}
        />
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
