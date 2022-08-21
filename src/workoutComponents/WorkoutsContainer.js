import React from 'react'
import "../Pages/workouts.css"

const WorkoutsContainer = (props) => {
  return (
    <div className='workoutscontainer'>
        <props.children/>
    </div>
  )
}

export default WorkoutsContainer

