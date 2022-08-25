import React from "react";
import * as BiIcons from "react-icons/bi";

const ExerciseItem = (props) => {
  return (
    <div className="exercise--item">
      <div className="exercise--icon--container">
        <BiIcons.BiBody />
      </div>
      <div>{props.exerciseName}</div>
    </div>
  );
};

export default ExerciseItem;
