import React from 'react'

const PlantContainer = ({ handleNext, handlePrev, plantId, stepsRecorded }) => {
  const leftArrow = <div className ="carousel-arrow left" onClick={handlePrev}>
    <i className ="material-icons">keyboard_arrow_left</i>
  </div>

  const rightArrow = <div className ="carousel-arrow right" onClick={handleNext}>
    <i className ="material-icons">keyboard_arrow_right</i>
  </div>
  console.log(plantId, "plantId");
  console.log(stepsRecorded, "stepsRec");

  // stepsRecorded -> 50
  // endSteps -> 100
  // 50 / 100
  // frames -> 40
  // 40 * (50 / 100)
  return (
    <div className ="plant-container">
      { handlePrev && leftArrow }

      <img className ="plant-image" alt="seedling" src={`./images/plant-${ plantId }/plant-${ plantId }-1.png`} />

      { handleNext && rightArrow }
    </div>
  )
}

export default PlantContainer
