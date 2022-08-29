import React, { useState } from "react";
import * as aiIcons from "react-icons/ai";

const ExerciseItemCard = (props) => {
  const [favourite, toggleFavourite] = useState(false);

  const addToFavourite = function () {
    props.addFunction();
    toggleFavourite(true);
  };

  const deleteFromFavourite = function () {
    props.deleteFunction();
    toggleFavourite(false);
  };

  return (
    <div className="exercise--itemCard">
      <div className="star--container">
        {favourite ? (
          <aiIcons.AiFillStar onClick={deleteFromFavourite} />
        ) : (
          <aiIcons.AiOutlineStar onClick={addToFavourite} />
        )}
      </div>
      <img className="exercise--gif" src={props.gif} alt=""></img>
      <div className="exercise--propertiesContainer">
        <div>{props.eName}</div>
      </div>
    </div>
  );
};

export default ExerciseItemCard;
