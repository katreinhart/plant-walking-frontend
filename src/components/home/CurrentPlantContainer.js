import React from 'react'
import AnimatePlant from './AnimatePlant'

class CurrentPlantContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className="plant-container justify-center">
<<<<<<< HEAD
        { this.props.currentPlantTypeId 
          ? <img className="plant-image" alt="current plant" src={`./images/plant-${currentPlantTypeId}/plant-${currentPlantTypeId}-${plantFrame}.png`} />
          : <div>loading... </div>
        }
        
=======
        <AnimatePlant plantFrame={ Math.floor((this.props.steps_recorded/this.props.steps_required) * 39) + 1 } currentPlantTypeId={ this.props.currentPlantTypeId }/>
>>>>>>> 5d01fdc7818cbacfbec4cc39cd5386563d78de3e
      </div>
    )
  }
}

export default CurrentPlantContainer
