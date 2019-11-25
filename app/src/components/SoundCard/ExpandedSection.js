/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { MdKeyboardArrowUp } from "react-icons/md";
import YouTube from "react-youtube";

import { expansion } from "./soundCardStyles";

import TipContainer from "./TipContainer";

const ExpandedSection = ({ sound, cardToggler, tutorials }) => {
  //If there is a tutorial url, store it in tutUrl so that I can pass it to YouTube below
  const tutUrl = tutorials && tutorials[0];

  return (
    <section className="expanded-section" css={expansion}>
      {/* render YouTube when card is expanded */}
      <YouTube
        css={css`
          width: 100%;
        `}
        videoId={tutUrl}
      />

      {/* If there are tips, show TipContainer */}
      {sound.tips && <TipContainer sound={sound} tips={sound.tips} />}

      {/* Close the expanded section */}
      <MdKeyboardArrowUp size="2em" onClick={cardToggler} className="icon" />
    </section>
  );
};

export default ExpandedSection;
