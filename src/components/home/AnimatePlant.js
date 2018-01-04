import React from 'react';

const AnimatePlant = ({ plantFrame, currentPlantTypeId }) => {
  return (
    <img className="plant-image" alt="current plant" src={`./images/plant-${currentPlantTypeId}/plant-${currentPlantTypeId}-${plantFrame}.png`} />
  )
}

export default AnimatePlant
