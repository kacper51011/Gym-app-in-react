import React from 'react'
import "../Pages/workouts.css"
import WorkoutItem from './WorkoutItem'

const WorkoutsContainer = (props) => {
  return (
    <div className='workoutscontainer'>
      <WorkoutItem/>
    </div>
  )
}

export default WorkoutsContainer

