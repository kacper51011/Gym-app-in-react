import React from "react";
import ExerciseContainer from "../exercisesComponents/ExerciseContainer";
import "./exercises.css";

const Exercises = ({ setFavourites, favouritesData }) => {
  return (
    <div className="exercises">
      <ExerciseContainer
        setFavourites={setFavourites}
        favouritesData={favouritesData}
      />
    </div>
  );
};

export default Exercises;
