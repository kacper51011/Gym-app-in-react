import React, { useState, useEffect } from "react";
import * as aiIcons from "react-icons/ai";

const ExerciseItemCard = (props) => {
  const [favourite, toggleFavourite] = useState(props.isFavourite);

  useEffect(() => {
    toggleFavourite(props.isFavourite);
  }, [props.isFavourite]);

  const addToFavourite = function () {
    props.addFunction();
    toggleFavourite(!favourite);
  };

  const deleteFromFavourite = function () {
    props.deleteFunction();
    toggleFavourite(!favourite);
  };

  return (
    <div className="exercise--itemCard">
      {props.starShow && (
        <div className="star--container">
          {props.isFavourite ? (
            <aiIcons.AiFillStar onClick={deleteFromFavourite} />
          ) : (
            <aiIcons.AiOutlineStar onClick={addToFavourite} />
          )}
        </div>
      )}
      <img className="exercise--gif" src={props.gif} alt=""></img>
      <div className="exercise--propertiesContainer">
        <div>{props.eName}</div>
      </div>
    </div>
  );
};

export default ExerciseItemCard;
