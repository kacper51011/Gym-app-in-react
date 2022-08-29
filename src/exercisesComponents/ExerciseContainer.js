import React, { useState } from "react";
import ExerciseFilterBar from "./ExerciseFilterBar";
import ExerciseItemCard from "./ExerciseItemCard";
import favouritesData from "../favouritesComponents/favouritesData";

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
            addFunction={(exercise) => favouritesData.push(exercise)}
            deleteFunction={(exercise) =>
              favouritesData.filter((x) => x !== exercise)
            }
            obj={exercise}
            key={exercise.id}
            gif={exercise.gifUrl}
            eName={exercise.name}
          />
        ))}
      </div>
    </>
  );
};

export default ExerciseContainer;
