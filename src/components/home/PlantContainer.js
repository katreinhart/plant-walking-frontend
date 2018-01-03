import React from 'react'

const PlantContainer = ({ handleNext, handlePrev }) => {
  return (
    <div className ="plant-container">
      <div className ="carousel-arrow left" onClick={handlePrev}>
        <i className ="material-icons">keyboard_arrow_left</i>
      </div>
        <img className ="plant-image" alt="seedling" src="./images/seedling_plant.png" />
      <div className ="carousel-arrow right" onClick={handleNext}>
        <i className ="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  )
}

export default PlantContainer
