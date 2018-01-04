import React from 'react'
import AnimatePlant from './AnimatePlant'

class CurrentPlantContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      goalFrame: 1,
      currentFrame: 1
    }
  }

  calculatePlantFrame(){
    setTimeout(() => {
      this.setState({
        ...this.state,
        currentFrame: this.state.currentFrame + 1
      })
    }, 150)
  }

  calculateFrameNumber(stepsRecorded, stepsRequired){
    const currentFrame = Math.floor(((this.props.steps_recorded/this.props.steps_required) * 38) + 1)
    return Math.min(currentFrame, 40)
  }

  componentWillReceiveProps(nextProps){
    const goalFrame = this.calculateFrameNumber(this.props.steps_recorded, this.props.steps_required)

    this.setState({...this.state, goalFrame, currentFrame: goalFrame})

    if(nextProps.newSteps > 0){
      const newGoalSteps = this.props.steps_recorded + nextProps.newSteps

      const newGoalFrame = this.calculateFrameNumber(newGoalSteps, this.props.steps_required)

      this.setState({...this.state, goalFrame: newGoalFrame})
    }
  }

  render () {
    if(this.state.currentFrame < this.state.goalFrame){
      this.calculatePlantFrame()
    }

    return (
      <div className="plant-container justify-center">
        <AnimatePlant plantFrame={ this.state.currentFrame } currentPlantTypeId={ this.props.currentPlantTypeId }/>
      </div>
    )
  }
}

export default CurrentPlantContainer
