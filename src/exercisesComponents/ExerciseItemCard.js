import React from "react";

const ExerciseItemCard = (props) => {
  return (
    <div className="exercise--itemCard">
      <img className="exercise--gif" src={props.gif} alt=""></img>
      <div className="exercise--propertiesContainer">
        <div>{props.eName}</div>
      </div>
    </div>
  );
};

export default ExerciseItemCard;
