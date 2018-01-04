import React from 'react'

const PlantContainer = ({ handleNext, handlePrev, plantId, stepsRecorded }) => {
  const leftArrow = <div className ="carousel-arrow left" onClick={handlePrev}>
    <i className ="material-icons">keyboard_arrow_left</i>
  </div>

  const rightArrow = <div className ="carousel-arrow right" onClick={handleNext}>
    <i className ="material-icons">keyboard_arrow_right</i>
  </div>

  return (
    <div className ="plant-container">
      { handlePrev && leftArrow }

      <img className ="plant-image" alt="seedling" src="./images/seedling_plant.png" />

      { handleNext && rightArrow }
    </div>
  )
}

export default PlantContainer
