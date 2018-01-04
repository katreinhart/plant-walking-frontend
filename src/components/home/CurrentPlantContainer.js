import React from 'react'

class CurrentPlantContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // api call to retrieve current plant if it was not passed down
    // axios.get()
  }

  render () {
    console.log(this.props.currentPlantTypeId, "current plant type id");
    const currentPlantTypeId = this.props.currentPlantTypeId
    return (
      <div className ="plant-container">
        <img className ="plant-image" alt="current plant" src={`./images/plant-${currentPlantTypeId}/plant-${currentPlantTypeId}-1.png`} />
      </div>
    )
  }
}

export default CurrentPlantContainer

// stepsRecorded -> 50
// endSteps -> 100
// 50 / 100
// frames -> 40
// 40 * (50 / 100)

// <div>{ JSON.stringify(this.props.currentPlantId) }</div>
//this.props.currentPlantId
//this.props.stepsRecorded
