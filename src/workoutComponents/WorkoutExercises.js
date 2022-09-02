import React, { useState } from "react";
import * as tiIcons from "react-icons/ti";
import * as aiIcons from "react-icons/ai";

const WorkoutExercises = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {editMode && (
        <div className="workoutExercises">
          <div className="workoutExercises-first">
            <label htmlFor="ExerciseName">Exercise:</label>

            <input
              type="text"
              name="exerciseName"
              className="exerciseFirstInput"
              onChange={props.setName}
              defaultValue={props.exerciseName}
            />
          </div>
          <div className="workoutExercises-second">
            <label htmlFor="sets">Sets:</label>
            <input
              className="exerciseSecondInput"
              type="number"
              name="sets"
              onChange={props.setSets}
              defaultValue={props.sets}
            />
          </div>
          <div className="workoutExercises-third">
            <label htmlFor="reps">reps:</label>
            <input
              className="exerciseThirdInput"
              type="number"
              name="reps"
              onChange={props.setReps}
              defaultValue={props.reps}
            />
          </div>
          <div className="workoutExercises-fourth">
            <label htmlFor="weight">weight:</label>
            <input
              className="exerciseFourthInput"
              type="text"
              name="weight"
              onChange={props.setWeights}
              defaultValue={props.weight}
            />
          </div>
          <div className="buttonContainer workoutExercises-fifth">
            <button type="submit" onClick={(e) => setEditMode(false)}>
              <tiIcons.TiTick />
            </button>
          </div>
        </div>
      )}

      {!editMode && (
        <div className="workoutExercises">
          <div className="workoutExercises-first">{props.exerciseName}</div>
          <div className="workoutExercises-second">{props.sets}</div>
          <div className="workoutExercises-third">{props.reps}</div>
          <div className="workoutExercises-fourth">{props.weight}</div>
          <div className="buttonContainer workoutExercises-fifth">
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
