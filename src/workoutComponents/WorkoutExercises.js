import React from "react";

const WorkoutExercises = (props) => {
  return (
    <div className="workoutExercises">
      <div>{props.exerciseName}</div>
      <div>Sets: {props.sets}</div>
      <div>Reps: {props.reps}</div>
      <div>Weight: {props.weight}</div>
    </div>
  );
};

export default WorkoutExercises;
