import React from 'react'

const AddStepsContainer = ({ addSteps }) => {
  return (
    <form className="input-container" onSubmit={ addSteps }>
      <input className="input-field" type="text" />
      <button className="button add-steps-button">Add Steps</button>
    </form>
  )
}

export default AddStepsContainer
