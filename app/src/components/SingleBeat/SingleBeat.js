import React from "react";

const SingleBeat = props => {
  let count = 0;
  return (
    <section>
      <h2>{props.name}</h2>

      {props.tutorials.map((tutorialUrl, index) => {
        return (
          <button>
            <a href={tutorialUrl}>tutorial {index + 1}</a>
          </button>
        );
      })}
      {props.prerequisites.length > 0 ? <h3>Ingredients:</h3> : null}
      {props.prerequisites.map(prereq => {
        return <p>{prereq}</p>;
      })}
    </section>
  );
};

export default SingleBeat;
