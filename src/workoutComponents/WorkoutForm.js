import React from 'react'

const WorkoutForm = (props) => {
  return (
    <div className='workoutform'>
      <div className='workoutform--row'>
        <div>
          <label>asd</label>
          <input></input>
        </div>
        <div>
          <label>asd</label>
          <input></input>
        </div>
        <div>
          <label>asd</label>
          <input></input>
        </div>
      </div>
      <div className='workoutform--row'>
        <div>
          <label>asd</label>
          <input></input>
        </div>
        <div>
          <label>asd</label>
          <input></input>
        </div>
        <div>
          <label>asd</label>
          <select>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div> 
      </div>
      <div className='workoutform--row'>
        <div>
          <label>asd</label>
         <select>
            <option></option>
           <option></option>
          </select>
        </div>
        <button>delete</button>
        <button onClick={props.hideNewWorkout}>Save</button>
      </div>
        

    </div>
  )
}

export default WorkoutForm