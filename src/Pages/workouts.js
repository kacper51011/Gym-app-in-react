import React from "react";
import AddWorkoutButton from "../workoutComponents/AddWorkoutButton";
import WorkoutsContainer from "../workoutComponents/WorkoutsContainer";

const Workouts = () => {
  return( 
  <div className="workouts">
    <WorkoutsContainer/>
    <AddWorkoutButton/>
  
  
  </div>)
};

export default Workouts;
