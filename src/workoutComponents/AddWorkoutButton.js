import React from 'react'
import * as RiIcons from "react-icons/ri"
import "../Pages/workouts.css"

const AddWorkoutButton = (props) => {
  return (
  <>
    <button className='addworkoutbutton' onClick={props.showNewWorkout}><RiIcons.RiAddFill/></button>
  </>
  )
}

export default AddWorkoutButton