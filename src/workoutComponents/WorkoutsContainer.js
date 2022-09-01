import React, { useState } from "react";
import "../Pages/workouts.css";
import AddWorkoutButton from "./AddWorkoutButton";
import WorkoutExercises from "./WorkoutExercises";
import WorkoutForm from "./WorkoutForm";
import WorkoutItem from "./WorkoutItem";
import workoutData from "./WorkoutData";

const WorkoutsContainer = () => {
  const [showWorkoutForm, setForm] = useState(false);
  const [workouts, setWorkouts] = useState(workoutData);

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
          key={workout.componentId}
          children={workout.exercises.map((exercise) => (
            <WorkoutExercises
              exerciseName={exercise.exerciseName}
              sets={exercise.exerciseSets}
              reps={exercise.exerciseReps}
              weight={exercise.exerciseWeight}
              key={exercise.componentId}
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
              deleteExercise={() => {
                const newData = workouts.map((stateItem) => {
                  return {
                    ...stateItem,
                    exercises: stateItem.exercises.filter(
                      (otherExercises) =>
                        otherExercises.componentId !== exercise.componentId
                    ),
                  };
                });
                setWorkouts(newData);
              }}
            />
          ))}
        />
      ))}
      {showWorkoutForm && (
        <WorkoutForm
          hideNewWorkout={toggleForm}
          submitNewWorkout={setWorkouts}
          closeModal={setForm}
        />
      )}
      {!showWorkoutForm && <AddWorkoutButton showNewWorkout={toggleForm} />}
    </div>
  );
};

export default WorkoutsContainer;
