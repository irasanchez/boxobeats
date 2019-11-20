/** @jsx jsx */

import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { FiRefreshCcw, FiPlusSquare } from "react-icons/fi";

import SoundCard from "../SoundCard/SoundCard";
import { createStyleChanges } from "../SoundCard/soundCardStyles";
import { info } from "../../assets/cssVariables";
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
      <h1>Create</h1>
      <div css={info}>
        <p>
          Try to make the two sounds listed below at the same time.<br></br>
          <br></br>
          Many of the more complex sounds one can make come from combining 2 or
          more sounds and making them at the same time.
        </p>
        <br />
        <p>
          It takes a lot of practice to figure out your body positioning and
          timing sometimes. So, don't give up if you don't get it right away.
        </p>
      </div>
      <div css={comboContainer}>
        <FiRefreshCcw onClick={() => refresh("left")} size="1.75em" />
        <SoundCard
          sound={sound1}
          history={props.history}
          location={props.location}
          css={currentStyle}
        />
        <FiPlusSquare size="3em" />
        <SoundCard
          sound={sound2}
          history={props.history}
          location={props.location}
          css={currentStyle}
        />
        <FiRefreshCcw onClick={() => refresh("right")} size="1.75em" />
      </div>
    </section>
  );
};

export default CreateView;
