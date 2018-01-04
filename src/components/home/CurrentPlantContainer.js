import React from 'react'

class CurrentPlantContainer extends React.Component {
  constructor (props) {
    super(props)
  }


  render () {
    console.log(this.props, "PROPS");
    const currentPlantTypeId = this.props.currentPlantTypeId
    const plantFrame = Math.floor((this.props.steps_recorded/this.props.steps_required) * 39) + 1
    return (
      <div className="plant-container justify-center">
        <img className="plant-image" alt="current plant" src={`./images/plant-${currentPlantTypeId}/plant-${currentPlantTypeId}-${plantFrame}.png`} />
      </div>
    )
  }
}

export default CurrentPlantContainer

//(stepsRecorded / stepsRequired ) * 40 ..math.floor
// stepsRecorded -> 50
// endSteps -> 100
// 50 / 100
// frames -> 40
// 40 * (50 / 100)

// <div>{ JSON.stringify(this.props.currentPlantId) }</div>
//this.props.currentPlantId
//this.props.stepsRecorded
