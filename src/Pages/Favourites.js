import React, { useState } from "react";
import favouritesData from "../favouritesComponents/favouritesData";
import ExerciseItemCard from "../exercisesComponents/ExerciseItemCard";

const MyRecords = () => {
  const [favData, setFavData] = useState(favouritesData);
  return (
    <div className="myrecords">
      {favData.map((exercise) => (
        <ExerciseItemCard
          addFunction={(exercise) => favData.push(exercise)}
          deleteFunction={(exercise) => favData.filter((x) => x !== exercise)}
          key={exercise.id}
          gif={exercise.gifUrl}
          eName={exercise.name}
        />
      ))}
    </div>
  );
};

export default MyRecords;
