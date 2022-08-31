import React, { useState } from "react";

const WorkoutExercises = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {editMode && (
        <div className="workoutExercises">
          <label for="ExerciseName">Exercise:</label>

          <input
            type="text"
            name="exerciseName"
            onChange={props.setName}
            defaultValue={props.exerciseName}
          />
          <label for="sets">Sets:</label>
          <input
            type="text"
            name="sets"
            onChange={props.setSets}
            defaultValue={props.sets}
          />
          <label for="reps">reps:</label>
          <input
            type="text"
            name="reps"
            onChange={props.setReps}
            defaultValue={props.reps}
          />
          <label for="weight">weight:</label>
          <input
            type="text"
            name="weight"
            onChange={props.setWeights}
            defaultValue={props.weight}
          />
          <div className="buttonContainer">
            <button type="submit" onClick={(e) => setEditMode(false)}>
              SAVE
            </button>
          </div>
        </div>
      )}

      {!editMode && (
        <div className="workoutExercises">
          <div>{props.exerciseName}</div>
          <div>{props.sets}</div>
          <div>{props.reps}</div>
          <div>{props.weight}</div>
          <div className="buttonContainer">
            <button onClick={(e) => setEditMode(true)}>EDIT</button>
            <button onClick={(e) => setEditMode(true)}>DELETE</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkoutExercises;
