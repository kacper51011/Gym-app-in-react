import React from "react";

const ExerciseItemCard = (props) => {
  return (
    <div className="exercise--itemCard">
      <img className="exercise--gif" url={props.gif}></img>
      <div className="exercise--propertiesContainer">
        <div>{props.eName}</div>
        <div>targetted muscle:{props.muscle}</div>
      </div>
    </div>
  );
};

export default ExerciseItemCard;
