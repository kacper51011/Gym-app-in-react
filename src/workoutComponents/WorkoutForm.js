import React, { useState } from "react";
import uuid from "react-uuid";
import WorkoutExercises from "./WorkoutExercises";

const WorkoutForm = (props) => {
  const newExerciseTemplate = {
    exerciseName: "",
    exerciseSets: "",
    exerciseReps: "",
    exerciseWeight: "",
    componentId: uuid(),
  };

  const [newWorkoutName, setNewWorkoutName] = useState("");
  const [newWorkoutDate, setNewWorkoutDate] = useState("");
  const [newWorkoutType, setNewWorkoutType] = useState("");
  const [newWorkoutExercises, setNewWorkoutExercises] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = {
      workoutDays: newWorkoutDate,
      workoutName: newWorkoutName,
      workoutType: newWorkoutType,
      componentId: uuid(),
      exercises: newWorkoutExercises,
    };
    props.submitNewWorkout((prevWorkouts) => [...prevWorkouts, newWorkout]);
    props.closeModal();
  };
  return (
    <form className="workoutform" onSubmit={handleSubmit}>
      <h2>Add a new workout</h2>
      <input
        name="workoutName"
        placeholder="Name your workout"
        value={newWorkoutName}
        onChange={(e) => setNewWorkoutName(e.target.value)}
      />
      <input
        name="workoutDate"
        placeholder="Write your workout days"
        value={newWorkoutDate}
        onChange={(e) => setNewWorkoutDate(e.target.value)}
      />
      <label htmlFor="type">type of exercises</label>
      <input
        name="type"
        value={newWorkoutType}
        onChange={(e) => setNewWorkoutType(e.target.value)}
        placeholder="set the type of your workout"
      />
      <div>
        {newWorkoutExercises.map((exercise) => {
          return (
            <WorkoutExercises
              exerciseName={exercise.exerciseName}
              sets={exercise.exerciseSets}
              reps={exercise.exerciseReps}
              weight={exercise.exerciseWeight}
              key={exercise.componentId}
              setName={(e) => {
                exercise.exerciseName = e.target.value;
                setNewWorkoutExercises([...newWorkoutExercises]);
              }}
              setSets={(e) => {
                exercise.exerciseSets = e.target.value;
                setNewWorkoutExercises([...newWorkoutExercises]);
              }}
              setReps={(e) => {
                exercise.exerciseReps = e.target.value;
                setNewWorkoutExercises([...newWorkoutExercises]);
              }}
              setWeights={(e) => {
                exercise.exerciseWeight = e.target.value;
                setNewWorkoutExercises([...newWorkoutExercises]);
              }}
            />
          );
        })}
      </div>
      <button
        type="button"
        onClick={(e) => {
          setNewWorkoutExercises([...newWorkoutExercises, newExerciseTemplate]);
        }}
      >
        ADD NEW EXERCISE
      </button>
      <div className="button--bar">
        <button className="delete--button" onClick={props.hideNewWorkout}>
          DELETE
        </button>
        <button className="save--button" type="submit">
          SAVE
        </button>
      </div>
    </form>
  );
};

export default WorkoutForm;
