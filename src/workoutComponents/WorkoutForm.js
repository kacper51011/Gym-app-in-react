import React from "react";

const WorkoutForm = (props) => {
  return (
    <form className="workoutform">
      <h2>Add a new workout</h2>
      <input name="workoutName" placeholder="Name your workout" />
      <input name="workoutDate" placeholder="Write your workout days" />
      <label>type of exercises</label>
      <select>
        <option>Workout</option>
        <option>Cardio</option>
      </select>
      <div className="button--bar">
        <button className="delete--button" onClick={props.hideNewWorkout}>
          DELETE
        </button>
        <button className="save--button" onClick={props.hideNewWorkout}>
          SAVE
        </button>
      </div>
    </form>
  );
};

export default WorkoutForm;
