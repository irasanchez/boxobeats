/** @jsx jsx */

import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { FiRefreshCcw, FiPlusSquare } from "react-icons/fi";

import SoundCard from "../SoundCard/SoundCard";
import { createStyleChanges } from "../SoundCard/soundCardStyles";

//styles
import { create, comboContainer } from "./createViewStyles";

const CreateView = props => {
  const { beats } = props;
  const { pathname } = props.location;

  //get 2 random sounds from list and set them to state
  const randomSound = beats[Math.floor(Math.random() * beats.length)];
  const [sound1, setSound1] = useState(
    beats[Math.floor(Math.random() * beats.length)]
  );
  const [sound2, setSound2] = useState(
    beats[Math.floor(Math.random() * beats.length)]
  );

  //get new sound when refresh button is clicked
  const refresh = position => {
    if (position === "left") {
      setSound1(randomSound);
    } else if (position === "right") {
      setSound2(randomSound);
    }
  };

  const currentStyle =
    pathname === "/create"
      ? css`
          ${createStyleChanges}
        `
      : null;

  return (
    <section css={create}>
      <p>Try to combine</p>
      <div css={comboContainer}>
        <FiRefreshCcw onClick={() => refresh("left")} />
        <SoundCard
          sound={sound1}
          match={props.match}
          history={props.history}
          location={props.location}
          css={currentStyle}
        />
        <FiPlusSquare />
        <SoundCard
          sound={sound2}
          match={props.match}
          history={props.history}
          location={props.location}
          css={currentStyle}
        />
        <FiRefreshCcw onClick={() => refresh("right")} />
      </div>
      <aside>
        <p>Information:</p>
        <p>
          Many of the more complex sounds one can make come from combining 2 or
          more sounds and making them at the same time.{" "}
        </p>
        <p>
          It takes a lot of practice to figure out your body positioning and
          timing sometimes. So, don't give up if you don't get it right away.
        </p>
      </aside>
    </section>
  );
};

export default CreateView;
