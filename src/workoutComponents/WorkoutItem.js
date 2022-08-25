import React from "react";

const WorkoutItem = (props) => {
  return (
    <div className="workoutitem">
      <h3>{props.workoutName}</h3>
      <div className="workoutitem--row">
        <div>workout days: {props.workoutDays}</div>
        <div>type of exercises: {props.workoutType}</div>
        <div>amount of exercises: {props.children.length}</div>
      </div>
      <div className="exercises--container">{props.children}</div>
    </div>
  );
};

export default WorkoutItem;
