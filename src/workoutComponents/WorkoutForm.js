import React from 'react'

const WorkoutForm = (props) => {
  return (
    <div className='workoutform'>
        <button onClick={props.hideNewWorkout}>Save</button>

    </div>
  )
}

export default WorkoutForm