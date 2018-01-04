import React from 'react'
import { Link } from 'react-router-dom'

const HistoryItem = ({step, editSteps}) => {
  function fireEditSteps(){
    // console.log('Hi', step);
    editSteps(step)
  }
  return (
    <div>
      <div className="history-item">
        <p className="history-column">{step.date}</p>
        <p className="history-column">{step.steps}</p>
        <Link to={{
          pathname: '/editsteps',
          state: {
            step_id:`${step.step_id}`,
            step:`${step.steps}`,
            date:`${step.date}`}
        }}>
        <i className="material-icons edit-steps" >mode_edit</i>
        </Link>
      </div>
      <hr></hr>
    </div>
  )
}

export default HistoryItem
