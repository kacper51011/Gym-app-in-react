import React, { useState } from "react";
import ExerciseFilterBar from "./ExerciseFilterBar";
import ExerciseItemCard from "./ExerciseItemCard";

const ExerciseContainer = ({ favouritesData, setFavourites }) => {
  const [exercises, setExercises] = useState([]);
  return (
    <>
      <div className="exercise--container">
        <ExerciseFilterBar stateFunction={setExercises} />
      </div>
      <div className="exerciseItemCard--container">
        {exercises.map((exercise) => (
          <ExerciseItemCard
            addFunction={() =>
              setFavourites((previousData) => [...previousData, exercise])
            }
            deleteFunction={() => {
              const filtered = favouritesData.filter(
                (x) => x.id !== exercise.id
              );
              setFavourites(filtered);
            }}
            obj={exercise}
            key={exercise.id}
            gif={exercise.gifUrl}
            eName={exercise.name}
            favValue={false}
            starShow={true}
          />
        ))}
      </div>
    </>
  );
};

export default ExerciseContainer;
