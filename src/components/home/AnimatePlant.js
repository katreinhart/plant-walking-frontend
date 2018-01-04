import React from 'react';
import { Link, Redirect } from 'react-router-dom'


const AnimatePlant = ({ plantFrame, currentPlantTypeId }) => {
  return (
    <img className="plant-image" alt="current plant" src={`./images/plant-${currentPlantTypeId}/plant-${currentPlantTypeId}-${plantFrame}.png`} />
  )
}

export default AnimatePlant


{/* <img className="plant-image" alt="current plant" data-id={`${plantFrame}`} src={`./images/plant-${currentPlantTypeId}/plant-${currentPlantTypeId}-${plantFrame}.png`} /> */}
