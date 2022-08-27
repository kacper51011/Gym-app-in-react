import React, { useState } from "react";
import ExerciseFilterBar from "./ExerciseFilterBar";
import ExerciseItemCard from "./ExerciseItemCard";

const ExerciseContainer = () => {
  const [exercises, setExercises] = useState([]);
  return (
    <>
      <div className="exercise--container">
        <ExerciseFilterBar stateFunction={setExercises} />
      </div>
      <div className="exerciseItemCard--container">
        {exercises.map((exercise) => (
          <ExerciseItemCard
            gif={exercise.gifUrl}
            eName={exercise.name}
            muscle={exercise.target}
          />
        ))}
      </div>
    </>
  );
};

export default ExerciseContainer;
