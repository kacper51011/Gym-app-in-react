import React from "react";

const WorkoutItem = (props) => {
  return (
    <div className="workoutitem">
      <div className="workoutitem-name">{props.workoutName}</div>

      <div className="exercises--container">{props.children}</div>
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
