import React from "react";

const WorkoutItem = (props) => {
  return (
    <div className="workoutitem">
      <h3>{props.workoutName}</h3>

      <div className="exercises--container">{props.children}</div>
      <div className="workoutitem--row">
        <div>Days: {props.workoutDays}</div>
        <div>Type:{props.workoutType}</div>
        <div>Exercises: {props.children.length}</div>
      </div>
    </div>
  );
};

export default WorkoutItem;
