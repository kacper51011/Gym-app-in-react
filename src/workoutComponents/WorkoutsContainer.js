import React, { useState } from "react";
import "../Pages/workouts.css";
import AddWorkoutButton from "./AddWorkoutButton";
import WorkoutExercises from "./WorkoutExercises";
import WorkoutForm from "./WorkoutForm";
import WorkoutItem from "./WorkoutItem";

const WorkoutsContainer = () => {
  const [showWorkoutForm, setForm] = useState(false);
  const [workouts, setWorkouts] = useState([
    {
      workoutName: "test",
      workoutDays: "test",
      workoutType: "test",
      exercises: [
        {
          exerciseName: "test",
          exerciseSets: "test",
          exerciseReps: "test",
          exerciseWeight: "test",
        },
        {
          exerciseName: "test2",
          exerciseSets: "test2",
          exerciseReps: "test2",
          exerciseWeight: "test2",
        },
        {
          exerciseName: "test3",
          exerciseSets: "test3",
          exerciseReps: "test3",
          exerciseWeight: "test3",
        },
        {
          exerciseName: "test4",
          exerciseSets: "test4",
          exerciseReps: "test4",
          exerciseWeight: "test4",
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
