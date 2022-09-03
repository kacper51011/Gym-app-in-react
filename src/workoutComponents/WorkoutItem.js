import React from "react";
import * as aiIcons from "react-icons/ai";
import * as riIcons from "react-icons/ri";

const WorkoutItem = (props) => {
  return (
    <div className="workoutitem">
      <div className="workoutitem-name">{props.workoutName}</div>
      <button className="deleteWorkoutButton" onClick={props.deleteFunc}>
        <aiIcons.AiFillDelete />
      </button>

      <div className="exercises--container">{props.children}</div>
      <button
        className="newExerciseButton"
        type="button"
        onClick={props.addNewWorkoutExercise}
      >
        <riIcons.RiAddFill />
      </button>
      <div className="workoutitem--row">
        <div className="workoutitem--row-first">Days: {props.workoutDays}</div>
        <div className="workoutitem--row-second">Type:{props.workoutType}</div>
        <div className="workoutitem--row-third">
          Exercises: {props.children.length}
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem;
