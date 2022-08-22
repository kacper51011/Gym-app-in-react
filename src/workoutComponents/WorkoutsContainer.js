import React, { useState } from 'react'
import "../Pages/workouts.css"
import AddWorkoutButton from './AddWorkoutButton'
import WorkoutForm from './WorkoutForm'
import WorkoutItem from './WorkoutItem'


const WorkoutsContainer = () => {
  const [vietnam, setVietnam] = useState(false)

  const toggleForm = () => {
    setVietnam(!vietnam)
    
  }

  return (
    <div className='workoutscontainer'>
      <WorkoutItem/>
      {vietnam && <WorkoutForm hideNewWorkout={toggleForm}/>}
      {!vietnam && <AddWorkoutButton showNewWorkout={toggleForm}/>}
      
    </div>
  )
}

export default WorkoutsContainer

