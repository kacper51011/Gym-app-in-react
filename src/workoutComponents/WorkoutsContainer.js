import React, { useState } from "react";
import "../Pages/workouts.css";
import AddWorkoutButton from "./AddWorkoutButton";
import WorkoutExercises from "./WorkoutExercises";
import WorkoutForm from "./WorkoutForm";
import WorkoutItem from "./WorkoutItem";
import uuid from "react-uuid";

const WorkoutsContainer = () => {
  const [showWorkoutForm, setForm] = useState(false);
  const [workouts, setWorkouts] = useState([
    {
      workoutName: "test",
      componentId: uuid(),
      workoutDays: "test",
      workoutType: "test",
      exercises: [
        {
          exerciseName: "test",
          exerciseSets: "test",
          exerciseReps: "test",
          exerciseWeight: "test",
          componentId: uuid(),
        },
        {
          exerciseName: "test2",
          exerciseSets: "test2",
          exerciseReps: "test2",
          exerciseWeight: "test2",
          componentId: uuid(),
        },
        {
          exerciseName: "test3",
          exerciseSets: "test3",
          exerciseReps: "test3",
          exerciseWeight: "test3",
          componentId: uuid(),
        },
        {
          exerciseName: "test4",
          exerciseSets: "test4",
          exerciseReps: "test4",
          exerciseWeight: "test4",
          componentId: uuid(),
        },
      ],
    },
  ]);

  const toggleForm = () => {
    setForm(!showWorkoutForm);
  };

  return (
    <div className="workoutscontainer">
      {workouts.map((workout) => (
        <WorkoutItem
          workoutName={workout.workoutName}
          workoutDays={workout.workoutDays}
          workoutType={workout.workoutType}
          children={workout.exercises.map((exercise) => (
            <WorkoutExercises
              exerciseName={exercise.exerciseName}
              sets={exercise.exerciseSets}
              reps={exercise.exerciseReps}
              weight={exercise.exerciseWeight}
              setName={(e) => {
                exercise.exerciseName = e.target.value;
                setWorkouts([...workouts]);
              }}
              setSets={(e) => {
                exercise.exerciseSets = e.target.value;
                setWorkouts([...workouts]);
              }}
              setReps={(e) => {
                exercise.exerciseReps = e.target.value;
                setWorkouts([...workouts]);
              }}
              setWeights={(e) => {
                exercise.exerciseWeight = e.target.value;
                setWorkouts([...workouts]);
              }}
            />
          ))}
        />
      ))}
      {showWorkoutForm && <WorkoutForm hideNewWorkout={toggleForm} />}
      {!showWorkoutForm && <AddWorkoutButton showNewWorkout={toggleForm} />}
    </div>
  );
};

export default WorkoutsContainer;
