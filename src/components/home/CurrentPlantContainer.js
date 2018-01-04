import React from 'react'
import AnimatePlant from './AnimatePlant'

class CurrentPlantContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className="plant-container justify-center">
        <AnimatePlant plantFrame={ Math.floor((this.props.steps_recorded/this.props.steps_required) * 39) + 1 } currentPlantTypeId={ this.props.currentPlantTypeId }/>
      </div>
    )
  }
}

export default CurrentPlantContainer
