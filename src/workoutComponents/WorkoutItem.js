import React from "react";

const WorkoutItem = (props) => {
  return (
    <div className="workoutitem">
      <h3>{props.workoutName}</h3>
      <div className="workoutitem--row">
        <div>Days: {props.workoutDays}</div>
        <div>{props.workoutType}</div>
        <div>exercises: {props.children.length}</div>
      </div>
      <div className="exercises--container">{props.children}</div>
    </div>
  );
};

export default WorkoutItem;
