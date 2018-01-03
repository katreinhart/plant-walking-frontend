import React from 'react'

const PlantContainer = ({ plant_name, steps_required }) => {
  return (
    <div className ="plant-container">
      <div className ="carousel-arrow left">
        <i className ="material-icons">keyboard_arrow_left</i>
      </div>
        <img className ="plant-image" alt="seedling" src="./images/seedling_plant.png" />
      <div className ="carousel-arrow right">
        <i className ="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  )
}

export default PlantContainer
