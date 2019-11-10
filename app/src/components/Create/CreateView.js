/** @jsx jsx */
/* TODOS
  //TODO: make each one refreshable for the user to be able to change things.
*/

import { jsx } from "@emotion/core";
import { FiRefreshCcw, FiPlusSquare } from "react-icons/fi";

//styles
import { create, comboContainer, soundOption } from "./createViewStyles";

const CreateView = props => {
  const { beats } = props;

  return (
    <section css={create}>
      <p>Try to combine</p>
      <div css={comboContainer}>
        <FiRefreshCcw />
        <h2 css={soundOption}>{beats[0].name}</h2>
        <FiPlusSquare />
        <h2 css={soundOption}>{beats[1].name}</h2>
        <FiRefreshCcw />
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
