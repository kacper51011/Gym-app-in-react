import React, { useState } from "react";
import * as tiIcons from "react-icons/ti";
import * as aiIcons from "react-icons/ai";

const WorkoutExercises = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {editMode && (
        <div className="workoutExercises">
          <label htmlFor="ExerciseName">Exercise:</label>

          <input
            type="text"
            name="exerciseName"
            onChange={props.setName}
            defaultValue={props.exerciseName}
          />
          <label htmlFor="sets">Sets:</label>
          <input
            type="text"
            name="sets"
            onChange={props.setSets}
            defaultValue={props.sets}
          />
          <label htmlFor="reps">reps:</label>
          <input
            type="text"
            name="reps"
            onChange={props.setReps}
            defaultValue={props.reps}
          />
          <label htmlFor="weight">weight:</label>
          <input
            type="text"
            name="weight"
            onChange={props.setWeights}
            defaultValue={props.weight}
          />
          <div className="buttonContainer">
            <button type="submit" onClick={(e) => setEditMode(false)}>
              <tiIcons.TiTick />
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
            <button onClick={(e) => setEditMode(true)}>
              <aiIcons.AiTwotoneEdit />
            </button>
            <button onClick={props.deleteExercise}>
              <aiIcons.AiFillDelete />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkoutExercises;
