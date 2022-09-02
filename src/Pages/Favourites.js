import React from "react";
import ExerciseItemCard from "../exercisesComponents/ExerciseItemCard";
import "./favourites.css";

const Favourites = ({ setFavourites, favouritesData }) => {
  return (
    <div className="exerciseItemCard--container favourites">
      {favouritesData.map((exercise) => (
        <ExerciseItemCard
          addFunction={() =>
            setFavourites((previousData) => [...previousData, exercise])
          }
          deleteFunction={() => {
            const filtered = favouritesData.filter((x) => x.id !== exercise.id);
            setFavourites(filtered);
          }}
          key={exercise.id}
          gif={exercise.gifUrl}
          eName={exercise.name}
          favValue={true}
          starShow={false}
        />
      ))}
    </div>
  );
};

export default Favourites;
