/* TODOS
  //TODO: "Now try to combine"
  //TODO: Sound 1 and Sound 2 rendered
  //TODO: make each one refreshable for the user to be able to change things.
*/

import React from "react";
import { FiRefreshCcw, FiPlusSquare } from "react-icons/fi";
import BottomNav from "../BottomNav/BottomNav";

const CreateView = props => {
  const { beats } = props;

  return (
    <section>
      <p>Try to combine</p>
      <div>
        <FiRefreshCcw />
        <div>{beats[0].name}</div>
        <FiPlusSquare />
        <div>{beats[1].name}</div>
        <FiRefreshCcw />
      </div>
      <div>
        <p>Information:</p>
        <p>
          Many of the more complex sounds one can make come from combining 2 or
          more sounds and making them at the same time.{" "}
        </p>
        <p>
          It takes a lot of practice to figure out your body positioning and
          timing sometimes. So, don't give up if you don't get it right away.
        </p>
      </div>
    </section>
  );
};

export default CreateView;
