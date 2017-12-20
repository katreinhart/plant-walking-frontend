import React from 'react'

const AddStepsContainer = ({ addSteps }) => {
  return (
    <form className="add-steps-container" onSubmit={ addSteps }>
      <input className="add-steps-input" type="text" />
      <button className="add-steps-button">Add Steps</button>
    </form>
  )
}

export default AddStepsContainer
